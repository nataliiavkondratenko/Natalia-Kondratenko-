import { motion } from 'motion/react';
import { Instagram, Mail, Phone, ArrowUpRight, Calendar } from 'lucide-react';

interface FooterProps {
  onOpenContact: (mode?: 'all' | 'email' | 'messenger') => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const sideImageUrl = "https://res.cloudinary.com/dset5uqua/image/upload/v1778499572/ChatGPT_Image_May_11_2026_02_39_07_PM_c7bjbb.webp";

  return (
    <footer id="contacts" className="bg-white overflow-hidden">
      {/* FINAL CTA - Bento Grid Style from Reference */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            
            {/* Main Featured Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => onOpenContact('all')}
              className="lg:col-span-2 relative h-[450px] md:h-[520px] rounded-[30px] md:rounded-[40px] overflow-hidden group shadow-sm cursor-pointer"
            >
              <img 
                src={sideImageUrl} 
                alt="Psychotherapy context"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end md:justify-center">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-sans font-medium tracking-tight text-white leading-[1.2] max-w-[14rem] sm:max-w-xs md:max-w-[18rem] mb-4 md:mb-0">
                  Одна розмова може дати більше ясності. <br />
                  А може стати початком більш глибокої роботи.
                </h2>
              </div>
            </motion.div>

            {/* Action Card 1 - Light Blue */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onClick={() => onOpenContact('email')}
              className="bg-card-blue p-8 md:p-12 rounded-[30px] md:rounded-[40px] flex flex-col justify-between h-[450px] md:h-[520px] group cursor-pointer shadow-sm border border-black/[0.02]"
            >
              <div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-8">
                  <Mail className="w-5 h-5 text-[#3E5C7A]" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-[1.35rem] lg:text-[1.45rem] xl:text-[1.65rem] font-sans font-medium text-brand-ink mb-4 md:mb-6 leading-tight min-h-[56px] md:min-h-[80px] flex items-end">
                  <span>Обговорити <br className="hidden md:block" /> свій запит</span>
                </h3>
                <p className="text-brand-muted text-sm md:text-base leading-relaxed max-w-[280px]">
                  Залишіть заявку, щоб ми могли підібрати зручний час для знайомства.
                </p>
              </div>
              
              <button 
                onClick={(e) => { e.stopPropagation(); onOpenContact('email'); }}
                className="bg-brand-ink text-white w-full py-4 rounded-full text-sm font-medium flex items-center justify-center hover:bg-black transition-colors mt-auto"
              >
                 Відправити запит на email
                 <ArrowUpRight className="ml-2 w-4 h-4" />
              </button>
            </motion.div>

            {/* Action Card 2 - White */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onClick={() => onOpenContact('messenger')}
              className="bg-white border border-black/5 p-8 md:p-12 rounded-[30px] md:rounded-[40px] flex flex-col justify-between h-[450px] md:h-[520px] group cursor-pointer shadow-sm"
            >
              <div>
                <div className="w-12 h-12 bg-[#F8F6F3] rounded-full flex items-center justify-center shadow-sm mb-8">
                  <Phone className="w-5 h-5 text-[#8C7662]" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-[1.35rem] lg:text-[1.45rem] xl:text-[1.65rem] font-sans font-medium text-brand-ink mb-4 md:mb-6 leading-tight min-h-[56px] md:min-h-[80px] flex items-end">
                  <span>Написати в <br className="hidden md:block" /><span className="md:whitespace-nowrap">WhatsApp / Telegram</span></span>
                </h3>
                <p className="text-brand-muted text-sm md:text-base leading-relaxed max-w-[280px]">
                  Швидкий спосіб отримати відповідь у зручному для вас месенджері.
                </p>
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); onOpenContact('messenger'); }}
                className="bg-brand-ink text-white w-full py-4 rounded-full text-sm font-medium flex items-center justify-center hover:bg-black transition-colors mt-auto"
              >
                Написати зараз
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </button>
            </motion.div>
          </div>

          <div className="mt-16 pt-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-center gap-8">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-black/30 flex flex-wrap justify-center items-center gap-4 md:gap-8">
              <span>психоаналітичний підхід</span>
              <span className="w-1.5 h-1.5 bg-black/10 rounded-full hidden md:block" />
              <span>професійна етика</span>
              <span className="w-1.5 h-1.5 bg-black/10 rounded-full hidden md:block" />
              <span>конфіденційність</span>
            </p>
          </div>
        </div>
      </section>


      {/* CONTACTS - Full Image Background Style */}
      <section className="relative min-h-[90vh] md:min-h-screen bg-black flex flex-col justify-between pt-24 md:pt-40 pb-12 md:pb-24 px-4 overflow-hidden rounded-t-[40px] md:rounded-t-[120px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dset5uqua/image/upload/v1779729351/ChatGPT_Image_May_25_2026_08_14_36_PM_m2wznc.webp" 
            alt="Office landscape"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="content-container relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] font-sans font-medium text-white tracking-tighter mb-4">
              Контакти
            </h2>
            <div className="w-24 h-[1px] bg-white/20" />
          </motion.div>
        </div>

        <div className="content-container relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-sans font-medium text-white/90 mb-8 md:mb-10">Кабінет психоаналізу</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {/* Working Hours */}
              <div className="flex items-center gap-4 md:gap-5 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#D4C3B5] rounded-full flex items-center justify-center flex-shrink-0 text-brand-ink transition-all group-hover:scale-105 shadow-lg">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <span className="block text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-1">Прийом</span>
                  <p className="text-white font-sans font-semibold text-base md:text-lg">Пн-Сб</p>
                  <p className="text-xs md:text-sm text-white/50 font-medium">08:00 - 21:00</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 md:gap-5 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#A7C7A7] rounded-full flex items-center justify-center flex-shrink-0 text-[#2D4A2D] transition-all group-hover:scale-105 shadow-xl">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <span className="block text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-1">Телефон</span>
                  <a href="tel:+380678250825" className="text-white font-sans font-semibold text-base md:text-lg block hover:text-white/60 transition-colors">
                    +38 067 825 08 25
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 md:gap-5 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#A7B9C7] rounded-full flex items-center justify-center flex-shrink-0 text-[#2D3A4A] transition-all group-hover:scale-105 shadow-xl">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-1">Email</span>
                  <a href="mailto:nataliia.v.kondratenko@gmail.com" className="text-white font-sans font-semibold text-base md:text-lg block truncate hover:text-white/60 transition-colors">
                    nataliia.v.kondratenko@gmail.com
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4 md:gap-5 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#D4B5B5] rounded-full flex items-center justify-center flex-shrink-0 text-[#4A2D2D] transition-all group-hover:scale-105 shadow-xl">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <span className="block text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-1">Instagram</span>
                  <a 
                    href="https://www.instagram.com/nataliia.kondratenko.psycholog" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-white font-sans font-semibold text-base md:text-lg block hover:text-white/60 transition-colors leading-tight"
                  >
                    @nataliia.kondratenko
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="bg-white py-10 md:py-12 border-t border-brand-ink/5">
        <div className="content-container flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 text-center md:text-left">
          <p>
            © 2026 Наталія Кондратенко. 
            <span className="hidden sm:inline"> - </span>
            <br className="sm:hidden" /> 
            Психоаналітична терапія.
          </p>
          <p>Всі права захищені</p>
        </div>
      </div>
    </footer>
  );
}
