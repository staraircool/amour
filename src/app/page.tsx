"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingSection from "@/components/BookingSection";
import ModelOneSection from "@/components/ModelOneSection";
import ModelTwoSection from "@/components/ModelTwoSection";
import ModelThreeSection from "@/components/ModelThreeSection";
import PricingSection from "@/components/PricingSection";
import InstagramSection from "@/components/InstagramSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

// A wrapper to track which section is currently active
const SectionTracker = ({ id, setActiveSection, children, amount = 0.2 }: { id: string, setActiveSection: (id: string) => void, children: React.ReactNode, amount?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount }); 
  
  useEffect(() => {
    if (isInView) {
      setActiveSection(id);
    }
  }, [isInView, id, setActiveSection]);

  return <div ref={ref} className="w-full relative">{children}</div>;
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Determine if on mobile device for specific chair scaling/positioning
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile(); // initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Define exact "docking" states for the chair for each section
  const chairVariants = isMobile ? {
    hero: { scale: 0.8, x: "0vw", y: "25vh", rotate: 0, opacity: 1 },
    booking: { scale: 0.6, x: "0vw", y: "-10vh", rotate: -5, opacity: 0 },
    model1: { scale: 0.7, x: "0vw", y: "-5vh", rotate: -5, opacity: 1 },
    model2: { scale: 0.5, x: "0vw", y: "15vh", rotate: 10, opacity: 1 },
    model3: { scale: 0.6, x: "0vw", y: "-5vh", rotate: -10, opacity: 1 },
    pricing: { scale: 0.4, x: "0vw", y: "15vh", rotate: 15, opacity: 0 },
    instagram: { scale: 0.4, x: "0vw", y: "-10vh", rotate: -15, opacity: 1 },
    location: { scale: 0.4, x: "0vw", y: "10vh", rotate: 5, opacity: 1 },
    footer: { scale: 0.8, x: "0vw", y: "15vh", rotate: 0, opacity: 0 } 
  } : {

    hero: { scale: 1, x: "0vw", y: "20vh", rotate: 0, opacity: 1 },
    booking: { scale: 0.7, x: "-25vw", y: "0vh", rotate: -5, opacity: 0 },
    model1: { scale: 0.8, x: "0vw", y: "5vh", rotate: -5, opacity: 1 },
    model2: { scale: 0.6, x: "25vw", y: "-5vh", rotate: 10, opacity: 1 },
    model3: { scale: 0.8, x: "-25vw", y: "5vh", rotate: -10, opacity: 1 },
    pricing: { scale: 0.5, x: "30vw", y: "0vh", rotate: 15, opacity: 0 },
    instagram: { scale: 0.5, x: "-30vw", y: "0vh", rotate: -15, opacity: 1 },
    location: { scale: 0.5, x: "30vw", y: "0vh", rotate: 5, opacity: 1 },
    footer: { scale: 1, x: "0vw", y: "0vh", rotate: 0, opacity: 1 }
  };

  return (
    <>
      <Header />
      <main className="w-full bg-[#FAFAFA] relative">
      
      {/* GLOBAL FLOATING CHAIR (SPRING DOCKING SYSTEM) */}
      <motion.div 
        className="fixed inset-0 z-[50] flex justify-center items-end pb-[28vh] md:pb-[25vh] pointer-events-none"
        animate={activeSection}
        variants={chairVariants}
        transition={{ 
          type: "spring", 
          stiffness: 40, 
          damping: 20, 
          mass: 1.5 
        }}
      >
        <img
          src="/chair.png"
          alt="Amour Salon Chair"
          className="h-[45vh] md:h-[60vh] w-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.15)]"
        />
      </motion.div>

      {/* SECTIONS */}
      <div className="relative z-10 bg-white">
        <SectionTracker id="hero" setActiveSection={setActiveSection}>
          <Hero />
        </SectionTracker>

        <SectionTracker id="booking" setActiveSection={setActiveSection} amount={0.3}>
          <BookingSection />
        </SectionTracker>

        <SectionTracker id="model1" setActiveSection={setActiveSection}>
          <ModelOneSection />
        </SectionTracker>

        <SectionTracker id="model2" setActiveSection={setActiveSection}>
          <ModelTwoSection />
        </SectionTracker>

        <SectionTracker id="model3" setActiveSection={setActiveSection}>
          <ModelThreeSection />
        </SectionTracker>

        <SectionTracker id="pricing" setActiveSection={setActiveSection}>
          <PricingSection />
        </SectionTracker>

        <SectionTracker id="instagram" setActiveSection={setActiveSection}>
          <InstagramSection />
        </SectionTracker>

        <SectionTracker id="location" setActiveSection={setActiveSection}>
          <LocationSection />
        </SectionTracker>
      </div>

      {/* CURTAIN REVEAL FOOTER */}
      <div className="relative h-auto md:h-[60vh] pointer-events-none">
        <SectionTracker id="footer" setActiveSection={setActiveSection} amount={0.1}>
          <div className="relative md:fixed bottom-0 left-0 w-full z-0 flex flex-col justify-end min-h-screen md:h-screen pointer-events-auto clip-path-footer-md">
            <Footer />
          </div>
        </SectionTracker>
      </div>
    </main>
    </>
  );
}
