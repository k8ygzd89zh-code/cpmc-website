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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLang = useCallback(() => setLang((l) => (l === 'en' ? 'zh' : 'en')), []);
  const t = useCallback((en: string, zh: string) => (lang === 'en' ? en : zh), [lang]);

  // Prevent hydration mismatch
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
