"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#0A0D14] overflow-hidden flex flex-col justify-between">
      
      {/* 1. Deep "Harry Potter" Magical Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#131B2B] via-[#0A0D14] to-[#040609] opacity-100 z-0"></div>

      {/* Deep Background Magical Smoke (Blue/Teal vibes) */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vh] bg-[#1E3A5F]/30 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] right-[10%] w-[40vw] h-[40vh] bg-[#3B284A]/20 blur-[100px] rounded-full"
        />
      </div>

      {/* Floating Magic Sparks (Golden) */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -300, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
            className="absolute bg-[#F5D061] rounded-full blur-[1px]"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${5 + Math.random() * 90}%`,
              top: `${50 + Math.random() * 50}%`,
              boxShadow: "0 0 10px 2px rgba(245, 208, 97, 0.6)",
            }}
          />
        ))}
      </div>

      {/* 2. The Chair */}
      <motion.div 
        id="hero-chair"
        className="absolute inset-0 z-[5] flex justify-center items-end pb-16 md:items-center md:pb-0 pointer-events-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/chair.png"
          alt="Amour Salon Chair"
          className="h-[55vh] md:h-[75vh] w-auto object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.8)]"
          style={{ filter: "drop-shadow(0 0 20px rgba(0,0,0,0.5))" }}
        />
      </motion.div>

      {/* 3. Golden Magic Smoke specifically behind the text to make it POP over the chair */}
      <div className="absolute inset-x-0 bottom-0 h-[60vh] z-[10] flex justify-center items-end pointer-events-none">
        <motion.div
          animate={{ opacity: [0.7, 0.9, 0.7], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[120vw] h-full bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/90 to-transparent blur-[40px]"
        />
        <motion.div
          animate={{ x: [-20, 20, -20], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 w-[80vw] h-[40vh] bg-[#F5D061]/20 blur-[100px] rounded-full"
        />
      </div>

      {/* 4. Header (Golden / White) */}
      <header className="relative z-20 w-full px-8 py-6 flex justify-between items-center text-[#F5D061]">
        <div className="flex-1"></div>
        <div className="flex flex-col items-center justify-center flex-1">
          <h1 className="text-4xl tracking-widest font-light lowercase text-[#F5D061]">
            a m o u r
          </h1>
          <p className="text-[10px] tracking-widest opacity-70 mt-1 uppercase text-[#F5D061]/80">
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

      {/* 5. Middle Content: Typography & Videos */}
      <div className="relative z-20 flex-1 w-full h-full pointer-events-none">
        
        {/* Center Typography (Glowing White/Gold) */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-32 md:pb-40">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white text-center leading-[1.1] z-10 drop-shadow-[0_0_15px_rgba(245,208,97,0.3)]">
            The magic of <br />
            <span className="font-medium italic text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#D4A017] drop-shadow-[0_0_20px_rgba(245,208,97,0.5)]">
              transformation.
            </span>
          </h2>
          <p className="text-white/80 mt-6 tracking-wide text-sm font-light max-w-sm text-center drop-shadow-md">
            Where masterful technique meets unparalleled luxury. Take your seat.
          </p>
        </div>

        {/* Left Video Card: Magical Glowing Frame */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-[12%] left-[2%] md:left-[8%] w-48 md:w-72 aspect-square pointer-events-auto group"
        >
          <div className="w-full h-full p-1.5 bg-[#F5D061]/5 backdrop-blur-md rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-[1.5rem] rounded-br-[1.5rem] shadow-[0_0_30px_rgba(245,208,97,0.15)] border border-[#F5D061]/30 group-hover:border-[#F5D061]/60 transition-colors">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-xl rounded-br-xl opacity-90"
              src="/hero-video1.mp4"
            />
          </div>
          <div className="absolute top-6 right-6 w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-black border border-[#F5D061]/50 transition-all shadow-[0_0_15px_rgba(245,208,97,0.4)]">
            <ArrowUpRight className="w-5 h-5 text-[#F5D061]" />
          </div>
        </motion.div>

        {/* Right Video Card: Hovering Portal Effect */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="absolute top-[25%] md:top-[30%] right-[2%] md:right-[8%] w-40 md:w-64 aspect-[3/4] pointer-events-auto group"
        >
          <div className="absolute -inset-3 border border-[#F5D061]/30 rounded-[2rem] transform translate-x-3 translate-y-3 z-0 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 shadow-[0_0_20px_rgba(245,208,97,0.1)]"></div>
          <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90"
              src="/hero-video2.mp4"
            />
            <div className="absolute bottom-4 left-4 w-10 h-10 md:w-12 md:h-12 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-black transition-colors border border-[#F5D061]/40 shadow-[0_0_15px_rgba(245,208,97,0.4)]">
              <Heart className="w-5 h-5 text-[#F5D061]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 6. Bottom Left CTA */}
      <div className="absolute bottom-12 left-6 md:left-10 z-30 flex flex-col items-start gap-4">
        <p className="text-white/90 text-sm font-medium w-40 md:w-48 leading-snug drop-shadow-md">
          Ready to experience the magic?
        </p>
        <button className="bg-gradient-to-r from-[#D4A017] to-[#F5D061] text-black border-none px-8 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(245,208,97,0.4)]">
          book your chair
        </button>
      </div>

      {/* 7. Marquee */}
      <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap bg-[#040609]/80 backdrop-blur-sm py-1.5 z-30 border-t border-[#F5D061]/10">
        <motion.div 
          className="flex gap-10 items-center text-[10px] uppercase tracking-[0.3em] text-[#F5D061]/60 font-medium"
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
