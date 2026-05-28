'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-28 md:py-36 bg-[#0F172A] px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Intimate ambient background glows */}
      <div className="absolute top-1/4 left-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#7B5EA7]/3 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-[-10%] w-[30rem] h-[30rem] rounded-full bg-[#3D52A0]/3 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative">
        {/* Massive watermark letter behind content for art-monograph feel */}
        <div className="absolute right-0 bottom-[-10%] font-serif text-[18rem] md:text-[25rem] text-white/[0.015] leading-none select-none pointer-events-none -z-10 font-light">
          A
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Intimate Layered Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative py-6"
          >
            {/* Asymmetrical stacked frame visual border */}
            <div className="relative aspect-[3/4] w-full max-w-[340px] md:max-w-md mx-auto">
              
              {/* Outer offset framing line */}
              <div className="absolute inset-[-12px] border border-[#7B5EA7]/20 rounded-2xl transform -rotate-2 pointer-events-none" />
              
              {/* Inner framing line */}
              <div className="absolute inset-[10px] border border-[#F2A7C3]/10 rounded-xl pointer-events-none z-20" />

              {/* Main image container */}
              <div className="relative w-full h-full rounded-2xl border border-white/5 overflow-hidden shadow-2xl bg-[#0B1020]">
                <img
                  src="/images/about/about-01.jpeg"
                  alt="Laura Camila Guerra Moreno"
                  className="w-full h-full object-cover grayscale-15 hover:grayscale-0 transition-all duration-700 hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/45 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Fine art style caption label overlay */}
              <div className="absolute bottom-4 left-4 z-20 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-md text-[8px] uppercase tracking-[0.2em] text-[#F0EBFF]/80">
                Bogotá, 2026
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Section Tag */}
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-[#F2A7C3] mb-4 block">
              {t.about.title}
            </span>

            {/* Editorial Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight max-w-xl">
              Sensibilidad artística orientada al propósito visual.
            </h2>

            {/* Split Paragraphs in Clean Design */}
            <div className="space-y-6 text-[#94A3B8] text-base md:text-lg leading-relaxed font-light font-sans max-w-2xl">
              {t.about.text.split('\n\n').map((paragraph, index) => {
                if (index === 0) {
                  // Style first paragraph as a lead-in text block
                  return (
                    <p key={index} className="text-white font-serif italic text-lg sm:text-xl border-l-2 border-[#7B5EA7] pl-5 py-1">
                      {paragraph}
                    </p>
                  );
                }
                return (
                  <p key={index} className="pl-6 font-light">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Studio Signature Monogram */}
            <div className="mt-12 pl-6 flex items-center space-x-4">
              <div className="w-8 h-[1px] bg-[#7B5EA7]/40" />
              <span className="font-serif text-xs italic tracking-widest text-[#F2A7C3]">
                Laura Camila G. M.
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
