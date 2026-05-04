"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const paragraph = "At Amour, we believe that true beauty is born from an interplay of geometry, texture, and light. It is not just about the cut; it is an architectural approach to your identity. We sculpt silhouettes that frame your features, mixing avant-garde techniques with timeless elegance to reveal the masterpiece within.";

const words = paragraph.split(" ");

export default function PhilosophySection() {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={container} className="w-full min-h-[150vh] bg-white flex items-center justify-center py-32 relative overflow-hidden">
      
      {/* Soft Background Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-pink-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-20 z-10 max-w-7xl">
        <div className="flex flex-col gap-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] text-pink-400 font-bold"
          >
            The Philosophy
          </motion.span>
          
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-light leading-[1.2] tracking-tight text-[#0F172A] flex flex-wrap gap-x-3 md:gap-x-5 gap-y-2">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + (1 / words.length);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
              
              // Highlight specific words
              const isHighlight = ["geometry,", "texture,", "light.", "architectural", "avant-garde", "elegance", "masterpiece"].includes(word.toLowerCase());
              
              return (
                <motion.span 
                  key={i} 
                  style={{ opacity }}
                  className={isHighlight ? "font-serif italic text-blue-400" : ""}
                >
                  {word}
                </motion.span>
              );
            })}
          </h2>
        </div>
      </div>
    </section>
  );
}
