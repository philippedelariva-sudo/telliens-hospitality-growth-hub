import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/SiteChrome";
import { CALENDLY } from "@/lib/content";
import { useCopy } from "@/lib/i18n";
import hero from "@/assets/hero-lobby.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Telliens | Hotel Staff Workshops & Service Audits" },
      { name: "description", content: "On-site hotel workshops and service audits that lift guest experience and the numbers that follow." },
      { property: "og:title", content: "Telliens | Hotel Staff Workshops & Service Audits" },
      { property: "og:description", content: "Hands-on hospitality training with your staff and management team." },
    ],
  }),
  component: Index,
});

const copy = {
  en: {
    heroAlt: "Hotel receptionist welcoming a guest",
    eyebrow: "Hospitality consulting",
    title: "Hotel workshops & service audits",
    lead: "Your guests judge the property by how your team makes them feel. Your owners judge it by the numbers that follow.",
    book: "Book a 30-min call",
    explore: "Explore workshops",
    statement: "We run on-site workshops, working hands-on with your staff and management team.",
    stats: [
      ["Customized", "Workshops and audits tailored to each property"],
      ["Hands-on", "On-the-floor delivery with staff and management"],
      ["15 to 30", "Participants per session, more on request"],
    ],
    sessionsEyebrow: "Training sessions we host",
    sessionsTitle: "Built for the floor, not the boardroom.",
    seeAll: "See all details →",
    workshopsEyebrow: "Workshops",
    workshopsTitle: "We show up in person.",
    workshopsBody: "We work alongside your team and focus on building habits that last. Created by OCT certified professionals.",
    workshopsLink: "Workshops →",
    auditEyebrow: "Audits",
    auditTitle: "See your stay through a guest's eyes.",
    auditBody: "An in-house audit format for hotel service standards, from arrival to departure, with a detailed report.",
    auditLink: "Our audit →",
  },
  fr: {
    heroAlt: "Réceptionniste d'hôtel accueillant un client",
    eyebrow: "Services-conseils en hôtellerie",
    title: "Ateliers hôteliers et audits de service",
    lead: "Vos clients jugent l'établissement à la façon dont votre équipe les fait se sentir. Vos propriétaires le jugent aux résultats qui en découlent.",
    book: "Réserver un appel de 30\u00a0min",
    explore: "Découvrir nos ateliers",
    statement: "Nous offrons des ateliers sur place, en travaillant directement avec votre personnel et votre équipe de direction.",
    stats: [
      ["Sur mesure", "Des ateliers et des audits adaptés à chaque établissement"],
      ["Pratique", "Une prestation sur le terrain, aux côtés du personnel et de la direction"],
      ["15 à 30", "Participants par séance, davantage sur demande"],
    ],
    sessionsEyebrow: "Nos séances de formation",
    sessionsTitle: "Pensé pour le terrain, pas pour la salle du conseil.",
    seeAll: "Voir tous les détails →",
    workshopsEyebrow: "Ateliers",
    workshopsTitle: "Nous nous déplaçons en personne.",
    workshopsBody: "Nous travaillons aux côtés de votre équipe pour bâtir des habitudes durables. Des ateliers conçus par des professionnels certifiés par l'OEEO.",
    workshopsLink: "Ateliers →",
    auditEyebrow: "Audits",
    auditTitle: "Voyez votre établissement à travers les yeux d'un client.",
    auditBody: "Un format d'audit développé à l'interne pour les normes de service hôtelier, de l'arrivée jusqu'au départ, avec un rapport détaillé.",
    auditLink: "Notre audit →",
  },
};

function Index() {
  const c = useCopy(copy);
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={hero} alt={c.heroAlt} width={1920} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center md:py-32">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="mt-5 text-4xl leading-tight md:text-6xl">{c.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{c.lead}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn-primary">{c.book}</a>
            <Link to="/workshops" className="btn-ghost bg-background">{c.explore}</Link>
          </div>
        </div>
      </section>
      <p className="mx-auto max-w-3xl px-6 py-14 text-center text-xl italic text-muted-foreground md:text-2xl">{c.statement}</p>

      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3 text-center">
          {c.stats.map(([k, v]) => (
            <div key={k}>
              <p className="font-display text-4xl text-gradient">{k}</p>
              <p className="mt-1 text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <div>
            <p className="eyebrow">{c.sessionsEyebrow}</p>
            <h2 className="mt-3 text-4xl md:text-5xl">{c.sessionsTitle}</h2>
          </div>
          <Link to="/workshops" className="font-semibold text-primary">{c.seeAll}</Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-10">
          <p className="eyebrow">{c.workshopsEyebrow}</p>
          <h3 className="mt-3 text-3xl">{c.workshopsTitle}</h3>
          <p className="mt-4 text-muted-foreground">{c.workshopsBody}</p>
          <Link to="/workshops" className="mt-6 inline-block font-semibold text-primary">{c.workshopsLink}</Link>
        </div>
        <div className="rounded-lg bg-secondary p-10">
          <p className="eyebrow">{c.auditEyebrow}</p>
          <h3 className="mt-3 text-3xl">{c.auditTitle}</h3>
          <p className="mt-4 text-muted-foreground">{c.auditBody}</p>
          <Link to="/audit" className="mt-6 inline-block font-semibold text-primary">{c.auditLink}</Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
