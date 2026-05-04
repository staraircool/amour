"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#FDFBF7] overflow-hidden flex flex-col justify-between">
      
      {/* 1. Light Golden Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFF8ED] via-[#F3E5D0] to-[#DBC4A5] opacity-100 z-0"></div>

      {/* Designer Addition 1: Giant Minimalist Arch/Rings in Background for luxury structure */}
      <div className="absolute inset-0 z-[1] flex justify-center items-center pointer-events-none overflow-hidden opacity-30">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] border-[1px] border-[#A8906D] rounded-full absolute"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] border-[1px] border-dashed border-[#A8906D] rounded-full absolute"
        />
      </div>

      {/* Designer Addition 2: Floating Ambient Golden Dust/Sparkles instead of heavy smoke */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 0.6, 0],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
            className="absolute bg-white rounded-full blur-[2px]"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${10 + Math.random() * 80}%`,
              top: `${40 + Math.random() * 40}%`,
            }}
          />
        ))}
      </div>

      {/* 2. The Chair (Centerpiece, set up with an ID for future scroll animations) */}
      <motion.div 
        id="hero-chair"
        className="absolute inset-0 z-[5] flex justify-center items-end pb-10 md:items-center md:pb-0 pointer-events-none"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/chair.png"
          alt="Amour Salon Chair"
          className="h-[60vh] md:h-[80vh] w-auto object-contain drop-shadow-[0_40px_40px_rgba(44,36,27,0.2)]"
        />
      </motion.div>

      {/* 3. Header (Deep Espresso Colors to match the gold) */}
      <header className="relative z-20 w-full px-8 py-6 flex justify-between items-center text-[#2C241B]">
        <div className="flex-1"></div>
        <div className="flex flex-col items-center justify-center flex-1">
          <h1 className="text-4xl tracking-widest font-light lowercase">
            a m o u r
          </h1>
          <p className="text-[10px] tracking-widest opacity-70 mt-1 uppercase">
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

      {/* 4. Middle Content: Typography & Designer Videos */}
      <div className="relative z-20 flex-1 w-full h-full pointer-events-none">
        
        {/* Center Typography (Designer Addition 3: Deep Espresso text with Gold accents) */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-32 md:pb-40">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#2C241B] text-center leading-[1.1] z-10 mix-blend-multiply">
            The seat of <br />
            <span className="font-medium italic text-[#A8906D]">transformation.</span>
          </h2>
          <p className="text-[#2C241B]/80 mt-6 tracking-wide text-sm font-light max-w-sm text-center">
            Where masterful technique meets unparalleled luxury. Take your seat.
          </p>
        </div>

        {/* Left Video Card: Asymmetrical Gold-tinted Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-[12%] left-[2%] md:left-[8%] w-48 md:w-72 aspect-square pointer-events-auto group"
        >
          <div className="w-full h-full p-2 bg-[#FFF8ED]/40 backdrop-blur-xl rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-[1.5rem] rounded-br-[1.5rem] shadow-[0_20px_50px_rgba(168,144,109,0.15)] border border-[#A8906D]/30">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-xl rounded-br-xl"
              src="/hero-video1.mp4"
            />
          </div>
          <div className="absolute top-6 right-6 w-10 h-10 bg-[#FFF8ED]/80 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white border border-[#A8906D]/50 transition-all shadow-lg">
            <ArrowUpRight className="w-5 h-5 text-[#2C241B]" />
          </div>
        </motion.div>

        {/* Right Video Card: Editorial Offset Border */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="absolute top-[25%] md:top-[30%] right-[2%] md:right-[8%] w-40 md:w-64 aspect-[3/4] pointer-events-auto group"
        >
          <div className="absolute -inset-3 border border-[#A8906D]/40 rounded-[2rem] transform translate-x-3 translate-y-3 z-0 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
          <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/hero-video2.mp4"
            />
            <div className="absolute bottom-4 left-4 w-10 h-10 md:w-12 md:h-12 bg-[#2C241B]/40 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-[#2C241B]/80 transition-colors border border-[#FFF8ED]/30">
              <Heart className="w-5 h-5 text-[#FFF8ED]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 5. Bottom Left CTA */}
      <div className="absolute bottom-12 left-6 md:left-10 z-30 flex flex-col items-start gap-4">
        <p className="text-[#2C241B] text-sm font-medium w-40 md:w-48 leading-snug">
          Would you like to schedule an appointment?
        </p>
        {/* Designer Addition 4: Deep Espresso CTA button */}
        <button className="bg-[#2C241B] text-[#FDFBF7] border border-[#A8906D]/30 px-8 py-3 rounded-full text-sm font-medium hover:bg-[#3D3326] transition-colors shadow-xl">
          take your seat
        </button>
      </div>

      {/* 6. Marquee */}
      <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap bg-[#A8906D]/10 backdrop-blur-sm py-1.5 z-30 border-t border-[#A8906D]/20">
        <motion.div 
          className="flex gap-10 items-center text-[10px] uppercase tracking-[0.3em] text-[#2C241B]/70 font-medium"
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
