"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PhilosophySection() {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-1000, 0]);

  return (
    <section ref={container} className="relative w-full h-[150vh] bg-white text-[#0F172A] overflow-hidden">
      
      {/* Sticky container to hold the content while scrolling through the 150vh */}
      <div className="sticky top-0 w-full h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="flex flex-col gap-8 md:gap-16 items-center justify-center relative z-10 w-full">
          
          <motion.div style={{ x: x1 }} className="whitespace-nowrap flex">
            <h2 className="text-[15vw] md:text-[12vw] leading-none font-light tracking-tighter uppercase pr-10">
              The Art of <span className="font-serif italic text-gray-300">Styling</span>
            </h2>
            <h2 className="text-[15vw] md:text-[12vw] leading-none font-light tracking-tighter uppercase pr-10">
              The Art of <span className="font-serif italic text-gray-300">Styling</span>
            </h2>
          </motion.div>

          <motion.div style={{ x: x2 }} className="whitespace-nowrap flex">
            <h2 className="text-[15vw] md:text-[12vw] leading-none font-light tracking-tighter uppercase pr-10 text-gray-200">
              <span className="font-serif italic text-[#0F172A]">Masterful</span> Technique
            </h2>
            <h2 className="text-[15vw] md:text-[12vw] leading-none font-light tracking-tighter uppercase pr-10 text-gray-200">
              <span className="font-serif italic text-[#0F172A]">Masterful</span> Technique
            </h2>
          </motion.div>

        </div>

        {/* Minimalist central text box that overlays the giant scrolling text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[400px] bg-white/80 backdrop-blur-xl p-8 border border-gray-100 shadow-2xl z-20">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-gray-400 mb-6">Our Philosophy</p>
          <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700">
            We believe that hair is the ultimate expression of your personal aesthetic. 
            Our approach combines avant-garde techniques with timeless elegance, 
            ensuring every client leaves with a masterpiece.
          </p>
          <div className="mt-8 w-12 h-[1px] bg-black"></div>
        </div>
      </div>

    </section>
  );
}
