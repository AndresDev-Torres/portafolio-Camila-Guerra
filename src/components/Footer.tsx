'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Instagram, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1020] border-t border-white/5 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Logo and short tagline */}
        <div className="text-center md:text-left">
          <h2 className="font-serif text-lg font-bold tracking-[0.25em] text-white uppercase">
            LAURA CAMILA
          </h2>
          <p className="text-xs text-[#94A3B8]/60 mt-2 max-w-xs">
            {t.footer.text}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#F2A7C3] hover:border-[#F2A7C3]/30 hover:bg-white/5 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="mailto:camila000423@gmail.com"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#F2A7C3] hover:border-[#F2A7C3]/30 hover:bg-white/5 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <button
            onClick={handleScrollTop}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-[#F2A7C3] hover:bg-[#7B5EA7] hover:text-white transition-all duration-300 border border-white/5 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
          <p className="text-[9px] uppercase tracking-widest text-[#94A3B8]/40">
            © {new Date().getFullYear()} LAURA CAMILA. {t.footer.rights}
          </p>
        </div>

      </div>
    </footer>
  );
};
