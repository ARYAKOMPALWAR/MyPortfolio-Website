import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 relative text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* About Image / Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative glass-card rounded-3xl overflow-hidden aspect-[4/5] p-2">
             <div className="h-full w-full rounded-2xl overflow-hidden shadow-2xl">
               <img 
                 src={`${import.meta.env.BASE_URL}profile.jpg`} 
                 alt="Arya Kompalwar" 
                 className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
               />
             </div>
             
             <div className="absolute bottom-6 left-6 right-6 p-6 glass-card border-white/5 backdrop-blur-2xl rounded-2xl">
               <h3 className="text-xl font-bold text-white">Arya Kompalwar</h3>
               <p className="text-blue-400 text-sm font-medium tracking-wider mt-1 uppercase">Software Developer</p>
             </div>
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
            About Me
          </h2>
          
          <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed">
            <p>
              I am a driven Software Developer pursuing a Bachelor of Engineering in Information Technology at Sinhgad Institute of Technology. 
              My journey is fueled by a profound curiosity for creating scalable, modular, and performant web applications.
            </p>
            <p>
              From crafting complex Python systems like secure file-sharing networks to building modern React-based crowdfunding platforms like ContribuX, I thrive on tackling challenging problems and delivering impactful solutions.
            </p>
            <p>
              I believe in clean code, seamless user experiences, and the power of continuous learning. What drives me is translating abstract ideas into elegant, reliable software.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
