'use client';

import React, { useState, useEffect } from 'react';
import {
    ListTodo,
    CheckCircle2,
    AlertTriangle,
    Plus,
    Download,
    Search,
    Calendar,
    User,
    Folder,
    Lock,
    RefreshCw,
    Clock,
    ArrowUpRight,
    Users,
    Check,
    Loader2,
    Filter,
    X,
    Trash2,
    Settings,
    Edit2,
    Share2,
    Copy,
} from 'lucide-react';
import { toast } from 'sonner';

// Define TS Types
interface UserItem {
    id: number;
    name: string;
    email: string;
    role: 'member' | 'manager';
    share_token?: string;
}

interface ProjectItem {
    id: number;
    name: string;
    created_at: string;
}

interface CategoryItem {
    id: number;
    name: string;
    created_at: string;
}

interface TaskInstance {
    instance_id: number;
    task_id: number;
    instance_due_date: string;
    instance_status: 'Pending' | 'Completed';
    completion_notes: string | null;
    completed_at: string | null;
    project_name: string;
    project_id: number;
    category: string;
    category_id: number;
    title: string;
    frequency: 'Daily' | 'Weekly' | 'Bi-Weekly' | 'Monthly' | 'One-Time';
    user_id: number;
    user_name: string;
    user_email: string;
    count: number;
    task_notes: string | null;
}

interface TaskDefinition {
    id: number;
    project_id: number;
    project_name: string;
    category_id: number;
    category: string;
    title: string;
    frequency: 'Daily' | 'Weekly' | 'Bi-Weekly' | 'Monthly' | 'One-Time';
    due_date: string | null;
    is_active: number;
    user_id: number;
    user_name: string;
    count: number;
    notes: string | null;
}

