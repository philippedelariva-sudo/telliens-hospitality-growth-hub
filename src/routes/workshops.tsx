import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/SiteChrome";
import { workshops } from "@/lib/content";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Workshops — Telliens Hotel Staff Training" },
      { name: "description", content: "In-person hotel workshops: service standards, loyalty, brand immersion, emotional management and more." },
      { property: "og:title", content: "Workshops — Telliens" },
      { property: "og:description", content: "Hands-on hotel staff workshops for 15 to 30 participants." },
    ],
  }),
  component: Workshops,
});

function Workshops() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <p className="eyebrow">Workshops we specialize in</p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl">Training that sticks after <span className="text-gradient">we leave.</span></h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Each workshop is delivered in person, with capacity for 15 to 30 participants and options to accommodate additional staff on request. Online formats are also available.</p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-6 py-16 md:grid-cols-2">
        {workshops.map((w, i) => (
          <article key={w.title} className="rounded-lg border bg-card p-8 transition-shadow hover:shadow-soft">
            <span className="text-sm font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="mt-2 text-3xl">{w.title}</h2>
            <p className="mt-4 text-muted-foreground">{w.body}</p>
            <p className="mt-4 border-l-2 border-primary pl-4 text-sm">{w.outcome}</p>
          </article>
        ))}
        <article className="rounded-lg bg-ink p-8 text-ink-foreground md:col-span-2">
          <span className="eyebrow">Made for you</span>
          <h2 className="mt-2 text-3xl">Custom Workshop Development</h2>
          <p className="mt-4 max-w-3xl opacity-80">For needs outside the workshops above, we build a workshop from the ground up around your property's specific challenges — a particular department, a recurring service issue, or a goal unique to your business. Built for your property, not adapted from a template.</p>
        </article>
      </section>
      <CtaBand />
    </>
  );
}
