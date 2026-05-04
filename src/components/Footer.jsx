"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-12 mb-20 md:mb-32">
          
          <div className="flex-1">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Ready to Transform<br/>Your Look?
            </h2>
            <button className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors">
              Book Appointment
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </button>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 w-full">
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Contact</h4>
              <div className="flex flex-col gap-2">
                <a href="tel:+84348815448" className="text-lg md:text-xl font-medium hover:text-white/70 transition-colors">
                  <span className="text-white/50 text-sm block mb-1">Mobile</span>
                  +84 34 881 5448
                </a>
                <a href="https://wa.me/84348815448" target="_blank" rel="noreferrer" className="text-lg md:text-xl font-medium hover:text-white/70 transition-colors mt-2">
                  <span className="text-white/50 text-sm block mb-1">WhatsApp</span>
                  +84 34 881 5448
                </a>
                <a href="mailto:amourhairsalon@gmail.com" className="text-lg md:text-xl font-medium hover:text-white/70 transition-colors mt-2 break-all">
                  <span className="text-white/50 text-sm block mb-1">Email</span>
                  amourhairsalon@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Address</h4>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-white/90">
                36B Lê Thị Riêng<br />
                Phường Bến Thành<br />
                Quận 1, Ho Chi Minh City<br />
                Vietnam, 700000
              </p>

              <div className="mt-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Categories</h4>
                <p className="text-lg font-medium">Hair Salon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Big Text */}
        <div className="w-full border-t border-white/10 pt-12 md:pt-16 mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15vw] md:text-[10vw] font-black uppercase tracking-tighter leading-none"
          >
            AMOUR <span className="text-white/20">SALON</span>
          </motion.h1>

          <div className="flex flex-col gap-2 text-left md:text-right">
            <div className="text-sm font-bold tracking-widest text-white/80 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              5K FOLLOWERS <span className="mx-2 opacity-50">•</span> 8 FOLLOWING
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-white/40 border-t border-white/10 pt-8 gap-4 md:gap-0">
          <p>&copy; {new Date().getFullYear()} AMOUR HAIR SALON.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
