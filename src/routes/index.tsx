import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/SiteChrome";
import { CALENDLY, workshops } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Telliens — Hotel Staff Workshops & Service Audits" },
      { name: "description", content: "2 to 5 day on-site hotel workshops and service audits that lift guest experience and the numbers that follow." },
      { property: "og:title", content: "Telliens — Hotel Staff Workshops & Service Audits" },
      { property: "og:description", content: "Hands-on hospitality training with your staff and management team." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-gradient-brand opacity-20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
          <p className="eyebrow">Hospitality consulting</p>
          <h1 className="mt-5 max-w-4xl text-5xl leading-[1.05] md:text-7xl">
            Your guests judge the property by how your team makes them feel. Your owners judge it by <span className="text-gradient">the numbers that follow.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            We run 2 to 5 day on-site workshops that improve both, working hands-on with your staff and management team.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn-primary">Book a 30-min call</a>
            <Link to="/workshops" className="btn-ghost">Explore workshops</Link>
          </div>
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
          {[
            ["2–5 days", "On-site workshops, also offered online"],
            ["15–30", "Participants per session, more on request"],
            ["All brands", "Hotels of every brand and size"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-display text-4xl text-gradient">{k}</p>
              <p className="mt-1 text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Training sessions we host</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Built for the floor, not the boardroom.</h2>
          </div>
          <Link to="/workshops" className="font-semibold text-primary">See all details →</Link>
        </div>
        <ul className="mt-12 divide-y border-y">
          {workshops.map((w, i) => (
            <li key={w.title} className="group flex items-baseline gap-6 py-5">
              <span className="w-8 text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-display text-2xl transition-colors group-hover:text-primary md:text-3xl">{w.title}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        <div className="rounded-3xl border bg-card p-10">
          <p className="eyebrow">Workshops</p>
          <h3 className="mt-3 text-3xl">We show up in person.</h3>
          <p className="mt-4 text-muted-foreground">We work alongside your team and focus on building habits that last. Created by OCT certified professionals.</p>
          <Link to="/workshops" className="mt-6 inline-block font-semibold text-primary">Workshops →</Link>
        </div>
        <div className="rounded-3xl bg-secondary p-10">
          <p className="eyebrow">Audits</p>
          <h3 className="mt-3 text-3xl">See your stay through a guest's eyes.</h3>
          <p className="mt-4 text-muted-foreground">An in-house audit format for hotel service standards, from arrival to departure, with a detailed report.</p>
          <Link to="/audit" className="mt-6 inline-block font-semibold text-primary">Our audit →</Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
