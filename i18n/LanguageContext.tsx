'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { dictionaries, Language } from './dictionaries';

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof dictionaries.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Set default language to 'en' as requested
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    // Update the HTML lang attribute for accessibility and SEO when language changes
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      lang: 'en' as Language,
      setLang: () => {},
      t: dictionaries.en,
    };
  }
  return context;
}
