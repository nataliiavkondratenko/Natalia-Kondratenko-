import { motion } from 'motion/react';
import { ArrowUpRight, Clock, ClipboardCheck, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface ApproachProps {
  onOpenContact: (mode?: 'all' | 'email' | 'messenger') => void;
}

export default function Approach({ onOpenContact }: ApproachProps) {
  const { t } = useLanguage();

  const stepStyles = [
    {
      color: "bg-[#EEF2F6]",
      accent: "text-[#4A6D88]",
      iconBg: "bg-[#4A6D88]/10"
    },
    {
      color: "bg-[#EEF3EE]",
      accent: "text-[#5B755B]",
      iconBg: "bg-[#5B755B]/10"
    },
    {
      color: "bg-[#F8F0E6]",
      accent: "text-[#8A6D5D]",
      iconBg: "bg-[#8A6D5D]/10"
    },
    {
      color: "bg-[#FBFAEE]",
      accent: "text-[#9A8D5F]",
      iconBg: "bg-[#9A8D5F]/10"
    }
  ];

  return (
    <div id="approach" className="space-y-0">
      {/* First Conversations - Steps Layout */}
      <section className="wall-of-text-breaker bg-white overflow-visible">
        <div className="content-container">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
            {/* Left Column: Title & Intro */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10 lg:sticky lg:top-32"
            >
              <div className="space-y-6">
                <span className="badge-pill inline-block bg-brand-peach text-brand-ink uppercase text-[10px] tracking-widest font-bold">
                  {t.process.badge}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-brand-ink leading-[1.1] md:leading-[0.95]">
                  {t.process.title.line1} <br /> {t.process.title.line2} <br /> {t.process.title.line3}
                </h2>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-lg sm:text-xl md:text-2xl text-brand-ink font-medium leading-snug">
                    {t.process.intro1}
                  </p>
                  <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
                    {t.process.intro2}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 space-y-6">
                  <button 
                    onClick={() => onOpenContact('all')}
                    className="btn-pill !bg-[#617B5F] !text-white group w-full sm:w-auto sm:min-w-[280px] flex justify-between items-center py-3.5 sm:py-4 px-5 sm:px-8 border-none shadow-xl shadow-brand-ink/10 transition-all active:scale-95"
                  >
                     <span className="text-[11px] sm:text-[13px] uppercase tracking-wider font-bold text-left leading-tight">
                       {t.process.ctaButton}
                     </span>
                     <div className="ml-3 sm:ml-4 w-9 h-9 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#617B5F] transition-all shrink-0">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                     </div>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Numbered Steps */}
            <div className="relative space-y-5 sm:space-y-6 overflow-visible">
              {t.process.steps.map((step, i) => {
                const style = stepStyles[i] || stepStyles[0];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className={`
                      group relative p-6 sm:p-8 md:p-12 card-rounded
                      ${style.color} border border-brand-ink/[0.03]
                      shadow-sm overflow-hidden
                    `}
                  >
                    <div className="relative z-10 flex flex-col md:flex-row gap-5 sm:gap-8 md:items-start">
                      {/* Step Number */}
                      <div className="shrink-0">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 ${style.iconBg} rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                          <span className={`text-xl sm:text-2xl font-bold ${style.accent}`}>0{i + 1}</span>
                          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="space-y-3 sm:space-y-4">
                        <div className="space-y-1">
                          <span className={`text-[10px] uppercase tracking-[0.2em] font-extrabold ${style.accent} opacity-70`}>
                            {step.label}
                          </span>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink tracking-tight">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-base sm:text-lg md:text-xl text-brand-ink/80 leading-relaxed max-w-xl">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Decorative background number */}
                    <span className="absolute -bottom-10 -right-4 text-[10rem] sm:text-[12rem] font-bold text-brand-ink/[0.03] select-none pointer-events-none group-hover:text-brand-ink/[0.05] transition-colors duration-700">
                      {i + 1}
                    </span>
                  </motion.div>
                );
              })}

              {/* Summary note */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 md:p-12 bg-white text-brand-ink card-rounded relative overflow-hidden border border-brand-ink/5 shadow-xl shadow-brand-ink/5"
              >
                <div className="relative z-10 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-peach rounded-full animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/75">
                      {t.process.forWhomLabel}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90 italic font-medium">
                    {t.process.forWhomText}
                  </p>
                </div>
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-peach/10 rounded-full blur-[100px] -mr-32 -mt-32" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Marquee */}
      <div className="bg-white border-y border-brand-ink/5 overflow-hidden py-3.5 -mt-px relative z-10">
        <motion.div 
          animate={{ x: [0, -600] }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap will-change-transform"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <span key={i} className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted/70 flex items-center gap-6 md:gap-8 px-3 md:px-4">
              {t.process.marquee[0]} <span className="w-1.5 h-1.5 rounded-full bg-brand-peach/40 shrink-0" />
              {t.process.marquee[1]} <span className="w-1.5 h-1.5 rounded-full bg-brand-peach/40 shrink-0" />
              {t.process.marquee[2]} <span className="w-1.5 h-1.5 rounded-full bg-brand-peach/40 shrink-0" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Process & Logistics */}
      <section className="relative min-h-[90svh] w-full overflow-hidden flex items-center py-16 sm:py-24 md:py-[140px] lg:py-[180px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dset5uqua/image/upload/f_auto,q_auto,w_1440/v1778163719/ChatGPT_Image_May_7_2026_05_21_36_PM_d1ku6p.webp" 
            alt="Ocean landscape" 
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        </div>

        <div className="content-container relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12 sm:space-y-16 md:space-y-28"
            >
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-white uppercase leading-[1.15] sm:leading-[1.1] md:leading-[0.95] tracking-tight">
                  {t.process.logistics.title.line1} <br className="hidden md:block" /> {t.process.logistics.title.line2}
                </h2>
                <p className="text-base sm:text-lg md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
                  {t.process.logistics.subtitle}
                </p>
              </div>

              {/* Steps with Icons */}
              <div 
                className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto"
              >
                {/* Step 1 */}
                <div className="sticky top-24 md:relative md:top-0">
                  <div 
                    className="group p-6 sm:p-8 md:p-12 bg-white/10 backdrop-blur-md rounded-[2rem] sm:rounded-[2.5rem] border border-white/15 text-white flex flex-col items-center justify-start min-h-[240px] sm:min-h-[280px] md:min-h-[360px] text-center h-full shadow-2xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#DDE7EE] rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shrink-0 border-4 border-white/5 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#4A6D8C]" />
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white font-normal opacity-90">
                        {t.process.logistics.cards[0]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="sticky top-28 md:relative md:top-0">
                  <div 
                    className="group p-6 sm:p-8 md:p-12 bg-white/10 backdrop-blur-md rounded-[2rem] sm:rounded-[2.5rem] border border-white/15 text-white flex flex-col items-center justify-start min-h-[240px] sm:min-h-[280px] md:min-h-[360px] text-center h-full shadow-2xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#E4E9E2] rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shrink-0 border-4 border-white/5 group-hover:scale-110 transition-transform duration-300">
                      <ClipboardCheck className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#5D7052]" />
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white font-normal opacity-90">
                        {t.process.logistics.cards[1]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="sticky top-32 md:relative md:top-0">
                  <div 
                    className="group p-6 sm:p-8 md:p-12 bg-white/10 backdrop-blur-md rounded-[2rem] sm:rounded-[2.5rem] border border-white/15 text-white flex flex-col items-center justify-start min-h-[240px] sm:min-h-[280px] md:min-h-[360px] text-center h-full shadow-2xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#F0E7DE] rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shrink-0 border-4 border-white/5 group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#8B7361]" />
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white font-normal opacity-90">
                        {t.process.logistics.cards[2]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8 sm:space-y-12"
              >
                <p className="text-lg sm:text-xl md:text-2xl text-white font-medium italic">
                  {t.process.logistics.bottomNote}
                </p>
                
                <div className="flex justify-center">
                  <button 
                    onClick={() => onOpenContact('all')}
                    className="btn-pill !bg-[#617B5F] !text-white group w-full sm:w-auto sm:min-w-[320px] flex justify-between items-center py-4 sm:py-5 px-5 sm:px-10 border-none shadow-2xl shadow-black/40 transition-all active:scale-95"
                  >
                     <span className="text-[11px] sm:text-[13px] uppercase tracking-widest font-bold text-left leading-tight">
                       {t.process.logistics.ctaButton}
                     </span>
                     <div className="ml-3 sm:ml-4 w-9 h-9 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#617B5F] transition-all shrink-0">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                     </div>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

