'use server';

import { signIn, auth } from '@/lib/auth';
import { AuthError } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

// --- Authentication ---

export async function authenticate(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

// --- Posts ---

const FormSchema = z.object({
    id: z.string(),
    title: z.string().min(1, { message: 'Title is required.' }),
    slug: z.string().min(1, { message: 'Slug is required.' }),
    content: z.string().min(1, { message: 'Content is required.' }),
    published: z.coerce.boolean(),
    authorId: z.string(),
});

const CreatePost = FormSchema.omit({ id: true, authorId: true });
const UpdatePost = FormSchema.omit({ id: true, authorId: true });

export type State = {
    errors?: {
        title?: string[];
        slug?: string[];
        content?: string[];
        published?: string[];
    };
    message?: string | null;
};

export async function createPost(prevState: State, formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) {
        return { message: 'Not authenticated' };
    }

    const validatedFields = CreatePost.safeParse({
        title: formData.get('title'),
        slug: formData.get('slug'),
        content: formData.get('content'),
        published: formData.get('published') === 'on', // Checkbox handling
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Post.',
        };
    }

    const { title, slug, content, published } = validatedFields.data;

    try {
        await prisma.post.create({
            data: {
                title,
                slug,
                content,
                published,
                authorId: session.user.id,
            },
        });
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create Post.',
        };
    }

    revalidatePath('/dashboard/posts');
    redirect('/dashboard/posts');
}

export async function updatePost(id: string, prevState: State, formData: FormData) {
    const validatedFields = UpdatePost.safeParse({
        title: formData.get('title'),
        slug: formData.get('slug'),
        content: formData.get('content'),
        published: formData.get('published') === 'on',
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Post.',
        };
    }

    const { title, slug, content, published } = validatedFields.data;

    try {
        await prisma.post.update({
            where: { id },
            data: {
                title,
                slug,
                content,
                published,
            },
        });
    } catch (error) {
        return { message: 'Database Error: Failed to Update Post.' };
    }

    revalidatePath('/dashboard/posts');
    redirect('/dashboard/posts');
}

export async function deletePost(id: string) {
    try {
        await prisma.post.delete({
            where: { id },
        });
        revalidatePath('/dashboard/posts');
    } catch (error) {
        return { message: 'Database Error: Failed to Delete Post.' };
    }
}

// --- Projects ---

export async function createProject(prevState: any, formData: FormData) {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const link = formData.get('link') as string;
    const github = formData.get('github') as string;
    const imageUrl = formData.get('imageUrl') as string;
    const technologiesStr = formData.get('technologies') as string;

    // Simple split by comma
    const technologies = technologiesStr ? technologiesStr.split(',').map(t => t.trim()).filter(Boolean) : [];

    try {
        await prisma.project.create({
            data: {
                title,
                description,
                link,
                github,
                imageUrl,
                technologies
            }
        });
    } catch (error) {
        console.error(error);
        return { message: 'Database Error: Failed to Create Project' };
    }

    revalidatePath('/dashboard/projects');
    redirect('/dashboard/projects');
}

export async function updateProject(id: string, prevState: any, formData: FormData) {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const link = formData.get('link') as string;
    const github = formData.get('github') as string;
    const imageUrl = formData.get('imageUrl') as string;
    const technologiesStr = formData.get('technologies') as string;

    const technologies = technologiesStr ? technologiesStr.split(',').map(t => t.trim()).filter(Boolean) : [];

    try {
        await prisma.project.update({
            where: { id },
            data: {
                title,
                description,
                link,
                github,
                imageUrl,
                technologies
            }
        });
    } catch (error) {
        console.error(error);
        return { message: 'Database Error: Failed to Update Project' };
    }

    revalidatePath('/dashboard/projects');
    redirect('/dashboard/projects');
}

export async function deleteProject(id: string) {
    try {
        await prisma.project.delete({ where: { id } });
        revalidatePath('/dashboard/projects');
    } catch (error) {
        return { message: 'Database Error: Failed to Delete Project' };
    }
}
