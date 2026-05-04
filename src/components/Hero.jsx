"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Marquee = ({ text }) => {
  return (
    <div className="relative w-full overflow-hidden flex whitespace-nowrap opacity-50 py-4 border-y border-white/10 my-8">
      <motion.div
        className="flex space-x-10 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {[...Array(8)].map((_, i) => (
          <span key={i} className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white shrink-0">
            {text} <span className="mx-4 text-white/30">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#070707] text-white overflow-hidden flex flex-col justify-center items-center pt-24 md:pt-0">
      
      {/* Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pt-10">
        
        {/* Main Title Top */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center z-20 mb-[-3rem] md:mb-[-6rem]"
        >
          <h1 className="text-[18vw] md:text-[14vw] font-black uppercase tracking-tighter leading-none mix-blend-difference text-white">
            AMOUR
          </h1>
        </motion.div>

        {/* Center Gallery Area */}
        <div className="relative w-full max-w-[1400px] mx-auto flex items-center justify-center h-[45vh] md:h-[60vh] mt-4 md:mt-10 px-4">
          
          {/* Left Video */}
          <motion.div 
            initial={{ opacity: 0, x: -60, y: 40, rotate: -6 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -3 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-2 md:left-[10%] top-[10%] md:top-[15%] w-[130px] md:w-[260px] aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 border border-white/10"
          >
            <video 
              src="https://varpec.sfo3.cdn.digitaloceanspaces.com/amour/hero-video1.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Center Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[220px] md:w-[380px] aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-20 border border-white/20 bg-zinc-900"
          >
            <Image 
              src="/assets/images/center.png" 
              alt="Amour Salon Style" 
              fill 
              className="object-cover"
              priority
            />
            {/* Gradient overlay to add depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
          </motion.div>

          {/* Right Video */}
          <motion.div 
            initial={{ opacity: 0, x: 60, y: -40, rotate: 6 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 3 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-2 md:right-[10%] bottom-[10%] md:bottom-[15%] w-[140px] md:w-[280px] aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 border border-white/10"
          >
            <video 
              src="https://varpec.sfo3.cdn.digitaloceanspaces.com/amour/hero-video2.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Main Title Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center z-20 mt-[-2rem] md:mt-[-5rem]"
        >
          <h1 className="text-[14vw] md:text-[10vw] font-black uppercase tracking-tight leading-none text-white/90 drop-shadow-lg">
            HAIR SALON
          </h1>
        </motion.div>

        {/* Marquee */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full mt-10 md:mt-16 z-30"
        >
          <Marquee text="BEAUTIFUL HAIR IS EASY AND WONDERFUL" />
        </motion.div>

      </div>
    </section>
  );
}
