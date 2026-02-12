import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // We might need to create these or use simple divs
import { FileText, FolderGit2 } from 'lucide-react';

async function getStats() {
    const postsCount = await prisma.post.count();
    const projectsCount = await prisma.project.count();

    return {
        postsCount,
        projectsCount,
    };
}

export default async function DashboardPage() {
    const stats = await getStats();

    return (
        <div>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:truncate sm:text-3xl sm:tracking-tight mb-8">
                Dashboard Overview
            </h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border bg-card text-card-foreground shadow p-6 bg-white dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium text-gray-500 dark:text-gray-400">Total Posts</h3>
                        <FileText className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.postsCount}</div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        +0 from last month
                    </p>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow p-6 bg-white dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium text-gray-500 dark:text-gray-400">Total Projects</h3>
                        <FolderGit2 className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.projectsCount}</div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        +0 from last month
                    </p>
                </div>
            </div>
        </div>
    );
}
