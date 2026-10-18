import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/SiteChrome";
import { CALENDLY } from "@/lib/content";
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

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={hero} alt="Hotel receptionist welcoming a guest" width={1920} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center md:py-32">
          <p className="eyebrow">Hospitality consulting</p>
          <h1 className="mt-5 text-4xl leading-tight md:text-6xl">Hotel workshops &amp; service audits</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Your guests judge the property by how your team makes them feel. Your owners judge it by the numbers that follow.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn-primary">Book a 30-min call</a>
            <Link to="/workshops" className="btn-ghost bg-background">Explore workshops</Link>
          </div>
        </div>
      </section>
      <p className="mx-auto max-w-3xl px-6 py-14 text-center text-xl italic text-muted-foreground md:text-2xl">
        We run on-site workshops, working hands-on with your staff and management team.
      </p>

      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3 text-center">
          {[
            ["Customized", "Workshops and audits tailored to each property"],
            ["Hands-on", "On-the-floor delivery with staff and management"],
            ["15 to 30", "Participants per session, more on request"],
          ].map(([k, v]) => (
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
            <p className="eyebrow">Training sessions we host</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Built for the floor, not the boardroom.</h2>
          </div>
          <Link to="/workshops" className="font-semibold text-primary">See all details →</Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-10">
          <p className="eyebrow">Workshops</p>
          <h3 className="mt-3 text-3xl">We show up in person.</h3>
          <p className="mt-4 text-muted-foreground">We work alongside your team and focus on building habits that last. Created by OCT certified professionals.</p>
          <Link to="/workshops" className="mt-6 inline-block font-semibold text-primary">Workshops →</Link>
        </div>
        <div className="rounded-lg bg-secondary p-10">
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
