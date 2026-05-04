"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-between">
      
      {/* 1. Real Image Sky Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/sky.jpg" 
          alt="Beautiful Sky" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* 2. Header (Clean Dark Text for Sky Contrast) */}
      <header className="relative z-20 w-full px-8 py-6 flex justify-between items-center text-[#1E293B]">
        <div className="flex-1"></div>
        <div className="flex flex-col items-center justify-center flex-1">
          <h1 className="text-4xl tracking-widest font-light lowercase drop-shadow-sm">
            a m o u r
          </h1>
          <p className="text-[10px] tracking-widest opacity-70 mt-1 uppercase font-medium">
            hair salon & styling
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-80">
            <path d="M0 10 Q 10 0, 20 10 T 40 10" />
            <path d="M0 15 Q 10 5, 20 15 T 40 15" />
          </svg>
        </div>
      </header>

      {/* 3. Center Typography (Top, above the chair) */}
      <div className="absolute top-[18%] md:top-[15%] inset-x-0 flex flex-col items-center justify-start z-20 pointer-events-none">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#0F172A] text-center leading-[1.1] drop-shadow-sm">
          Elevate your <br />
          <span className="font-medium italic text-white drop-shadow-md">aesthetic.</span>
        </h2>
        <p className="text-[#334155] mt-4 tracking-wide text-sm font-medium max-w-sm text-center drop-shadow-sm">
          Step into the clouds and experience a new level of styling.
        </p>
      </div>

      {/* 4. The Chair (Centerpiece) */}
      <motion.div 
        id="hero-chair"
        className="absolute inset-0 z-[5] flex justify-center items-end pb-[15vh] md:items-center md:pb-[5vh] pointer-events-none"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/chair.png"
          alt="Amour Salon Chair"
          className="h-[55vh] md:h-[65vh] w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
        />
      </motion.div>

      {/* 5. Real Image Clouds covering the chair's legs */}
      <div className="absolute bottom-0 inset-x-0 z-[10] pointer-events-none flex flex-col justify-end overflow-hidden h-[50vh]">
        
        {/* Background cloud layer (slightly smaller, moves differently) */}
        <motion.div 
          animate={{ y: [0, 10, 0], scale: [1, 1.02, 1] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] md:bottom-[-20%] w-[120vw] left-[-10vw] opacity-80"
        >
          <img 
            src="/clouds.png" 
            alt="Clouds Background" 
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Foreground cloud layer (covers the legs prominently) */}
        <motion.div 
          animate={{ y: [0, -10, 0], scale: [1.02, 1, 1.02] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-5%] md:bottom-[-10%] w-[150vw] left-[-25vw]"
        >
          <img 
            src="/clouds.png" 
            alt="Clouds Foreground" 
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>

      {/* 6. Middle Content: Video Cards (Airy/Cloud Aesthetic) */}
      <div className="absolute inset-0 z-20 flex-1 w-full h-full pointer-events-none">
        
        {/* Left Video Card: Cloud Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-[30%] md:top-[40%] left-[2%] md:left-[8%] w-48 md:w-72 aspect-square pointer-events-auto group"
        >
          <div className="w-full h-full p-2 bg-white/40 backdrop-blur-xl rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-[1.5rem] rounded-br-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/60 group-hover:border-white transition-colors">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-xl rounded-br-xl"
              src="/hero-video1.mp4"
            />
          </div>
          <div className="absolute top-6 right-6 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white border border-white transition-all shadow-lg">
            <ArrowUpRight className="w-5 h-5 text-[#0F172A]" />
          </div>
        </motion.div>

        {/* Right Video Card: Soft Air Border */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="absolute top-[15%] md:top-[20%] right-[2%] md:right-[8%] w-40 md:w-64 aspect-[3/4] pointer-events-auto group"
        >
          <div className="absolute -inset-3 border border-white/60 rounded-[2rem] transform translate-x-3 translate-y-3 z-0 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"></div>
          <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/40">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/hero-video2.mp4"
            />
            <div className="absolute bottom-4 left-4 w-10 h-10 md:w-12 md:h-12 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors border border-white shadow-lg">
              <Heart className="w-5 h-5 text-[#0F172A]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 7. Bottom Left CTA (Placed high enough to be above the clouds) */}
      <div className="absolute bottom-16 left-6 md:left-10 z-30 flex flex-col items-start gap-4">
        <p className="text-[#0F172A] text-sm font-medium w-40 md:w-48 leading-snug drop-shadow-md">
          Ready to float on air?
        </p>
        <button className="bg-white/90 backdrop-blur-md text-[#0F172A] border border-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-white transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
          book your chair
        </button>
      </div>

      {/* 8. Marquee */}
      <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap bg-white/50 backdrop-blur-md py-1.5 z-30 border-t border-white/80">
        <motion.div 
          className="flex gap-10 items-center text-[10px] uppercase tracking-[0.3em] text-[#64748B] font-medium"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {Array(10).fill("AMOUR HAIR SALON • LUXURY STYLING • EXPERT COLORING • ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
