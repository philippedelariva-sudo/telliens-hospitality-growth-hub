import { Link } from "@tanstack/react-router";
import logo from "@/assets/telliens-logo.png.asset.json";
import { CALENDLY, EMAIL } from "@/lib/content";

const nav = [
  { to: "/workshops", label: "Workshops" },
  { to: "/audit", label: "Audit" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="flex items-center">
          <img src={logo.url} alt="Telliens" className="h-12 w-auto" />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2 text-sm">Book a call</a>
      </div>
      <nav className="flex justify-center gap-5 pb-3 text-sm md:hidden">
        {nav.map((n) => <Link key={n.to} to={n.to} className="text-muted-foreground">{n.label}</Link>)}
      </nav>
    </header>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-lg bg-ink p-10 text-ink-foreground md:p-16">
        <p className="eyebrow">Let's talk</p>
        <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">Interested in what we can do for <span className="text-gradient">your property?</span></h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn-primary">Book a 30-min call</a>
          <a href={`mailto:${EMAIL}`} className="btn-ghost border-ink-foreground/20 hover:!bg-ink-foreground/10">{EMAIL}</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <img src={logo.url} alt="Telliens" className="h-10 w-auto" />
        <p>Hotel workshops & service audits · <a className="hover:text-foreground" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        <p>© {new Date().getFullYear()} Telliens</p>
      </div>
    </footer>
  );
}
