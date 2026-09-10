import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../translations';

interface HeaderProps {
  onOpenContact: () => void;
}

interface LanguageDropdownProps {
  isScrolled: boolean;
  language: Language;
  setLanguage: (lang: Language) => void;
  languages: { code: Language; label: string; name: string }[];
  idPrefix?: string;
  className?: string;
}

function LanguageDropdown({
  isScrolled,
  language,
  setLanguage,
  languages,
  idPrefix = 'lang',
  className = '',
}: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-all cursor-pointer ${
          isScrolled
            ? 'bg-black/[0.04] hover:bg-black/[0.08] border-black/10 text-brand-ink active:bg-black/10'
            : 'bg-white/10 hover:bg-white/20 border-white/20 text-white active:bg-white/25'
        }`}
        aria-expanded={isOpen}
        aria-label="Select language"
        id={`${idPrefix}-dropdown-toggle`}
      >
        <Globe size={13} className="shrink-0 opacity-80" />
        <span>{currentLangObj.label}</span>
        <ChevronDown 
          size={13} 
          className={`transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-2 w-44 bg-white/95 backdrop-blur-xl border border-black/10 rounded-2xl shadow-xl p-1.5 z-[150]"
          >
            <div className="flex flex-col gap-1">
              {languages.map((item) => {
                const isActive = language === item.code;
                return (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLanguage(item.code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-brand-ink text-white font-bold'
                        : 'text-brand-ink/80 hover:bg-black/5 active:bg-black/10'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-brand-ink/70'
                      }`}>
                        {item.label}
                      </span>
                      <span className="text-xs">{item.name}</span>
                    </div>
                    {isActive && <Check size={14} className="text-white" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header({ onOpenContact }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t.header.nav.about, href: '#about' },
    { name: t.header.nav.areas, href: '#areas' },
    { name: t.header.nav.process, href: '#approach' },
    { name: t.header.nav.method, href: '#method' },
    { name: t.header.nav.contacts, href: '#contacts' },
  ];

  const languages: { code: Language; label: string; name: string }[] = [
    { code: 'ua', label: 'UA', name: 'Українська' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'ru', label: 'RU', name: 'Русский' },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldBeScrolled = window.scrollY > 40;
          setIsScrolled((prev) => (prev !== shouldBeScrolled ? shouldBeScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'bg-brand-paper/80 backdrop-blur-md py-3 border-black/5' : 'bg-transparent py-5'
      }`}
    >
      <div className="content-container relative h-full flex items-center justify-between">
        {/* Logo/Brand with Subtitle */}
        <div className="flex-1 flex justify-start min-w-0 pr-2">
          <a href="#" className="group flex items-center gap-2.5 min-w-0">
            <svg 
              viewBox="0 0 32 32" 
              className="w-6 h-6 shrink-0 transition-transform group-hover:scale-105 duration-300" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect 
                x="6.5" 
                y="6.5" 
                width="19" 
                height="19" 
                rx="5.5" 
                transform="rotate(45 16 16)" 
                className={`transition-colors duration-300 ${isScrolled ? 'fill-brand-ink' : 'fill-white'}`} 
              />
              <path 
                d="M22 10L10 15L14.5 17.5L17 22L22 10Z" 
                className={`transition-colors duration-300 ${isScrolled ? 'fill-brand-paper' : 'fill-black'}`}
              />
            </svg>
            <div className="flex flex-col min-w-0">
              <span className={`text-sm sm:text-[15px] font-bold tracking-tight transition-colors duration-300 truncate leading-tight ${isScrolled ? 'text-brand-ink' : 'text-white'}`}>
                {t.header.name}
              </span>
              <span className={`hidden sm:block text-[8px] sm:text-[9px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 truncate leading-tight mt-0.5 ${isScrolled ? 'text-brand-ink/70' : 'text-white/80'}`}>
                {t.header.role}
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav & Language Switcher */}
        <div className="flex-1 hidden lg:flex justify-end items-center gap-4 xl:gap-7 shrink-0">
          <nav className="flex items-center gap-4 xl:gap-6 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-wider xl:tracking-widest whitespace-nowrap shrink-0 transition-colors duration-300 hover:opacity-100 ${
                  isScrolled ? 'text-brand-ink/90 hover:text-brand-ink' : 'text-white/95 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Language Switcher Desktop Dropdown */}
          <LanguageDropdown 
            isScrolled={isScrolled}
            language={language}
            setLanguage={setLanguage}
            languages={languages}
            idPrefix="desktop-lang"
            className="shrink-0"
          />
        </div>

        {/* Mobile Actions (Dropdown Language + Menu Toggle) */}
        <div className="lg:hidden flex items-center gap-2 justify-end">
          {/* Mobile Language Dropdown */}
          <LanguageDropdown 
            isScrolled={isScrolled}
            language={language}
            setLanguage={setLanguage}
            languages={languages}
            idPrefix="mobile-lang"
          />

          <button 
            className={`p-2 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? t.header.menuClose : t.header.menuOpen}
            id="mobile-menu-toggle"
          >
            <span className="sr-only">{isMobileMenuOpen ? t.header.menuClose : t.header.menuOpen}</span>
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
            <div className="flex justify-between items-center mb-6">
              {/* Language switcher inside mobile drawer */}
              <div className="flex items-center gap-1 bg-black/5 p-1 rounded-full border border-black/5">
                <Globe size={14} className="text-brand-ink/50 ml-1.5 mr-0.5" />
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => setLanguage(item.code)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                      language === item.code
                        ? 'bg-brand-ink text-white shadow-sm'
                        : 'text-brand-ink/60 hover:text-brand-ink'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-4 text-brand-ink"
                aria-label={t.header.menuClose}
                id="mobile-menu-close"
              >
                <span className="sr-only">{t.header.menuClose}</span>
                <X size={32} />
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
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 mb-6">{t.header.mobileContactsTitle}</p>
              <a href="tel:+380678250825" className="text-xl block mb-2 text-brand-ink tracking-tight font-medium">+38 067 825 08 25</a>
              <a href="mailto:nataliia.v.kondratenko@gmail.com" className="text-sm block text-brand-ink/60 font-medium truncate">nataliia.v.kondratenko@gmail.com</a>
              
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full mt-10 py-5 bg-brand-ink text-white rounded-full text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                {t.header.contactButton}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

