'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { createPost, updatePost, State } from '@/lib/actions';

export default function PostForm({ post }: { post?: any }) {
    const initialState: State = { message: null, errors: {} };
    const updatePostWithId = post ? updatePost.bind(null, post.id) : null;
    const [state, formAction] = useActionState(
        post ? updatePostWithId! : createPost,
        initialState
    );

    return (
        <form action={formAction}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12 dark:border-gray-700">
                    <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                        {post ? 'Edit Post' : 'New Post'}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {post ? 'Update the details of your blog post.' : 'Write a new blog post.'}
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
                                    defaultValue={post?.title}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 sm:text-sm sm:leading-6"
                                    aria-describedby="title-error"
                                />
                            </div>
                            <div id="title-error" aria-live="polite" aria-atomic="true">
                                {state.errors?.title &&
                                    state.errors.title.map((error: string) => (
                                        <p key={error} className="mt-2 text-sm text-red-500">
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="slug" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                Slug
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="slug"
                                    id="slug"
                                    defaultValue={post?.slug}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 sm:text-sm sm:leading-6"
                                    aria-describedby="slug-error"
                                />
                            </div>
                            <div id="slug-error" aria-live="polite" aria-atomic="true">
                                {state.errors?.slug &&
                                    state.errors.slug.map((error: string) => (
                                        <p key={error} className="mt-2 text-sm text-red-500">
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="content" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                Content (Markdown)
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="content"
                                    name="content"
                                    rows={10}
                                    defaultValue={post?.content}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 sm:text-sm sm:leading-6 font-mono"
                                    aria-describedby="content-error"
                                />
                            </div>
                            <div id="content-error" aria-live="polite" aria-atomic="true">
                                {state.errors?.content &&
                                    state.errors.content.map((error: string) => (
                                        <p key={error} className="mt-2 text-sm text-red-500">
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        </div>

                        <div className="col-span-full">
                            <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                    <input
                                        id="published"
                                        name="published"
                                        type="checkbox"
                                        defaultChecked={post?.published}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:border-gray-700 dark:bg-gray-800"
                                    />
                                </div>
                                <div className="text-sm leading-6">
                                    <label htmlFor="published" className="font-medium text-gray-900 dark:text-white">
                                        Published
                                    </label>
                                    <p className="text-gray-500 dark:text-gray-400">Make this post visible to the public.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link href="/dashboard/posts" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
            {state.message && (
                <p className="mt-2 text-sm text-red-500">{state.message}</p>
            )}
        </form>
    );
}
