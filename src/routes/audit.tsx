import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/SiteChrome";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Hotel Service Audit — Telliens" },
      { name: "description", content: "An in-house hotel service standards audit covering arrival to departure, dining included, with a detailed report." },
      { property: "og:title", content: "Hotel Service Audit — Telliens" },
      { property: "og:description", content: "Find the moments that decide whether guests come back." },
    ],
  }),
  component: Audit,
});

const covers = [
  "Service standards across every stage of the guest's stay",
  "Staff interactions and how they shape the overall guest experience",
  "The on-site restaurant and dining experience, alongside room and front desk service",
  "Consistency between what the brand promises and what's actually delivered",
  "The specific moments most likely to influence whether a guest returns",
  "A detailed report with findings and practical next steps",
];

function Audit() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <p className="eyebrow">Our audit</p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl">The moments that make guests <span className="text-gradient">come back.</span></h1>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2">
        <div className="space-y-5 text-lg text-muted-foreground">
          <h2 className="text-3xl text-foreground">How it works</h2>
          <p>The Telliens audit is built on a format developed in house specifically for hotel service standards, rather than a generic checklist. It looks at the full guest experience, from arrival to departure, including the restaurant and dining experience where applicable, and rates how the property performs.</p>
          <p>Every audit concludes with a detailed report outlining what was found and where the opportunities are.</p>
        </div>
        <div className="rounded-lg border bg-card p-8">
          <h2 className="text-3xl">What it covers</h2>
          <ul className="mt-6 space-y-4">
            {covers.map((c) => (
              <li key={c} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-brand" />{c}</li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
