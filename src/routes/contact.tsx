import { createFileRoute } from "@tanstack/react-router";
import { CALENDLY, EMAIL } from "@/lib/content";
import { useCopy } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Telliens | Book a Call" },
      { name: "description", content: "Book a 30-minute call with Telliens or email phil@telliens.com to discuss your property." },
      { property: "og:title", content: "Contact Telliens" },
      { property: "og:description", content: "Book a 30-minute call about your property." },
    ],
  }),
  component: Contact,
});

const copy = {
  en: { title: "Let's talk about", highlight: "your property.", before: "Pick a time below, or drop a line at", after: ".", frame: "Book a call with Telliens" },
  fr: { title: "Parlons de", highlight: "votre établissement.", before: "Choisissez un moment ci-dessous ou écrivez-nous à", after: ".", frame: "Réserver un appel avec Telliens" },
};

function Contact() {
  const c = useCopy(copy);
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl md:text-6xl">{c.title} <span className="text-gradient">{c.highlight}</span></h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{c.before} <a className="font-semibold text-primary" href={`mailto:${EMAIL}`}>{EMAIL}</a>{c.after}</p>
      <div className="mt-10 overflow-hidden rounded-lg border bg-card shadow-soft">
        <iframe src={`${CALENDLY}?hide_gdpr_banner=1`} title={c.frame} className="h-[720px] w-full" />
      </div>
    </section>
  );
}
