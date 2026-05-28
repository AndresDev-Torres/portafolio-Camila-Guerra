'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Lightbox } from './Lightbox';
import { Maximize2 } from 'lucide-react';

export const Advertising: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleOpenLightbox = (src: string, title: string) => {
    setSelectedImage(src);
    setSelectedTitle(title);
    setSelectedCategory(language === 'es' ? 'Diseño Publicitario' : 'Advertising Design');
  };

  return (
    <section id="advertising" className="py-24 md:py-36 bg-[#0F172A] px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-28 text-left border-b border-white/5 pb-8 max-w-3xl">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#F2A7C3] mb-4 block">
            {t.nav.advertising}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
            {t.advertising.title}
          </h2>
          <p className="text-sm md:text-base text-[#94A3B8] mt-4 font-light leading-relaxed">
            {t.advertising.subtitle}
          </p>
        </div>

        {/* Curated 3-Image Asymmetric Campaign Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Dominant Large Featured Piece (Col span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col group cursor-pointer"
            onClick={() => handleOpenLightbox('/images/advertasing/advertasing-01.png', `${t.advertising.mainTitle} — ${t.advertising.mainMedium}`)}
          >
            <div className="relative w-full rounded-2xl border border-white/5 overflow-hidden shadow-2xl bg-[#0B1020]">
              <img
                src="/images/advertasing/advertasing-01.png"
                alt="Featured Advertising Cartel"
                className="w-full h-auto object-cover group-hover:scale-101 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-[#0B1020]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center backdrop-blur-xs">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10">
                  <Maximize2 size={16} />
                </div>
              </div>
            </div>

            {/* Campaign Metadata */}
            <div className="mt-6 pl-2">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#F2A7C3] font-semibold mb-1.5 block">
                Featured Campaign Cartel
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#F2A7C3] transition-colors">
                {t.advertising.mainTitle} <span className="font-sans font-light text-base text-[#94A3B8]/60 ml-2">— {t.advertising.mainMedium}</span>
              </h3>
            </div>
          </motion.div>

          {/* Right Column: Two Supporting Pieces (Col span 4) */}
          <div className="lg:col-span-4 flex flex-col space-y-12 md:space-y-16">
            
            {/* Supporting Piece 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="flex flex-col group cursor-pointer"
              onClick={() => handleOpenLightbox('/images/advertasing/advertasing-02.jpeg', `${t.advertising.side1Title} — ${t.advertising.side1Medium}`)}
            >
              <div className="relative w-full rounded-2xl border border-white/5 overflow-hidden shadow-xl bg-[#0B1020]">
                <img
                  src="/images/advertasing/advertasing-02.jpeg"
                  alt="Campaign Supporting Graphic 1"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0B1020]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center backdrop-blur-xs">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10">
                    <Maximize2 size={14} />
                  </div>
                </div>
              </div>
              <div className="mt-5 pl-2">
                <h4 className="font-serif text-base font-bold text-white group-hover:text-[#F2A7C3] transition-colors">
                  {t.advertising.side1Title} <span className="font-sans font-light text-sm text-[#94A3B8]/60 ml-2">— {t.advertising.side1Medium}</span>
                </h4>
              </div>
            </motion.div>

            {/* Supporting Piece 2 (with offset margin/padding on desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="flex flex-col group cursor-pointer lg:pt-4"
              onClick={() => handleOpenLightbox('/images/advertasing/advertasing-03.jpeg', `${t.advertising.side2Title} — ${t.advertising.side2Medium}`)}
            >
              <div className="relative w-full rounded-2xl border border-white/5 overflow-hidden shadow-xl bg-[#0B1020]">
                <img
                  src="/images/advertasing/advertasing-03.jpeg"
                  alt="Campaign Supporting Graphic 2"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0B1020]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center backdrop-blur-xs">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10">
                    <Maximize2 size={14} />
                  </div>
                </div>
              </div>
              <div className="mt-5 pl-2">
                <h4 className="font-serif text-base font-bold text-white group-hover:text-[#F2A7C3] transition-colors">
                  {t.advertising.side2Title} <span className="font-sans font-light text-sm text-[#94A3B8]/60 ml-2">— {t.advertising.side2Medium}</span>
                </h4>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Lightbox Instance */}
      <Lightbox
        src={selectedImage}
        title={selectedTitle}
        category={selectedCategory}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
};
