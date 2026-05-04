"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GallerySection() {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  // Parallax speeds for different columns
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -600]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section ref={container} className="relative w-full bg-[#040609] text-white py-32 overflow-hidden flex justify-center items-center">
      
      {/* Background glow to add depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#87CEEB]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-40 flex flex-col items-center text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-medium mb-6">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">
            Our <span className="italic font-serif text-gray-300">Masterpieces</span>
          </h2>
        </div>

        {/* Parallax Grid */}
        <div className="flex flex-row justify-center gap-4 md:gap-8 h-[120vh] overflow-hidden">
          
          {/* Column 1 (Slightly slower) */}
          <motion.div style={{ y: y1 }} className="flex flex-col gap-4 md:gap-8 w-1/3 mt-24">
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
              <img src="/model-one1.jpg" alt="Model" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
              <img src="/model-two1.jpg" alt="Model" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </motion.div>

          {/* Column 2 (Fastest, moves up aggressively) */}
          <motion.div style={{ y: y2 }} className="flex flex-col gap-4 md:gap-8 w-1/3 -mt-32">
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
              <img src="/model-three1.jpg" alt="Model" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
              <img src="/model-one2.jpg" alt="Model" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
              <img src="/model-two2.jpg" alt="Model" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </motion.div>

          {/* Column 3 (Slow, standard) */}
          <motion.div style={{ y: y3 }} className="flex flex-col gap-4 md:gap-8 w-1/3 mt-48">
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
              <img src="/model-three2.jpg" alt="Model" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
              <img src="/model-one3.jpg" alt="Model" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
