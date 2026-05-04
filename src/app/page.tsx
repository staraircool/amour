"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Chair Animations bound to global scroll
  // Hero (0-0.2) -> Philosophy (0.2-0.6) -> Gallery (0.6+)
  
  // Scale down the chair as user scrolls to Philosophy
  const chairScale = useTransform(scrollYProgress, [0, 0.1, 0.3], [1, 1, 0.6]);
  
  // Move the chair to the right side of the screen in Philosophy
  const chairX = useTransform(scrollYProgress, [0, 0.1, 0.3], ["0vw", "0vw", "20vw"]);
  
  // Move the chair slightly up
  const chairY = useTransform(scrollYProgress, [0, 0.1, 0.3], ["0vh", "0vh", "-15vh"]);

  // Fade out the chair when hitting the gallery section
  const chairOpacity = useTransform(scrollYProgress, [0.4, 0.5], [1, 0]);

  // Subtle rotation for a 3D float effect
  const chairRotate = useTransform(scrollYProgress, [0, 0.3], [0, 10]);

  return (
    <main className="w-full bg-[#040609] relative">
      
      {/* GLOBAL FLOATING CHAIR */}
      <motion.div 
        className="fixed inset-0 z-[50] flex justify-center items-end pb-[28vh] md:pb-[25vh] pointer-events-none"
        style={{ 
          scale: chairScale, 
          x: chairX, 
          y: chairY, 
          opacity: chairOpacity,
          rotate: chairRotate
        }}
      >
        <img
          src="/chair.png"
          alt="Amour Salon Chair Parallax"
          className="h-[45vh] md:h-[60vh] w-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
        />
      </motion.div>

      {/* SECTIONS */}
      <div className="relative z-10 bg-white">
        <Hero />
        <PhilosophySection />
        <GallerySection />
      </div>

      {/* CURTAIN REVEAL FOOTER */}
      {/* Footer stays sticky at the bottom, and the z-10 div above scrolls over it, revealing it like a curtain */}
      <div className="relative h-[80vh] md:h-[60vh] clip-path-footer">
        <div className="fixed bottom-0 left-0 w-full z-0 flex flex-col justify-end h-screen">
          <Footer />
        </div>
      </div>

    </main>
  );
}
