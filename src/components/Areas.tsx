import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart, Baby, Users, LucideIcon } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface CategoryConfig {
  icon: LucideIcon;
  bgColor: string;
  themeColor: string;
}

const categoryConfigs: CategoryConfig[] = [
  {
    icon: Target,
    bgColor: 'bg-card-blue',
    themeColor: '#3E5C7A',
  },
  {
    icon: Heart,
    bgColor: 'bg-card-beige',
    themeColor: '#8C7662',
  },
  {
    icon: Baby,
    bgColor: 'bg-card-green',
    themeColor: '#4A6351',
  },
  {
    icon: Users,
    bgColor: 'bg-card-yellow',
    themeColor: '#8E7B45',
  }
];

interface TimelineCardProps {
  key?: React.Key;
  category: {
    title: string;
    items: string[];
  };
  config: CategoryConfig;
  idx: number;
  total: number;
}

function TimelineCard({ category, config, idx, total }: TimelineCardProps) {
  const topClasses = [
    'sticky top-[100px] md:relative md:top-auto',
    'sticky top-[124px] md:relative md:top-auto',
    'sticky top-[148px] md:relative md:top-auto',
    'sticky top-[172px] md:relative md:top-auto'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        delay: idx * 0.1, 
        duration: 1.4, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={`relative group h-full flex flex-col 
                  ${topClasses[idx]}
                  mb-6 md:mb-0
                  ${idx === total - 1 ? 'mb-40 md:mb-0' : ''}
                 `}
      style={{ 
        zIndex: idx + 10
      }}
    >
      <div className={`${config.bgColor} p-6 md:p-6 lg:p-5 xl:p-10 card-rounded flex flex-col flex-grow shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-black/[0.03] relative z-10 transition-transform duration-500`}>
        {/* Timeline Header */}
        <div className="relative mb-10 lg:mb-8 xl:mb-14 flex items-center justify-between px-1" style={{ color: config.themeColor }}>
          {/* Connecting Line */}
          <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[1.5px] bg-current opacity-20 z-0" />
          
          {[0, 1, 2, 3].map((pos) => (
            <div 
              key={pos} 
              className={`relative z-10 flex items-center justify-center transition-all duration-500
                ${pos === idx 
                  ? 'w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-white shadow-md border border-black/5' 
                  : `w-4 h-4 xl:w-5 xl:h-5 rounded-full border-2 border-current ${config.bgColor}`
                }`}
            >
              {pos === idx ? (
                <config.icon className="w-4 h-4 xl:w-5 xl:h-5" />
              ) : (
                <div className={`w-1 h-1 rounded-full bg-current opacity-20`} />
              )}
            </div>
          ))}
        </div>

        <h3 className="text-lg sm:text-xl md:text-lg lg:text-base xl:text-2xl font-semibold mb-4 sm:mb-6 leading-tight text-brand-ink">
          {category.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 flex-grow content-start font-normal">
          {category.items.map((item, i) => (
            <span 
              key={i} 
              className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-3 md:py-1.5 rounded-full border border-black/[0.08] text-[12px] sm:text-[14px] md:text-[11.5px] lg:text-[11px] xl:text-[13px] text-brand-ink/90 leading-tight bg-white/40 whitespace-normal text-left break-words"
              style={{ borderColor: `${config.themeColor}20` }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Areas() {
  const { t } = useLanguage();

  return (
    <section id="areas" className="wall-of-text-breaker bg-brand-beige lg:pb-60">
      <div className="content-container">
        <div className="max-w-6xl mb-12 sm:mb-16 md:mb-24 relative z-50">
           <span className="badge-pill mb-4 sm:mb-6 inline-block bg-brand-peach text-brand-ink">
             {t.areas.badge}
           </span>
           <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] sm:leading-[1.1] md:leading-[0.95] text-brand-ink">
              {t.areas.title}
           </h2>
           <p className="text-base sm:text-lg md:text-2xl text-brand-muted mt-6 sm:mt-8 max-w-4xl font-normal leading-relaxed">
              {t.areas.description}
           </p>
        </div>

        {/* Timeline Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-5">
          {t.areas.categories.map((cat, idx) => (
            <TimelineCard 
              key={idx} 
              category={cat} 
              config={categoryConfigs[idx] || categoryConfigs[0]} 
              idx={idx} 
              total={t.areas.categories.length} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

