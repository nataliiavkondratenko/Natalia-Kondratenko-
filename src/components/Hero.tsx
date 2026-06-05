import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenContact: (mode?: 'all' | 'email' | 'messenger') => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-brand-dark flex items-end pt-24 pb-8 md:pb-12">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source 
          src="https://res.cloudinary.com/dset5uqua/video/upload/v1776692549/%D0%9D%D0%B0%D1%82%D0%B0%D1%88%D0%B0_%D0%B2%D0%BE%D0%B7%D0%BB%D0%B5_%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D0%B0_ywihpy.mp4" 
          type="video/mp4" 
        />
        <source 
          src="https://res.cloudinary.com/dset5uqua/video/upload/v1776692549/%D0%9D%D0%B0%D1%82%D0%B0%D1%88%D0%B0_%D0%B2%D0%BE%D0%B7%D0%BB%D0%B5_%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D0%B0_ywihpy.webm" 
          type="video/webm" 
        />
      </video>
      
      {/* Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      <div className="content-container relative z-10 w-full flex flex-col justify-end pb-8 md:pb-32 lg:pb-44">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-end">
          {/* Title, Description and Actions */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 md:space-y-8 max-w-3xl"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[5rem] leading-[1.1] md:leading-[0.95] text-white font-medium tracking-tight">
                Коли звичні способи <br className="hidden sm:block" /> перестають працювати
              </h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl space-y-8 md:space-y-12"
              >
                <div className="space-y-2">
                  <p className="text-white/90 text-lg md:text-2xl font-normal leading-tight italic">
                    Інтелект не рятує. <br />
                    Контроль більше не дає результату.
                  </p>
                  <p className="text-white text-xl md:text-3xl font-medium tracking-tight">
                    З цього ми й починаємо роботу.
                  </p>
                </div>

                <p className="text-white/80 text-base md:text-xl font-normal leading-snug max-w-xl">
                  Індивідуальна психотерапія та консультації <br className="hidden md:block" /> 
                  у психоаналітичному підході
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-5 w-full"
                >
                  <button 
                    onClick={() => onOpenContact('all')}
                    className="btn-pill !bg-brand-green !text-white group w-full sm:w-auto sm:min-w-[280px] flex justify-between items-center py-4 px-6 sm:px-8 border-none shadow-xl shadow-black/20"
                  >
                     <span className="text-[12px] sm:text-[13px] uppercase tracking-wider font-bold text-left">ОБГОВОРИТИ СВІЙ ЗАПИТ</span>
                     <div className="ml-3 sm:ml-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-brand-green transition-all shrink-0">
                        <ArrowUpRight className="w-5 h-5" />
                     </div>
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Glass Bar / Marquee */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-20 backdrop-blur-md bg-white/5 border-t border-white/10 overflow-hidden py-4"
      >
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap"
        >
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-bold text-white/50 flex items-center gap-8 px-4">
              психоаналітичний підхід <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
              професійна етика <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
              конфіденційність <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
