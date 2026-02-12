
import ProjectForm from '@/components/dashboard/ProjectForm';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = await prisma.project.findUnique({
        where: { id },
    });

    if (!project) {
        notFound();
    }

    return (
        <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <ProjectForm project={project} />
        </div>
    );
}
