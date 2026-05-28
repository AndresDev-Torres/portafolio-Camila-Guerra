'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface PhotoItem {
  src: string;
  category: { es: string; en: string };
  isHeavy: boolean;
}

export const Photography: React.FC = () => {
  const { t, language } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Curated list of all 20+ photography assets
  const allPhotos: PhotoItem[] = [
    {
      src: '/images/photography/studio-photo-05.jpeg',
      category: { es: 'Sesión en Estudio', en: 'Studio Session' },
      isHeavy: false,
    },
    {
      src: '/images/photography/casual-photo-02.jpeg',
      category: { es: 'Fotografía Casual', en: 'Casual Photography' },
      isHeavy: false,
    },
    {
      src: '/images/photography/duet-sesion-01.jpeg',
      category: { es: 'Sesión Duet', en: 'Duet Session' },
      isHeavy: false,
    },
    {
      src: '/images/photography/tango-concert-02.jpg',
      category: { es: 'Concierto de Tango', en: 'Tango Concert' },
      isHeavy: false,
    },
    {
      src: '/images/photography/studio-photo-01.jpeg',
      category: { es: 'Sesión en Estudio', en: 'Studio Session' },
      isHeavy: false,
    },
    {
      src: '/images/photography/studio-photo-08.png',
      category: { es: 'Sesión en Estudio', en: 'Studio Session' },
      isHeavy: false,
    },
    // Heavy quartet session assets (lazy-loaded inside modal only)
    {
      src: '/images/photography/quartet-sesion-01.jpg',
      category: { es: 'Sesión Cuarteto', en: 'Quartet Session' },
      isHeavy: true,
    },
    {
      src: '/images/photography/quartet-sesion-02.png',
      category: { es: 'Sesión Cuarteto', en: 'Quartet Session' },
      isHeavy: true,
    },
    {
      src: '/images/photography/quartet-sesion-03.jpg',
      category: { es: 'Sesión Cuarteto', en: 'Quartet Session' },
      isHeavy: true,
    },
    {
      src: '/images/photography/quartet-sesion-04.jpg',
      category: { es: 'Sesión Cuarteto', en: 'Quartet Session' },
      isHeavy: true,
    },
    {
      src: '/images/photography/quartet-sesion-05.jpg',
      category: { es: 'Sesión Cuarteto', en: 'Quartet Session' },
      isHeavy: true,
    },
    {
      src: '/images/photography/quartet-sesion-06.jpg',
      category: { es: 'Sesión Cuarteto', en: 'Quartet Session' },
      isHeavy: true,
    },
    {
      src: '/images/photography/quartet-sesion-07.jpg',
      category: { es: 'Sesión Cuarteto', en: 'Quartet Session' },
      isHeavy: true,
    },
    {
      src: '/images/photography/quartet-sesion-08.jpg',
      category: { es: 'Sesión Cuarteto', en: 'Quartet Session' },
      isHeavy: true,
    },
    {
      src: '/images/photography/quartet-sesion-09.jpg',
      category: { es: 'Sesión Cuarteto', en: 'Quartet Session' },
      isHeavy: true,
    },
    {
      src: '/images/photography/quartet-sesion-10.jpg',
      category: { es: 'Sesión Cuarteto', en: 'Quartet Session' },
      isHeavy: true,
    },
    {
      src: '/images/photography/duet-sesion-02.jpeg',
      category: { es: 'Sesión Duet', en: 'Duet Session' },
      isHeavy: false,
    },
    {
      src: '/images/photography/duet-sesion-03.jpeg',
      category: { es: 'Sesión Duet', en: 'Duet Session' },
      isHeavy: false,
    },
    {
      src: '/images/photography/studio-photo-02.jpeg',
      category: { es: 'Sesión en Estudio', en: 'Studio Session' },
      isHeavy: false,
    },
    {
      src: '/images/photography/studio-photo-04.png',
      category: { es: 'Sesión en Estudio', en: 'Studio Session' },
      isHeavy: false,
    },
    {
      src: '/images/photography/tango-concert-03.png',
      category: { es: 'Concierto de Tango', en: 'Tango Concert' },
      isHeavy: false,
    },
    {
      src: '/images/photography/casual-photo-03.JPG',
      category: { es: 'Fotografía Casual', en: 'Casual Photography' },
      isHeavy: true,
    },
  ];

  // The first 6 photos will act as the home page curated preview grid
  const previewPhotos = allPhotos.slice(0, 6);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % allPhotos.length);
    }
  };

  const prevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + allPhotos.length) % allPhotos.length);
    }
  };

  return (
    <section id="photography" className="py-24 md:py-36 bg-[#0B1020] px-6 md:px-12 lg:px-20 relative">
      <div className="absolute inset-0 bg-radial-gradient from-[#7B5EA7]/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#F2A7C3] mb-4 block">
            {t.photography.title}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
            {t.photography.subtitle}
          </h2>
          <div className="w-12 h-[1px] bg-[#7B5EA7]/50 mx-auto mt-6" />
        </div>

        {/* Curated Preview Grid - Asymmetric Masonry Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {previewPhotos.map((photo, index) => {
            // Asymmetric aspect ratio mapping for premium layout
            let aspectClass = 'aspect-[3/4]';
            if (index === 1) aspectClass = 'aspect-square md:aspect-[3/4]';
            if (index === 3) aspectClass = 'aspect-[4/3] md:aspect-[3/4]';
            if (index === 4) aspectClass = 'aspect-[3/4]';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer rounded-2xl border border-white/5 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className={`relative w-full ${aspectClass}`}>
                  <img
                    src={photo.src}
                    alt={language === 'es' ? photo.category.es : photo.category.en}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Glassmorphic hover overlay */}
                  <div className="absolute inset-0 bg-[#0B1020]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8 backdrop-blur-xs">
                    <span className="text-[10px] uppercase tracking-widest text-[#F2A7C3] font-semibold mb-4 block">
                      {language === 'es' ? photo.category.es : photo.category.en}
                    </span>
                    <span className="inline-flex items-center space-x-1.5 text-[10px] tracking-wider uppercase text-white/60 font-semibold">
                      <Maximize2 size={10} />
                      <span>{language === 'es' ? 'Ver En Grande' : 'View Fullscreen'}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Full Gallery CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => openLightbox(0)}
            className="group inline-flex items-center space-x-3 text-[#F2A7C3] hover:text-white transition-colors text-xs font-bold tracking-widest uppercase cursor-pointer"
          >
            <span>{t.photography.viewGallery}</span>
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* Immersive Lightbox Modal Slider */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-6 md:p-10"
            onClick={closeLightbox}
          >
            {/* Top Bar inside Lightbox */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto z-10">
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#F2A7C3] font-semibold block">
                  {language === 'es' ? allPhotos[lightboxIndex].category.es : allPhotos[lightboxIndex].category.en}
                </span>
                <span className="text-xs text-white/50">
                  {lightboxIndex + 1} / {allPhotos.length}
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label={t.photography.closeGallery}
              >
                <X size={20} />
              </button>
            </div>

            {/* Slider Center Image Frame */}
            <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-6">
              
              {/* Prev Button */}
              <button
                onClick={prevPhoto}
                className="absolute left-2 md:-left-16 z-20 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Central Main Interactive Image Display */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative max-h-[70vh] md:max-h-[75vh] max-w-full rounded-lg overflow-hidden border border-white/5 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={allPhotos[lightboxIndex].src}
                  alt={language === 'es' ? allPhotos[lightboxIndex].category.es : allPhotos[lightboxIndex].category.en}
                  className="max-h-[70vh] md:max-h-[75vh] w-auto object-contain mx-auto"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={nextPhoto}
                className="absolute right-2 md:-right-16 z-20 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

            </div>

            {/* Bottom Bar Info within Lightbox */}
            <div className="w-full max-w-4xl mx-auto text-center z-10">
              <h3 className="font-serif text-lg md:text-xl text-white font-bold tracking-wide">
                {language === 'es' ? allPhotos[lightboxIndex].category.es : allPhotos[lightboxIndex].category.en}
              </h3>
              <p className="text-[9px] uppercase tracking-widest text-[#94A3B8]/40 mt-1.5">
                Laura Camila Guerra Moreno
              </p>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
