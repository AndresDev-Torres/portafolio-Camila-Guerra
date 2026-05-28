'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Lightbox } from './Lightbox';
import { Maximize2, ExternalLink } from 'lucide-react';

export const Branding: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleOpenLightbox = (src: string, title: string, categoryKey: 'opus' | 'wecafe') => {
    setSelectedImage(src);
    setSelectedTitle(title);
    setSelectedCategory(
      categoryKey === 'opus' 
        ? (language === 'es' ? 'Caso de Estudio: Opus' : 'Case Study: Opus') 
        : (language === 'es' ? 'Caso de Estudio: We Café' : 'Case Study: We Café')
    );
  };

  return (
    <section id="branding" className="py-24 md:py-36 bg-[#0B1020] px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-[-15%] w-[40rem] h-[40rem] rounded-full bg-[#3D52A0]/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-[-15%] w-[40rem] h-[40rem] rounded-full bg-[#7B5EA7]/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-32 text-center max-w-2xl mx-auto">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#F2A7C3] mb-4 block">
            {t.nav.branding}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
            {t.branding.subtitle}
          </h2>
          <div className="w-12 h-[1px] bg-[#7B5EA7]/30 mx-auto mt-6" />
        </div>

        {/* ======================================================== */}
        {/* CASE STUDY 1: CUARTETO OPUS (Featured, Premium & Musical) */}
        {/* ======================================================== */}
        <div className="mb-40 md:mb-56 border-b border-white/5 pb-24 md:pb-36">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#F2A7C3] mb-2.5 block">
                {t.branding.caseStudy} [01]
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
                {t.branding.opusTitle}
              </h3>
            </div>
            <p className="text-xs text-[#94A3B8]/60 font-mono tracking-widest uppercase mt-4 lg:mt-0">
              {t.branding.opusSpecs}
            </p>
          </div>

          {/* Large Hero Showcase Imagery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/5 shadow-2xl mb-16 cursor-zoom-in group bg-[#0F172A]"
            onClick={() => handleOpenLightbox('/images/branding/opus/opus-cover-01.jpg', t.branding.opusTitle, 'opus')}
          >
            <img
              src="/images/branding/opus/opus-cover-01.jpg"
              alt="Cuarteto Opus Identity Header"
              className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#0B1020]/25 group-hover:bg-[#0B1020]/10 transition-colors duration-400" />
            <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 size={14} />
            </div>
          </motion.div>

          {/* Case Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            
            {/* Left Column: Creative Direction Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h4 className="font-serif text-xl md:text-2xl text-[#F0EBFF] italic leading-relaxed mb-6 font-light border-l border-[#7B5EA7] pl-4">
                {t.branding.opusTagline}
              </h4>
              <p className="text-sm md:text-base text-[#94A3B8] font-light leading-relaxed mb-6 font-sans">
                {t.branding.opusDesc}
              </p>
            </div>

            {/* Right Column: Logo & Visual Systems Details */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div 
                className="relative aspect-square rounded-xl border border-white/5 overflow-hidden shadow-lg cursor-zoom-in group bg-[#0B1020]"
                onClick={() => handleOpenLightbox('/images/branding/opus/opus-logo-variations.jpg', 'Opus — Logotipo y Variaciones', 'opus')}
              >
                <img src="/images/branding/opus/opus-logo-variations.jpg" alt="Logo Variations" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#0B1020]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 size={14} className="text-white" />
                </div>
              </div>
              <div 
                className="relative aspect-square rounded-xl border border-white/5 overflow-hidden shadow-lg cursor-zoom-in group bg-[#0B1020]"
                onClick={() => handleOpenLightbox('/images/branding/opus/opus-sub-brand-mark.jpg', 'Opus — Submarca e Imagotipo', 'opus')}
              >
                <img src="/images/branding/opus/opus-sub-brand-mark.jpg" alt="Sub-brand Mark" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#0B1020]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 size={14} className="text-white" />
                </div>
              </div>
            </div>

          </div>

          {/* Third Mockups Row: Layered Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Packaging / Stationery cover */}
            <div 
              className="relative aspect-[4/3] rounded-xl border border-white/5 overflow-hidden shadow-lg cursor-zoom-in group bg-[#0B1020]"
              onClick={() => handleOpenLightbox('/images/branding/opus/opus-card-mockup.png', 'Opus — Papelería & Sobres corporativos', 'opus')}
            >
              <img src="/images/branding/opus/opus-card-mockup.png" alt="Card Mockup" className="w-full h-full object-cover group-hover:scale-103 transition-all duration-500" />
              <div className="absolute inset-0 bg-[#0B1020]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 size={14} className="text-white" />
              </div>
            </div>

            {/* Merchandise Apparel */}
            <div 
              className="relative aspect-[4/3] rounded-xl border border-white/5 overflow-hidden shadow-lg cursor-zoom-in group bg-[#0B1020]"
              onClick={() => handleOpenLightbox('/images/branding/opus/opus-shirt-mockup.png', 'Opus — Indumentaria de Merchandising', 'opus')}
            >
              <img src="/images/branding/opus/opus-shirt-mockup.png" alt="Shirt Mockup" className="w-full h-full object-cover group-hover:scale-103 transition-all duration-500" />
              <div className="absolute inset-0 bg-[#0B1020]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 size={14} className="text-white" />
              </div>
            </div>

            {/* Social System Application */}
            <div 
              className="relative aspect-[4/3] rounded-xl border border-white/5 overflow-hidden shadow-lg cursor-zoom-in group bg-[#0B1020]"
              onClick={() => handleOpenLightbox('/images/branding/opus/opus-socialMedia-mockup-01.png', 'Opus — Aplicación en Redes Sociales', 'opus')}
            >
              <img src="/images/branding/opus/opus-socialMedia-mockup-01.png" alt="Social Media Mockup" className="w-full h-full object-cover group-hover:scale-103 transition-all duration-500" />
              <div className="absolute inset-0 bg-[#0B1020]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 size={14} className="text-white" />
              </div>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* CASE STUDY 2: WE CAFE (Cozy, Warm, Lifestyle & Social)   */}
        {/* ======================================================== */}
        <div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#F2A7C3] mb-2.5 block">
                {t.branding.caseStudy} [02]
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
                {t.branding.weCafeTitle}
              </h3>
            </div>
            <p className="text-xs text-[#94A3B8]/60 font-mono tracking-widest uppercase mt-4 lg:mt-0">
              {t.branding.weCafeSpecs}
            </p>
          </div>

          {/* Cozy Hero space mockup header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/5 shadow-2xl mb-16 cursor-zoom-in group bg-[#0F172A]"
            onClick={() => handleOpenLightbox('/images/branding/we-cafe/WeCafe-space-mockup.png', t.branding.weCafeTitle, 'wecafe')}
          >
            <img
              src="/images/branding/we-cafe/WeCafe-space-mockup.png"
              alt="We Cafe Atmospheric Mockup"
              className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#0B1020]/20 group-hover:bg-[#0B1020]/5 transition-colors duration-400" />
            <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 size={14} />
            </div>
          </motion.div>

          {/* Grid specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Visual Details (Identity, Color Schemes) */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-1">
              <div 
                className="relative aspect-[4/3] rounded-xl border border-white/5 overflow-hidden shadow-lg cursor-zoom-in group bg-[#0B1020]"
                onClick={() => handleOpenLightbox('/images/branding/we-cafe/WeCafe-identity.jpg', 'We Café — Manual de Identidad', 'wecafe')}
              >
                <img src="/images/branding/we-cafe/WeCafe-identity.jpg" alt="We Cafe Identity" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#0B1020]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 size={14} className="text-white" />
                </div>
              </div>
              <div 
                className="relative aspect-[4/3] rounded-xl border border-white/5 overflow-hidden shadow-lg cursor-zoom-in group bg-[#0B1020]"
                onClick={() => handleOpenLightbox('/images/branding/we-cafe/WeCafe-colorSchemes.jpg', 'We Café — Paleta de Colores & Armonía', 'wecafe')}
              >
                <img src="/images/branding/we-cafe/WeCafe-colorSchemes.jpg" alt="We Cafe Color Schemes" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#0B1020]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 size={14} className="text-white" />
                </div>
              </div>

              {/* Wide packaging row on bottom left */}
              <div 
                className="relative aspect-[16/9] md:col-span-2 rounded-xl border border-white/5 overflow-hidden shadow-lg cursor-zoom-in group bg-[#0B1020]"
                onClick={() => handleOpenLightbox('/images/branding/we-cafe/WeCafe-socialMedia-Mockup.png', 'We Café — Packaging, Bolsas & Redes', 'wecafe')}
              >
                <img src="/images/branding/we-cafe/WeCafe-socialMedia-Mockup.png" alt="We Cafe Social Mockup" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#0B1020]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 size={14} className="text-white" />
                </div>
              </div>
            </div>

            {/* Right Column: Descriptions & Narrative (desktop order first) */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center lg:pl-6">
              <h4 className="font-serif text-xl md:text-2xl text-[#F0EBFF] italic leading-relaxed mb-6 font-light border-l border-[#F2A7C3] pl-4">
                {t.branding.weCafeTagline}
              </h4>
              <p className="text-sm md:text-base text-[#94A3B8] font-light leading-relaxed mb-6 font-sans">
                {t.branding.weCafeDesc}
              </p>

              {/* Decorative design schematic info overlay */}
              <div 
                className="relative aspect-[2/1] rounded-xl border border-[#F2A7C3]/15 overflow-hidden shadow-sm mt-4 cursor-zoom-in group bg-[#0F172A]/40 p-4 flex items-center justify-center"
                onClick={() => handleOpenLightbox('/images/branding/we-cafe/WeCafe-tipografy-colorPalette.png', 'We Café — Esquema Tipográfico & Gráfico', 'wecafe')}
              >
                <img src="/images/branding/we-cafe/WeCafe-tipografy-colorPalette.png" alt="Typography Palette" className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-[#0B1020]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 size={14} className="text-white" />
                </div>
              </div>
            </div>

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
