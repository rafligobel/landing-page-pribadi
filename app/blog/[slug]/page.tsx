import { getPostBySlug, getPostSlugs } from '@/lib/mdx';
import { format, parseISO } from 'date-fns';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';

export const generateStaticParams = async () => getPostSlugs().map((slug) => ({ slug: slug.replace(/\.mdx$/, '') }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    try {
        const post = getPostBySlug(slug);
        return { title: post.title };
    } catch (e) {
        return { title: 'Post Not Found' };
    }
}

export default async function PostLayout({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let post;
    try {
        post = getPostBySlug(slug);
    } catch (e) {
        notFound();
    }

    return (
        <article className="container mx-auto px-6 py-20 min-h-screen max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
            </Link>

            <div className="mb-10 text-center">
                <time dateTime={post.date} className="block text-sm text-gray-500 mb-2">
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                </time>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                {post.tags && (
                    <div className="flex gap-2 justify-center">
                        {post.tags.map((tag) => (
                            <span key={tag} className="text-xs font-semibold px-2 py-1 bg-white/10 rounded-md text-gray-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-purple-400 prose-strong:text-white">
                <MDXRemote source={post.content} />
            </div>
        </article>
    );
}
