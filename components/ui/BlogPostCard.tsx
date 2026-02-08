'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { formatDate } from 'date-fns';

interface BlogPostProps {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
}

export function BlogPostCard({ slug, title, excerpt, date, tags }: BlogPostProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="group relative flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
        >
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <time dateTime={date}>{new Date(date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}</time>
                <div className="flex gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors">
                <Link href={`/blog/${slug}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {title}
                </Link>
            </h2>

            <p className="mt-2 text-base text-gray-400 line-clamp-3">
                {excerpt}
            </p>

            <div className="mt-4 flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300">
                Read Article
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
        </motion.div>
    );
}
