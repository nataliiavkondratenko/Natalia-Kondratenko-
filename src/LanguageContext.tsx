import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, TranslationSchema } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem('site_language') as Language;
      if (savedLang && (savedLang === 'ua' || savedLang === 'en' || savedLang === 'ru')) {
        return savedLang;
      }
    } catch {
      // Fallback
    }
    return 'ua';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('site_language', lang);
    } catch {
      // Ignore
    }
    document.documentElement.lang = lang === 'ua' ? 'uk' : lang;
  };

  useEffect(() => {
    document.documentElement.lang = language === 'ua' ? 'uk' : language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
