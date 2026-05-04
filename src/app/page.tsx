"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import ModelOneSection from "@/components/ModelOneSection";
import ModelTwoSection from "@/components/ModelTwoSection";
import ModelThreeSection from "@/components/ModelThreeSection";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Chair Animations bound to global scroll
  // Hero -> Phil -> Model1 -> Model2 -> Model3 -> Footer
  const points = [0, 0.125, 0.31, 0.5, 0.68, 0.87, 1];
  
  const chairScale = useTransform(scrollYProgress, points, [1, 1, 0.6, 0.8, 0.6, 0.8, 1]);
  const chairX = useTransform(scrollYProgress, points, ["0vw", "0vw", "25vw", "-25vw", "25vw", "-25vw", "0vw"]);
  const chairY = useTransform(scrollYProgress, points, ["0vh", "0vh", "-10vh", "-5vh", "-10vh", "-5vh", "0vh"]);
  const chairRotate = useTransform(scrollYProgress, points, [0, 0, 10, -10, 10, -10, 0]);

  return (
    <main className="w-full bg-[#FAFAFA] relative">
      
      {/* GLOBAL FLOATING CHAIR */}
      <motion.div 
        className="fixed inset-0 z-[50] flex justify-center items-end pb-[28vh] md:pb-[25vh] pointer-events-none"
        style={{ 
          scale: chairScale, 
          x: chairX, 
          y: chairY, 
          rotate: chairRotate
        }}
      >
        <img
          src="/chair.png"
          alt="Amour Salon Chair Parallax"
          className="h-[45vh] md:h-[60vh] w-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.15)]"
        />
      </motion.div>

      {/* SECTIONS */}
      <div className="relative z-10 bg-white">
        <Hero />
        <PhilosophySection />
        <ModelOneSection />
        <ModelTwoSection />
        <ModelThreeSection />
      </div>

      {/* CURTAIN REVEAL FOOTER */}
      {/* Footer stays sticky at the bottom, and the z-10 div above scrolls over it, revealing it like a curtain */}
      <div className="relative h-[80vh] md:h-[60vh] clip-path-footer pointer-events-none">
        <div className="fixed bottom-0 left-0 w-full z-0 flex flex-col justify-end h-screen pointer-events-auto">
          <Footer />
        </div>
      </div>

    </main>
  );
}
