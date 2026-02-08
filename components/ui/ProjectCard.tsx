'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ProjectProps {
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    link: string;
}

export function ProjectCard({ title, description, image, technologies, link }: ProjectProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
        >
            <div className="aspect-video w-full overflow-hidden bg-gray-800 relative">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black text-gray-500">
                        <span className="text-4xl font-bold opacity-20">Preview</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href={link} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                        View Project <ArrowUpRight size={18} />
                    </Link>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-gray-300 border border-white/5">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
