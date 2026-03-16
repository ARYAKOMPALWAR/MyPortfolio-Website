import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12 text-gray-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm tracking-wide">
          © {year} <span className="text-white font-semibold">Arya Kompalwar</span>. Crafted with passion.
        </p>

        <div className="flex items-center gap-6">
          <a href="mailto:Aryakompalwar@gmail.com" className="hover:text-white transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://github.com/ARYAKOMPALWAR" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/arya-kompalwar/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <p className="text-xs font-mono">Built with React + Three.js + Framer Motion</p>
      </div>
    </footer>
  );
}
