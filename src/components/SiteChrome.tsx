import { Link } from "@tanstack/react-router";
import logo from "@/assets/telliens-logo.png";
import { CALENDLY, EMAIL } from "@/lib/content";
import { useCopy, useLang, type Lang } from "@/lib/i18n";

const chrome = {
  en: {
    nav: [
      { to: "/", label: "Home" },
      { to: "/workshops", label: "Workshops" },
      { to: "/audit", label: "Audit" },
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
    ],
    book: "Book a call",
    bookShort: "Book a call",
    ctaEyebrow: "Let's talk",
    ctaTitle: "Interested in what we can do for",
    ctaHighlight: "your property?",
    ctaButton: "Book a 30-min call",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    langLabel: "Language",
  },
  fr: {
    nav: [
      { to: "/", label: "Accueil" },
      { to: "/workshops", label: "Ateliers" },
      { to: "/audit", label: "Audit" },
      { to: "/about", label: "À propos" },
      { to: "/contact", label: "Contact" },
    ],
    book: "Réserver un appel",
    bookShort: "Réserver",
    ctaEyebrow: "Parlons-en",
    ctaTitle: "Envie de découvrir ce que nous pouvons faire pour",
    ctaHighlight: "votre établissement ?",
    ctaButton: "Réserver un appel de 30 min",
    rights: "Tous droits réservés.",
    privacy: "Politique de confidentialité",
    langLabel: "Langue",
  },
} as const;

function LangToggle() {
  const { lang, setLang } = useLang();
  const c = useCopy(chrome);
  return (
    <div role="group" aria-label={c.langLabel} className="flex items-center rounded border text-xs font-semibold tracking-wider">
      {(["en", "fr"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          lang={l}
          className={`px-2 py-1.5 transition-colors ${lang === l ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const c = useCopy(chrome);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-6 md:gap-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Telliens" className="h-12 w-auto md:h-14" />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {c.nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground transition-colors hover:text-foreground" activeOptions={{ exact: true, includeSearch: false }} activeProps={{ className: "text-primary font-semibold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LangToggle />
          <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2 text-sm">
            <span className="sm:hidden">{c.bookShort}</span>
            <span className="hidden sm:inline">{c.book}</span>
          </a>
        </div>
      </div>
      <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-4 pb-3 text-sm md:hidden">
        {c.nav.map((n) => <Link key={n.to} to={n.to} className="text-muted-foreground">{n.label}</Link>)}
      </nav>
    </header>
  );
}

export function CtaBand() {
  const c = useCopy(chrome);
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-lg bg-ink p-6 text-ink-foreground sm:p-10 md:p-16">
        <p className="eyebrow">{c.ctaEyebrow}</p>
        <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl md:text-5xl">{c.ctaTitle} <span className="text-gradient">{c.ctaHighlight}</span></h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn-primary">{c.ctaButton}</a>
          <a href={`mailto:${EMAIL}`} className="btn-ghost border-ink-foreground/20 !px-5 hover:!bg-ink-foreground/10 sm:!px-[1.8rem]">{EMAIL}</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const c = useCopy(chrome);
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center justify-items-center gap-4 px-6 py-8 text-base text-muted-foreground md:grid-cols-3">
        <img src={logo} alt="Telliens" className="h-12 w-auto md:h-14 md:justify-self-start" />
        <p className="text-center">© {new Date().getFullYear()} Telliens. {c.rights} · <Link to="/privacy" className="whitespace-nowrap hover:text-foreground">{c.privacy}</Link></p>
      </div>
    </footer>
  );
}
