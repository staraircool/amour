"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ModelOneSection() {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  // Parallax for the images
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={container} className="relative w-full min-h-[150vh] bg-[#FFF0F5] text-[#334155] py-32 overflow-hidden flex items-center">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#E0F2FE]/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Typography & Image 1 */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center h-full gap-16 md:gap-32">
          
          <div className="max-w-md">
            <span className="text-[10px] uppercase tracking-[0.4em] text-pink-400 font-bold mb-6 block">Collection 01</span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-[1.1] text-[#0F172A] mb-8">
              Ethereal <br />
              <span className="italic font-serif text-pink-300">Beauty</span>
            </h2>
            <p className="text-[#475569] leading-relaxed font-medium">
              Soft volumes and effortless texture. Our signature look combines natural movement with precise, structural cutting techniques to create something truly transcendent.
            </p>
          </div>

          <motion.div style={{ y: y1 }} className="w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-white/60">
            <img src="/model-one1.jpg" alt="Model One" className="w-full h-full object-cover" />
          </motion.div>
          
        </div>

        {/* Right Side: Images 2 and 3 */}
        <div className="w-full md:w-1/2 flex flex-col items-end gap-16 md:gap-24 relative mt-20 md:mt-0">
          
          <motion.div style={{ y: y2 }} className="w-[80%] md:w-[70%] aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-white/60 relative z-10">
            <img src="/model-one2.jpg" alt="Model One" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div style={{ y: y3 }} className="w-[60%] md:w-[50%] aspect-square rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-white/60 relative z-20 -mt-32 md:-mt-48 mr-10 md:mr-20">
            <img src="/model-one3.jpg" alt="Model One" className="w-full h-full object-cover" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
