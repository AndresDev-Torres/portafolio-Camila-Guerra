'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const emailAddress = 'camila000423@gmail.com'; // Real contact email

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#0B1020] px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Accent glow mesh in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-[#7B5EA7]/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Section Header */}
        <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#F2A7C3] mb-6 block">
          {t.nav.contact}
        </span>
        
        {/* Availability Statement */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight mb-16 px-4">
          {t.contact.tagline}
        </h2>

        {/* Dynamic Connection Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          
          {/* Email Connection Card */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(242, 167, 195, 0.4)' }}
            className="p-8 rounded-2xl border border-white/5 bg-[#0F172A]/40 flex flex-col justify-between items-center text-center transition-all duration-300 shadow-lg"
          >
            <div className="w-12 h-12 rounded-full bg-[#7B5EA7]/10 flex items-center justify-center text-[#F2A7C3] mb-6">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#94A3B8]/60 font-semibold mb-2">
                {t.contact.email}
              </p>
              <p className="text-base font-semibold text-white mb-6">
                {emailAddress}
              </p>
            </div>
            <button
              onClick={handleCopyEmail}
              className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#F0EBFF] hover:text-[#F2A7C3] transition-colors py-2 px-4 rounded-full border border-white/10 hover:border-[#F2A7C3]/30 bg-white/5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-emerald-400" />
                  <span className="text-emerald-400">{t.contact.copied}</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>{t.contact.copyEmail}</span>
                </>
              )}
            </button>
          </motion.div>

          {/* WhatsApp Connection Card */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(123, 94, 167, 0.4)' }}
            className="p-8 rounded-2xl border border-white/5 bg-[#0F172A]/40 flex flex-col justify-between items-center text-center transition-all duration-300 shadow-lg"
          >
            <div className="w-12 h-12 rounded-full bg-[#3D52A0]/10 flex items-center justify-center text-[#7B5EA7] mb-6">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#94A3B8]/60 font-semibold mb-2">
                {t.contact.whatsapp}
              </p>
              <p className="text-base font-semibold text-white mb-6">
                +57 317 396 7379
              </p>
            </div>
            <a
              href="https://wa.me/573173967379"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#F0EBFF] hover:text-[#7B5EA7] transition-colors py-2 px-4 rounded-full border border-white/10 hover:border-[#7B5EA7]/30 bg-white/5"
            >
              <span>Chat Directo</span>
            </a>
          </motion.div>

        </div>

        {/* Visual feedback toast */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full shadow-2xl flex items-center space-x-2"
            >
              <Check size={12} />
              <span>{language === 'es' ? 'Correo Copiado al Portapapeles' : 'Email Copied to Clipboard'}</span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
