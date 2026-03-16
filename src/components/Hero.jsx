import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';

function AnimatedSphere() {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Sphere ref={meshRef} visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <AnimatedSphere />
        </Canvas>
      </div>

      {/* Background overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl w-full mx-auto pt-28 pb-32 gap-6">

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          whileHover={{ scale: 1.06, rotate: 3 }}
          className="w-32 h-32 md:w-44 md:h-44 rounded-full border-2 border-blue-500/50 p-1 bg-black/50 backdrop-blur-xl overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.6)]"
        >
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Arya"
            className="w-full h-full object-cover object-top rounded-full"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="space-y-3"
        >
          <p className="text-sm font-medium tracking-[0.4em] text-blue-400 uppercase">Hello, I am</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight">
            Arya Kompalwar
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light">
            Software Developer &amp; <span className="text-white font-medium">Web Developer</span>
          </h2>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-row flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="px-7 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1 text-sm md:text-base">
            View Projects
          </a>
          <a href="#contact" className="px-7 py-3 bg-white/5 backdrop-blur-md font-semibold rounded-full hover:bg-white/10 transition-colors duration-300 transform hover:-translate-y-1 text-sm md:text-base border border-white/10">
            Contact Me
          </a>
          <a
            href={`${import.meta.env.BASE_URL}My_Resume (4).pdf`}
            download="Arya_Kompalwar_Resume.pdf"
            className="px-7 py-3 border border-blue-500/50 text-blue-400 font-semibold rounded-full hover:bg-blue-500/10 transition-colors duration-300 transform hover:-translate-y-1 text-sm md:text-base"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — sits at bottom of the min-h-screen section, separated from content by pb-32 above */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.6em] uppercase text-white/50 font-light">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-[2px] h-10 rounded-full bg-gradient-to-b from-blue-400 via-blue-500/40 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.6)]"
        />
      </motion.div>
    </section>
  );
}
