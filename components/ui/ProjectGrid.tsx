'use client';
import { motion, Variants } from 'framer-motion';
import { ProjectCard } from '@/components/ui/ProjectCard';

import { Project } from '@/lib/mdx';

const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
};

export function ProjectGrid({ projects }: { projects: Project[] }) {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
            {projects.map((project) => (
                <motion.div key={project.slug} variants={itemVariants} className="h-full">
                    <ProjectCard
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        link={project.link || '#'}
                        image={project.image}
                    />
                </motion.div>
            ))}
        </motion.div>
    );
}
