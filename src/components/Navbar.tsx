'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -85; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['about', 'skills', 'painting', 'branding', 'photography', 'advertising', 'social-media', 'contact'];
      const scrollPosition = window.scrollY + 130;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'painting', label: t.nav.painting },
    { id: 'branding', label: t.nav.branding },
    { id: 'photography', label: t.nav.photography },
    { id: 'advertising', label: t.nav.advertising },
    { id: 'social-media', label: t.nav.socialMedia },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0B1020]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo / Brand Name */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif text-lg md:text-xl font-bold tracking-[0.25em] text-white hover:text-[#F2A7C3] transition-colors uppercase"
          >
            LAURA CAMILA
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <ul className="flex space-x-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#94A3B8]">
              {navItems.map((item) => (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`hover:text-white transition-colors py-1 cursor-pointer ${
                      activeSection === item.id ? 'text-white' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#F2A7C3]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              ))}
            </ul>

            {/* Language Toggle */}
            <div className="h-4 w-[1px] bg-white/10" />
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#94A3B8] hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/10 hover:border-[#F2A7C3]/30"
            >
              <Globe size={11} className="text-[#F2A7C3]" />
              <span>{language === 'es' ? 'ES' : 'EN'}</span>
            </button>

            {/* CV Download Link */}
            <div className="h-4 w-[1px] bg-white/10" />
            
            <a
              href="/documents/laura-cv.pdf"
              download="Laura_Camila_CV.pdf"
              className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#94A3B8] hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/10 hover:border-[#F2A7C3]/30 cursor-pointer"
            >
              CV
            </a>
          </div>

          {/* Mobile/Tablet Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-[10px] font-semibold px-2 py-1 rounded-full border border-white/15 text-[#94A3B8]"
            >
              <Globe size={11} className="text-[#F2A7C3]" />
              <span>{language === 'es' ? 'ES' : 'EN'}</span>
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0B1020]/98 z-40 lg:hidden flex flex-col justify-center items-center backdrop-blur-lg"
          >
            {/* Close Button Inside Drawer top right */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={24} />
            </button>

            <ul className="flex flex-col space-y-8 text-center text-lg font-serif tracking-widest text-[#F0EBFF] mb-8">
              {navItems.map((item) => (
                <motion.li
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  key={item.id}
                  transition={{ delay: 0.05 }}
                >
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`hover:text-[#F2A7C3] transition-colors ${
                      activeSection === item.id ? 'underline underline-offset-8 decoration-[#F2A7C3] text-white font-semibold' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
