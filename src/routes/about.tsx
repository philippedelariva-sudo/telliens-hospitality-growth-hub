import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/SiteChrome";

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

const team = [
  { name: "Phil", role: "Co-Founder & Workshop Coordinator", bio: "A background in education, applied directly to hospitality training. That foundation shapes how every Telliens workshop is structured and delivered, while hands-on experience across three hotel brands keeps it grounded in what actually happens on the floor.", facts: ["Bachelor of Arts, Psychology", "Bachelor of Education", "OCT certified teacher", "Teaching across 4 school boards", "3 hotel brands across North America", "Bilingual (English/French)"] },
  { name: "Max", role: "Co-Founder", bio: "Several years in hotel operations across front office, guest services and rooms at properties in Canada and Europe. Special-services work at the Olympic Games shapes an approach to training that holds up when things get busy.", facts: ["Hospitality management training", "Business degree", "6+ years in rooms operations & guest services", "8 hotel brands, two continents", "Olympic Games special services", "Bilingual (English/French)"] },
];

function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <p className="eyebrow">Our story</p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl">Born from a shared <span className="text-gradient">love of hotels.</span></h1>
        <div className="mt-10 grid gap-8 text-lg text-muted-foreground md:grid-cols-2">
          <p>Phil and Max first crossed paths while traveling and staying in properties across different cities, and kept noticing the same thing: how much a well trained staff can shape a guest's stay.</p>
          <p>They took what they'd each learned from years on different sides of the hotel industry and built something practical: a way to help hotel staff learn the skills and tricks of the trade that let them do their best work. That became Telliens.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow">Leadership team</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {team.map((t) => (
            <article key={t.name} className="rounded-lg border bg-card p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand font-display text-3xl text-primary-foreground">{t.name[0]}</div>
              <h2 className="mt-5 text-4xl">{t.name}</h2>
              <p className="font-semibold text-primary">{t.role}</p>
              <p className="mt-4 text-muted-foreground">{t.bio}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {t.facts.map((f) => <li key={f} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">{f}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
