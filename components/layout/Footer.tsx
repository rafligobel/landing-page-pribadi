import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full bg-black/80 text-white/60 py-8 border-t border-white/10 mt-auto">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">© {new Date().getFullYear()} Antigravity. All rights reserved.</p>

                <div className="flex gap-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <Twitter size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
