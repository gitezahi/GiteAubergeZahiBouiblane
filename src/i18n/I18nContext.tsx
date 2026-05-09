import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { LANGUAGES, Lang, translations } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
};

// @ts-ignore
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("zahi-lang") as Lang | null) : null;
    return saved && (translations as any)[saved] ? saved : "ar";
  });

  const dir = LANGUAGES.find((l) => l.code === lang)?.dir ?? "rtl";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem("zahi-lang", lang);
  }, [lang, dir]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang: setLangState,
      dir,
      // @ts-ignore
      t: (key: string): string => {
        try {
          const keys = key.split('.');
          let result = (translations as any)[lang];

          for (const k of keys) {
            if (result && typeof result === 'object') {
              result = result[k];
            } else {
              let fallback = (translations as any).ar;
              for (const fk of keys) {
                fallback = fallback?.[fk];
              }
              return typeof fallback === 'string' ? fallback : key;
            }
          }
          return typeof result === 'string' ? result : key;
        } catch (e) {
          return key;
        }
      },
    }),
    [lang, dir]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}