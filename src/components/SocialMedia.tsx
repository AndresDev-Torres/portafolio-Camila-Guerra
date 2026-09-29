'use client';

import React, { useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Maximize2 } from 'lucide-react';
import { Lightbox } from './Lightbox';

type MediaItem = { src: string; video?: boolean; link?: string; alt: string };
const base = '/Portafolio%20procesos';
const photos: MediaItem[] = Array.from({ length: 16 }, (_, index) => ({ src: `${base}/Fotos/foto${index + 1}.JPG`, alt: 'Fotografía para redes sociales' }));
const posts: MediaItem[] = Array.from({ length: 9 }, (_, index) => ({
  src: `${base}/Post/post${index + 1}.${index === 5 || index === 8 ? 'mp4' : 'jpg'}`,
  video: index === 5 || index === 8,
  alt: 'Pieza de contenido para redes sociales',
}));
const reels: MediaItem[] = [
  { src: `${base}/Reels/reel1.png`, alt: 'Portada de video de Instagram', link: 'https://www.instagram.com/reel/DddGh31iRaC/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
  { src: `${base}/Reels/reel2.png`, alt: 'Portada de video de Instagram', link: 'https://www.instagram.com/reel/DdvF3V-h95d/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
  { src: `${base}/Reels/reel3.png`, alt: 'Portada de video de Instagram', link: 'https://www.instagram.com/reel/Dcr25xkDLMd/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
  { src: `${base}/Reels/reel4.png`, alt: 'Portada de video de Instagram', link: 'https://www.instagram.com/reel/Ddpwzn9DD1f/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
];

type Mode = 'strip' | 'feature' | 'deck';

function MediaCard({ item, onOpen, reelsMode = false }: { item: MediaItem; onOpen: () => void; reelsMode?: boolean }) {
  const { t } = useLanguage();
  return (
    <div className="group">
      <button type="button" onClick={onOpen} aria-label={t.painting.viewFullscreen} className={`relative block w-full overflow-hidden rounded-xl border border-white/10 bg-[#0B1020] shadow-xl cursor-zoom-in ${reelsMode ? 'aspect-[9/16]' : 'aspect-[4/5]'}`}>
        {item.video
          ? <video src={item.src} autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover" aria-label={item.alt} />
          : <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />}
        <span className="absolute inset-0 flex items-center justify-center bg-[#0B1020]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[1px]">
          <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/15"><Maximize2 size={16} /></span>
        </span>
      </button>
      {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.13em] font-semibold text-[#F2A7C3] hover:text-white transition-colors">{t.socialMedia.viewReel}<ExternalLink size={12} /></a>}
    </div>
  );
}

function MediaCarousel({ title, items, mode }: { title: string; items: MediaItem[]; mode: Mode }) {
  const { t } = useLanguage();
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);
  const move = (direction: -1 | 1) => {
    if (mode === 'strip') {
      track.current?.scrollBy({ left: direction * (track.current.clientWidth * .78), behavior: 'smooth' });
      return;
    }
    setIndex((current) => (current + direction + items.length) % items.length);
  };

  return (
    <div className="mb-16 last:mb-0">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-serif text-xl md:text-2xl text-white">{title}</h3>
        <div className="flex gap-2">
          <button type="button" onClick={() => move(-1)} aria-label={t.socialMedia.previous} className="w-9 h-9 rounded-full border border-white/10 text-[#F2A7C3] hover:bg-white/5 flex items-center justify-center"><ArrowLeft size={16} /></button>
          <button type="button" onClick={() => move(1)} aria-label={t.socialMedia.next} className="w-9 h-9 rounded-full border border-white/10 text-[#F2A7C3] hover:bg-white/5 flex items-center justify-center"><ArrowRight size={16} /></button>
        </div>
      </div>

      {mode === 'strip' && (
        <div ref={track} className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 [scrollbar-width:thin] [scrollbar-color:rgba(123,94,167,.5)_transparent]">
          {items.map((item, itemIndex) => <motion.div key={item.src} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: Math.min(itemIndex * .035, .2) }} className="snap-start shrink-0 w-[78%] sm:w-[48%] md:w-[32%] lg:w-[24%]"><MediaCard item={item} onOpen={() => setLightbox(item)} /></motion.div>)}
        </div>
      )}

      {mode === 'feature' && (
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/5 bg-[#0B1020]/50 p-3 sm:p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-8">
            <AnimatePresence mode="wait">
              <motion.div key={index} initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -35 }} transition={{ duration: .3 }}>
                <MediaCard item={items[index]} onOpen={() => setLightbox(items[index])} />
              </motion.div>
            </AnimatePresence>
            <div className="px-3 md:px-5 py-3 md:py-6">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#F2A7C3] font-semibold">{t.socialMedia.posts}</span>
              <p className="font-serif text-2xl sm:text-3xl text-white mt-3">{t.socialMedia.subtitle}</p>
              <div className="mt-6 flex gap-2" aria-label={t.socialMedia.posts}>
                {items.map((item, dotIndex) => <button key={item.src} type="button" onClick={() => setIndex(dotIndex)} aria-label={t.socialMedia.posts} className={`h-1 rounded-full transition-all ${dotIndex === index ? 'w-8 bg-[#F2A7C3]' : 'w-3 bg-white/20 hover:bg-white/50'}`} />)}
              </div>
            </div>
          </div>
        </div>
      )}

      {mode === 'deck' && (
        <div className="flex flex-col items-center overflow-hidden py-3">
          <div className="relative flex items-center justify-center w-full max-w-3xl min-h-[min(112vw,610px)] sm:min-h-[590px]">
            {[-1, 0, 1].map((offset) => {
              const itemIndex = (index + offset + items.length) % items.length;
              const item = items[itemIndex];
              return <motion.div key={`${item.src}-${offset}`} animate={{ x: offset * 190, scale: offset === 0 ? 1 : .78, opacity: offset === 0 ? 1 : .38, zIndex: offset === 0 ? 10 : 0 }} transition={{ duration: .35 }} className={`absolute w-[min(62vw,250px)] sm:w-[250px] ${offset === 0 ? 'drop-shadow-[0_22px_55px_rgba(0,0,0,.55)]' : 'pointer-events-none'}`}>
                {offset === 0 ? <MediaCard item={item} onOpen={() => setLightbox(item)} reelsMode /> : <div className="aspect-[9/16] rounded-xl overflow-hidden border border-white/10"><img src={item.src} alt="" className="w-full h-full object-cover" /></div>}
              </motion.div>;
            })}
          </div>
          <div className="flex gap-2 mt-4">{items.map((item, dotIndex) => <button key={item.src} type="button" onClick={() => setIndex(dotIndex)} aria-label={t.socialMedia.reels} className={`h-1 rounded-full transition-all ${dotIndex === index ? 'w-8 bg-[#F2A7C3]' : 'w-3 bg-white/20 hover:bg-white/50'}`} />)}</div>
        </div>
      )}

      <Lightbox src={lightbox?.src ?? null} title={lightbox?.alt} category={title} isVideo={lightbox?.video} onClose={() => setLightbox(null)} />
    </div>
  );
}

export const SocialMedia: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="social-media" className="py-24 md:py-36 bg-[#0F172A] px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="absolute top-1/3 right-[-12%] w-[34rem] h-[34rem] rounded-full bg-[#7B5EA7]/5 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16 md:mb-20 max-w-3xl border-b border-white/5 pb-8">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#F2A7C3] mb-4 block">{t.nav.socialMedia}</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">{t.socialMedia.title}</h2>
          <h3 className="font-serif text-xl md:text-2xl text-[#F2A7C3] mt-3">Terrazas del cielo - Hospedaje</h3>
          <p className="text-sm md:text-base text-[#94A3B8] mt-4 font-light leading-relaxed">{t.socialMedia.subtitle}</p>
        </div>
        <MediaCarousel title={t.socialMedia.photos} items={photos} mode="strip" />
        <MediaCarousel title={t.socialMedia.posts} items={posts} mode="feature" />
        <MediaCarousel title={t.socialMedia.reels} items={reels} mode="deck" />
      </div>
    </section>
  );
};
