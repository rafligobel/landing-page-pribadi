'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, FolderGit2, LogOut, Settings } from 'lucide-react';
import { signOut } from 'next-auth/react';
import clsx from 'clsx';

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Posts', href: '/dashboard/posts', icon: FileText },
    { name: 'Projects', href: '/dashboard/projects', icon: FolderGit2 },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-full w-64 flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4 dark:border-gray-800 dark:bg-gray-950">
            <div className="flex h-16 shrink-0 items-center">
                <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Admin Panel
                </h1>
            </div>
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={clsx(
                                                isActive
                                                    ? 'bg-gray-50 text-indigo-600 dark:bg-gray-900 dark:text-indigo-400'
                                                    : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-indigo-400',
                                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                            )}
                                        >
                                            <item.icon
                                                className={clsx(
                                                    isActive
                                                        ? 'text-indigo-600 dark:text-indigo-400'
                                                        : 'text-gray-400 group-hover:text-indigo-600 dark:text-gray-500 dark:group-hover:text-indigo-400',
                                                    'h-6 w-6 shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                    <li className="mt-auto">
                        <button
                            onClick={() => signOut()}
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-indigo-400 w-full text-left"
                        >
                            <LogOut
                                className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600 dark:text-gray-500 dark:group-hover:text-indigo-400"
                                aria-hidden="true"
                            />
                            Sign out
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
