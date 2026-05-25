import { motion } from 'motion/react';
import { UserCheck, Languages } from 'lucide-react';

export default function AboutMe() {
  return (
    <section id="about" className="wall-of-text-breaker bg-white bg-noise overflow-hidden">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 space-y-8 lg:sticky lg:top-32"
          >
            <div className="relative aspect-[4/5] card-rounded overflow-hidden shadow-2xl group">
              <img 
                src="https://res.cloudinary.com/dset5uqua/image/upload/v1774450460/ChatGPT_Image_Mar_25_2026_04_54_01_PM_dg110k.png" 
                alt="Наталія Кондратенко" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/20 to-transparent opacity-60" />
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
                <span className="badge-pill inline-block bg-brand-peach text-brand-ink uppercase tracking-widest text-[10px] font-bold">Про мене</span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-brand-ink leading-[0.9]">
                  Наталія <br /> Кондратенко
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {['Магістр клінічної психології', 'Регулярна супервізія', 'Власний психоаналіз'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white shadow-sm border border-brand-ink/5 rounded-full text-[12px] uppercase tracking-wider font-medium text-brand-ink/70">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-2xl md:text-3xl lg:text-4xl leading-[1.1] font-medium text-brand-ink tracking-tight pt-4">
                Я - клінічний психолог і психотерапевт у психоаналітичному підході
              </p>
              
              <div className="space-y-6 text-lg md:text-xl text-brand-ink/80 leading-relaxed font-normal">
                <p>
                  Працюю з дорослими, з підлітками, з батьками. До мене звертаються з різним. 
                  Коли ситуації повторюються. Коли складно вплинути на те, що відбувається. 
                  Коли власний стан стає нестерпним - тривога, виснаження, розгубленість.
                </p>
                
                <p>
                  Або коли з дитиною чи дорослими близькими відбувається те, що виходить з-під контролю: хвороба, залежність або поведінка, яку ви не можете змінити.
                </p>
 
                <p className="text-brand-ink font-medium">
                  У роботі ми не шукаємо швидких рішень. Дивимось, що насправді відбувається, і як це стає можливим. 
                </p>
 
                <p className="italic text-brand-green font-medium">
                  Я не заспокоюю і не даю простих відповідей. І це створює можливість для змін. 
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Info Cards - Full Width Row */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-card-green p-8 md:p-12 card-rounded shadow-sm border border-brand-ink/5 space-y-6 hover:shadow-md transition-all relative group"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green transition-transform group-hover:scale-110">
                <UserCheck size={24} />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold text-brand-ink/40">Стандарти практики</p>
              <p className="text-xl md:text-[22px] lg:text-[24px] leading-tight text-brand-ink font-medium tracking-tight">
                Маю понад 800 годин власного аналізу і регулярну супервізію.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card-blue p-8 md:p-12 card-rounded shadow-sm border border-brand-ink/5 space-y-6 hover:shadow-md transition-all relative group"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue transition-transform group-hover:scale-110">
                <Languages size={24} />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold text-brand-ink/40">Мови роботи</p>
              <p className="text-xl md:text-[22px] lg:text-[24px] leading-tight text-brand-ink font-medium tracking-tight">
                Працюю українською, російською та англійською.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
