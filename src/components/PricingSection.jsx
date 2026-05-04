"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  { id: 1, name: "Signature Haircut", price: 80, category: "Cut & Style" },
  { id: 2, name: "Blowout & Styling", price: 55, category: "Cut & Style" },
  { id: 3, name: "Full Balayage", price: 250, category: "Color" },
  { id: 4, name: "Root Touch-Up", price: 95, category: "Color" },
  { id: 5, name: "Deep Conditioning Treatment", price: 45, category: "Treatment" },
  { id: 6, name: "Keratin Smoothing", price: 300, category: "Treatment" },
];

export default function PricingSection() {
  const [selected, setSelected] = useState([]);

  const toggleService = (id) => {
    setSelected((prev) => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const total = selected.reduce((sum, id) => {
    const service = services.find(s => s.id === id);
    return sum + (service ? service.price : 0);
  }, 0);

  return (
    <section className="relative w-full min-h-screen bg-[#FAFAFA] text-[#0F172A] py-32 overflow-hidden flex flex-col items-center">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-pink-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 relative z-10 w-full max-w-5xl">
        
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] text-pink-400 font-bold mb-6 block"
          >
            Investment
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F172A]"
          >
            Transparent <span className="italic font-serif text-blue-300">Pricing</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Services List */}
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => {
              const isSelected = selected.includes(service.id);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => toggleService(service.id)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    isSelected 
                      ? "bg-white border-pink-200 shadow-[0_10px_30px_rgba(255,192,203,0.2)] scale-[1.02]" 
                      : "bg-white/50 border-gray-100 hover:bg-white hover:shadow-md"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-lg text-[#0F172A]">{service.name}</h3>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${isSelected ? 'bg-pink-300 border-pink-300' : 'border-gray-300'}`}>
                      {isSelected && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                  </div>
                  <p className="text-sm text-[#64748B] mb-4">{service.category}</p>
                  <p className="text-xl font-light text-[#0F172A]">${service.price}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Calculator Sticky Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[350px] sticky top-32 bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 shadow-[0_30px_60px_rgba(0,0,0,0.05)]"
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#64748B] mb-6">Estimated Total</h3>
            
            <div className="min-h-[100px] mb-8 flex flex-col gap-3">
              {selected.length === 0 ? (
                <p className="text-sm text-gray-400 italic">Select services to build your package.</p>
              ) : (
                services.filter(s => selected.includes(s.id)).map(s => (
                  <div key={s.id} className="flex justify-between text-sm text-[#0F172A]">
                    <span>{s.name}</span>
                    <span className="font-medium">${s.price}</span>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-gray-100 pt-6 mb-8 flex justify-between items-end">
              <span className="text-sm font-medium text-[#64748B]">Total</span>
              <span className="text-4xl font-light text-[#0F172A]">${total}</span>
            </div>

            <button 
              className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-colors ${
                total > 0 ? "bg-[#0F172A] text-white hover:bg-pink-300" : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
              disabled={total === 0}
            >
              Book Package
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
