"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ModelTwoSection() {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  // Parallax spreads the images outwards from the center as you scroll down
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [300, -100]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={container} className="relative w-full min-h-[150vh] bg-[#F0F9FF] text-[#0F172A] py-32 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[#E0F2FE]/50 rounded-full blur-[120px] pointer-events-none" />

      {/* Typography Header */}
      <div className="text-center z-30 mb-32 relative">
        <span className="text-[10px] uppercase tracking-[0.4em] text-blue-400 font-bold mb-6 block drop-shadow-sm">Collection 02</span>
        <h2 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.9] text-[#0F172A] drop-shadow-md">
          Modern <br />
          <span className="italic font-serif text-blue-300">Fluidity</span>
        </h2>
      </div>

      {/* Central Interactive Grid */}
      <div className="relative w-full max-w-5xl mx-auto h-[80vh] flex items-center justify-center">
        
        {/* Left Image (Moves Left & Up) */}
        <motion.div 
          style={{ y: y1, x: x1 }} 
          className="absolute left-[5%] md:left-[10%] top-[10%] w-[50%] md:w-[35%] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-white/80 z-10"
        >
          <img src="/model-two1.jpg" alt="Model Two" className="w-full h-full object-cover" />
        </motion.div>

        {/* Center Image (Large, Static/Slow) */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="relative w-[60%] md:w-[45%] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)] border-2 border-white z-20"
        >
          <img src="/model-two2.jpg" alt="Model Two" className="w-full h-full object-cover" />
        </motion.div>

        {/* Right Image (Moves Right & Down) */}
        <motion.div 
          style={{ y: y2, x: x2 }} 
          className="absolute right-[5%] md:right-[10%] bottom-[10%] w-[45%] md:w-[30%] aspect-square rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-white/80 z-30"
        >
          <img src="/model-two3.jpg" alt="Model Two" className="w-full h-full object-cover" />
        </motion.div>

      </div>

    </section>
  );
}
