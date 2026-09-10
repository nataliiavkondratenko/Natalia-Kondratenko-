import { motion } from 'motion/react';
import { UserCheck, Languages } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function AboutMe() {
  const { t } = useLanguage();

  return (
    <section id="about" className="wall-of-text-breaker bg-white bg-noise overflow-hidden">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="lg:col-span-5 space-y-8 lg:sticky lg:top-32"
          >
            <div className="relative aspect-[4/5] card-rounded overflow-hidden shadow-2xl group">
              <img 
                src="https://res.cloudinary.com/dset5uqua/image/upload/f_auto,q_auto,w_900/v1774450460/ChatGPT_Image_Mar_25_2026_04_54_01_PM_dg110k.png" 
                alt={`${t.about.name.first} ${t.about.name.last}`} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/20 to-transparent opacity-60 pointer-events-none" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-8">
              <div className="space-y-6">
                <span className="badge-pill inline-block bg-brand-peach text-brand-ink uppercase tracking-widest text-[10px] font-bold">
                  {t.about.badge}
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-brand-ink leading-[1]">
                  {t.about.name.first} <br /> {t.about.name.last}
                </h2>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {t.about.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white shadow-sm border border-brand-ink/5 rounded-full text-[11px] sm:text-[12px] uppercase tracking-wider font-medium text-brand-ink/70">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.15] font-medium text-brand-ink tracking-tight pt-2 sm:pt-4">
                {t.about.lead}
              </p>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-brand-ink/80 leading-relaxed font-normal">
                <p>{t.about.paragraphs[0]}</p>
                <p>{t.about.paragraphs[1]}</p>
                <p className="text-brand-ink font-medium">{t.about.paragraphs[2]}</p>
                <p className="italic text-brand-green font-medium">{t.about.paragraphs[3]}</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Info Cards - Full Width Row */}
        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-card-green p-6 sm:p-8 md:p-12 card-rounded shadow-sm border border-brand-ink/5 space-y-5 sm:space-y-6 hover:shadow-md transition-all relative group"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green transition-transform group-hover:scale-110">
                <UserCheck size={20} className="sm:w-6 sm:h-6" />
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold text-brand-ink/75">
                {t.about.standardsTitle}
              </p>
              <p className="text-lg sm:text-xl md:text-[22px] lg:text-[24px] leading-snug text-brand-ink font-medium tracking-tight">
                {t.about.standardsText}
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card-blue p-6 sm:p-8 md:p-12 card-rounded shadow-sm border border-brand-ink/5 space-y-5 sm:space-y-6 hover:shadow-md transition-all relative group"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue transition-transform group-hover:scale-110">
                <Languages size={20} className="sm:w-6 sm:h-6" />
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold text-brand-ink/75">
                {t.about.languagesTitle}
              </p>
              <p className="text-lg sm:text-xl md:text-[22px] lg:text-[24px] leading-snug text-brand-ink font-medium tracking-tight">
                {t.about.languagesText}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