export default function TrackerPage() {
    // API States
    const [users, setUsers] = useState<UserItem[]>([]);
    const [projects, setProjects] = useState<ProjectItem[]>([]);
    const [categories, setCategories] = useState<CategoryItem[]>([]);
    const [instances, setInstances] = useState<TaskInstance[]>([]);
    const [tasks, setTasks] = useState<TaskDefinition[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    // Active Simulation State
    const [activeUser, setActiveUser] = useState<UserItem | null>(null);
    const [isTokenAccessed, setIsTokenAccessed] = useState(false);

    // Member view states
    const [memberTab, setMemberTab] = useState<'this_week' | 'upcoming'>('this_week');

    // Manager View tabs: 'logs' (analytics) or 'settings' (members/projects/categories/tasks config)
    const [managerTab, setManagerTab] = useState<'logs' | 'settings'>('logs');

    // Complete Modal State
    const [selectedInstance, setSelectedInstance] = useState<TaskInstance | null>(null);
    const [completionNotes, setCompletionNotes] = useState('');
    const [submittingCompletion, setSubmittingCompletion] = useState(false);

    // Manager View search & filters
    const [searchQuery, setSearchQuery] = useState('');
    const [filterProject, setFilterProject] = useState('All');
    const [filterCategory, setFilterCategory] = useState('All');
    const [filterUser, setFilterUser] = useState('All');
    const [filterStatus, setFilterStatus] = useState('All');
    const [filterDateStart, setFilterDateStart] = useState('');
    const [filterDateEnd, setFilterDateEnd] = useState('');

    // Create Task Drawer/Modal state
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [newProjId, setNewProjId] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newAssignedTo, setNewAssignedTo] = useState('');
    const [newFrequency, setNewFrequency] = useState<'Daily' | 'Weekly' | 'Bi-Weekly' | 'Monthly' | 'One-Time'>('Daily');
    const [newDueDate, setNewDueDate] = useState('');
    const [newCount, setNewCount] = useState<number>(1);
    const [newNotes, setNewNotes] = useState<string>('');
    const [submittingNewTask, setSubmittingNewTask] = useState(false);

    // Edit Task Modal State
    const [editingTask, setEditingTask] = useState<TaskDefinition | null>(null);
    const [editProjId, setEditProjId] = useState('');
    const [editCategory, setEditCategory] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editAssignedTo, setEditAssignedTo] = useState('');
    const [editFrequency, setEditFrequency] = useState<'Daily' | 'Weekly' | 'Bi-Weekly' | 'Monthly' | 'One-Time'>('Daily');
    const [editDueDate, setEditDueDate] = useState('');
    const [editCount, setEditCount] = useState<number>(1);
    const [editNotes, setEditNotes] = useState<string>('');
    const [editIsActive, setEditIsActive] = useState(true);
    const [submittingEditTask, setSubmittingEditTask] = useState(false);

    // Edit User Modal State
    const [editingUser, setEditingUser] = useState<UserItem | null>(null);
    const [editUserName, setEditUserName] = useState('');
    const [editUserEmail, setEditUserEmail] = useState('');
    const [editUserRole, setEditUserRole] = useState<'member' | 'manager'>('member');
    const [submittingEditUser, setSubmittingEditUser] = useState(false);

    // Manage Projects Inputs
    const [projectInputName, setProjectInputName] = useState('');
    const [submittingProject, setSubmittingProject] = useState(false);

    // Manage Categories Inputs
    const [categoryInputName, setCategoryInputName] = useState('');
    const [submittingCategory, setSubmittingCategory] = useState(false);
    const [editingCategory, setEditingCategory] = useState<CategoryItem | null>(null);
    const [editCategoryName, setEditCategoryName] = useState('');
    const [submittingEditCategory, setSubmittingEditCategory] = useState(false);

    // Manage Members Inputs
    const [userInputName, setUserInputName] = useState('');
    const [userInputEmail, setUserInputEmail] = useState('');
    const [userInputRole, setUserInputRole] = useState<'member' | 'manager'>('member');
    const [submittingUser, setSubmittingUser] = useState(false);

    // Load Initial Data
    const fetchData = async (showToast = false) => {
        if (showToast) setRefreshing(true);
        try {
            const res = await fetch('/api/tracker', { cache: 'no-store' });
            const data = await res.json();
            if (data.success) {
                setUsers(data.users || []);
                setProjects(data.projects || []);
                setCategories(data.categories || []);
                setInstances(data.instances || []);
                setTasks(data.tasks || []);

                const params = new URLSearchParams(window.location.search);
                const queryToken = params.get('token');
                const queryUserId = params.get('userId');
                let resolvedUser = null;
                if (queryToken && data.users) {
                    resolvedUser = data.users.find((u: UserItem) => u.share_token === queryToken);
                    if (resolvedUser) {
                        setIsTokenAccessed(true);
                    }
                }
                if (!resolvedUser && queryUserId && data.users) {
                    resolvedUser = data.users.find((u: UserItem) => u.id === parseInt(queryUserId, 10));
                }
                if (!resolvedUser && !activeUser && data.users && data.users.length > 0) {
                    const manager = data.users.find((u: UserItem) => u.role === 'manager');
                    resolvedUser = manager || data.users[0];
                }
                if (resolvedUser) {
                    setActiveUser(resolvedUser);
                }
                if (showToast) {
                    toast.success('Dashboard data refreshed.');
                }
            } else {
                toast.error(data.error || 'Failed to load tracker data.');
            }
        } catch (err) {
            console.error('Fetch error:', err);
            toast.error('Failed to connect to the server.');
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (activeUser) {
            const params = new URLSearchParams(window.location.search);
            if (activeUser.share_token) {
                if (params.get('token') !== activeUser.share_token || params.has('userId')) {
                    params.set('token', activeUser.share_token);
                    params.delete('userId');
                    const newUrl = `${window.location.pathname}?${params.toString()}`;
                    window.history.pushState(null, '', newUrl);
                }
            } else {
                if (params.get('userId') !== String(activeUser.id) || params.has('token')) {
                    params.set('userId', String(activeUser.id));
                    params.delete('token');
                    const newUrl = `${window.location.pathname}?${params.toString()}`;
                    window.history.pushState(null, '', newUrl);
                }
            }
        }
    }, [activeUser]);


    // Complete Task Submission
    const handleCompleteSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedInstance || !completionNotes.trim()) return;

        setSubmittingCompletion(true);
        try {
            const res = await fetch('/api/tracker/complete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    instanceId: selectedInstance.instance_id,
                    completionNotes,
                }),
            });
            const data = await res.json();
            if (data.success) {
                toast.success('Task marked as complete!');
                setSelectedInstance(null);
                setCompletionNotes('');
                fetchData();
            } else {
                toast.error(data.error || 'Failed to complete task.');
            }
        } catch (err) {
            toast.error('Network error.');
        } finally {
            setSubmittingCompletion(false);
        }
    };

    // Create New Task Submission
    const handleCreateTask = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newProjId || !newCategory || !newTitle.trim() || !newAssignedTo) {
            toast.error('Please fill in all mandatory fields.');
            return;
        }

        if (newFrequency === 'One-Time' && !newDueDate) {
            toast.error('Due Date is mandatory for One-Time tasks.');
            return;
        }

        setSubmittingNewTask(true);
        try {
            const res = await fetch('/api/tracker', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    project_id: newProjId,
                    category_id: newCategory,
                    title: newTitle,
                    assigned_to: parseInt(newAssignedTo, 10),
                    frequency: newFrequency,
                    due_date: newFrequency === 'One-Time' ? newDueDate : null,
                    count: newCount,
                    notes: newNotes,
                }),
            });
            const data = await res.json();
            if (data.success) {
                toast.success('New task created and scheduled!');
                setIsCreateOpen(false);
                setNewTitle('');
                setNewNotes('');
                fetchData();
            } else {
                toast.error(data.error || 'Failed to create task.');
            }
        } catch (err) {
            toast.error('Network error.');
        } finally {
            setSubmittingNewTask(false);
        }
    };

    // Edit Task Submission
    const handleEditTaskSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingTask || !editProjId || !editCategory || !editTitle.trim() || !editAssignedTo) {
            toast.error('Please fill in all mandatory fields.');
            return;
        }

        if (editFrequency === 'One-Time' && !editDueDate) {
            toast.error('Due Date is mandatory for One-Time tasks.');
            return;
        }

        setSubmittingEditTask(true);
        try {
            const res = await fetch('/api/tracker', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: editingTask.id,
                    project_id: editProjId,
                    category_id: editCategory,
                    title: editTitle,
                    assigned_to: parseInt(editAssignedTo, 10),
                    frequency: editFrequency,
                    due_date: editFrequency === 'One-Time' ? editDueDate : null,
                    is_active: editIsActive,
                    count: editCount,
                    notes: editNotes,
                }),
            });
            const data = await res.json();
            if (data.success) {
                toast.success('Task configuration updated!');
                setEditingTask(null);
                fetchData();
            } else {
                toast.error(data.error || 'Failed to update task.');
            }
        } catch (err) {
            toast.error('Network error.');
        } finally {
            setSubmittingEditTask(false);
        }
    };

    // Toggle Task Active quick action
    const handleToggleTaskActive = async (task: TaskDefinition) => {
        try {
            const res = await fetch('/api/tracker', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: task.id,
                    project_id: task.project_id,
                    category_id: task.category_id,
                    title: task.title,
                    assigned_to: task.user_id,
                    frequency: task.frequency,
                    due_date: task.due_date,
                    is_active: !task.is_active,
                }),
            });
            const data = await res.json();
            if (data.success) {
                toast.success(`Task ${!task.is_active ? 'activated' : 'deactivated'}.`);
                fetchData();
            } else {
                toast.error(data.error || 'Failed to toggle status.');
            }
        } catch (err) {
            toast.error('Network error.');
        }
    };

    // Delete Task Definition logic
    const handleDeleteTask = async (id: number) => {
        if (!confirm('Are you sure you want to permanently delete this task definition? This will erase all its execution records and history.')) {
            return;
        }

        try {
            const res = await fetch(`/api/tracker?id=${id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (data.success) {
                toast.success('Task schedule deleted successfully.');
                fetchData();
            } else {
                toast.error(data.error || 'Failed to delete task.');
            }
        } catch (err) {
            toast.error('Network error.');
        }
    };

    // Add Project logic
    const handleAddProject = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!projectInputName.trim()) return;

        setSubmittingProject(true);
        try {
            const res = await fetch('/api/tracker/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: projectInputName.trim() }),
            });
            const data = await res.json();
            if (data.success) {
                toast.success('Project added successfully.');
                setProjectInputName('');
                fetchData();
            } else {
                toast.error(data.error || 'Failed to add project.');
            }
        } catch (err) {
            toast.error('Network error.');
        } finally {
            setSubmittingProject(false);
        }
    };

    // Delete Project logic
    const handleDeleteProject = async (id: number) => {
        if (!confirm('Are you sure you want to delete this project? This will automatically delete all tasks and instances associated with this project.')) {
            return;
        }

        try {
            const res = await fetch(`/api/tracker/projects?id=${id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (data.success) {
                toast.success('Project and its tasks deleted.');
                fetchData();
            } else {
                toast.error(data.error || 'Failed to delete project.');
            }
        } catch (err) {
            toast.error('Network error.');
        }
    };

    // Add Category logic
    const handleAddCategory = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!categoryInputName.trim()) return;

        setSubmittingCategory(true);
        try {
            const res = await fetch('/api/tracker/categories', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: categoryInputName.trim() }),
            });
            const data = await res.json();
            if (data.success) {
                toast.success('Category added successfully.');
                setCategoryInputName('');
                fetchData();
            } else {
                toast.error(data.error || 'Failed to add category.');
            }
        } catch (err) {
            toast.error('Network error.');
        } finally {
            setSubmittingCategory(false);
        }
    };

    // Edit Category Submit logic
    const handleEditCategorySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingCategory || !editCategoryName.trim()) return;

        setSubmittingEditCategory(true);
        try {
            const res = await fetch('/api/tracker/categories', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: editingCategory.id,
                    name: editCategoryName.trim(),
                }),
            });
            const data = await res.json();
            if (data.success) {
                toast.success('Category updated successfully.');
                setEditingCategory(null);
                fetchData();
            } else {
                toast.error(data.error || 'Failed to update category.');
            }
        } catch (err) {
            toast.error('Network error.');
        } finally {
            setSubmittingEditCategory(false);
        }
    };

    // Delete Category logic
    const handleDeleteCategory = async (id: number) => {
        if (!confirm('Are you sure you want to delete this category? This will delete all tasks and runs under this category.')) {
            return;
        }

        try {
            const res = await fetch(`/api/tracker/categories?id=${id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (data.success) {
                toast.success('Category and tasks deleted.');
                fetchData();
            } else {
                toast.error(data.error || 'Failed to delete category.');
            }
        } catch (err) {
            toast.error('Network error.');
        }
    };

    // Add User logic
    const handleAddUser = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInputName.trim() || !userInputEmail.trim()) return;

        setSubmittingUser(true);
        try {
            const res = await fetch('/api/tracker/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: userInputName.trim(),
                    email: userInputEmail.trim(),
                    role: userInputRole,
                }),
            });
            const data = await res.json();
            if (data.success) {
                toast.success('Member registered successfully.');
                setUserInputName('');
                setUserInputEmail('');
                setUserInputRole('member');
                fetchData();
            } else {
                toast.error(data.error || 'Failed to register member.');
            }
        } catch (err) {
            toast.error('Network error.');
        } finally {
            setSubmittingUser(false);
        }
    };

    // Edit User Submission
    const handleEditUserSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingUser || !editUserName.trim() || !editUserEmail.trim()) return;

        setSubmittingEditUser(true);
        try {
            const res = await fetch('/api/tracker/users', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: editingUser.id,
                    name: editUserName.trim(),
                    email: editUserEmail.trim(),
                    role: editUserRole,
                }),
            });
            const data = await res.json();
            if (data.success) {
                toast.success('Member profile updated successfully!');
                
                if (activeUser && activeUser.id === editingUser.id) {
                    setActiveUser({
                        id: editingUser.id,
                        name: editUserName.trim(),
                        email: editUserEmail.trim(),
                        role: editUserRole,
                    });
                }
                
                setEditingUser(null);
                fetchData();
            } else {
                toast.error(data.error || 'Failed to update member.');
            }
        } catch (err) {
            toast.error('Network error.');
        } finally {
            setSubmittingEditUser(false);
        }
    };

    // Delete User logic
    const handleDeleteUser = async (id: number) => {
        if (!confirm('Are you sure you want to delete this member?')) {
            return;
        }

        try {
            const res = await fetch(`/api/tracker/users?id=${id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (data.success) {
                toast.success('Member deleted.');
                fetchData();
            } else {
                toast.error(data.error || 'Failed to delete member.');
            }
        } catch (err) {
            toast.error('Network error.');
        }
    };

    // Excel/CSV Export logic
    const handleExportCSV = (filteredData: TaskInstance[]) => {
        const csvHeaders = [
            'Task Title',
            'Project Name',
            'Category',
            'Frequency',
            'Assigned To',
            'Due Date',
            'Status',
            'Completed At',
            'Notes',
        ];

        const csvRows = filteredData.map((item) => {
            const dueDate = new Date(item.instance_due_date);
            const completedDate = item.completed_at ? new Date(item.completed_at) : null;
            let status = 'Pending';
            if (item.instance_status === 'Completed') {
                status =
                    completedDate && completedDate > dueDate ? 'Completed Late' : 'Completed on Time';
            } else if (dueDate < new Date()) {
                status = 'Overdue';
            }

            return [
                item.title,
                item.project_name,
                item.category,
                item.frequency,
                item.user_name,
                dueDate.toLocaleString(),
                status,
                completedDate ? completedDate.toLocaleString() : '-',
                item.completion_notes || '',
            ];
        });

        const csvString = [
            csvHeaders.join(','),
            ...csvRows.map((row) => row.map((val) => `"${String(val).replace(/"/g, '""')}"`).join(',')),
        ].join('\n');

        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `tracker_report_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success('Report exported to CSV.');
    };

    // Helper: format notes with clickable links
    const renderCompletionNotes = (notes: string | null) => {
        if (!notes) return <span className="text-gray-400 italic">No notes provided</span>;
        const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;
        const parts = notes.split(urlRegex);
        return parts.map((part, index) => {
            if (part.match(urlRegex)) {
                const href = part.startsWith('http') ? part : `https://${part}`;
                return (
                    <a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5 font-medium break-all"
                    >
                        {part} <ArrowUpRight className="h-3 w-3 inline shrink-0" />
                    </a>
                );
            }
            return <span key={index}>{part}</span>;
        });
    };

    // Filter calculations for Reporting Grid
    const filteredInstances = instances.filter((item) => {
        const matchesSearch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.project_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.user_name.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesProject = filterProject === 'All' || item.project_name === filterProject;
        const matchesCategory = filterCategory === 'All' || item.category === filterCategory;
        const matchesUser = filterUser === 'All' || String(item.user_id) === filterUser;

        const dueDate = new Date(item.instance_due_date);
        const completedDate = item.completed_at ? new Date(item.completed_at) : null;
        const endOfDueDay = new Date(dueDate);
        endOfDueDay.setHours(23, 59, 59, 999);
        const isOverdue = new Date() > endOfDueDay && item.instance_status === 'Pending';

        let matchesStatus = true;
        if (filterStatus !== 'All') {
            if (filterStatus === 'Completed on Time') {
                matchesStatus =
                    item.instance_status === 'Completed' &&
                    completedDate !== null &&
                    completedDate <= dueDate;
            } else if (filterStatus === 'Completed Late') {
                matchesStatus =
                    item.instance_status === 'Completed' &&
                    completedDate !== null &&
                    completedDate > dueDate;
            } else if (filterStatus === 'Overdue') {
                matchesStatus = isOverdue;
            } else if (filterStatus === 'Pending') {
                matchesStatus = item.instance_status === 'Pending' && !isOverdue;
            }
        }

        let matchesDate = true;
        const itemDate = new Date(item.instance_due_date);
        if (filterDateStart) {
            const start = new Date(filterDateStart);
            start.setHours(0, 0, 0, 0);
            matchesDate = matchesDate && itemDate >= start;
        }
        if (filterDateEnd) {
            const end = new Date(filterDateEnd);
            end.setHours(23, 59, 59, 999);
            matchesDate = matchesDate && itemDate <= end;
        }

        return matchesSearch && matchesProject && matchesCategory && matchesUser && matchesStatus && matchesDate;
    });

    // Active User Specific Task Filtering
    const memberTasks = instances.filter((i) => i.user_id === activeUser?.id);
    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);

    const endOfWeek = new Date();
    const dayOfWeek = endOfWeek.getDay();
    const daysToFriday = (5 - dayOfWeek + 7) % 7;
    endOfWeek.setDate(endOfWeek.getDate() + daysToFriday);
    endOfWeek.setHours(23, 59, 59, 999);

    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
    thirtyDaysFromNow.setHours(23, 59, 59, 999);

    const thisWeekAndOverduePending = memberTasks.filter(
        (i) => i.instance_status === 'Pending' && new Date(i.instance_due_date) <= endOfWeek
    );

    const upcomingPending = memberTasks.filter(
        (i) =>
            i.instance_status === 'Pending' &&
            new Date(i.instance_due_date) > endOfWeek &&
            new Date(i.instance_due_date) <= thirtyDaysFromNow
    );

    // Metrics for Manager
    const totalTodayTasks = instances.filter((i) => {
        const d = new Date(i.instance_due_date);
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        return d >= todayStart && d <= endOfToday;
    });
    const completedTodayTasks = totalTodayTasks.filter((i) => i.instance_status === 'Completed');

    const overdueInstances = instances.filter((i) => {
        if (i.instance_status !== 'Pending') return false;
        const d = new Date(i.instance_due_date);
        const endOfDueDay = new Date(d);
        endOfDueDay.setHours(23, 59, 59, 999);
        return new Date() > endOfDueDay;
    });

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <div className="text-center">
                    <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto mb-4" />
                    <h2 className="text-lg font-semibold text-gray-700">Loading Task Manager...</h2>
                    <p className="text-sm text-gray-500 mt-1">Connecting to Tracker Database</p>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* 1. TOP SIMULATION HEADER */}
                <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-slate-800 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-3 rounded-xl">
                            <ListTodo className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Recurring Task Tracker</h1>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                Connected DB: <code className="bg-slate-200/60 dark:bg-slate-800 px-1 py-0.5 rounded text-[10px]">u589823349_tracker</code>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
                        {/* Simulation Dropdown */}
                        <div className={`flex items-center gap-2 bg-gray-100/80 dark:bg-slate-800 px-3 py-2 rounded-xl border border-gray-200 dark:border-slate-700 ${isTokenAccessed ? 'opacity-75' : ''}`}>
                            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                {isTokenAccessed ? 'Active Dashboard:' : 'Role Switcher:'}
                            </span>
                            {isTokenAccessed ? (
                                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5 cursor-not-allowed">
                                    {activeUser?.name} ({activeUser?.role}) <Lock className="h-3.5 w-3.5 text-gray-400 dark:text-gray-500" />
                                </span>
                            ) : (
                                <select
                                    className="bg-transparent text-sm font-semibold focus:outline-none cursor-pointer"
                                    value={activeUser?.id || ''}
                                    onChange={(e) => {
                                        const u = users.find((user) => user.id === parseInt(e.target.value, 10));
                                        if (u) {
                                            setActiveUser(u);
                                            toast(`Switched view to ${u.name} (${u.role})`);
                                        }
                                    }}
                                >
                                    {users.map((u) => (
                                        <option key={u.id} value={u.id} className="text-black dark:text-white">
                                            {u.name} ({u.role})
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>

                        {/* Copy Link Button */}
                        <button
                            onClick={() => {
                                if (activeUser) {
                                    const tokenOrId = activeUser.share_token ? `token=${activeUser.share_token}` : `userId=${activeUser.id}`;
                                    const shareUrl = `${window.location.origin}${window.location.pathname}?${tokenOrId}`;
                                    navigator.clipboard.writeText(shareUrl);
                                    toast.success(`Copied shareable dashboard link for ${activeUser.name} to clipboard!`);
                                }
                            }}
                            className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-primary transition flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300 shadow-2xs"
                            title="Share Dashboard Link"
                        >
                            <Share2 className="h-4 w-4 text-gray-500" />
                            <span className="hidden sm:inline">Share Dashboard</span>
                        </button>

                        {/* Action buttons */}
                        <button
                            onClick={() => fetchData(true)}
                            disabled={refreshing}
                            className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 transition"
                            title="Refresh Data"
                        >
                            <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
                        </button>

                    </div>
                </div>

                {/* 2. TEAM MEMBER VIEW */}
                {activeUser?.role === 'member' && (
                    <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                    Member Dashboard: <span className="text-primary">{activeUser.name}</span>
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Manage, execute, and mark your recurring responsibilities.
                                </p>
                            </div>

                            {/* Tabs Switcher */}
                            <div className="flex bg-gray-200/80 dark:bg-slate-800 p-1 rounded-xl border border-gray-300/40 dark:border-slate-700 w-full sm:w-auto">
                                <button
                                    onClick={() => setMemberTab('this_week')}
                                    className={`flex-1 sm:flex-initial text-xs font-bold px-4 py-2 rounded-lg transition ${
                                        memberTab === 'this_week'
                                            ? 'bg-white dark:bg-slate-700 text-primary shadow-sm'
                                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-800'
                                    }`}
                                >
                                    This Week & Overdue ({thisWeekAndOverduePending.length})
                                </button>
                                <button
                                    onClick={() => setMemberTab('upcoming')}
                                    className={`flex-1 sm:flex-initial text-xs font-bold px-4 py-2 rounded-lg transition ${
                                        memberTab === 'upcoming'
                                            ? 'bg-white dark:bg-slate-700 text-primary shadow-sm'
                                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-800'
                                    }`}
                                >
                                    Upcoming Tasks ({upcomingPending.length})
                                </button>
                            </div>
                        </div>

                        {/* Task Instance Cards */}
                        {memberTab === 'this_week' ? (
                            thisWeekAndOverduePending.length === 0 ? (
                                <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-12 text-center shadow-xs">
                                    <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">You are all caught up!</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">No tasks due this week or overdue.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {thisWeekAndOverduePending.map((item) => (
                                        <TaskCard key={item.instance_id} item={item} onComplete={setSelectedInstance} />
                                    ))}
                                </div>
                            )
                        ) : upcomingPending.length === 0 ? (
                            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-12 text-center shadow-xs">
                                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">Quiet days ahead</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">No tasks scheduled in the next 7 days.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {upcomingPending.map((item) => (
                                    <TaskCard key={item.instance_id} item={item} onComplete={setSelectedInstance} />
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* 3. MANAGER VIEW */}
                {activeUser?.role === 'manager' && (
                    <div className="space-y-8 animate-fade-in">
                        {/* High-level Operational Overview Metrics */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs relative overflow-hidden">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Today's Compliance
                                        </p>
                                        <h3 className="text-3xl font-bold mt-2">
                                            {completedTodayTasks.length} <span className="text-lg font-semibold text-gray-400">/ {totalTodayTasks.length}</span>
                                        </h3>
                                    </div>
                                    <div className="bg-primary/10 text-primary p-2.5 rounded-xl">
                                        <Check className="h-5 w-5" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="h-1.5 w-full bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary rounded-full transition-all duration-500"
                                            style={{
                                                width: `${
                                                    totalTodayTasks.length > 0
                                                        ? (completedTodayTasks.length / totalTodayTasks.length) * 100
                                                        : 100
                                                }%`,
                                            }}
                                        />
                                    </div>
                                    <p className="text-[10px] text-gray-400 mt-1.5">
                                        {totalTodayTasks.length === 0
                                            ? 'No tasks registered for today.'
                                            : `${Math.round(
                                                  (completedTodayTasks.length / totalTodayTasks.length) * 100
                                              )}% of scheduled today tasks completed`}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Overdue Backlog
                                        </p>
                                        <h3 className="text-3xl font-bold mt-2 text-red-600 dark:text-red-400">
                                            {overdueInstances.length}
                                        </h3>
                                    </div>
                                    <div className="bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 p-2.5 rounded-xl">
                                        <AlertTriangle className="h-5 w-5" />
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 mt-6">
                                    {overdueInstances.length === 0
                                        ? 'Clean slate! No tasks overdue.'
                                        : 'Action required by assigned members.'}
                                </p>
                            </div>

                            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Active Projects
                                        </p>
                                        <h3 className="text-3xl font-bold mt-2">
                                            {projects.length}
                                        </h3>
                                    </div>
                                    <div className="bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 p-2.5 rounded-xl">
                                        <Folder className="h-5 w-5" />
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 mt-6">
                                    Dynamic database entities created.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Team Size
                                        </p>
                                        <h3 className="text-3xl font-bold mt-2">
                                            {users.length}
                                        </h3>
                                    </div>
                                    <div className="bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 p-2.5 rounded-xl">
                                        <Users className="h-5 w-5" />
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 mt-6">
                                    Registered execution users.
                                </p>
                            </div>
                        </div>

                        {/* Overdue Alerts Panel */}
                        {overdueInstances.length > 0 && (
                            <div className="bg-red-50/50 dark:bg-red-950/10 border border-red-200 dark:border-red-900/40 rounded-2xl p-6">
                                <div className="flex items-center gap-2 text-red-700 dark:text-red-400 mb-4">
                                    <AlertTriangle className="h-5 w-5 shrink-0" />
                                    <h3 className="font-bold text-base">Overdue Tasks Alerts</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {overdueInstances.slice(0, 6).map((inst) => (
                                        <div
                                            key={inst.instance_id}
                                            className="bg-white dark:bg-slate-900 border border-red-100 dark:border-red-950 p-4 rounded-xl shadow-2xs flex flex-col justify-between"
                                        >
                                            <div>
                                                <div className="flex justify-between items-start gap-2">
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded truncate max-w-[120px]">
                                                        {inst.project_name}
                                                    </span>
                                                    <span className="text-[10px] text-gray-400 flex items-center gap-1 font-medium">
                                                        <Clock className="h-3 w-3" />
                                                        {inst.frequency}
                                                    </span>
                                                </div>
                                                <h4 className="font-bold text-sm text-gray-800 dark:text-gray-200 mt-2 line-clamp-1">
                                                    {inst.title}
                                                </h4>
                                            </div>
                                            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-800 flex justify-between items-center text-xs">
                                                <span className="font-semibold text-gray-600 dark:text-gray-300">
                                                    👤 {inst.user_name}
                                                </span>
                                                <span className="text-red-500 font-bold">
                                                    Due: {new Date(inst.instance_due_date).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* MANAGER TAB SWITCHER */}
                        <div className="flex border-b border-gray-200 dark:border-slate-800 gap-4">
                            <button
                                onClick={() => setManagerTab('logs')}
                                className={`pb-3 text-sm font-bold border-b-2 px-1 transition-all ${
                                    managerTab === 'logs'
                                        ? 'border-primary text-primary'
                                        : 'border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-gray-300'
                                }`}
                            >
                                <span className="flex items-center gap-2">
                                    <ListTodo className="h-4 w-4" /> Reporting Logs & Analytics
                                </span>
                            </button>
                            <button
                                onClick={() => setManagerTab('settings')}
                                className={`pb-3 text-sm font-bold border-b-2 px-1 transition-all ${
                                    managerTab === 'settings'
                                        ? 'border-primary text-primary'
                                        : 'border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-gray-300'
                                }`}
                            >
                                <span className="flex items-center gap-2">
                                    <Settings className="h-4 w-4" /> Manage Teams & Projects
                                </span>
                            </button>
                        </div>

                        {/* VIEW 1: REPORTING LOGS */}
                        {managerTab === 'logs' && (
                            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
                                {/* Reporting Grid Header with Controls */}
                                <div className="p-6 border-b border-gray-200 dark:border-slate-800 space-y-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div>
                                            <h3 className="text-lg font-bold">Reporting & Audit Logs</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                                Filter historical tasks, view completion proofs, and export auditing sheets.
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => {
                                                    if (projects.length === 0) {
                                                        toast.error('You must create a project first before creating tasks!');
                                                        setManagerTab('settings');
                                                    } else if (categories.length === 0) {
                                                        toast.error('You must create a category first before creating tasks!');
                                                        setManagerTab('settings');
                                                    } else {
                                                        setIsCreateOpen(true);
                                                    }
                                                }}
                                                className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-2 shadow-sm"
                                            >
                                                <Plus className="h-4 w-4" /> Create Task Definition
                                            </button>
                                            <button
                                                onClick={() => handleExportCSV(filteredInstances)}
                                                className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-2"
                                            >
                                                <Download className="h-4 w-4" /> Export CSV
                                            </button>
                                        </div>
                                    </div>

                                    {/* Filters Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 pt-2">
                                        <div className="relative">
                                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="Search title, project..."
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="w-full pl-9 pr-3 py-2 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white"
                                            />
                                        </div>

                                        {/* Project Filter */}
                                        <select
                                            value={filterProject}
                                            onChange={(e) => setFilterProject(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white"
                                        >
                                            <option value="All">All Projects</option>
                                            {projects.map((p) => (
                                                <option key={p.id} value={p.name}>
                                                    {p.name}
                                                </option>
                                            ))}
                                        </select>

                                        {/* Category Filter */}
                                        <select
                                            value={filterCategory}
                                            onChange={(e) => setFilterCategory(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white"
                                        >
                                            <option value="All">All Categories</option>
                                            {categories.map((c) => (
                                                <option key={c.id} value={c.name}>
                                                    {c.name}
                                                </option>
                                            ))}
                                        </select>

                                        {/* Team Member Filter */}
                                        <select
                                            value={filterUser}
                                            onChange={(e) => setFilterUser(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white"
                                        >
                                            <option value="All">All Members/Managers</option>
                                            {users.map((u) => (
                                                <option key={u.id} value={u.id}>
                                                    {u.name} ({u.role})
                                                </option>
                                            ))}
                                        </select>

                                        {/* Status Filter */}
                                        <select
                                            value={filterStatus}
                                            onChange={(e) => setFilterStatus(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white"
                                        >
                                            <option value="All">All Statuses</option>
                                            <option value="Completed on Time">Completed on Time</option>
                                            <option value="Completed Late">Completed Late</option>
                                            <option value="Overdue">Overdue</option>
                                            <option value="Pending">Pending (On Time)</option>
                                        </select>

                                        {/* Clear Button */}
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1 flex items-center justify-center border border-dashed border-gray-200 dark:border-slate-700 py-2 rounded-xl text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                                                Found: {filteredInstances.length} Rows
                                            </div>
                                            {(searchQuery ||
                                                filterProject !== 'All' ||
                                                filterCategory !== 'All' ||
                                                filterUser !== 'All' ||
                                                filterStatus !== 'All' ||
                                                filterDateStart ||
                                                filterDateEnd) && (
                                                <button
                                                    onClick={() => {
                                                        setSearchQuery('');
                                                        setFilterProject('All');
                                                        setFilterCategory('All');
                                                        setFilterUser('All');
                                                        setFilterStatus('All');
                                                        setFilterDateStart('');
                                                        setFilterDateEnd('');
                                                    }}
                                                    className="bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 p-2 rounded-xl border border-gray-200 dark:border-slate-700"
                                                    title="Clear Filters"
                                                >
                                                    <X className="h-3 w-3" />
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Date range filters */}
                                    <div className="flex flex-wrap items-center gap-4 pt-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">
                                                Due From:
                                            </span>
                                            <input
                                                type="date"
                                                value={filterDateStart}
                                                onChange={(e) => setFilterDateStart(e.target.value)}
                                                className="px-2 py-1 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-[10px] rounded-lg focus:outline-none"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">
                                                To:
                                            </span>
                                            <input
                                                type="date"
                                                value={filterDateEnd}
                                                onChange={(e) => setFilterDateEnd(e.target.value)}
                                                className="px-2 py-1 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-[10px] rounded-lg focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Table Data Grid */}
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse text-left text-xs">
                                        <thead>
                                            <tr className="bg-gray-50 dark:bg-slate-800/50 border-b border-gray-200 dark:border-slate-800 font-bold text-gray-500 uppercase tracking-wider text-[10px]">
                                                <th className="px-6 py-4">Task Details</th>
                                                <th className="px-6 py-4">Assigned Member</th>
                                                <th className="px-6 py-4">Due Date</th>
                                                <th className="px-6 py-4">Completed Date</th>
                                                <th className="px-6 py-4">Audit Status</th>
                                                <th className="px-6 py-4 max-w-xs">Clickable Validation Proof & Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 dark:divide-slate-800/80">
                                            {filteredInstances.length === 0 ? (
                                                <tr>
                                                    <td colSpan={6} className="px-6 py-10 text-center text-gray-400 italic">
                                                        No task instances match the chosen filters.
                                                    </td>
                                                </tr>
                                            ) : (
                                                filteredInstances.map((item) => {
                                                    const dueDate = new Date(item.instance_due_date);
                                                    const completedDate = item.completed_at ? new Date(item.completed_at) : null;
                                                    const endOfDueDay = new Date(dueDate);
                                                    endOfDueDay.setHours(23, 59, 59, 999);
                                                    const isOverdue = new Date() > endOfDueDay && item.instance_status === 'Pending';

                                                    let statusBadge = (
                                                        <span className="bg-blue-50 text-blue-600 dark:bg-blue-950/20 dark:text-blue-400 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider text-[9px] border border-blue-100 dark:border-blue-900/30">
                                                            Pending
                                                        </span>
                                                    );
                                                    if (item.instance_status === 'Completed') {
                                                        if (completedDate && completedDate <= dueDate) {
                                                            statusBadge = (
                                                                <span className="bg-green-50 text-green-600 dark:bg-green-950/20 dark:text-green-400 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider text-[9px] border border-green-100 dark:border-green-900/30">
                                                                    On Time
                                                                </span>
                                                            );
                                                        } else {
                                                            statusBadge = (
                                                                <span className="bg-amber-50 text-amber-600 dark:bg-amber-950/20 dark:text-amber-400 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider text-[9px] border border-amber-100 dark:border-amber-900/30">
                                                                    Completed Late
                                                                </span>
                                                            );
                                                        }
                                                    } else if (isOverdue) {
                                                        statusBadge = (
                                                            <span className="bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-400 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider text-[9px] border border-red-100 dark:border-red-900/30">
                                                                    Overdue
                                                        </span>
                                                    );
                                                }

                                                return (
                                                    <tr
                                                        key={item.instance_id}
                                                        className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors"
                                                    >
                                                        <td className="px-6 py-4">
                                                            <div>
                                                                <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                                                                    {item.title}
                                                                </span>
                                                                <div className="flex items-center gap-2 mt-1">
                                                                    <span className="text-[10px] text-gray-500 font-bold">
                                                                        {item.project_name}
                                                                    </span>
                                                                    <span className="text-gray-300 dark:text-gray-700">•</span>
                                                                    <span className="text-[10px] text-gray-400">
                                                                        {item.category}
                                                                    </span>
                                                                    <span className="text-gray-300 dark:text-gray-700">•</span>
                                                                    <span className="text-[9px] bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 font-semibold px-1.5 py-0.5 rounded">
                                                                        {item.frequency}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="font-semibold text-gray-700 dark:text-gray-300">
                                                                {item.user_name}
                                                            </div>
                                                            <div className="text-[10px] text-gray-400 mt-0.5">
                                                                {item.user_email}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 font-medium text-gray-600 dark:text-gray-400">
                                                            {dueDate.toLocaleString()}
                                                        </td>
                                                        <td className="px-6 py-4 font-medium text-gray-600 dark:text-gray-400">
                                                            {completedDate ? completedDate.toLocaleString() : '-'}
                                                        </td>
                                                        <td className="px-6 py-4">{statusBadge}</td>
                                                        <td className="px-6 py-4 max-w-xs break-words">
                                                            <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                                                                {renderCompletionNotes(item.completion_notes)}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* VIEW 2: MANAGEMENT & CONFIGURATION */}
                    {managerTab === 'settings' && (
                        <div className="space-y-8 animate-scale-up">
                            {/* TASK DEFINITIONS / SCHEDULES MANAGEMENT */}
                            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                                <div>
                                    <h3 className="text-lg font-bold flex items-center gap-2">
                                        <ListTodo className="h-5 w-5 text-primary" /> Active Task Schedules (Definitions)
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Manage recurring schedules, edit details, toggle active states, or delete definitions.
                                    </p>
                                </div>

                                <div className="border border-gray-100 dark:border-slate-800 rounded-xl overflow-hidden">
                                    <table className="w-full text-left text-xs">
                                        <thead>
                                            <tr className="bg-gray-50 dark:bg-slate-800/40 border-b border-gray-100 dark:border-slate-800 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                                                <th className="px-4 py-3">Task Details</th>
                                                <th className="px-4 py-3">Frequency</th>
                                                <th className="px-4 py-3">Assigned To</th>
                                                <th className="px-4 py-3">Status</th>
                                                <th className="px-4 py-3 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 dark:divide-slate-800/80">
                                            {tasks.length === 0 ? (
                                                <tr>
                                                    <td colSpan={5} className="px-4 py-8 text-center text-gray-400 italic">
                                                        No task definitions configured.
                                                    </td>
                                                </tr>
                                            ) : (
                                                tasks.map((task) => (
                                                    <tr key={task.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                                                        <td className="px-4 py-3">
                                                            <div className="font-bold text-gray-800 dark:text-gray-200">{task.title}</div>
                                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-gray-400 mt-0.5">
                                                                <span>{task.project_name}</span>
                                                                <span>•</span>
                                                                <span>{task.category}</span>
                                                                <span>•</span>
                                                                <span className="font-semibold text-primary">Target: {task.count || 1}</span>
                                                            </div>
                                                            {task.notes && (
                                                                <div className="text-[10px] text-gray-500 italic mt-1 max-w-sm truncate">
                                                                    💡 {task.notes}
                                                                </div>
                                                            )}
                                                        </td>
                                                        <td className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">
                                                            {task.frequency}
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                                                            👤 {task.user_name}
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <button
                                                                onClick={() => handleToggleTaskActive(task)}
                                                                className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider cursor-pointer border ${
                                                                    task.is_active
                                                                        ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/20 dark:text-green-400 dark:border-green-900/30'
                                                                        : 'bg-gray-100 text-gray-500 border-gray-200 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-700'
                                                                }`}
                                                                title="Click to toggle active state"
                                                            >
                                                                {task.is_active ? 'Active' : 'Inactive'}
                                                            </button>
                                                        </td>
                                                        <td className="px-4 py-3 text-right">
                                                            <div className="flex justify-end gap-1.5">
                                                                <button
                                                                    onClick={() => {
                                                                        setEditingTask(task);
                                                                        setEditProjId(String(task.project_id));
                                                                        setEditCategory(String(task.category_id));
                                                                        setEditTitle(task.title);
                                                                        setEditAssignedTo(String(task.user_id));
                                                                        setEditFrequency(task.frequency);
                                                                        setEditDueDate(task.due_date ? task.due_date.slice(0, 16) : '');
                                                                        setEditCount(task.count || 1);
                                                                        setEditNotes(task.notes || '');
                                                                        setEditIsActive(task.is_active === 1);
                                                                    }}
                                                                    className="p-1.5 text-blue-500 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/20 rounded-lg transition"
                                                                    title="Edit Task Definition"
                                                                >
                                                                    <Edit2 className="h-3.5 w-3.5" />
                                                                </button>
                                                                <button
                                                                    onClick={() => handleDeleteTask(task.id)}
                                                                    className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition"
                                                                    title="Delete Task Definition"
                                                                >
                                                                    <Trash2 className="h-3.5 w-3.5" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* PROJECTS, CATEGORIES & MEMBERS GRID */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* PROJECTS CONFIG */}
                                <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
                                    <div>
                                        <h3 className="text-lg font-bold flex items-center gap-2">
                                            <Folder className="h-5 w-5 text-primary" /> Project Management
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-0.5">
                                            Create and structure projects. Deleting projects cascade deletes their task lists.
                                        </p>
                                    </div>

                                    <form onSubmit={handleAddProject} className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Enter project name..."
                                            value={projectInputName}
                                            onChange={(e) => setProjectInputName(e.target.value)}
                                            className="flex-1 px-3 py-2 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            disabled={submittingProject || !projectInputName.trim()}
                                            className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2 rounded-xl transition flex items-center gap-1 shrink-0 disabled:opacity-50"
                                        >
                                            {submittingProject ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Plus className="h-3.5 w-3.5" />}
                                            Add Project
                                        </button>
                                    </form>

                                    <div className="border border-gray-100 dark:border-slate-800 rounded-xl overflow-hidden">
                                        <table className="w-full text-left text-xs">
                                            <thead>
                                                <tr className="bg-gray-50 dark:bg-slate-800/40 border-b border-gray-100 dark:border-slate-800 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                                                    <th className="px-4 py-3">Project Name</th>
                                                    <th className="px-4 py-3">Created</th>
                                                    <th className="px-4 py-3 text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 dark:divide-slate-800/80">
                                                {projects.length === 0 ? (
                                                    <tr>
                                                        <td colSpan={3} className="px-4 py-8 text-center text-gray-400 italic">
                                                            No projects registered. Create one above.
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    projects.map((p) => (
                                                        <tr key={p.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                                                            <td className="px-4 py-3 font-bold text-gray-800 dark:text-gray-200">
                                                                {p.name}
                                                            </td>
                                                            <td className="px-4 py-3 text-gray-400 text-[10px]">
                                                                {new Date(p.created_at).toLocaleDateString()}
                                                            </td>
                                                            <td className="px-4 py-3 text-right">
                                                                <button
                                                                    onClick={() => handleDeleteProject(p.id)}
                                                                    className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition"
                                                                    title="Delete Project and Tasks"
                                                                >
                                                                    <Trash2 className="h-3.5 w-3.5" />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* CATEGORIES CONFIG */}
                                <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
                                    <div>
                                        <h3 className="text-lg font-bold flex items-center gap-2">
                                            <ListTodo className="h-5 w-5 text-primary" /> Category Management
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-0.5">
                                            Manage taxonomy categories. Deleting a category cascade deletes its task list.
                                        </p>
                                    </div>

                                    <form onSubmit={handleAddCategory} className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Enter category name..."
                                            value={categoryInputName}
                                            onChange={(e) => setCategoryInputName(e.target.value)}
                                            className="flex-1 px-3 py-2 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            disabled={submittingCategory || !categoryInputName.trim()}
                                            className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2 rounded-xl transition flex items-center gap-1 shrink-0 disabled:opacity-50"
                                        >
                                            {submittingCategory ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Plus className="h-3.5 w-3.5" />}
                                            Add Category
                                        </button>
                                    </form>

                                    <div className="border border-gray-100 dark:border-slate-800 rounded-xl overflow-hidden">
                                        <table className="w-full text-left text-xs">
                                            <thead>
                                                <tr className="bg-gray-50 dark:bg-slate-800/40 border-b border-gray-100 dark:border-slate-800 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                                                    <th className="px-4 py-3">Category Name</th>
                                                    <th className="px-4 py-3 text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 dark:divide-slate-800/80">
                                                {categories.length === 0 ? (
                                                    <tr>
                                                        <td colSpan={2} className="px-4 py-8 text-center text-gray-400 italic">
                                                            No categories registered. Create one above.
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    categories.map((c) => (
                                                        <tr key={c.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                                                            <td className="px-4 py-3 font-bold text-gray-800 dark:text-gray-200">
                                                                {c.name}
                                                            </td>
                                                            <td className="px-4 py-3 text-right">
                                                                <div className="flex justify-end gap-1 items-center">
                                                                    <button
                                                                        onClick={() => {
                                                                            setEditingCategory(c);
                                                                            setEditCategoryName(c.name);
                                                                        }}
                                                                        className="p-1.5 text-blue-500 hover:text-blue-750 hover:bg-blue-50 dark:hover:bg-blue-950/20 rounded-lg transition"
                                                                        title="Edit Category Name"
                                                                    >
                                                                        <Edit2 className="h-3.5 w-3.5" />
                                                                    </button>
                                                                    <button
                                                                        onClick={() => handleDeleteCategory(c.id)}
                                                                        className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition"
                                                                        title="Delete Category and Tasks"
                                                                    >
                                                                        <Trash2 className="h-3.5 w-3.5" />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* MEMBERS CONFIG */}
                                <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
                                    <div>
                                        <h3 className="text-lg font-bold flex items-center gap-2">
                                            <Users className="h-5 w-5 text-primary" /> Member Management
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-0.5">
                                            Register new team members. Deletion is blocked if they have active assignments.
                                        </p>
                                    </div>

                                    <form onSubmit={handleAddUser} className="space-y-3">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            <input
                                                type="text"
                                                placeholder="Name (e.g. David Miller)"
                                                value={userInputName}
                                                onChange={(e) => setUserInputName(e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white"
                                                required
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email (e.g. david@invisor.ca)"
                                                value={userInputEmail}
                                                onChange={(e) => setUserInputEmail(e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white"
                                                required
                                            />
                                        </div>
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">
                                                    Role:
                                                </span>
                                                <select
                                                    value={userInputRole}
                                                    onChange={(e) => setUserInputRole(e.target.value as any)}
                                                    className="px-2 py-1 text-xs border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 rounded-lg focus:outline-none"
                                                >
                                                    <option value="member">Member</option>
                                                    <option value="manager">Manager</option>
                                                </select>
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={submittingUser || !userInputName.trim() || !userInputEmail.trim()}
                                                className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2 rounded-xl transition flex items-center gap-1 disabled:opacity-50"
                                            >
                                                {submittingUser ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Plus className="h-3.5 w-3.5" />}
                                                Register Member
                                            </button>
                                        </div>
                                    </form>

                                    <div className="border border-gray-100 dark:border-slate-800 rounded-xl overflow-hidden">
                                        <table className="w-full text-left text-xs">
                                            <thead>
                                                <tr className="bg-gray-50 dark:bg-slate-800/40 border-b border-gray-100 dark:border-slate-800 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                                                    <th className="px-4 py-3">Member Details</th>
                                                    <th className="px-4 py-3">Role</th>
                                                    <th className="px-4 py-3 text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 dark:divide-slate-800/80">
                                                {users.map((u) => (
                                                    <tr key={u.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                                                        <td className="px-4 py-3">
                                                            <div className="font-bold text-gray-800 dark:text-gray-200">{u.name}</div>
                                                            <div className="text-[10px] text-gray-400">{u.email}</div>
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                                                                u.role === 'manager' 
                                                                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400' 
                                                                    : 'bg-gray-100 text-gray-600 dark:bg-slate-800 dark:text-gray-400'
                                                            }`}>
                                                                {u.role}
                                                            </span>
                                                        </td>
                                                        <td className="px-4 py-3 text-right">
                                                            <div className="flex justify-end gap-1 items-center">
                                                                <button
                                                                    onClick={() => {
                                                                        const tokenOrId = u.share_token ? `token=${u.share_token}` : `userId=${u.id}`;
                                                                        const shareUrl = `${window.location.origin}${window.location.pathname}?${tokenOrId}`;
                                                                        navigator.clipboard.writeText(shareUrl);
                                                                        toast.success(`Copied shareable dashboard link for ${u.name} to clipboard!`);
                                                                    }}
                                                                    className="p-1.5 text-emerald-500 hover:text-emerald-750 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 rounded-lg transition"
                                                                    title="Copy Share Link"
                                                                >
                                                                    <Copy className="h-3.5 w-3.5" />
                                                                </button>
                                                                <button
                                                                    onClick={() => {
                                                                        setEditingUser(u);
                                                                        setEditUserName(u.name);
                                                                        setEditUserEmail(u.email);
                                                                        setEditUserRole(u.role);
                                                                    }}
                                                                    className="p-1.5 text-blue-500 hover:text-blue-750 hover:bg-blue-50 dark:hover:bg-blue-950/20 rounded-lg transition"
                                                                    title="Edit Member Profile"
                                                                >
                                                                    <Edit2 className="h-3.5 w-3.5" />
                                                                </button>
                                                                {u.role !== 'manager' ? (
                                                                    <button
                                                                        onClick={() => handleDeleteUser(u.id)}
                                                                        className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition"
                                                                        title="Delete Member"
                                                                    >
                                                                        <Trash2 className="h-3.5 w-3.5" />
                                                                    </button>
                                                                ) : (
                                                                    <span className="text-[10px] text-gray-300 dark:text-gray-700 p-1.5 cursor-not-allowed" title="System Locked (Managers cannot be deleted)">
                                                                        <Lock className="h-3.5 w-3.5 inline text-gray-400" />
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

                {/* 4. IMMUTABLE TASK COMPLETION MODAL */}
                {selectedInstance && (
                    <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 w-full max-w-lg rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-scale-up">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                                        Mark Task as Complete
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Submit proof details. The completion log becomes read-only and audited.
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        setSelectedInstance(null);
                                        setCompletionNotes('');
                                    }}
                                    className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800/80 p-4 rounded-xl text-xs space-y-1">
                                <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                                    {selectedInstance.title}
                                </p>
                                <div className="flex items-center gap-2 text-gray-500 font-semibold mt-1">
                                    <span>Project: {selectedInstance.project_name}</span>
                                    <span>•</span>
                                    <span>Category: {selectedInstance.category}</span>
                                </div>
                                <p className="text-[10px] text-red-500 font-bold mt-1">
                                    Due deadline: {new Date(selectedInstance.instance_due_date).toLocaleString()}
                                </p>
                            </div>

                            <form onSubmit={handleCompleteSubmit} className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                                        Completion Notes & Proof URLs <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        className="w-full min-h-[120px] p-3 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary leading-relaxed placeholder:text-gray-400"
                                        placeholder="Add notes about task completion (e.g. Posted the monthly update to LinkedIn page). Proof URLs are optional."
                                        value={completionNotes}
                                        onChange={(e) => setCompletionNotes(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="flex items-center justify-between text-[10px] text-gray-400">
                                    <span>Status:</span>
                                    {completionNotes.trim().length > 0 ? (
                                        <span className="text-green-500 font-bold flex items-center gap-1">
                                            ✓ Ready to Submit
                                        </span>
                                    ) : (
                                        <span className="text-red-400 font-bold">
                                            ✗ Completion notes are required
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center justify-end gap-2 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSelectedInstance(null);
                                            setCompletionNotes('');
                                        }}
                                        className="px-4 py-2 border border-gray-200 dark:border-slate-700 text-xs font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={
                                            submittingCompletion ||
                                            !completionNotes.trim()
                                        }
                                        className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 disabled:opacity-50 shadow-xs"
                                    >
                                        {submittingCompletion ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                                            </>
                                        ) : (
                                            'Mark Completed'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* 5. CREATE TASK MODAL */}
                {isCreateOpen && (
                    <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 w-full max-w-lg rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-scale-up">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                                        Create Recurring Task Definition
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Define a project category, scheduler frequency, and default team in-charge.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsCreateOpen(false)}
                                    className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <form onSubmit={handleCreateTask} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                            Project Name <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={newProjId}
                                            onChange={(e) => setNewProjId(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                            required
                                        >
                                            <option value="">Select Project...</option>
                                            {projects.map((p) => (
                                                <option key={p.id} value={p.id}>
                                                    {p.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                            Task Category <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={newCategory}
                                            onChange={(e) => setNewCategory(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                            required
                                        >
                                            <option value="">Select Category...</option>
                                            {categories.map((c) => (
                                                <option key={c.id} value={c.id}>
                                                    {c.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                        Task Title <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={newTitle}
                                        onChange={(e) => setNewTitle(e.target.value)}
                                        placeholder="e.g. Publish monthly Canadian tax checklist article"
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                            Task In-Charge <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={newAssignedTo}
                                            onChange={(e) => setNewAssignedTo(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                            required
                                        >
                                            <option value="">Select Member...</option>
                                            {users.map((u) => (
                                                <option key={u.id} value={u.id}>
                                                    {u.name} ({u.role})
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                            Frequency <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={newFrequency}
                                            onChange={(e) => {
                                                const val = e.target.value as any;
                                                setNewFrequency(val);
                                                if (val !== 'One-Time') {
                                                    setNewDueDate('');
                                                }
                                            }}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                        >
                                            <option value="Daily">Daily</option>
                                            <option value="Weekly">Weekly</option>
                                            <option value="Bi-Weekly">Bi-Weekly</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="One-Time">One-Time</option>
                                        </select>
                                    </div>
                                </div>

                                {newFrequency === 'One-Time' && (
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                            Due Date & Time <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="datetime-local"
                                            value={newDueDate}
                                            onChange={(e) => setNewDueDate(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                            required={newFrequency === 'One-Time'}
                                        />
                                    </div>
                                )}

                                <div className="grid grid-cols-3 gap-4">
                                    <div className="col-span-1 space-y-1">
                                        <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                            Target Count <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            min={1}
                                            value={newCount}
                                            onChange={(e) => setNewCount(parseInt(e.target.value, 10) || 1)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-2 space-y-1">
                                        <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                            Task Notes / Instructions
                                        </label>
                                        <input
                                            type="text"
                                            value={newNotes}
                                            onChange={(e) => setNewNotes(e.target.value)}
                                            placeholder="guidelines, checklist, etc."
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-end gap-2 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsCreateOpen(false)}
                                        className="px-4 py-2 border border-gray-200 dark:border-slate-700 text-xs font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={submittingNewTask}
                                        className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 disabled:opacity-50 shadow-xs"
                                    >
                                        {submittingNewTask ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" /> Creating...
                                            </>
                                        ) : (
                                            'Create Definition'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* 6. EDIT TASK MODAL */}
                {editingTask && (
                    <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 w-full max-w-lg rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-scale-up">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                                        Edit Task Definition
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Modify scheduling parameters, assignee, or active compliance state.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setEditingTask(null)}
                                    className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <form onSubmit={handleEditTaskSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                            Project Name <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={editProjId}
                                            onChange={(e) => setEditProjId(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                            required
                                        >
                                            <option value="">Select Project...</option>
                                            {projects.map((p) => (
                                                <option key={p.id} value={p.id}>
                                                    {p.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                            Task Category <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={editCategory}
                                            onChange={(e) => setEditCategory(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-350 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                            required
                                        >
                                            <option value="">Select Category...</option>
                                            {categories.map((c) => (
                                                <option key={c.id} value={c.id}>
                                                    {c.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                        Task Title <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={editTitle}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                        placeholder="e.g. Publish monthly checklist"
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                            Task In-Charge <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={editAssignedTo}
                                            onChange={(e) => setEditAssignedTo(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                            required
                                        >
                                            {users.map((u) => (
                                                <option key={u.id} value={u.id}>
                                                    {u.name} ({u.role})
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                            Frequency <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={editFrequency}
                                            onChange={(e) => {
                                                const val = e.target.value as any;
                                                setEditFrequency(val);
                                                if (val !== 'One-Time') {
                                                    setEditDueDate('');
                                                }
                                            }}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                        >
                                            <option value="Daily">Daily</option>
                                            <option value="Weekly">Weekly</option>
                                            <option value="Bi-Weekly">Bi-Weekly</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="One-Time">One-Time</option>
                                        </select>
                                    </div>
                                </div>

                                {editFrequency === 'One-Time' && (
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                            Due Date & Time <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="datetime-local"
                                            value={editDueDate}
                                            onChange={(e) => setEditDueDate(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                            required={editFrequency === 'One-Time'}
                                        />
                                    </div>
                                )}

                                <div className="grid grid-cols-3 gap-4">
                                    <div className="col-span-1 space-y-1">
                                        <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                            Target Count <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            min={1}
                                            value={editCount}
                                            onChange={(e) => setEditCount(parseInt(e.target.value, 10) || 1)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-2 space-y-1">
                                        <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                            Task Notes / Instructions
                                        </label>
                                        <input
                                            type="text"
                                            value={editNotes}
                                            onChange={(e) => setEditNotes(e.target.value)}
                                            placeholder="guidelines, checklist, etc."
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 pt-1">
                                    <input
                                        type="checkbox"
                                        id="editIsActive"
                                        checked={editIsActive}
                                        onChange={(e) => setEditIsActive(e.target.checked)}
                                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                    />
                                    <label htmlFor="editIsActive" className="text-xs font-bold text-gray-700 dark:text-gray-300 cursor-pointer">
                                        Active compliance monitoring (generate pending instances)
                                    </label>
                                </div>

                                <div className="flex items-center justify-end gap-2 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setEditingTask(null)}
                                        className="px-4 py-2 border border-gray-200 dark:border-slate-700 text-xs font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={submittingEditTask}
                                        className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 disabled:opacity-50 shadow-xs"
                                    >
                                        {submittingEditTask ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" /> Saving...
                                            </>
                                        ) : (
                                            'Save Changes'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* 7. EDIT USER/MEMBER MODAL */}
                {editingUser && (
                    <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 w-full max-w-lg rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-scale-up">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                                        Edit Member Profile
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Update the member name, email address, or toggle administrative manager permissions.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setEditingUser(null)}
                                    className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <form onSubmit={handleEditUserSubmit} className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={editUserName}
                                        onChange={(e) => setEditUserName(e.target.value)}
                                        placeholder="e.g. John Doe"
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                        required
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        value={editUserEmail}
                                        onChange={(e) => setEditUserEmail(e.target.value)}
                                        placeholder="e.g. john@invisorcpa.ca"
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                        required
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                        System Role <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        value={editUserRole}
                                        onChange={(e) => setEditUserRole(e.target.value as any)}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                        required
                                    >
                                        <option value="member">Member (Can execute tasks)</option>
                                        <option value="manager">Manager (Has full dashboard administrative controls)</option>
                                    </select>
                                </div>

                                <div className="flex items-center justify-end gap-2 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setEditingUser(null)}
                                        className="px-4 py-2 border border-gray-200 dark:border-slate-700 text-xs font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={submittingEditUser}
                                        className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 disabled:opacity-50 shadow-xs"
                                    >
                                        {submittingEditUser ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" /> Saving...
                                            </>
                                        ) : (
                                            'Save Profile'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* 8. EDIT CATEGORY MODAL */}
                {editingCategory && (
                    <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 w-full max-w-lg rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-scale-up">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                                        Edit Category Name
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Rename task classification taxonomy.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setEditingCategory(null)}
                                    className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <form onSubmit={handleEditCategorySubmit} className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                        Category Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={editCategoryName}
                                        onChange={(e) => setEditCategoryName(e.target.value)}
                                        placeholder="e.g. Content Writing"
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                                        required
                                    />
                                </div>

                                <div className="flex items-center justify-end gap-2 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setEditingCategory(null)}
                                        className="px-4 py-2 border border-gray-200 dark:border-slate-700 text-xs font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={submittingEditCategory}
                                        className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 disabled:opacity-50 shadow-xs"
                                    >
                                        {submittingEditCategory ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" /> Saving...
                                            </>
                                        ) : (
                                            'Save Category'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

// Internal component for clean card structure
interface TaskCardProps {
    item: TaskInstance;
    onComplete: (instance: TaskInstance) => void;
}

function TaskCard({ item, onComplete }: TaskCardProps) {
    const dueDate = new Date(item.instance_due_date);
    const endOfDueDay = new Date(dueDate);
    endOfDueDay.setHours(23, 59, 59, 999);
    const isOverdue = new Date() > endOfDueDay;

    let freqColor = 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30';
    if (item.frequency === 'Weekly') {
        freqColor = 'bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400 border border-green-100 dark:border-green-900/30';
    } else if (item.frequency === 'Bi-Weekly') {
        freqColor = 'bg-teal-50 text-teal-700 dark:bg-teal-950/30 dark:text-teal-400 border border-teal-100 dark:border-teal-900/30';
    } else if (item.frequency === 'Monthly') {
        freqColor = 'bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400 border border-purple-100 dark:border-purple-900/30';
    } else if (item.frequency === 'One-Time') {
        freqColor = 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30';
    }

    return (
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-primary/40 dark:hover:border-primary/40 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-56 relative overflow-hidden group">
            <div>
                <div className="flex justify-between items-start gap-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded truncate max-w-[120px]">
                        {item.project_name}
                    </span>
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shrink-0 ${freqColor}`}>
                        {item.frequency}
                    </span>
                </div>

                <h3 className="font-bold text-gray-800 dark:text-gray-100 text-sm mt-3 line-clamp-2 leading-snug">
                    {item.title}
                </h3>
                <div className="flex items-center gap-2 text-[10px] text-gray-400 mt-1">
                    <span>{item.category}</span>
                    <span>•</span>
                    <span className="font-semibold text-primary">Target Count: {item.count || 1}</span>
                </div>
                {item.task_notes && (
                    <p className="text-[10px] text-gray-500 italic mt-1.5 line-clamp-2" title={item.task_notes}>
                        Notes: {item.task_notes}
                    </p>
                )}
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">
                        Target Deadline:
                    </span>
                    <span
                        className={`text-xs font-semibold ${
                            isOverdue ? 'text-red-500 font-bold' : 'text-gray-600 dark:text-gray-300'
                        }`}
                    >
                        {dueDate.toLocaleDateString()} at {dueDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                </div>

                <button
                    onClick={() => onComplete(item)}
                    className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 transition shadow-2xs group-hover:scale-[1.02]"
                >
                    <CheckCircle2 className="h-3.5 w-3.5" /> Complete
                </button>
            </div>
        </div>
    );
}
