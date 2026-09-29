'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LightboxProps {
  src: string | null;
  title?: string;
  category?: string;
  isVideo?: boolean;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ src, title, category, isVideo = false, onClose }) => {
  // Listen for Escape key to close the lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-6 md:p-10 cursor-zoom-out"
          onClick={onClose}
        >
          {/* Top Panel: Monogram branding and Close button */}
          <div className="flex justify-between items-center w-full max-w-7xl mx-auto z-10">
            <div className="text-left select-none pointer-events-none">
              {category && (
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#F2A7C3] font-semibold block">
                  {category}
                </span>
              )}
              <span className="text-[9px] uppercase tracking-widest text-[#94A3B8]/40">
                Laura Camila Studio
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 hover:text-[#F2A7C3] transition-colors cursor-pointer border border-white/5"
              aria-label="Close fullscreen"
            >
              <X size={18} />
            </button>
          </div>

          {/* Central Image Container (Contained and Uncropped) */}
          <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[75vh] md:max-h-[80vh] max-w-full rounded-lg overflow-hidden shadow-2xl bg-black/40 border border-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              {isVideo ? (
                <video src={src} controls autoPlay playsInline className="max-h-[75vh] md:max-h-[80vh] max-w-full object-contain mx-auto" aria-label={title || 'Video'} />
              ) : (
                <img
                  src={src}
                  alt={title || 'Visual Artwork'}
                  className="max-h-[75vh] md:max-h-[80vh] w-auto object-contain mx-auto"
                />
              )}
            </motion.div>
          </div>

          {/* Bottom Information Panel */}
          {title && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="w-full max-w-4xl mx-auto text-center z-10 select-none pointer-events-none pb-2"
            >
              <h3 className="font-serif text-lg md:text-2xl text-white font-bold tracking-wide">
                {title}
              </h3>
              <p className="text-[9px] uppercase tracking-widest text-[#94A3B8]/50 mt-1.5">
                Click anywhere to return to portfolio
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
