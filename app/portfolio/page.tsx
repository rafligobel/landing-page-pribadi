import { getAllProjects } from '@/lib/mdx';
import { ProjectGrid } from '@/components/ui/ProjectGrid';

export const metadata = {
    title: 'Portfolio | My Work',
    description: 'Selected projects and case studies.',
};

export default function PortfolioPage() {
    const projects = getAllProjects();

    return (
        <div className="container mx-auto px-6 py-20 min-h-screen">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <span className="text-purple-400 font-semibold tracking-wider text-sm uppercase">My Work</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Selected Projects</h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Here are a few past design projects I&apos;ve worked on. Want to see more? <a href="mailto:contact@example.com" className="text-white underline decoration-purple-500 underline-offset-4 hover:text-purple-400 transition-colors">Email me</a>.
                </p>
            </div>

            <ProjectGrid projects={projects} />
        </div >
    );
}
