import { BlogPostCard } from '@/components/ui/BlogPostCard';
import { getAllPosts } from '@/lib/mdx';
import { compareDesc } from 'date-fns';

export const metadata = {
    title: 'Blog | Insights & Tutorials',
    description: 'Read my latest thoughts on web development, design systems, and software engineering.',
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="container mx-auto px-6 py-20 min-h-screen max-w-5xl">
            <div className="mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                    The Blog
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Deep dives into modern web development, my journey as a developer, and occasional rants about JavaScript frameworks.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <BlogPostCard
                        key={post.slug}
                        {...post}
                        tags={post.tags || []}
                    />
                ))}
            </div>
        </div>
    );
}
