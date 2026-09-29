'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';
import { Lightbox } from './Lightbox';

export const Advertising: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const promoVideos = [1, 2, 3, 4, 7, 8, 9];
  const [promoIndex, setPromoIndex] = useState(0);
  const [isPromoPaused, setIsPromoPaused] = useState(false);

  useEffect(() => {
    if (isPromoPaused) return;
    const timer = window.setInterval(() => setPromoIndex((current) => (current + 1) % promoVideos.length), 5000);
    return () => window.clearInterval(timer);
  }, [isPromoPaused, promoVideos.length]);

  const handleOpenLightbox = (src: string, title: string) => {
    setSelectedImage(src);
    setSelectedTitle(title);
    setSelectedCategory(language === 'es' ? 'Diseño Publicitario' : 'Advertising Design');
  };

  const posterCard = (src: string, title: string, medium: string, alt: string, className: string) => (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: .8, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col ${className}`}
    >
      <button type="button" onClick={() => handleOpenLightbox(src, `${title} — ${medium}`)} aria-label={t.painting.viewFullscreen} className="relative block w-full overflow-hidden rounded-2xl border border-white/5 bg-[#0B1020] shadow-2xl cursor-zoom-in">
        <img src={src} alt={alt} loading="lazy" className="block w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
        <span className="absolute inset-0 flex items-center justify-center bg-[#0B1020]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[1px]">
          <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/15"><Maximize2 size={16} /></span>
        </span>
      </button>
      <div className="mt-5 pl-1">
        <h3 className="font-serif text-lg md:text-xl font-bold text-white group-hover:text-[#F2A7C3] transition-colors">{title}</h3>
        <p className="text-xs text-[#94A3B8]/60 mt-1 font-mono tracking-wider uppercase">{medium}</p>
      </div>
    </motion.article>
  );

  return (
    <section id="advertising" className="py-24 md:py-36 bg-[#0F172A] px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20 text-left border-b border-white/5 pb-8 max-w-3xl">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#F2A7C3] mb-4 block">{t.nav.advertising}</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">{t.advertising.title}</h2>
          <p className="text-sm md:text-base text-[#94A3B8] mt-4 font-light leading-relaxed">{t.advertising.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-16 items-start">
          {posterCard(
            '/images/advertasing/advertasing-01.png',
            t.advertising.mainTitle,
            t.advertising.mainMedium,
            'Poster promocional de evento musical',
            'md:col-span-7 md:col-start-1',
          )}

          {posterCard(
            '/images/advertasing/advertasing-02.jpeg',
            t.advertising.side1Title,
            t.advertising.side1Medium,
            'Cover de exposición artística',
            'md:col-span-5 md:col-start-8 md:mt-16',
          )}

          {posterCard(
            '/images/advertasing/advertasing-03.jpeg',
            t.advertising.side2Title,
            t.advertising.side2Medium,
            'Campaña de difusión de evento pro-fondos',
            'md:col-span-4 md:col-start-2 md:-mt-4',
          )}

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: .8, ease: [0.16, 1, 0.3, 1], delay: .1 }}
            className="md:col-span-7 md:col-start-6 md:mt-12"
          >
            <div className="mb-5 max-w-xl">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#F2A7C3] font-semibold mb-2 block">We Café</span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white">{language === 'es' ? 'Promoción de productos Café-bar' : 'Café-Bar Product Promotion'}</h3>
            </div>
            <div className="flex items-center justify-center gap-3 sm:gap-5" onMouseEnter={() => setIsPromoPaused(true)} onMouseLeave={() => setIsPromoPaused(false)}>
              <button type="button" onClick={() => setPromoIndex((current) => (current - 1 + promoVideos.length) % promoVideos.length)} aria-label={language === 'es' ? 'Video anterior' : 'Previous video'} className="shrink-0 w-9 h-9 rounded-full border border-white/10 text-[#F2A7C3] hover:bg-white/5 hover:border-[#F2A7C3]/30 flex items-center justify-center transition-colors"><ArrowLeft size={16} /></button>
              <div className="relative w-[min(72vw,360px)] aspect-[9/16] rounded-[1.75rem] border-[5px] border-[#24243a] bg-black p-1 shadow-xl overflow-hidden">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 w-16 h-4 rounded-full bg-black/90" />
                <AnimatePresence mode="wait">
                  <motion.div key={promoIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .35 }} className="absolute inset-1 rounded-[1.45rem] overflow-hidden bg-black flex items-center justify-center">
                    <video src={`/Portafolio%20procesos/Promocion%20We/promo${promoVideos[promoIndex]}.mp4`} autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-contain" aria-label={language === 'es' ? 'Promoción de productos Café-bar' : 'Café-Bar Product Promotion'} />
                  </motion.div>
                </AnimatePresence>
              </div>
              <button type="button" onClick={() => setPromoIndex((current) => (current + 1) % promoVideos.length)} aria-label={language === 'es' ? 'Video siguiente' : 'Next video'} className="shrink-0 w-9 h-9 rounded-full border border-white/10 text-[#F2A7C3] hover:bg-white/5 hover:border-[#F2A7C3]/30 flex items-center justify-center transition-colors"><ArrowRight size={16} /></button>
            </div>
            <div className="flex justify-center gap-2 mt-5">
              {promoVideos.map((number, index) => <button key={number} type="button" onClick={() => setPromoIndex(index)} aria-label={language === 'es' ? 'Seleccionar otro video' : 'Select another video'} className={`h-1 rounded-full transition-all ${index === promoIndex ? 'w-8 bg-[#F2A7C3]' : 'w-3 bg-white/20 hover:bg-white/50'}`} />)}
            </div>
          </motion.article>
        </div>
      </div>

      <Lightbox src={selectedImage} title={selectedTitle} category={selectedCategory} onClose={() => setSelectedImage(null)} />
    </section>
  );
};
