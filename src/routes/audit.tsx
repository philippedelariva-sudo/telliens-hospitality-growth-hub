import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/SiteChrome";
import { useCopy } from "@/lib/i18n";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Hotel Service Audit | Telliens" },
      { name: "description", content: "An in-house hotel service standards audit covering arrival to departure, dining included, with a detailed report." },
      { property: "og:title", content: "Hotel Service Audit | Telliens" },
      { property: "og:description", content: "Find the moments that decide whether guests come back." },
    ],
  }),
  component: Audit,
});

const copy = {
  en: {
    eyebrow: "Our audit",
    title: "The moments that make guests",
    highlight: "come back.",
    howTitle: "How it works",
    how: [
      "The Telliens audit is built on a format developed in house specifically for hotel service standards, rather than a generic checklist. It looks at the full guest experience, from arrival to departure, including the restaurant and dining experience where applicable, and rates how the property performs.",
      "Every audit concludes with a detailed report outlining what was found and where the opportunities are. An optional follow-up visit can then be arranged to measure the progress your team has made since.",
    ],
    coversTitle: "What it covers",
    covers: [
      "Service standards across every stage of the guest's stay",
      "Staff interactions and how they shape the overall guest experience",
      "The on-site restaurant and dining experience, alongside room and front desk service",
      "Consistency between what the brand promises and what's actually delivered",
      "The specific moments most likely to influence whether a guest returns",
      "A detailed report with findings and practical next steps",
    ],
  },
  fr: {
    eyebrow: "Notre audit",
    title: "Les moments qui donnent envie aux clients",
    highlight: "de revenir.",
    howTitle: "Comment ça fonctionne",
    how: [
      "L'audit Telliens repose sur un format développé à l'interne, spécifiquement pour les normes de service hôtelier, plutôt que sur une liste de vérification générique. Il examine l'ensemble de l'expérience client, de l'arrivée jusqu'au départ, y compris l'expérience du restaurant sur place le cas échéant, et évalue la performance de l'établissement.",
      "Chaque audit se conclut par un rapport détaillé exposant les constats et les possibilités d'amélioration. Une visite de suivi facultative peut ensuite être organisée afin de mesurer les progrès réalisés par votre équipe.",
    ],
    coversTitle: "Ce que couvre l'audit",
    covers: [
      "Les normes de service à chaque étape du séjour du client",
      "Les interactions du personnel et leur effet sur l'expérience globale du client",
      "L'expérience du restaurant sur place, en plus du service en chambre et à la réception",
      "La cohérence entre ce que la marque promet et ce qui est réellement offert",
      "Les moments précis les plus susceptibles d'influencer le retour d'un client",
      "Un rapport détaillé présentant les constats et des pistes d'action concrètes",
    ],
  },
};

function Audit() {
  const c = useCopy(copy);
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl">{c.title} <span className="text-gradient">{c.highlight}</span></h1>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2">
        <div className="space-y-5 text-lg text-muted-foreground">
          <h2 className="text-3xl text-foreground">{c.howTitle}</h2>
          {c.how.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div className="rounded-lg border bg-card p-8">
          <h2 className="text-3xl">{c.coversTitle}</h2>
          <ul className="mt-6 space-y-4">
            {c.covers.map((item) => (
              <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-brand" />{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
