"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#A3B1AA] overflow-hidden flex flex-col justify-between">
      
      {/* 1. Background Center Image with edge fading */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <div 
          className="relative w-full max-w-4xl h-full"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
          }}
        >
          <img
            src="/center.png"
            alt="Amour Model"
            className="w-full h-full object-cover opacity-90 blur-[1px]"
          />
        </div>
      </div>

      {/* 2. Smoke / Mist Atmospheric Effects (Behind text and videos) */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vh] bg-white/20 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vh] bg-[#758B80]/40 blur-[120px] rounded-full"
        />
      </div>

      {/* 3. Header */}
      <header className="relative z-20 w-full px-8 py-6 flex justify-between items-center">
        <div className="flex-1"></div>
        <div className="flex flex-col items-center justify-center flex-1">
          <h1 className="text-4xl tracking-widest font-light text-black lowercase">
            a m o u r
          </h1>
          <p className="text-[10px] tracking-widest text-gray-700 mt-1 uppercase">
            hair salon & styling
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="black" strokeWidth="1.5" className="opacity-80">
            <path d="M0 10 Q 10 0, 20 10 T 40 10" />
            <path d="M0 15 Q 10 5, 20 15 T 40 15" />
          </svg>
        </div>
      </header>

      {/* 4. Middle Content: Typography & Designer Videos */}
      <div className="relative z-20 flex-1 w-full h-full pointer-events-none">
        
        {/* Center Typography */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 md:pb-32">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-black text-center leading-tight">
            Artistry in <br />
            <span className="font-medium italic text-white/90 drop-shadow-sm">every strand.</span>
          </h2>
          <p className="text-black/80 mt-6 tracking-wide text-sm font-light max-w-sm text-center">
            Experience the pinnacle of luxury hair styling and coloring, tailored exclusively to you.
          </p>
        </div>

        {/* Left Video Card: Asymmetrical Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-[12%] left-[2%] md:left-[8%] w-48 md:w-72 aspect-square pointer-events-auto group"
        >
          {/* Glass background wrapper */}
          <div className="w-full h-full p-2 bg-white/10 backdrop-blur-xl rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-[1.5rem] rounded-br-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/30">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-xl rounded-br-xl"
              src="/hero-video1.mp4"
            />
          </div>
          {/* Arrow Button */}
          <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 border border-white/50 transition-all shadow-lg">
            <ArrowUpRight className="w-5 h-5 text-black" />
          </div>
        </motion.div>

        {/* Right Video Card: Editorial Offset Border */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="absolute top-[25%] md:top-[30%] right-[2%] md:right-[8%] w-40 md:w-64 aspect-[3/4] pointer-events-auto group"
        >
          {/* Offset decorative border */}
          <div className="absolute -inset-3 border border-white/40 rounded-[2rem] transform translate-x-3 translate-y-3 z-0 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
          
          <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/hero-video2.mp4"
            />
            {/* Heart Button */}
            <div className="absolute bottom-4 left-4 w-10 h-10 md:w-12 md:h-12 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-black/60 transition-colors border border-white/20">
              <Heart className="w-5 h-5 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 5. Bottom Left CTA */}
      <div className="absolute bottom-12 left-6 md:left-10 z-30 flex flex-col items-start gap-4">
        <p className="text-black text-sm font-medium w-40 md:w-48 leading-snug">
          Would you like to schedule an appointment?
        </p>
        <button className="bg-black/90 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors shadow-xl">
          book online
        </button>
      </div>

      {/* 6. Marquee */}
      <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap bg-black/5 backdrop-blur-sm py-1.5 z-30 border-t border-black/5">
        <motion.div 
          className="flex gap-10 items-center text-[10px] uppercase tracking-[0.3em] text-black/60 font-medium"
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
