'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  const disciplines = [
    {
      num: '[01]',
      title: t.skills.traditional,
      desc: t.skills.traditionalDesc,
      tools: t.skills.traditionalTools.split(' · '),
      // Vertical translation offset for desktop asymmetric layout
      offsetClass: 'lg:-translate-y-6',
    },
    {
      num: '[02]',
      title: t.skills.branding,
      desc: t.skills.brandingDesc,
      tools: t.skills.brandingTools.split(' · '),
      offsetClass: 'lg:translate-y-6',
    },
    {
      num: '[03]',
      title: t.skills.multimedia,
      desc: t.skills.multimediaDesc,
      tools: t.skills.multimediaTools.split(' · '),
      offsetClass: 'lg:-translate-y-6',
    },
    {
      num: '[04]',
      title: t.skills.toolbox,
      desc: t.skills.toolboxDesc,
      tools: t.skills.toolboxTools.split(' · '),
      offsetClass: 'lg:translate-y-6',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="py-28 md:py-40 bg-[#0B1020] px-6 md:px-12 lg:px-20 relative">
      <div className="absolute inset-0 bg-radial-gradient from-[#3D52A0]/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-32 text-center">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#F2A7C3] mb-4 block">
            {t.skills.title}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white max-w-xl mx-auto leading-tight">
            {t.skills.subtitle}
          </h2>
          <div className="w-12 h-[1px] bg-[#7B5EA7]/30 mx-auto mt-6" />
        </div>

        {/* Disciplines Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-12 lg:gap-y-16 pb-12"
        >
          {disciplines.map((disc, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`p-8 md:p-10 rounded-2xl border border-white/5 bg-[#0F172A]/40 hover:bg-[#0F172A]/70 hover:border-[#7B5EA7]/35 hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between ${disc.offsetClass}`}
            >
              <div>
                {/* Index / Monospace tag */}
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#F2A7C3] block mb-6 font-medium">
                  {disc.num}
                </span>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-5 tracking-wide">
                  {disc.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed font-light mb-8">
                  {disc.desc}
                </p>
              </div>

              {/* Tools & Mediums Tags */}
              <div className="border-t border-white/5 pt-6 mt-4">
                <span className="text-[9px] uppercase tracking-widest text-[#94A3B8]/40 font-semibold block mb-4">
                  {idx === 3 ? 'Mediums & Software' : 'Tools & Mediums'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {disc.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] uppercase tracking-wider text-[#94A3B8]/80 border border-white/10 rounded-full px-3 py-1.5 bg-white/[0.01] group-hover:border-[#7B5EA7]/20 group-hover:text-white transition-colors duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
