import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/SiteChrome";
import { workshops } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Workshops | Telliens Hotel Staff Training" },
      { name: "description", content: "In-person hotel workshops: service standards, loyalty, brand immersion, emotional management and more." },
      { property: "og:title", content: "Workshops | Telliens" },
      { property: "og:description", content: "Hands-on hotel staff workshops for 15 to 30 participants." },
    ],
  }),
  component: Workshops,
});

const copy = {
  en: {
    eyebrow: "Workshops we specialize in",
    title: "Training that sticks after",
    highlight: "we leave.",
    intro: "Each workshop is delivered in person, with capacity for 15 to 30 participants and options to accommodate additional staff on request. Online formats are also available, and every workshop can be delivered in English or French.",
    review: "All workshop content is reviewed and approved by a certified member of the Ontario College of Teachers prior to delivery, so every session is built on sound teaching practice.",
    customEyebrow: "Made for you",
    customTitle: "Custom Workshop Development",
    customBody: "For needs outside the workshops above, we build a workshop from the ground up around your property's specific challenges: a particular department, a recurring service issue, or a goal unique to your business. Built for your property, not adapted from a template.",
  },
  fr: {
    eyebrow: "Nos ateliers spécialisés",
    title: "Une formation qui perdure",
    highlight: "après notre départ.",
    intro: "Chaque atelier est offert en personne, avec une capacité de 15 à 30 participants et la possibilité d'accueillir du personnel supplémentaire sur demande. Des formats en ligne sont également offerts, et chaque atelier peut être présenté en français ou en anglais.",
    review: "Tout le contenu des ateliers est révisé et approuvé par un membre certifié de l'Ordre des enseignantes et des enseignants de l'Ontario avant sa présentation, afin que chaque séance repose sur de solides pratiques pédagogiques.",
    customEyebrow: "Conçu pour vous",
    customTitle: "Développement d'ateliers personnalisés",
    customBody: "Pour les besoins qui ne correspondent à aucun des ateliers ci-dessus, nous concevons un atelier entièrement sur mesure autour des défis particuliers de votre établissement\u00a0: un département précis, un problème de service récurrent ou un objectif propre à votre entreprise. Conçu pour votre établissement, et non adapté à partir d'un modèle.",
  },
};

function Workshops() {
  const { lang } = useLang();
  const c = copy[lang];
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20 text-center">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-5xl md:text-6xl">{c.title} <span className="text-gradient">{c.highlight}</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{c.intro}</p>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{c.review}</p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-6 py-16 md:grid-cols-2">
        {workshops[lang].map((w, i) => (
          <article key={w.title} className="rounded-lg border bg-card p-6 transition-shadow hover:shadow-soft sm:p-8">
            <span className="text-sm font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="mt-2 text-2xl sm:text-3xl">{w.title}</h2>
            <p className="mt-4 text-muted-foreground">{w.body}</p>
            <p className="mt-4 border-l-2 border-primary pl-4 text-sm">{w.outcome}</p>
          </article>
        ))}
        <article className="rounded-lg bg-ink p-6 text-ink-foreground sm:p-8 md:col-span-2">
          <span className="eyebrow">{c.customEyebrow}</span>
          <h2 className="mt-2 text-2xl sm:text-3xl">{c.customTitle}</h2>
          <p className="mt-4 max-w-3xl opacity-80">{c.customBody}</p>
        </article>
      </section>
      <CtaBand />
    </>
  );
}
