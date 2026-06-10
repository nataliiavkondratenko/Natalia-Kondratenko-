import { motion } from 'motion/react';
import { ArrowUpRight, AlertCircle, UserCheck, Baby, Sparkles, CheckCircle2, Info, Handshake, Clock, ClipboardCheck, Globe } from 'lucide-react';

interface ApproachProps {
  onOpenContact: (mode?: 'all' | 'email' | 'messenger') => void;
}

export default function Approach({ onOpenContact }: ApproachProps) {
  const steps = [
    {
      label: "Формат",
      title: "3-4 індивідуальні зустрічі",
      description: "Кількість і частота зустрічей обговорюються індивідуально. Стандартна тривалість - 50 хвилин.",
      color: "bg-[#EEF2F6]",
      accent: "text-[#4A6D88]",
      iconBg: "bg-[#4A6D88]/10"
    },
    {
      label: "Що відбувається",
      title: "Розмова про вашу ситуацію",
      description: "Ви розповідаєте про те, що вас привело, і ми разом дивимось, що саме турбує і як це вбудовано в ваше життя.",
      color: "bg-[#EEF3EE]",
      accent: "text-[#5B755B]",
      iconBg: "bg-[#5B755B]/10"
    },
    {
      label: "Що стає зрозуміліше",
      title: "Прояснення тем і запиту",
      description: "Розуміємо, що саме призвело до звернення, які теми повторюються та чи підходить вам така форма роботи.",
      color: "bg-[#F8F0E6]",
      accent: "text-[#8A6D5D]",
      iconBg: "bg-[#8A6D5D]/10"
    },
    {
      label: "Що далі",
      title: "Рішення про продовження",
      description: "Стає зрозуміліше, чи починати регулярну терапію, зробити паузу, або завершити на цьому етапі.",
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
                <span className="badge-pill inline-block bg-brand-peach text-brand-ink uppercase text-[10px] tracking-widest font-bold">Процес</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-brand-ink leading-[1.1] md:leading-[0.95]">
                  Кілька <br /> перших <br /> зустрічей
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl text-brand-ink font-medium leading-tight">
                    Думка про психотерапію з’являється. Але незрозуміло, з чого почати, та чи варто.
                  </p>
                  <p className="text-lg text-brand-muted leading-relaxed">
                    Можна почати з кількох перших розмов, щоб проаналізувати свою ситуацію і вирішити, чи хочете ви продовжити роботу.
                  </p>
                </div>

                <div className="pt-6 space-y-6">
                  <button 
                    onClick={() => onOpenContact('all')}
                    className="btn-pill !bg-[#617B5F] !text-white group w-full sm:w-auto sm:min-w-[280px] flex justify-between items-center py-4 px-5 sm:px-8 border-none shadow-xl shadow-brand-ink/10 transition-all active:scale-95"
                  >
                     <span className="text-[12px] sm:text-[13px] uppercase tracking-wider font-bold text-left leading-tight">Можемо почати з однієї розмови</span>
                     <div className="ml-3 sm:ml-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#617B5F] transition-all shrink-0">
                        <ArrowUpRight className="w-5 h-5" />
                     </div>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Numbered Steps */}
            <div className="relative space-y-6 overflow-visible">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`
                    group relative p-8 md:p-12 card-rounded
                    ${step.color} border border-brand-ink/[0.03]
                    shadow-sm overflow-hidden
                  `}
                >
                  <div className="relative z-10 flex flex-col md:flex-row gap-8 md:items-start">
                    {/* Step Number */}
                    <div className="shrink-0">
                      <div className={`w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                        <span className={`text-2xl font-bold ${step.accent}`}>0{i + 1}</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <span className={`text-[10px] uppercase tracking-[0.2em] font-extrabold ${step.accent} opacity-70`}>
                          {step.label}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-ink tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-lg md:text-xl text-brand-ink/80 leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative background number */}
                  <span className="absolute -bottom-10 -right-4 text-[12rem] font-bold text-brand-ink/[0.03] select-none pointer-events-none group-hover:text-brand-ink/[0.05] transition-colors duration-700">
                    {i + 1}
                  </span>
                </motion.div>
              ))}

              {/* Summary note */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 md:p-12 bg-white text-brand-ink card-rounded relative overflow-hidden border border-brand-ink/5 shadow-xl shadow-brand-ink/5"
              >
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-peach rounded-full animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/50">Для кого це</span>
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed opacity-90 italic font-medium">
                    Цей формат підходить, якщо ви вагаєтесь, чи варто починати терапію, але хочете розібратися з тим, що відбувається, і дати собі можливість спробувати.
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
      <div className="bg-white border-y border-brand-ink/5 overflow-hidden py-4 -mt-px relative z-10">
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
            <span key={i} className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted/40 flex items-center gap-8 px-4">
              психоаналітичний підхід <span className="w-1.5 h-1.5 rounded-full bg-brand-peach/40 shrink-0" />
              професійна етика <span className="w-1.5 h-1.5 rounded-full bg-brand-peach/40 shrink-0" />
              конфіденційність <span className="w-1.5 h-1.5 rounded-full bg-brand-peach/40 shrink-0" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Process & Logistics */}
      <section className="relative min-h-[90svh] w-full overflow-hidden flex items-center py-[100px] md:py-[160px] lg:py-[200px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dset5uqua/image/upload/v1778163719/ChatGPT_Image_May_7_2026_05_21_36_PM_d1ku6p.webp" 
            alt="Океан" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="content-container relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-20 md:space-y-28"
            >
              <div className="space-y-6 md:space-y-8">
                <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white uppercase leading-[1.1] md:leading-[0.95] tracking-tight">
                  Щоб не ускладнювати <br className="hidden md:block" /> те, що і так складно
                </h3>
                <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Я приділяю увагу не тільки самій роботі, а й тому, щоб вона була організована передбачувано і надійно.
                </p>
              </div>

              {/* Steps with Arrows */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 items-stretch max-w-6xl mx-auto"
              >
                {/* Step 1 */}
                <div className="sticky top-24 md:relative md:top-0">
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="group p-8 md:p-12 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 text-white flex flex-col items-center justify-start min-h-[320px] md:min-h-[380px] text-center h-full shadow-2xl transition-all duration-500 hover:bg-white/10"
                  >
                    <div className="w-20 h-20 bg-[#DDE7EE] rounded-3xl flex items-center justify-center mb-6 shadow-lg shrink-0 border-4 border-white/5 group-hover:scale-110 transition-transform duration-500">
                      <Clock className="w-10 h-10 text-[#4A6D8C]" />
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-lg md:text-xl leading-relaxed text-white font-normal opacity-90">
                        Ми домовляємося про стабільний час і будуємо роботу послідовно.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 2 */}
                <div className="sticky top-28 md:relative md:top-0">
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="group p-8 md:p-12 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 text-white flex flex-col items-center justify-start min-h-[320px] md:min-h-[380px] text-center h-full shadow-2xl transition-all duration-500 hover:bg-white/10"
                  >
                    <div className="w-20 h-20 bg-[#E4E9E2] rounded-3xl flex items-center justify-center mb-6 shadow-lg shrink-0 border-4 border-white/5 group-hover:scale-110 transition-transform duration-500">
                      <ClipboardCheck className="w-10 h-10 text-[#5D7052]" />
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-lg md:text-xl leading-relaxed text-white font-normal opacity-90">
                        Запис, оплату і формат ми узгоджуємо наперед, і це не створює додаткового навантаження в процесі.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 3 */}
                <div className="sticky top-32 md:relative md:top-0">
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="group p-8 md:p-12 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 text-white flex flex-col items-center justify-start min-h-[320px] md:min-h-[380px] text-center h-full shadow-2xl transition-all duration-500 hover:bg-white/10"
                  >
                    <div className="w-20 h-20 bg-[#F0E7DE] rounded-3xl flex items-center justify-center mb-6 shadow-lg shrink-0 border-4 border-white/5 group-hover:scale-110 transition-transform duration-500">
                      <Globe className="w-10 h-10 text-[#8B7361]" />
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-lg md:text-xl leading-relaxed text-white font-normal opacity-90">
                        Я працюю з клієнтами з різних країн, тому пропоную зручні способи оплати без зайвих технічних складнощів.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12"
              >
                <p className="text-xl md:text-2xl text-white font-medium italic">
                  Це дозволяє зосередитися на тому, заради чого ви приходите.
                </p>
                
                <div className="flex justify-center">
                  <button 
                    onClick={() => onOpenContact('all')}
                    className="btn-pill !bg-[#617B5F] !text-white group w-full sm:w-auto sm:min-w-[320px] flex justify-between items-center py-5 px-6 sm:px-10 border-none shadow-2xl shadow-black/40 transition-all active:scale-95"
                  >
                     <span className="text-[12px] sm:text-[13px] uppercase tracking-widest font-bold text-left leading-tight">Можемо почати з однієї розмови</span>
                     <div className="ml-3 sm:ml-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#617B5F] transition-all shrink-0">
                        <ArrowUpRight className="w-5 h-5" />
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
