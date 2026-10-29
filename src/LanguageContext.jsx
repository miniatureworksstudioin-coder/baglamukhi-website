import { createContext, useState, useEffect, useContext } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  // Load saved language on first visit
  useEffect(() => {
    const savedLang = localStorage.getItem('site_language');
    if (savedLang) setLanguage(savedLang);
  }, []);

  // NEW: Function to handle all 4 languages
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('site_language', lang);
  };

  // Translation function with a fallback to English if a key is missing
  const t = (key) => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
