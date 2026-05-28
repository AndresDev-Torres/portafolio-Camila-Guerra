'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh px-6 md:px-12 lg:px-20 pt-28 pb-16">
      {/* Decorative blurred background shapes matching palette accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#7B5EA7]/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-[#3D52A0]/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-2/3 w-80 h-80 rounded-full bg-[#F2A7C3]/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Editorial Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Tagline / Subtitle */}
            <motion.span
              variants={itemVariants}
              className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-[#F2A7C3] mb-4 block"
            >
              {t.hero.role}
            </motion.span>

            {/* Visual Artist Name */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 select-none"
            >
              {t.hero.artistName}
            </motion.h1>

            {/* Primary Quote/Tagline */}
            <motion.h2
              variants={itemVariants}
              className="font-serif text-lg sm:text-xl md:text-2xl italic text-[#F0EBFF] leading-relaxed mb-4 max-w-2xl font-light border-l-2 border-[#7B5EA7] pl-4"
            >
              {t.hero.tagline}
            </motion.h2>

            {/* Secondary Copy Text */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-[#94A3B8] max-w-xl leading-relaxed font-sans font-light mb-10 pl-5"
            >
              {t.hero.secondaryText}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto"
            >
              <button
                onClick={() => handleScrollTo('painting')}
                className="group flex items-center justify-center space-x-2 bg-[#3D52A0] text-[#F0EBFF] hover:bg-[#7B5EA7] transition-all duration-300 px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="/documents/laura-cv.pdf"
                download="Laura_Camila_CV.pdf"
                className="flex items-center justify-center border border-[#7B5EA7]/30 hover:border-[#F2A7C3] text-[#F0EBFF] hover:bg-white/5 transition-all duration-300 px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase cursor-pointer text-center"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Layered Overlapping Imagery Collage */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-10 px-4 sm:px-0">
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] aspect-[4/5]">
              
              {/* Back Frame / Shadow Frame Accent */}
              <div className="absolute inset-0 border border-[#7B5EA7]/20 rounded-2xl transform rotate-2 pointer-events-none" />

              {/* Main Portrait Frame (Center-Back) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                className="relative w-full h-full rounded-2xl border border-[#7B5EA7]/30 overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/hero/hero-02.jpeg"
                  alt="Laura Camila Guerra Moreno — Visual Art"
                  className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/60 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Overlay Image Frame 1 (Top-Left) */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  y: [0, -10, 0] // slow breathe floating loop
                }}
                transition={{ 
                  opacity: { duration: 1, delay: 0.5 },
                  x: { duration: 1, delay: 0.5 },
                  y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.05, zIndex: 30 }}
                className="absolute top-[-8%] left-[-6%] sm:left-[-12%] w-[40%] sm:w-[42%] aspect-[3/4] rounded-xl border border-[#7B5EA7]/40 shadow-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src="/images/hero/hero-01.jpeg"
                  alt="Artwork Detail"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlay Image Frame 2 (Bottom-Right) */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  y: [0, 8, 0] // slow breathe floating loop out of phase
                }}
                transition={{ 
                  opacity: { duration: 1, delay: 0.7 },
                  x: { duration: 1, delay: 0.7 },
                  y: { repeat: Infinity, duration: 7, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.05, zIndex: 30 }}
                className="absolute bottom-[5%] right-[-5%] sm:right-[-10%] w-[36%] sm:w-[38%] aspect-square rounded-xl border border-[#F2A7C3]/45 shadow-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src="/images/hero/hero-03.jpeg"
                  alt="Creative Process"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 1.8, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 cursor-pointer text-[#F2A7C3] hover:opacity-100 transition-opacity hidden md:flex"
        onClick={() => handleScrollTo('about')}
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-semibold">Scroll</span>
        <ArrowDown size={12} />
      </motion.div>
    </section>
  );
};
