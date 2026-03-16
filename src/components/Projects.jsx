import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'ContribuX',
    description: 'Developed a crowdfunding platform enabling creators to receive recurring and one-time financial support. Features secure user authentication, dashboards, and campaign management.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/ARYAKOMPALWAR/contribux',
    live: '#',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Secure File Sharing',
    description: 'Python-based application enabling secure file transfer between multiple clients over a network using socket programming and efficient file handling mechanisms.',
    tech: ['Python', 'Sockets', 'Security'],
    github: 'https://github.com/ARYAKOMPALWAR',
    live: '#',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Netflix UI Clone',
    description: 'A pixel-perfect recreation of the Netflix landing page, focusing on complex UI components, responsive layouts, and seamless CSS animations.',
    tech: ['React', 'CSS3', 'TMDB API'],
    github: 'https://github.com/ARYAKOMPALWAR',
    live: '#',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Silicon Valley Portfolio',
    description: 'An award-winning level personal portfolio website with 3D interactions, smooth scrolling, and dynamic Framer Motion animations.',
    tech: ['React', 'Three.js', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/ARYAKOMPALWAR',
    live: '#',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative text-white">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 font-light"
          >
            A selection of my recent works and technical experiments.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group glass-card overflow-hidden hover:bg-white/10 transition-colors duration-500 rounded-3xl"
            >
              <div className="relative h-64 overflow-hidden bg-gray-900 border-b border-white/10">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white tracking-wide">{project.title}</h3>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <p className="text-gray-400 font-light leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-sm bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                    <Github size={20} />
                    <span className="text-sm font-semibold uppercase tracking-wider">Code</span>
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                    <span className="text-sm font-semibold uppercase tracking-wider">Live Demo</span>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
