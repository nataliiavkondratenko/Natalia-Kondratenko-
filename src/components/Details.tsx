import { motion } from 'motion/react';
import { Shield, BookOpen, Clock, Heart, CheckCircle2, XCircle, ArrowUpRight } from 'lucide-react';

export default function Details() {
  const points = [
    {
      id: "01",
      title: "ЗУСИЛЛЯ",
      text: "Часто людина намагається змінити ситуацію через контроль, зусилля, раціональне пояснення, певні вправи, чек-лісти чи техніки.",
      color: "bg-[#F8F0E6]", // Refined beige
      tabColor: "bg-[#EBDCCF]", // Refined tab
      textColor: "text-[#8A6D5D]",
    },
    {
      id: "02",
      title: "ПОВТОРЕННЯ",
      text: "Психоаналітична терапія дозволяє побачити, що саме в цих ситуаціях повторюється.",
      color: "bg-[#EEF2F6]", // Refined blue
      tabColor: "bg-[#D6E2ED]", // Refined tab
      textColor: "text-[#4A6D88]",
    },
    {
      id: "03",
      title: "ТРАНСФОРМАЦІЯ",
      text: "Психоаналітична робота допомагає людині змінити не лише ситуацію, а й свій власний спосіб жити з нею.",
      color: "bg-[#EEF3EE]", // Refined green
      tabColor: "bg-[#D9E6D9]", // Refined tab
      textColor: "text-[#5B755B]",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Why Analytical - Folders Design */}
      <section id="method" className="bg-brand-paper relative border-b border-brand-ink/5">
        <div className="content-container py-24 md:py-32">
          <div className="max-w-6xl mx-auto relative z-10">
            
            <div className="text-left mb-16 md:mb-32">
              <span className="badge-pill mb-6 inline-block bg-brand-peach text-brand-ink">Метод</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] md:leading-[1] mb-8 text-brand-ink uppercase tracking-tight">Чому психоаналітичний підхід</h2>
              <p className="text-lg md:text-2xl text-brand-muted max-w-3xl font-normal leading-relaxed">
                Психоаналітична психотерапія працює не лише з симптомами,<br className="hidden md:inline" /> а з причинами.
              </p>
            </div>

            {/* Folders Stack Layout - Sticky on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-8 max-w-7xl mx-auto mb-32 px-4 md:px-0">
              {points.map((point, index) => {
                const folderTopClasses = [
                  'sticky top-[100px] md:relative md:top-auto',
                  'sticky top-[132px] md:relative md:top-auto',
                  'sticky top-[164px] md:relative md:top-auto'
                ];
                
                return (
                  <motion.div
                    key={point.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className={`relative flex flex-col pt-12 group ${folderTopClasses[index]}`}
                    style={{ 
                      zIndex: 10 + index 
                    }}
                  >
                    {/* Folder Tab */}
                    <div className={`
                      absolute top-0 left-[20px] 
                      w-[160px] md:w-[145px] lg:w-[145px] xl:w-[180px] h-[48px]
                      ${point.tabColor} rounded-t-2xl
                      flex items-center px-4 md:px-3 lg:px-5 xl:px-8
                      border-x border-t border-black/[0.05]
                      shadow-[-4px_0_15px_rgba(0,0,0,0.02)]
                      z-0
                    `}>
                      <span className={`text-[9px] md:text-[8.5px] lg:text-[8.5px] xl:text-[10px] font-mono font-black tracking-[0.1em] uppercase truncate ${point.textColor}`}>
                        {point.title}
                      </span>
                    </div>
 
                  {/* Folder Body */}
                  <div className={`
                    flex-grow relative ${point.color} p-6 md:p-5 lg:p-6 xl:p-10
                    min-h-[240px] md:min-h-[220px] lg:min-h-[240px] xl:min-h-[300px]
                    rounded-tr-2xl rounded-b-2xl md:rounded-tr-3xl md:rounded-b-3xl
                    border border-black/[0.05]
                    shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                    hover:-translate-y-2 transition-all duration-500
                    z-10
                  `}>
                    <div className="flex flex-col gap-6 md:gap-5 lg:gap-8 h-full">
                      <div className="flex-shrink-0">
                         <span className="text-xl md:text-lg lg:text-xl xl:text-3xl font-mono text-black/5 font-bold">[{point.id}]</span>
                      </div>
                      <p className="text-lg md:text-[13px] lg:text-base xl:text-lg font-normal leading-relaxed text-brand-ink tracking-tight flex-grow break-words">
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
              className="mt-32 md:mt-48 text-center"
            >
              <div className="max-w-4xl mx-auto space-y-16">
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-6xl font-sans font-medium text-brand-ink leading-tight tracking-tight">
                    «Довго, дорого і назавжди»
                  </h3>
                  <p className="text-lg md:text-xl text-brand-muted opacity-50 italic">так іноді говорять про психоаналіз</p>
                </div>
                
                <div className="space-y-8 max-w-3xl mx-auto pt-8">
                  <div className="inline-block relative">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-sans font-medium italic leading-tight text-brand-ink relative z-10 px-8">
                      Але «назавжди» тут не про безкінечну терапію.
                    </p>
                  </div>
                  <p className="text-xl md:text-2xl text-brand-muted leading-relaxed font-normal max-w-2xl mx-auto">
                    Це про зміни, які з часом вбудовуються у спосіб життя і продовжують працювати поза терапією.
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
