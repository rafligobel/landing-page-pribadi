import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full bg-black/80 text-white/60 py-8 border-t border-white/10 mt-auto">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">© {new Date().getFullYear()} Antigravity. All rights reserved.</p>

                <div className="flex gap-6">
                    <a href="https://github.com/rafligobel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.instagram.com/rafligobel_" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href="https://linkedin.com/in/rafligobel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
