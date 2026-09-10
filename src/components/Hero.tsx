import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface HeroProps {
  onOpenContact: (mode?: 'all' | 'email' | 'messenger') => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const { t, language } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videoPoster = "https://res.cloudinary.com/dset5uqua/video/upload/so_0,q_auto,f_auto,w_1280/v1776692549/%D0%9D%D0%B0%D1%82%D0%B0%D1%88%D0%B0_%D0%B2%D0%BE%D0%B7%D0%BB%D0%B5_%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D0%B0_ywihpy.jpg";

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-brand-dark flex items-end pt-24 pb-8 md:pb-12">
      {/* Background Poster / Fallback Image */}
      <img
        src={videoPoster}
        alt="Natalia Kondratenko ocean backdrop"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoLoaded ? 'opacity-0' : 'opacity-60'
        }`}
        loading="eager"
        decoding="async"
      />

      {/* Background Video with Auto-Optimization */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={videoPoster}
        onLoadedData={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out will-change-opacity ${
          videoLoaded ? 'opacity-60' : 'opacity-0'
        }`}
      >
        <source 
          src="https://res.cloudinary.com/dset5uqua/video/upload/q_auto,vc_auto,w_1280/v1776692549/%D0%9D%D0%B0%D1%82%D0%B0%D1%88%D0%B0_%D0%B2%D0%BE%D0%B7%D0%BB%D0%B5_%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D0%B0_ywihpy.mp4" 
          type="video/mp4" 
        />
        <source 
          src="https://res.cloudinary.com/dset5uqua/video/upload/v1776692549/%D0%9D%D0%B0%D1%82%D0%B0%D1%88%D0%B0_%D0%B2%D0%BE%D0%B7%D0%BB%D0%B5_%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D0%B0_ywihpy.mp4" 
          type="video/mp4" 
        />
        <track 
          kind="captions" 
          src="data:text/vtt,WEBVTT" 
          srcLang={language === 'ua' ? 'uk' : language} 
          label="Video background caption (no sound)" 
          default 
        />
      </video>
      
      {/* Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

      <div className="content-container relative z-10 w-full flex flex-col justify-end pb-8 md:pb-32 lg:pb-44">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-end">
          {/* Title, Description and Actions */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 md:space-y-8 max-w-3xl"
            >
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[5rem] leading-[1.15] sm:leading-[1.1] md:leading-[0.95] text-white font-medium tracking-tight break-words">
                {t.hero.title.line1} <br className="hidden sm:block" /> {t.hero.title.line2}
              </h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl space-y-6 sm:space-y-8 md:space-y-12"
              >
                <div className="space-y-2">
                  <p className="text-white text-base sm:text-lg md:text-2xl font-normal leading-snug italic">
                    {t.hero.insight} <br />
                    {t.hero.control}
                  </p>
                  <p className="text-white text-lg sm:text-xl md:text-3xl font-medium tracking-tight pt-1">
                    {t.hero.start}
                  </p>
                </div>

                <p className="text-white/95 text-sm sm:text-base md:text-xl font-normal leading-relaxed max-w-xl">
                  {t.hero.description.line1} <br className="hidden md:block" /> 
                  {t.hero.description.line2}
                </p>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-5 w-full pt-2">
                  <button 
                    onClick={() => onOpenContact('all')}
                    className="btn-pill !bg-brand-green !text-white group w-full sm:w-auto sm:min-w-[280px] flex justify-between items-center py-3.5 sm:py-4 px-5 sm:px-8 border-none shadow-xl shadow-black/20"
                  >
                     <span className="text-[11px] sm:text-[13px] uppercase tracking-wider font-bold text-left">{t.hero.cta}</span>
                     <div className="ml-3 sm:ml-4 w-9 h-9 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-brand-green transition-all shrink-0">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                     </div>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Glass Bar / Marquee */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-20 bg-black/30 backdrop-blur-sm border-t border-white/10 overflow-hidden py-3.5"
      >
        <motion.div 
          animate={{ x: [0, -600] }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap will-change-transform"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <span key={i} className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-bold text-white/80 flex items-center gap-6 md:gap-8 px-3 md:px-4">
              {t.hero.marquee[0]} <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
              {t.hero.marquee[1]} <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
              {t.hero.marquee[2]} <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

