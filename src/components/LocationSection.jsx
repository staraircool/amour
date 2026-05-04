"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#F0F9FF] text-[#0F172A] py-32 overflow-hidden flex items-center">
      
      <div className="container mx-auto px-4 md:px-12 relative z-10 w-full">
        
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] text-blue-400 font-bold mb-6 block"
          >
            Sanctuary
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F172A]"
          >
            Visit <span className="italic font-serif text-pink-300">Amour</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center bg-white/50 backdrop-blur-xl border border-white p-4 md:p-8 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.05)] max-w-6xl mx-auto">
          
          {/* Map Container */}
          <div className="w-full lg:w-3/5 h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden relative shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5312384799015!2d106.6908055146224!3d10.77056466224675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3c58661625%3A0xcb13eab20cb12bb0!2zMzZCIEzDqiBUaOG7iyBSacOqbmcsIFBoxrDhu51uZyBC4bq_biBUaMOgbmgsIFF14bqtbiAxLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2sus!4v1682945239123!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(20%) contrast(110%)" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Info Card */}
          <div className="w-full lg:w-2/5 flex flex-col gap-8 p-4 md:p-8">
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-3 text-pink-400">
                <MapPin className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-xs text-[#64748B]">Location</h3>
              </div>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[#0F172A]">
                36B Lê Thị Riêng<br/>
                Phường Bến Thành, Quận 1<br/>
                Ho Chi Minh City, Vietnam
              </p>
            </motion.div>

            <div className="w-full h-px bg-gray-200"></div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-3 text-blue-400">
                <Clock className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-xs text-[#64748B]">Hours</h3>
              </div>
              <div className="grid grid-cols-2 gap-y-2 text-sm text-[#0F172A]">
                <span className="font-medium">Mon - Fri</span>
                <span>9:00 AM - 8:00 PM</span>
                <span className="font-medium">Saturday</span>
                <span>10:00 AM - 7:00 PM</span>
                <span className="font-medium">Sunday</span>
                <span>Closed</span>
              </div>
            </motion.div>

            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="https://goo.gl/maps/something" 
              target="_blank"
              className="mt-4 bg-[#0F172A] text-white text-center py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-400 transition-colors"
            >
              Get Directions
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  );
}
