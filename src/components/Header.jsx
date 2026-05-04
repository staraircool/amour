"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Menu, X } from "lucide-react";

export default function Header() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Attempt to autoplay on mount
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Soft background volume
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.log("Autoplay prevented by browser. User interaction required.");
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const navLinks = [
    { name: "Pricing", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} src="https://varpec.sfo3.cdn.digitaloceanspaces.com/amour/ReelAudio-85558.mp3" loop />

      {/* Desktop & Mobile Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-[100] px-4 md:px-12 py-6 flex justify-between items-center bg-gradient-to-b from-white/80 to-transparent mix-blend-normal pointer-events-none"
      >
        {/* Left: Brand */}
        <div className="flex-1 pointer-events-auto">
          <a href="#" className="text-2xl md:text-3xl font-light tracking-[0.2em] text-[#0F172A] uppercase hover:opacity-70 transition-opacity">
            AMOUR
          </a>
        </div>

        {/* Center: Navigation (Desktop) */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-10 pointer-events-auto">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-widest text-[#0F172A] hover:text-pink-400 transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-pink-300 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex-1 flex justify-end items-center gap-4 md:gap-8 pointer-events-auto">
          {/* Music Toggle */}
          <button 
            onClick={toggleMusic}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md hover:bg-white hover:border-pink-300 transition-all text-[#0F172A]"
            aria-label="Toggle Music"
          >
            {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Book Now Button (Desktop) */}
          <a href="#" className="hidden md:flex bg-[#0F172A] text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-pink-300 hover:text-[#0F172A] transition-colors shadow-lg">
            Book Now
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-gray-200 text-[#0F172A]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center pointer-events-auto"
          >
            <button 
              className="absolute top-8 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-[#0F172A]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-light tracking-widest uppercase text-[#0F172A]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#" 
                className="mt-8 bg-[#0F172A] text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
