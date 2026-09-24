const requiredEnvironmentVariables = [
    'DATABASE_URI',
    'PAYLOAD_SECRET',
    'UPLOADTHING_TOKEN',
    'NEXT_PUBLIC_SITE_URL',
];

const missingEnvironmentVariables = requiredEnvironmentVariables.filter(
    (name) => !process.env[name]?.trim()
);

if (missingEnvironmentVariables.length > 0) {
    console.error(
        `Missing required Amplify environment variables: ${missingEnvironmentVariables.join(', ')}`
    );
    process.exit(1);
}

try {
    const databaseUrl = new URL(process.env.DATABASE_URI);
    if (!['postgres:', 'postgresql:'].includes(databaseUrl.protocol)) {
        throw new Error('DATABASE_URI must use the postgres protocol');
    }
} catch (error) {
    console.error(
        `DATABASE_URI is invalid: ${error instanceof Error ? error.message : 'unknown error'}`
    );
    process.exit(1);
}

try {
    const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL);
    if (!['http:', 'https:'].includes(siteUrl.protocol)) {
        throw new Error('NEXT_PUBLIC_SITE_URL must use HTTP or HTTPS');
    }
} catch (error) {
    console.error(
        `NEXT_PUBLIC_SITE_URL is invalid: ${error instanceof Error ? error.message : 'unknown error'}`
    );
    process.exit(1);
}

console.log('Required production environment variables are configured.');
