import { motion } from 'motion/react';
import { Target, Heart, Baby, Users, ArrowRight } from 'lucide-react';

const categories = [
  {
    icon: Target,
    title: "Відповідальність і виснаження",
    items: ["тиск відповідальності", "складні рішення", "хвороби дітей та інших близьких", "зрив функціональності в роботі"],
    bgColor: 'bg-card-blue',
    themeColor: '#3E5C7A',
    tabPos: 'left'
  },
  {
    icon: Heart,
    title: "Стосунки",
    items: ["емоційне виснаження", "конфлікти", "ревнощі", "відчуття, що «все тримається на мені»"],
    bgColor: 'bg-card-beige',
    themeColor: '#8C7662',
    tabPos: 'center-left'
  },
  {
    icon: Baby,
    title: "Батьківство і складні ситуації з дітьми",
    items: ["булінг", "самоушкодження", "втрата контакту", "істерики, агресія, конфлікти з вчителями"],
    bgColor: 'bg-card-green',
    themeColor: '#4A6351',
    tabPos: 'center-right'
  },
  {
    icon: Users,
    title: "Майбутні та молоді батьки",
    items: ["пошук здорової структури сім’ї", "страх повторення досвіду власного дитинства", "труднощі з межами та правилами", "як відрізнити любов від дитиноцентричності"],
    bgColor: 'bg-card-yellow',
    themeColor: '#8E7B45',
    tabPos: 'right'
  }
];

interface TimelineCardProps {
  cat: typeof categories[0];
  idx: number;
  key?: number;
}

function TimelineCard({ cat, idx }: TimelineCardProps) {
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
                  sticky md:relative
                  mb-6 md:mb-0
                  ${idx === categories.length - 1 ? 'mb-40 md:mb-0' : ''}
                 `}
      style={{ 
        zIndex: idx + 10,
        top: typeof window !== 'undefined' && window.innerWidth < 768 ? `${100 + idx * 24}px` : undefined
      }}
    >
      <div className={`${cat.bgColor} p-6 md:p-6 lg:p-5 xl:p-10 card-rounded flex flex-col flex-grow shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-black/[0.03] relative z-10 transition-transform duration-500`}>
        {/* Timeline Header */}
        <div className="relative mb-10 lg:mb-8 xl:mb-14 flex items-center justify-between px-1" style={{ color: cat.themeColor }}>
          {/* Connecting Line */}
          <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[1.5px] bg-current opacity-20 z-0" />
          
          {[0, 1, 2, 3].map((pos) => (
            <div 
              key={pos} 
              className={`relative z-10 flex items-center justify-center transition-all duration-500
                ${pos === idx 
                  ? 'w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-white shadow-md border border-black/5' 
                  : `w-4 h-4 xl:w-5 xl:h-5 rounded-full border-2 border-current ${cat.bgColor}`
                }`}
            >
              {pos === idx ? (
                <cat.icon className="w-4 h-4 xl:w-5 xl:h-5" />
              ) : (
                <div className={`w-1 h-1 rounded-full bg-current opacity-20`} />
              )}
            </div>
          ))}
        </div>

        <h4 className="text-xl md:text-lg lg:text-base xl:text-2xl font-semibold mb-6 leading-tight text-brand-ink">
          {cat.title}
        </h4>
        
        <div className="flex flex-wrap gap-2 flex-grow content-start font-normal">
          {cat.items.map((item, i) => (
            <span 
              key={i} 
              className="inline-block px-4 py-2 md:px-3 md:py-1.5 rounded-full border border-black/[0.08] text-[13px] sm:text-sm md:text-[10px] lg:text-[10px] xl:text-[13px] text-brand-ink/90 leading-tight bg-white/40 whitespace-normal text-left break-words"
              style={{ borderColor: `${cat.themeColor}20` }}
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
  return (
    <section id="areas" className="wall-of-text-breaker bg-brand-beige lg:pb-60">
      <div className="content-container">
        <div className="max-w-6xl mb-16 md:mb-24 relative z-50">
           <span className="badge-pill mb-6 inline-block bg-brand-peach text-brand-ink">Напрямки</span>
           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] md:leading-[0.95] text-brand-ink">
              З якими ситуаціями до мене звертаються
           </h2>
           <p className="text-lg md:text-2xl text-brand-muted mt-8 max-w-4xl font-normal leading-relaxed">
              Запити можуть звучати по-різному, але в них повторюється одне: людина багато витримує, намагається контролювати ситуацію - і так раз за разом по колу.
           </p>
        </div>

        {/* Timeline Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-5">
          {categories.map((cat, idx) => (
            <TimelineCard key={idx} cat={cat} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
