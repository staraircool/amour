"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function BookingSection() {
  return (
    <section className="relative w-full py-32 bg-white text-[#0F172A] overflow-hidden flex flex-col items-center">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-50/50 to-transparent rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 relative z-10 w-full max-w-4xl">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] text-blue-400 font-bold mb-4 block"
          >
            Reservations
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light tracking-tighter text-[#0F172A]"
          >
            Book Your <span className="italic font-serif text-pink-300">Appointment</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.05)] rounded-[2rem] p-8 md:p-12 w-full"
        >
          <form className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Full Name</label>
                <input type="text" placeholder="Jane Doe" className="w-full border-b border-gray-200 py-3 text-lg font-light text-[#0F172A] focus:outline-none focus:border-pink-300 transition-colors bg-transparent placeholder-gray-300" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Phone Number</label>
                <input type="tel" placeholder="+84 34 881 5448" className="w-full border-b border-gray-200 py-3 text-lg font-light text-[#0F172A] focus:outline-none focus:border-pink-300 transition-colors bg-transparent placeholder-gray-300" />
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Service</label>
                <select className="w-full border-b border-gray-200 py-3 text-lg font-light text-[#0F172A] focus:outline-none focus:border-blue-300 transition-colors bg-transparent appearance-none">
                  <option>Signature Haircut</option>
                  <option>Full Balayage</option>
                  <option>Keratin Smoothing</option>
                  <option>Consultation</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Date</label>
                <input type="date" className="w-full border-b border-gray-200 py-3 text-lg font-light text-[#0F172A] focus:outline-none focus:border-blue-300 transition-colors bg-transparent" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Time</label>
                <input type="time" className="w-full border-b border-gray-200 py-3 text-lg font-light text-[#0F172A] focus:outline-none focus:border-blue-300 transition-colors bg-transparent" />
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <button type="button" className="group flex items-center gap-4 bg-[#0F172A] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-pink-300 hover:text-[#0F172A] transition-colors w-full md:w-auto justify-center shadow-lg">
                Confirm Request
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
