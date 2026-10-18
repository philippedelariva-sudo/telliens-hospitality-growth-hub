import { createFileRoute } from "@tanstack/react-router";
import { CALENDLY, EMAIL } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Telliens — Book a Call" },
      { name: "description", content: "Book a 30-minute call with Telliens or email phil@telliens.com to discuss your property." },
      { property: "og:title", content: "Contact Telliens" },
      { property: "og:description", content: "Book a 30-minute call about your property." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl">Let's talk about <span className="text-gradient">your property.</span></h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Pick a time below, or drop a line at <a className="font-semibold text-primary" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      <div className="mt-10 overflow-hidden rounded-lg border bg-card shadow-soft">
        <iframe src={`${CALENDLY}?hide_gdpr_banner=1`} title="Book a call with Telliens" className="h-[720px] w-full" />
      </div>
    </section>
  );
}
