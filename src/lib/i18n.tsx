import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

const STORAGE_KEY = "telliens-lang";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "en", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  // Server render is always English; the saved choice (or a French browser) is applied once mounted.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    // A ?lang=fr link (e.g. one sent to a Quebec client) wins and is remembered.
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "en" || fromUrl === "fr") return setLang(fromUrl);
    let saved: string | null = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch { /* storage blocked */ }
    if (saved === "en" || saved === "fr") setLangState(saved);
    else if (navigator.language?.toLowerCase().startsWith("fr")) setLangState("fr");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "fr" ? "fr-CA" : "en";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* storage blocked */ }
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

/** Picks the copy for the current language: `const c = useCopy({ en: {...}, fr: {...} })`. */
export function useCopy<C extends Record<Lang, unknown>>(copy: C): C[Lang] {
  return copy[useLang().lang];
}
