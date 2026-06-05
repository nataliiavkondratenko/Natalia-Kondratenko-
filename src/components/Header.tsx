import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Navigation } from 'lucide-react';

const navLinks = [
  { name: 'Про мене', href: '#about' },
  { name: 'Напрямки', href: '#areas' },
  { name: 'Процес', href: '#approach' },
  { name: 'Метод', href: '#method' },
  { name: 'Контакти', href: '#contacts' },
];

interface HeaderProps {
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'bg-brand-paper/80 backdrop-blur-md py-3 border-black/5' : 'bg-transparent py-5'
      }`}
    >
      <div className="content-container relative h-full flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex-1 flex justify-start">
          <a href="#" className={`flex items-center gap-2 text-[15px] font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-brand-ink' : 'text-white'}`}>
            <div className="w-6 h-6 bg-current rounded-[7px] rotate-45 flex items-center justify-center overflow-hidden">
               <div className="w-full h-full flex items-center justify-center -rotate-45">
                  <Navigation className={`w-3.5 h-3.5 fill-current transition-colors duration-300 ${isScrolled ? 'text-brand-paper' : 'text-black'}`} />
               </div>
            </div>
            Наталія Кондратенко
          </a>
        </div>

        {/* Central Info Label - Absolutely centered relative to the container */}
        <div className={`absolute left-1/2 -translate-x-1/2 hidden md:flex lg:hidden xl:flex transition-colors duration-300 ${isScrolled ? 'text-brand-ink' : 'text-white'}`}>
          <span className="text-[8px] lg:text-[9px] font-bold uppercase tracking-[0.15em] opacity-60 text-center whitespace-nowrap max-w-[200px] lg:max-w-none overflow-hidden text-ellipsis">
            Клінічний психолог • психотерапевт
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="flex-1 hidden lg:flex justify-end items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 hover:opacity-100 ${
                  isScrolled ? 'text-black opacity-60' : 'text-white opacity-80'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex justify-end">
          <button 
            className={`p-2 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-[100dvh] w-full bg-white z-[300] lg:hidden flex flex-col p-8 overflow-y-auto"
          >
            <div className="flex justify-end mb-6">
               <button onClick={() => setIsMobileMenuOpen(false)} className="p-4 text-brand-ink">
                  <X size={36} />
               </button>
            </div>
            
            <nav className="flex flex-col gap-6 mb-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-medium tracking-tight text-brand-ink px-2"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <div className="mt-auto pt-8 border-t border-black/5 px-2">
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 mb-6">Контакти</p>
              <a href="tel:+380678250825" className="text-xl block mb-2 text-brand-ink tracking-tight font-medium">+38 067 825 08 25</a>
              <a href="mailto:nataliia.v.kondratenko@gmail.com" className="text-sm block text-brand-ink/60 font-medium truncate">nataliia.v.kondratenko@gmail.com</a>
              
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full mt-10 py-5 bg-brand-ink text-white rounded-full text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Обговорити запит
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
