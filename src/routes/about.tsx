import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/SiteChrome";
import philPhoto from "@/assets/phil.jpg";
import maxPhoto from "@/assets/max.jpg";

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
  { name: "Phil", photo: philPhoto, role: "Co-Founder & Workshop Coordinator", bio: "A background in education, applied directly to hospitality training. That foundation shapes how every Telliens workshop is structured and delivered, while hands-on experience across three hotel brands keeps it grounded in what actually happens on the floor.", facts: ["Bachelor of Arts, Psychology", "Bachelor of Education", "Certified member, Ontario College of Teachers (OCT)", "Teaching across 4 school boards", "Worked at 3 hotel brands across North America", "Bilingual (English/French)"] },
  { name: "Max", photo: maxPhoto, role: "Co-Founder", bio: "Several years in hotel operations across front office, guest services and rooms at properties in Canada and Europe. Special-services work at the 2022 Paris Olympics shapes an approach to training that holds up when things get busy.", facts: ["6+ years in rooms operations & guest services", "Worked at 8 hotel brands, two continents", "2022 Paris Olympics, special services", "Bilingual (English/French)"] },
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
            <article key={t.name} className="flex h-full flex-col rounded-lg border bg-card p-6 md:p-8">
              <h2 className="text-4xl">{t.name}</h2>
              <p className="mt-1 font-semibold text-primary">{t.role}</p>
              <img src={t.photo} alt={t.name} className="mt-6 aspect-[2/3] w-56 rounded-lg object-cover object-top shadow-soft md:w-64" />
              <p className="mt-4 text-muted-foreground">{t.bio}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-6">
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
