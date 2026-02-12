'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { createProject, updateProject } from '@/lib/actions';

export default function ProjectForm({ project }: { project?: any }) {
    const updateProjectWithId = project ? updateProject.bind(null, project.id) : null;
    const [state, formAction] = useActionState(
        project ? updateProjectWithId! : createProject,
        { message: null }
    );

    return (
        <form action={formAction}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12 dark:border-gray-700">
                    <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                        {project ? 'Edit Project' : 'New Project'}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {project ? 'Update the details of your project.' : 'Add a new project to your portfolio.'}
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    defaultValue={project?.title}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                    defaultValue={project?.description}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="imageUrl" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                Image URL
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="imageUrl"
                                    id="imageUrl"
                                    defaultValue={project?.imageUrl}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="link" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                Live URL
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="link"
                                    id="link"
                                    defaultValue={project?.link}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="github" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                GitHub URL
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="github"
                                    id="github"
                                    defaultValue={project?.github}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="technologies" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                Technologies (comma separated)
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="technologies"
                                    id="technologies"
                                    defaultValue={project?.technologies?.join(', ')}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link href="/dashboard/projects" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
            {state?.message && (
                <p className="mt-2 text-sm text-red-500">{state.message}</p>
            )}
        </form>
    );
}
