"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Instagram } from "lucide-react";

// Using placeholder images for the Instagram feed
const igPhotos = [
  "/model-one1.jpg",
  "/model-one2.jpg",
  "/model-two1.jpg",
  "/model-two2.jpg",
  "/model-three1.jpg",
  "/model-three2.jpg",
  "/model-one1.jpg", // Repeat to ensure smooth infinite scroll
  "/model-two2.jpg",
];

export default function InstagramSection() {
  return (
    <section className="relative w-full py-32 bg-white overflow-hidden flex flex-col items-center">
      
      <div className="text-center mb-16 relative z-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.4em] text-blue-400 font-bold mb-6 block"
        >
          Social
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F172A]"
        >
          Join The <span className="italic font-serif text-pink-300">Community</span>
        </motion.h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden py-10">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-4 md:gap-8 px-4 w-[200vw] md:w-[150vw]"
        >
          {/* Double the array for seamless looping */}
          {[...igPhotos, ...igPhotos].map((src, i) => (
            <div key={i} className="relative w-[60vw] md:w-[20vw] aspect-[4/5] flex-shrink-0 rounded-2xl overflow-hidden group">
              <img src={src} alt={`Instagram ${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-8 h-8" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Center Overlay CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <a 
            href="https://www.instagram.com/hairsalon.amour/" 
            target="_blank" 
            rel="noreferrer"
            className="pointer-events-auto group flex flex-col items-center justify-center w-32 h-32 md:w-48 md:h-48 bg-white/80 backdrop-blur-md rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-white hover:bg-white transition-colors"
          >
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#0F172A] mb-2 flex items-center gap-1">
              @hairsalon.amour <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </span>
            <span className="text-[10px] text-[#64748B] uppercase tracking-widest">Follow Us</span>
          </a>
        </div>
      </div>

    </section>
  );
}
