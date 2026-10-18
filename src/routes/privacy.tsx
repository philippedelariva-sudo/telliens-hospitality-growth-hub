import { createFileRoute } from "@tanstack/react-router";
import { EMAIL } from "@/lib/content";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Telliens" },
      { name: "description", content: "How Telliens collects, uses and protects your personal information when you contact us or book a call." },
      { property: "og:title", content: "Privacy Policy | Telliens" },
      { property: "og:description", content: "How we collect, use and protect your information." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacy,
});

const sections = [
  {
    title: "Who we are",
    body: [
      "Telliens provides hotel staff workshops and service audits. This policy explains what personal information we collect, how we use it, and what choices you have.",
      `For any question about this policy, write to us at ${EMAIL}.`,
    ],
  },
  {
    title: "Information we collect",
    body: [
      "We only collect what you give us when you get in touch. That is usually your name, your job title and property, your email address, your phone number if you choose to share it, and the contents of your message.",
      "When you book a call through our Calendly calendar, Calendly also collects your name, email address, time zone and availability so the meeting can be scheduled.",
      "We do not use advertising trackers on this site, and we do not buy personal information from anyone.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "To reply to your enquiry, prepare for and hold our call, and send you the information you asked for.",
      "To deliver a workshop or audit you have engaged us for, and to keep records of that work.",
      "To send occasional follow-up messages about our services, only where you have asked us to or agreed to hear from us. You can ask us to stop at any time.",
    ],
  },
  {
    title: "Third party services",
    body: [
      "Calendly is used for scheduling and email provider services for correspondence. Where a third party processes information on our behalf, they do so only for our purposes and under our instructions.",
      "We do not sell or rent your personal information, and we share it with no one else except where we are legally required to.",
    ],
  },
  {
    title: "Cookies and site data",
    body: [
      "This website keeps things simple. It does not set advertising or cross-site tracking cookies of its own.",
      "Embedded services, such as the Calendly booking calendar on the contact page, may set their own cookies once you interact with them. Those cookies are governed by the service provider's own privacy policy.",
    ],
  },
  {
    title: "How long we keep your information",
    body: [
      "We keep enquiry and client information only for as long as it is useful to serve you, and after that only where we have a legitimate reason or a legal obligation to keep it.",
      "If you ask us to delete your information and there is no legal reason to retain it, we remove it.",
    ],
  },
  {
    title: "How we protect your information",
    body: [
      "Information is stored in access-controlled systems, shared only with the people who need it to do the work, and never posted publicly.",
      "No method of storage is completely secure, so we keep collection to a minimum and hold only what we actually need.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can ask us what information we hold about you, ask us to correct anything that is wrong, or ask us to delete it.",
      `Send any of these requests to ${EMAIL} and we will handle it, usually within 30 days.`,
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "If we change this policy we will update this page and revise the date below. Continued use of the site after an update means you accept the revised policy.",
    ],
  },
];

function Privacy() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl">Privacy <span className="text-gradient">Policy.</span></h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        A short, plain summary of what we collect and what we do with it. Effective October 18, 2026.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {sections.map((s, i) => (
          <article key={s.title} className="rounded-lg border bg-card p-8">
            <p className="font-display text-sm font-semibold text-primary">{String(i + 1).padStart(2, "0")}</p>
            <h2 className="mt-2 text-2xl">{s.title}</h2>
            <div className="mt-4 space-y-3 text-muted-foreground">
              {s.body.map((p) => <p key={p}>{p}</p>)}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-ink p-10 text-ink-foreground">
        <h2 className="text-3xl">Questions about your data?</h2>
        <p className="mt-4 text-ink-foreground/80">Write to <a className="font-semibold underline" href={`mailto:${EMAIL}`}>{EMAIL}</a> and we will get back to you.</p>
      </div>
    </section>
  );
}
