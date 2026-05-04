"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA] text-[#0F172A] pt-24 pb-12 border-t border-gray-200 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-100/50 via-blue-50/50 to-transparent rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[90rem] mx-auto px-4 md:px-10 flex flex-col relative z-10 min-h-[50vh]">
        
        {/* Top Section - CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-[#0F172A] mb-8 md:mb-0"
          >
            Ready to Transform<br/>Your Look?
          </motion.h2>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group flex items-center gap-4 bg-[#0F172A] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-pink-300 transition-colors"
          >
            Book Appointment
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </motion.button>
        </div>

        {/* Main Grid - Clearing the Center for the Chair */}
        <div className="flex flex-col md:flex-row justify-between w-full flex-grow mt-10">
          
          {/* Left Side Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-pink-400 mb-2">Contact</h4>
              <a href="tel:+84348815448" className="text-xl font-medium hover:text-blue-400 transition-colors">
                +84 34 881 5448
              </a>
              <a href="mailto:amourhairsalon@gmail.com" className="text-lg font-medium hover:text-blue-400 transition-colors mt-2 break-all">
                amourhairsalon@gmail.com
              </a>
            </div>

            <div>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mt-8 text-[#0F172A]">
                AMOUR
              </h1>
            </div>
          </motion.div>

          {/* Center Empty Space - LANDING PAD FOR CHAIR */}
          <div className="hidden md:block w-1/3 min-h-[300px]"></div>

          {/* Right Side Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex flex-col gap-8 text-left md:text-right"
          >
            <div className="flex flex-col gap-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2">Address</h4>
              <p className="text-xl font-medium leading-relaxed text-[#0F172A]">
                36B Lê Thị Riêng<br />
                Phường Bến Thành<br />
                Quận 1, HCMC
              </p>
            </div>

            <div className="mt-8 flex flex-col md:items-end gap-2">
              <a href="#" className="text-sm font-bold tracking-widest uppercase hover:text-pink-400 transition-colors">Instagram</a>
              <a href="#" className="text-sm font-bold tracking-widest uppercase hover:text-blue-400 transition-colors">Facebook</a>
            </div>
            
            <div className="mt-auto pt-8">
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-pink-200">
                SALON
              </h1>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#64748B] border-t border-gray-200 pt-8 mt-16">
          <p>&copy; {new Date().getFullYear()} AMOUR HAIR SALON.</p>
          <p>EST. 2024</p>
        </div>

      </div>
    </footer>
  );
}
