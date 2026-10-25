import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/SiteChrome";
import philPhoto from "@/assets/phil.jpg";
import { useCopy } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Telliens | Phil & Max" },
      { name: "description", content: "Telliens was founded by Phil and Max, bringing education and hotel operations together for hospitality training." },
      { property: "og:title", content: "About Telliens" },
      { property: "og:description", content: "Our story and leadership team." },
    ],
  }),
  component: About,
});

const copy = {
  en: {
    eyebrow: "Our story",
    title: "Born from a shared",
    highlight: "love of hotels.",
    story: [
      "Phil and Max first crossed paths while traveling and staying in properties across different cities, and kept noticing the same thing: how much a well trained staff can shape a guest's stay.",
      "They took what they'd each learned from years on different sides of the hotel industry and built something practical: a way to help hotel staff learn the skills and tricks of the trade that let them do their best work. That became Telliens.",
    ],
    teamEyebrow: "Leadership team",
    team: [
      { name: "Phil", photo: philPhoto, role: "Co-Founder & Workshop Coordinator", bio: "A background in education, applied directly to hospitality training. That foundation shapes how every Telliens workshop is structured and delivered, while hands-on experience across three hotel brands keeps it grounded in what actually happens on the floor.", facts: ["Bachelor of Arts, Psychology", "Bachelor of Education", "Certified member, Ontario College of Teachers (OCT)", "Teaching across 4 school boards", "Worked at 3 hotel brands across North America", "Bilingual (English/French)"] },
    ],
  },
  fr: {
    eyebrow: "Notre histoire",
    title: "Né d'une passion commune",
    highlight: "pour les hôtels.",
    story: [
      "Phil et Max se sont croisés pour la première fois en voyageant et en séjournant dans des établissements de différentes villes, et ont rapidement remarqué la même chose\u00a0: à quel point un personnel bien formé peut transformer le séjour d'un client.",
      "Ils ont mis à profit ce que chacun avait appris au fil des années passées de différents côtés de l'industrie hôtelière pour créer quelque chose de concret\u00a0: une façon d'aider le personnel hôtelier à acquérir les compétences et les astuces du métier qui lui permettent de donner le meilleur de lui-même. Ce projet est devenu Telliens.",
    ],
    teamEyebrow: "Notre équipe de direction",
    team: [
      { name: "Phil", photo: philPhoto, role: "Cofondateur et coordonnateur des ateliers", bio: "Un parcours en enseignement, appliqué directement à la formation hôtelière. Cette base façonne la structure et la présentation de chaque atelier Telliens, tandis qu'une expérience pratique auprès de trois chaînes hôtelières le garde ancré dans la réalité du terrain.", facts: ["Baccalauréat ès arts, psychologie", "Baccalauréat en éducation", "Membre certifié de l'Ordre des enseignantes et des enseignants de l'Ontario (OEEO)", "Enseignement dans 4 conseils scolaires", "Expérience auprès de 3 chaînes hôtelières en Amérique du Nord", "Bilingue (anglais/français)"] },
    ],
  },
};

function About() {
  const c = useCopy(copy);
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl">{c.title} <span className="text-gradient">{c.highlight}</span></h1>
        <div className="mt-10 grid gap-8 text-lg text-muted-foreground md:grid-cols-2">
          {c.story.map((p) => <p key={p}>{p}</p>)}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow text-center">{c.teamEyebrow}</p>
        <div className="mx-auto mt-8 max-w-4xl space-y-6">
          {c.team.map((t) => (
            <article key={t.name} className="grid items-center gap-8 rounded-lg border bg-card p-6 md:grid-cols-[auto_1fr] md:p-10">
              <img src={t.photo} alt={t.name} className="mx-auto aspect-[2/3] w-60 rounded-lg object-cover object-top shadow-soft md:w-72" />
              <div>
                <h2 className="text-4xl md:text-5xl">{t.name}</h2>
                <p className="mt-1 font-semibold text-primary">{t.role}</p>
                <p className="mt-4 text-lg text-muted-foreground">{t.bio}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {t.facts.map((f) => <li key={f} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">{f}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
