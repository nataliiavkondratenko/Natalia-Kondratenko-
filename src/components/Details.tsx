import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export default function Details() {
  const { t } = useLanguage();

  const pointStyles = [
    {
      id: "01",
      color: "bg-[#F8F0E6]", // Refined beige
      tabColor: "bg-[#EBDCCF]", // Refined tab
      textColor: "text-[#8A6D5D]",
    },
    {
      id: "02",
      color: "bg-[#EEF2F6]", // Refined blue
      tabColor: "bg-[#D6E2ED]", // Refined tab
      textColor: "text-[#4A6D88]",
    },
    {
      id: "03",
      color: "bg-[#EEF3EE]", // Refined green
      tabColor: "bg-[#D9E6D9]", // Refined tab
      textColor: "text-[#5B755B]",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Why Analytical - Folders Design */}
      <section id="method" className="bg-brand-paper relative border-b border-brand-ink/5">
        <div className="content-container py-16 sm:py-24 md:py-32">
          <div className="max-w-6xl mx-auto relative z-10">
            
            <div className="text-left mb-12 sm:mb-16 md:mb-32">
              <span className="badge-pill mb-4 sm:mb-6 inline-block bg-brand-peach text-brand-ink">
                {t.method.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-[1.15] sm:leading-[1.1] md:leading-[1] mb-6 sm:mb-8 text-brand-ink uppercase tracking-tight">
                {t.method.title}
              </h2>
              <p className="text-base sm:text-lg md:text-2xl text-brand-muted max-w-3xl font-normal leading-relaxed">
                {t.method.subtitle.line1}<br className="hidden md:inline" /> {t.method.subtitle.line2}
              </p>
            </div>

            {/* Folders Stack Layout - Sticky on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-8 max-w-7xl mx-auto mb-16 sm:mb-24 md:mb-32 px-0">
              {t.method.points.map((point, index) => {
                const style = pointStyles[index] || pointStyles[0];
                const folderTopClasses = [
                  'sticky top-[100px] md:relative md:top-auto',
                  'sticky top-[132px] md:relative md:top-auto',
                  'sticky top-[164px] md:relative md:top-auto'
                ];
                
                return (
                  <motion.div
                    key={style.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className={`relative flex flex-col pt-10 sm:pt-12 group ${folderTopClasses[index]}`}
                    style={{ 
                      zIndex: 10 + index 
                    }}
                  >
                    {/* Folder Tab */}
                    <div className={`
                      absolute top-0 left-[16px] sm:left-[20px] 
                      w-[140px] sm:w-[160px] md:w-[145px] lg:w-[145px] xl:w-[180px] h-[40px] sm:h-[48px]
                      ${style.tabColor} rounded-t-xl sm:rounded-t-2xl
                      flex items-center px-4 md:px-3 lg:px-5 xl:px-8
                      border-x border-t border-black/[0.05]
                      shadow-[-4px_0_15px_rgba(0,0,0,0.02)]
                      z-0
                    `}>
                      <span className={`text-[8.5px] sm:text-[9px] md:text-[8.5px] lg:text-[8.5px] xl:text-[10px] font-mono font-black tracking-[0.08em] sm:tracking-[0.1em] uppercase truncate ${style.textColor}`}>
                        {point.title}
                      </span>
                    </div>
 
                    {/* Folder Body */}
                    <div className={`
                      flex-grow relative ${style.color} p-5 sm:p-6 md:p-5 lg:p-6 xl:p-10
                      min-h-[180px] sm:min-h-[220px] md:min-h-[220px] lg:min-h-[240px] xl:min-h-[300px]
                      rounded-tr-2xl rounded-b-2xl md:rounded-tr-3xl md:rounded-b-3xl
                      border border-black/[0.05]
                      shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                      hover:-translate-y-2 transition-all duration-500
                      z-10
                    `}>
                      <div className="flex flex-col gap-4 sm:gap-6 md:gap-5 lg:gap-8 h-full">
                        <div className="flex-shrink-0">
                           <span className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-3xl font-mono text-black/5 font-bold">[{style.id}]</span>
                        </div>
                        <p className="text-base sm:text-lg md:text-[13px] lg:text-base xl:text-lg font-normal leading-relaxed text-brand-ink tracking-tight flex-grow break-words">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Final thought - Improved Spacing */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 sm:mt-16 md:mt-48 text-center"
            >
              <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-16">
                 <div className="space-y-2 md:space-y-4">
                  <h3 className="text-2xl sm:text-4xl md:text-6xl font-sans font-medium text-brand-ink leading-tight tracking-tight">
                    {t.method.quote.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-brand-muted font-medium italic">
                    {t.method.quote.caption}
                  </p>
                </div>
                
                 <div className="space-y-4 md:space-y-8 max-w-3xl mx-auto pt-2 sm:pt-4 md:pt-8">
                  <div className="inline-block relative">
                    <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-sans font-medium italic leading-tight text-brand-ink relative z-10 px-2 sm:px-8">
                       {t.method.quote.line1}
                    </p>
                  </div>
                  <p className="text-base sm:text-xl md:text-2xl text-brand-ink/80 leading-relaxed font-normal max-w-2xl mx-auto">
                    {t.method.quote.line2}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

