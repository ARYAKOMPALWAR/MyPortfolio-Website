import { motion } from 'framer-motion';
import { Layers, Terminal, Database, Code, Shield, GitBranch, Github, Server, Cpu } from 'lucide-react';

const skillsData = [
  { name: 'JavaScript', category: 'Frontend', icon: <Terminal className="w-8 h-8 text-yellow-500" /> },
  { name: 'React', category: 'Frontend', icon: <Layers className="w-8 h-8 text-blue-400" /> },
  { name: 'Node.js', category: 'Backend', icon: <Server className="w-8 h-8 text-green-500" /> },
  { name: 'Express.js', category: 'Backend', icon: <Cpu className="w-8 h-8 text-gray-400" /> },
  { name: 'Python', category: 'Languages', icon: <Terminal className="w-8 h-8 text-blue-500" /> },
  { name: 'MongoDB', category: 'Database', icon: <Database className="w-8 h-8 text-green-600" /> },
  { name: 'Tailwind CSS', category: 'Frontend', icon: <Code className="w-8 h-8 text-teal-400" /> },
  { name: 'Git', category: 'Tools', icon: <GitBranch className="w-8 h-8 text-red-500" /> },
  { name: 'GitHub', category: 'Tools', icon: <Github className="w-8 h-8 text-white" /> },
  { name: 'Problem Solving', category: 'Soft Skill', icon: <Shield className="w-8 h-8 text-indigo-400" /> },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Core Skills & Tools</h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, continuously evolving to build robust digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)",
              }}
              className="glass-card flex flex-col items-center justify-center p-6 text-center space-y-4 group cursor-default transition-transform duration-300"
            >
              <div className="p-4 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                <span className="text-xs text-blue-400 font-medium tracking-wide uppercase">{skill.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
