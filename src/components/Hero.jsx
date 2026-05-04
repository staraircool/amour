"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#A3B1AA] overflow-hidden flex flex-col justify-between">
      {/* Background Center Image with edge fading */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <div 
          className="relative w-full max-w-4xl h-full"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
          }}
        >
          <img
            src="https://varpec.sfo3.cdn.digitaloceanspaces.com/amour/center.png"
            alt="Amour Model"
            className="w-full h-full object-cover opacity-90 blur-[2px]"
          />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full px-8 py-6 flex justify-between items-center">
        <div className="flex-1"></div> {/* Spacer to center the logo */}
        
        {/* Center Logo */}
        <div className="flex flex-col items-center justify-center flex-1">
          <h1 className="text-4xl tracking-widest font-light text-black lowercase">
            a m o u r
          </h1>
          <p className="text-[10px] tracking-widest text-gray-700 mt-1 uppercase">
            hair salon & styling
          </p>
        </div>

        {/* Right Icon */}
        <div className="flex-1 flex justify-end">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="black" strokeWidth="1.5" className="opacity-80">
            <path d="M0 10 Q 10 0, 20 10 T 40 10" />
            <path d="M0 15 Q 10 5, 20 15 T 40 15" />
          </svg>
        </div>
      </header>

      {/* Middle Content: Typography & Videos */}
      <div className="relative z-10 flex-1 w-full h-full pointer-events-none">
        
        {/* Center Typography */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 md:pb-32">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-black text-center leading-[1.1]">
            Beautiful hair? <br />
            It is easy and <br />
            wonderfull!
          </h2>
          <p className="text-gray-700 mt-6 tracking-wide text-sm font-light">
            36B Lê Thị Riêng phường Bến Thành Quận 1, Ho Chi Minh City
          </p>
        </div>

        {/* Left Video Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-[10%] left-[2%] md:left-[5%] w-48 md:w-72 aspect-square rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl pointer-events-auto group border-4 border-white/10"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-[1.02]"
            src="https://varpec.sfo3.cdn.digitaloceanspaces.com/amour/hero-video1.mp4"
          />
          {/* Arrow Button */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-black transition-colors">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </motion.div>

        {/* Right Video Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="absolute top-[25%] md:top-[35%] right-[2%] md:right-[5%] w-40 md:w-64 aspect-[3/4] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl pointer-events-auto group border-4 border-white/10"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-[1.02]"
            src="https://varpec.sfo3.cdn.digitaloceanspaces.com/amour/hero-video2.mp4"
          />
          {/* Heart Button */}
          <div className="absolute bottom-4 left-4 w-10 h-10 md:w-12 md:h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-black transition-colors">
            <Heart className="w-5 h-5 text-white" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Left CTA */}
      <div className="absolute bottom-12 left-6 md:left-10 z-20 flex flex-col items-start gap-4">
        <p className="text-black text-sm font-medium w-40 md:w-48 leading-snug">
          Would you like to schedule an appointment?
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          book online
        </button>
      </div>

      {/* Marquee (Subtle at the very bottom) */}
      <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap bg-black/5 py-1 z-20 border-t border-black/10">
        <motion.div 
          className="flex gap-10 items-center text-[10px] uppercase tracking-[0.3em] text-gray-800 font-medium"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {Array(10).fill("AMOUR HAIR SALON • LUXURY STYLING • EXPERT COLORING • ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
