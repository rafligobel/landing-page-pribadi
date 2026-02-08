import Link from 'next/link';

export const metadata = {
    title: 'About Me | Full Stack Developer',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 py-20 min-h-screen max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Hello, I'm <span className="gradient-text">Antigravity</span>.</h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6">
                        I started my journey with PHP and Laravel, building robust backend systems.
                        Recently, I've been expanding my horizons into the modern JavaScript ecosystem,
                        mastering <strong className="text-white">Next.js</strong>, <strong className="text-white">React</strong>, and <strong className="text-white">Node.js</strong> to create immersive full-stack experiences.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed mb-8">
                        My goal is to bridge the gap between powerful backend logic and beautiful, interactive frontend design.
                        I'm passionate about clean code, performance, and user-centric design.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/portfolio" className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors">
                            See My Work
                        </Link>
                        <a href="mailto:contact@example.com" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-medium">
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
                    {/* Placeholder for user photo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                        <span className="text-white/20 text-6xl font-bold">Photo</span>
                    </div>
                </div>
            </div>

            <div className="mb-20">
                <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'Prisma', 'PostgreSQL', 'Laravel', 'PHP', 'Git'].map((tech) => (
                        <div key={tech} className="p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors text-gray-300 font-medium">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold mb-8">Experience</h2>
                <div className="space-y-8 pl-4 border-l border-white/10">
                    {/* Example Experience Item */}
                    <div className="relative pl-8">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-black" />
                        <h3 className="text-xl font-bold text-white">Freelance Full Stack Developer</h3>
                        <span className="text-sm text-gray-500 block mb-2">2023 - Present</span>
                        <p className="text-gray-400">
                            Building custom web applications for clients using Next.js and Laravel. Focus on e-commerce and SaaS products.
                        </p>
                    </div>
                    <div className="relative pl-8">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-700 ring-4 ring-black" />
                        <h3 className="text-xl font-bold text-white">Junior Web Developer</h3>
                        <span className="text-sm text-gray-500 block mb-2">2021 - 2023</span>
                        <p className="text-gray-400">
                            Developed internal tools and maintained legacy PHP applications. Migrated several modules to modern frameworks.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
