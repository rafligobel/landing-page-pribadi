import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const projectsDirectory = path.join(process.cwd(), 'content/projects');

export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
    content: string;
    [key: string]: any;
};

export type Project = {
    slug: string;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
    image?: string;
    featured?: boolean;
    date: string;
    content: string;
    [key: string]: any;
};

export function getPostSlugs() {
    if (!fs.existsSync(postsDirectory)) return [];
    return fs.readdirSync(postsDirectory);
}

export function getProjectSlugs() {
    if (!fs.existsSync(projectsDirectory)) return [];
    return fs.readdirSync(projectsDirectory);
}

export function getPostBySlug(slug: string): Post {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        content,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        tags: data.tags,
        ...data,
    };
}

export function getProjectBySlug(slug: string): Project {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(projectsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        content,
        title: data.title,
        description: data.description,
        technologies: data.technologies,
        date: data.date,
        ...data,
    };
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export function getAllProjects(): Project[] {
    const slugs = getProjectSlugs();
    const projects = slugs
        .map((slug) => getProjectBySlug(slug))
        .sort((project1, project2) => (project1.date > project2.date ? -1 : 1));
    return projects;
}
