"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ModelThreeSection() {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -500]);

  return (
    <section ref={container} className="relative w-full min-h-[150vh] bg-white text-[#0F172A] py-32 overflow-hidden flex items-center">
      
      <div className="container mx-auto px-4 md:px-12 relative z-10 w-full h-full flex flex-col justify-center">
        
        {/* Header (Left Aligned) */}
        <div className="w-full md:w-1/2 mb-20 md:mb-32">
          <span className="text-[10px] uppercase tracking-[0.4em] text-pink-400 font-bold mb-6 block">Collection 03</span>
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-[1.1] text-[#0F172A]">
            Timeless <br />
            <span className="italic font-serif text-blue-300">Elegance</span>
          </h2>
        </div>

        {/* Art Gallery Wall Layout */}
        <div className="flex flex-row items-center justify-between gap-4 md:gap-10 w-full h-[80vh]">
          
          <motion.div style={{ y: y1 }} className="w-1/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
            <img src="/model-three1.jpg" alt="Model Three" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div style={{ y: y2 }} className="w-1/3 aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-gray-100 scale-110 z-10">
            <img src="/model-three2.jpg" alt="Model Three" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div style={{ y: y3 }} className="w-1/3 aspect-square rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
            <img src="/model-three3.jpg" alt="Model Three" className="w-full h-full object-cover" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
