'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Lightbox } from './Lightbox';
import { Maximize2 } from 'lucide-react';

export const Painting: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const paintings = [
    {
      src: '/images/painting/oil-painting-06.jpeg',
      title: t.painting.work6Title,
      medium: t.painting.work6Medium,
      layout: 'col-span-12 md:col-span-7',
      aspect: 'aspect-[3/4]',
    },
    {
      src: '/images/painting/oil-painting-01.jpeg',
      title: t.painting.work1Title,
      medium: t.painting.work1Medium,
      layout: 'col-span-12 md:col-span-5 md:mt-24',
      aspect: 'aspect-[4/3]',
    },
    {
      src: '/images/painting/oil-painting-02.jpeg',
      title: t.painting.work2Title,
      medium: t.painting.work2Medium,
      layout: 'col-span-12 md:col-span-5 md:-mt-12',
      aspect: 'aspect-square',
    },
    {
      src: '/images/painting/oil-painting-03.jpeg',
      title: t.painting.work3Title,
      medium: t.painting.work3Medium,
      layout: 'col-span-12 md:col-span-7 md:mt-12',
      aspect: 'aspect-[3/4]',
    },
    {
      src: '/images/painting/oil-painting-04.jpeg',
      title: t.painting.work4Title,
      medium: t.painting.work4Medium,
      layout: 'col-span-12 md:col-span-4 md:-mt-24',
      aspect: 'aspect-[3/4]',
    },
    {
      src: '/images/painting/oil-painting-05.jpeg',
      title: t.painting.work5Title,
      medium: t.painting.work5Medium,
      layout: 'col-span-12 md:col-span-8 md:mt-8',
      aspect: 'aspect-[16/10]',
    },
    {
      src: '/images/painting/oil-painting-07.jpeg',
      title: t.painting.work7Title,
      medium: t.painting.work7Medium,
      layout: 'col-span-12 md:col-span-6 md:col-start-4 md:mt-16',
      aspect: 'aspect-[3/4]',
    },
  ];

  const handleOpenLightbox = (src: string, title: string) => {
    setSelectedImage(src);
    setSelectedTitle(title);
    setSelectedCategory(language === 'es' ? 'Obra Pictórica' : 'Painting');
  };

  return (
    <section id="painting" className="py-24 md:py-36 bg-[#0B1020] px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Expressive fluid background glows */}
      <div className="absolute top-1/3 right-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#7B5EA7]/3 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#3D52A0]/3 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-20 md:mb-32 border-b border-white/5 pb-12">
          <div className="lg:col-span-6">
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#F2A7C3] mb-4 block">
              {t.nav.painting}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {t.painting.subtitle}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pl-8 flex flex-col justify-end">
            <p className="text-sm md:text-base text-[#94A3B8] font-light leading-relaxed">
              {t.painting.description}
            </p>
          </div>
        </div>

        {/* Asymmetric Artistic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {paintings.map((painting, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              className={`${painting.layout} flex flex-col group cursor-pointer`}
              onClick={() => handleOpenLightbox(painting.src, `${painting.title} — ${painting.medium}`)}
            >
              {/* Image Frame */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/5 bg-[#0F172A] shadow-xl group">
                <div className={`${painting.aspect} w-full relative`}>
                  <img
                    src={painting.src}
                    alt={painting.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-[#0B1020]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center backdrop-blur-xs">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption details below */}
              <div className="mt-5 pl-1">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F2A7C3] transition-colors">
                  {painting.title}
                </h3>
                <p className="text-xs text-[#94A3B8]/60 mt-1 font-mono tracking-wider uppercase">
                  {painting.medium}
                </p>
              </div>
            </motion.div>
          ))}
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
