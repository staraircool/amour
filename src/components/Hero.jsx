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

      {/* DESIGNER TOUCH 1: Volumetric God Rays */}
      <div className="absolute top-0 left-0 w-full h-[80vh] z-[1] pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[100vw] h-[100vh] bg-gradient-to-br from-white/60 via-white/10 to-transparent transform -rotate-12 blur-[60px]"
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -top-[10%] left-[20%] w-[60vw] h-[100vh] bg-gradient-to-br from-white/40 via-white/5 to-transparent transform -rotate-45 blur-[80px]"
        />
      </div>

      {/* DESIGNER TOUCH 2: Floating Ethereal Bokeh Dust */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -300, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.5, 0],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: 15 + i * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
            className="absolute bg-white rounded-full blur-[8px]"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              left: `${10 + Math.random() * 80}%`,
              top: `${40 + Math.random() * 40}%`,
            }}
          />
        ))}
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

      {/* 3. The Chair (Centerpiece, sitting in the sky) */}
      <motion.div 
        id="hero-chair"
        className="absolute inset-0 z-[5] flex justify-center items-end pb-[28vh] md:pb-[25vh] pointer-events-none"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/chair.png"
          alt="Amour Salon Chair"
          className="h-[45vh] md:h-[60vh] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
        />
      </motion.div>

      {/* 4. Real Cloud Image (Static, No Filters) */}
      <div className="absolute bottom-0 left-0 right-0 z-[10] pointer-events-none flex items-end">
        <img 
          src="/cloud.png" 
          alt="Clouds" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* 5. Center Typography (Placed perfectly ON the smoke below the chair) */}
      <div className="absolute bottom-[10%] md:bottom-[12%] inset-x-0 flex flex-col items-center justify-start z-20 pointer-events-none">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#0F172A] text-center leading-[1.1] drop-shadow-[0_2px_15px_rgba(255,255,255,1)]">
          Elevate your <br />
          <span className="font-medium italic text-[#0F172A]/80 drop-shadow-sm">aesthetic.</span>
        </h2>
        <p className="text-[#334155] mt-4 tracking-wide text-sm font-medium max-w-sm text-center drop-shadow-[0_2px_10px_rgba(255,255,255,1)]">
          Experience a new level of styling.
        </p>
      </div>

      {/* 6. Middle Content: Video Cards (Airy/Cloud Aesthetic) */}
      <div className="absolute inset-0 z-20 flex-1 w-full h-full pointer-events-none">
        
        {/* Left Video Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-[30%] md:top-[40%] left-[2%] md:left-[8%] w-40 md:w-64 aspect-square pointer-events-auto group"
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
          <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white border border-white transition-all shadow-lg group-hover:scale-110">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#0F172A]" />
          </div>
        </motion.div>

        {/* Right Video Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="absolute top-[15%] md:top-[20%] right-[2%] md:right-[8%] w-32 md:w-56 aspect-[3/4] pointer-events-auto group"
        >
          <div className="absolute -inset-3 border border-white/60 rounded-[2rem] transform translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 z-0 transition-transform group-hover:translate-x-3 group-hover:translate-y-3 md:group-hover:translate-x-5 md:group-hover:translate-y-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"></div>
          <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/40">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/hero-video2.mp4"
            />
            <div className="absolute bottom-4 left-4 w-8 h-8 md:w-12 md:h-12 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors border border-white shadow-lg group-hover:scale-110">
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-[#0F172A]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 7. Bottom Left CTA */}
      <div className="absolute bottom-[20%] md:bottom-24 left-4 md:left-10 z-30 flex flex-col items-start gap-4">
        <p className="text-[#0F172A] text-sm font-medium w-32 md:w-48 leading-snug drop-shadow-sm">
          Ready to elevate your style?
        </p>
        <button className="bg-white/90 backdrop-blur-md text-[#0F172A] border border-white px-6 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-semibold hover:bg-white transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:scale-105">
          book your chair
        </button>
      </div>

      {/* DESIGNER TOUCH 3: Minimalist Scroll Indicator */}
      <div className="absolute bottom-16 right-8 md:right-12 z-30 hidden md:flex flex-col items-center gap-12 pointer-events-none opacity-80">
        <span className="text-[9px] uppercase tracking-[0.4em] text-[#0F172A] font-bold rotate-90 origin-center translate-y-4">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-[#0F172A]/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-[#0F172A]"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* 8. Marquee */}
      <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap bg-white/60 backdrop-blur-md py-1.5 z-30 border-t border-white/80">
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
