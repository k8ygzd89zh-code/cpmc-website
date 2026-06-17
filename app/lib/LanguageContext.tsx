'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';

type Lang = 'en' | 'zh';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (en: string, zh: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggleLang: () => {},
  t: (en) => en,
});

function getBrowserLang(): Lang {
  if (typeof navigator === 'undefined') return 'en';
  const browserLang = navigator.language || (navigator as any).userLanguage || '';
  // Only use Chinese if browser language is explicitly Chinese
  if (browserLang.toLowerCase().startsWith('zh')) return 'zh';
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const [mounted, setMounted] = useState(false);

  // On first mount, detect browser language — default to English
  useEffect(() => {
    const browserLang = getBrowserLang();
    setLang(browserLang);
    setMounted(true);
  }, []);

  const toggleLang = useCallback(() => setLang((l) => (l === 'en' ? 'zh' : 'en')), []);
  const t = useCallback((en: string, zh: string) => (lang === 'en' ? en : zh), [lang]);

  // Prevent hydration mismatch — only render children after mount
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
