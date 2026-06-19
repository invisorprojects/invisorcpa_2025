import mysql from 'mysql2/promise';

const DB_HOST = process.env.TRACKER_DB_HOST || '193.203.184.203';
const DB_USER = process.env.TRACKER_DB_USER || 'u589823349_tracker';
const DB_PASSWORD = process.env.TRACKER_DB_PASSWORD || 'h>jr++:psS*8';
const DB_NAME = process.env.TRACKER_DB_NAME || 'u589823349_tracker';

export const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
    connectTimeout: 15000,
});

export function generateShareToken(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = '';
    for (let i = 0; i < 16; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}

export async function initDatabase(reset = false) {
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        // Check if tracker_users table already exists (before we run CREATE TABLE IF NOT EXISTS)
        const [tables] = await connection.query<any[]>(
            "SHOW TABLES LIKE 'tracker_users'"
        );
        const shouldSeed = tables.length === 0;

        // STRICT POLICY: When migrating or initializing the database, never drop tables 
        // or change/truncate existing table contents. Only perform safe schema alterations 
        // (e.g. CREATE TABLE IF NOT EXISTS, ALTER TABLE ADD COLUMN) to preserve all user data.
        if (reset) {
            console.log('Skipping table drop to preserve table contents. Running safety check.');
        }

        // 1. Create tracker_users
        await connection.query(`
            CREATE TABLE IF NOT EXISTS tracker_users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE,
                role ENUM('member', 'manager') NOT NULL DEFAULT 'member',
                share_token VARCHAR(50) NULL UNIQUE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        `);

        // 2. Create tracker_projects
        await connection.query(`
            CREATE TABLE IF NOT EXISTS tracker_projects (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        `);

        // 3. Create tracker_categories
        await connection.query(`
            CREATE TABLE IF NOT EXISTS tracker_categories (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL UNIQUE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        `);

        // 4. Create tracker_tasks
        await connection.query(`
            CREATE TABLE IF NOT EXISTS tracker_tasks (
                id INT AUTO_INCREMENT PRIMARY KEY,
                project_id INT NOT NULL,
                category_id INT NOT NULL,
                title VARCHAR(255) NOT NULL,
                assigned_to INT NOT NULL,
                frequency ENUM('Daily', 'Weekly', 'Bi-Weekly', 'Monthly', 'One-Time') NOT NULL,
                due_date DATETIME NULL,
                count INT DEFAULT 1,
                notes TEXT NULL,
                is_active BOOLEAN NOT NULL DEFAULT TRUE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (project_id) REFERENCES tracker_projects(id) ON DELETE CASCADE,
                FOREIGN KEY (category_id) REFERENCES tracker_categories(id) ON DELETE CASCADE,
                FOREIGN KEY (assigned_to) REFERENCES tracker_users(id) ON DELETE RESTRICT
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        `);

        // 5. Create tracker_task_instances
        await connection.query(`
            CREATE TABLE IF NOT EXISTS tracker_task_instances (
                id INT AUTO_INCREMENT PRIMARY KEY,
                task_id INT NOT NULL,
                due_date DATETIME NOT NULL,
                status ENUM('Pending', 'Completed') NOT NULL DEFAULT 'Pending',
                completion_notes TEXT NULL,
                completed_at DATETIME NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (task_id) REFERENCES tracker_tasks(id) ON DELETE CASCADE
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        `);

        if (shouldSeed) {
            // Seed users if empty
            const [users] = await connection.query<any[]>('SELECT id FROM tracker_users LIMIT 1');
            if (users.length === 0) {
                await connection.query(`
                    INSERT INTO tracker_users (name, email, role, share_token) VALUES
                    ('John Doe', 'john@invisorcpa.ca', 'member', ?),
                    ('Jane Smith', 'jane@invisorcpa.ca', 'member', ?),
                    ('Bob Johnson', 'bob@invisorcpa.ca', 'member', ?),
                    ('Alice Brown', 'alice@invisorcpa.ca', 'manager', ?)
                `, [generateShareToken(), generateShareToken(), generateShareToken(), generateShareToken()]);
            }

            // Seed projects if empty
            const [projects] = await connection.query<any[]>('SELECT id FROM tracker_projects LIMIT 1');
            if (projects.length === 0) {
                await connection.query(`
                    INSERT INTO tracker_projects (name) VALUES
                    ('Social Media Campaign'),
                    ('Invisor Blog'),
                    ('SEO Optimization'),
                    ('Audit Compliance'),
                    ('Tech Integration')
                `);
            }

            // Seed categories if empty
            const [categories] = await connection.query<any[]>('SELECT id FROM tracker_categories LIMIT 1');
            if (categories.length === 0) {
                await connection.query(`
                    INSERT INTO tracker_categories (name) VALUES
                    ('Social Media'),
                    ('Content Writing'),
                    ('SEO'),
                    ('Tech'),
                    ('HR')
                `);
            }

            const [tasks] = await connection.query<any[]>('SELECT id FROM tracker_tasks LIMIT 1');
            if (tasks.length === 0) {
                const [usersList] = await connection.query<any[]>('SELECT id, name, email FROM tracker_users');
                const [projectsList] = await connection.query<any[]>('SELECT id, name FROM tracker_projects');
                const [categoriesList] = await connection.query<any[]>('SELECT id, name FROM tracker_categories');

                const findUserId = (email: string) => usersList.find(u => u.email === email)?.id || usersList[0]?.id || 1;
                const findProjectId = (name: string) => projectsList.find(p => p.name === name)?.id || projectsList[0]?.id || 1;
                const findCategoryId = (name: string) => categoriesList.find(c => c.name === name)?.id || categoriesList[0]?.id || 1;

                const johnId = findUserId('john@invisorcpa.ca');
                const janeId = findUserId('jane@invisorcpa.ca');
                const bobId = findUserId('bob@invisorcpa.ca');

                const smProjId = findProjectId('Social Media Campaign');
                const blogProjId = findProjectId('Invisor Blog');
                const seoProjId = findProjectId('SEO Optimization');
                const auditProjId = findProjectId('Audit Compliance');
                const techProjId = findProjectId('Tech Integration');

                const smCatId = findCategoryId('Social Media');
                const cwCatId = findCategoryId('Content Writing');
                const seoCatId = findCategoryId('SEO');
                const hrCatId = findCategoryId('HR');
                const techCatId = findCategoryId('Tech');

                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                const tomorrowStr = tomorrow.toISOString().slice(0, 19).replace('T', ' ');

                // Insert tasks
                await connection.query(`
                    INSERT INTO tracker_tasks (project_id, category_id, title, assigned_to, frequency, due_date) VALUES
                    (?, ?, 'Post weekly updates on LinkedIn', ?, 'Weekly', NULL),
                    (?, ?, 'Write monthly tax newsletter', ?, 'Monthly', NULL),
                    (?, ?, 'Check Google Search Console daily metrics', ?, 'Daily', NULL),
                    (?, ?, 'Submit monthly training logs', ?, 'Monthly', NULL),
                    (?, ?, 'Deploy server updates', ?, 'One-Time', ?)
                `, [
                    smProjId, smCatId, johnId, 
                    blogProjId, cwCatId, janeId, 
                    seoProjId, seoCatId, bobId, 
                    auditProjId, hrCatId, johnId, 
                    techProjId, techCatId, bobId, tomorrowStr
                ]);

                // Create initial instances for all newly seeded tasks
                const [newTasks] = await connection.query<any[]>('SELECT id, frequency, due_date FROM tracker_tasks');
                
                for (const task of newTasks) {
                    let instanceDueDate = new Date();
                    
                    if (task.frequency === 'One-Time') {
                        instanceDueDate = new Date(task.due_date);
                    } else if (task.frequency === 'Daily') {
                        instanceDueDate.setHours(23, 59, 59, 999);
                    } else if (task.frequency === 'Weekly' || task.frequency === 'Bi-Weekly') {
                        const day = instanceDueDate.getDay();
                        const daysToAdd = (5 - day + 7) % 7;
                        instanceDueDate.setDate(instanceDueDate.getDate() + daysToAdd);
                        instanceDueDate.setHours(23, 59, 59, 999);
                    } else if (task.frequency === 'Monthly') {
                        instanceDueDate = new Date(instanceDueDate.getFullYear(), instanceDueDate.getMonth() + 1, 0, 23, 59, 59, 999);
                    }

                    const dueStr = instanceDueDate.toISOString().slice(0, 19).replace('T', ' ');
                    await connection.query(`
                        INSERT INTO tracker_task_instances (task_id, due_date, status)
                        VALUES (?, ?, 'Pending')
                    `, [task.id, dueStr]);
                }
            }
        }

        await connection.commit();
        console.log('Database initialized successfully.');
    } catch (err) {
        await connection.rollback();
        console.error('Database initialization failed:', err);
        throw err;
    } finally {
        connection.release();
    }
}
