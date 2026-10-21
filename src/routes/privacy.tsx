import { createFileRoute } from "@tanstack/react-router";
import { EMAIL } from "@/lib/content";
import { useCopy } from "@/lib/i18n";

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

const copy = {
  en: {
    eyebrow: "Legal",
    title: "Privacy",
    highlight: "Policy.",
    intro: "A short, plain summary of what we collect and what we do with it. Effective October 18, 2026.",
    questions: "Questions about your data?",
    writeTo: "Write to",
    reply: "and we will get back to you.",
    sections: [
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
    ],
  },
  fr: {
    eyebrow: "Mentions légales",
    title: "Politique de",
    highlight: "confidentialité.",
    intro: "Un résumé clair et concis de ce que nous recueillons et de ce que nous en faisons. En vigueur le 18\u00a0octobre 2026.",
    questions: "Des questions sur vos données\u00a0?",
    writeTo: "Écrivez à",
    reply: "et nous vous répondrons.",
    sections: [
      {
        title: "Qui nous sommes",
        body: [
          "Telliens offre des ateliers pour le personnel hôtelier et des audits de service. La présente politique explique quels renseignements personnels nous recueillons, comment nous les utilisons et quels choix s'offrent à vous.",
          `Pour toute question au sujet de cette politique, écrivez-nous à ${EMAIL}.`,
        ],
      },
      {
        title: "Renseignements que nous recueillons",
        body: [
          "Nous recueillons uniquement ce que vous nous transmettez lorsque vous communiquez avec nous. Il s'agit généralement de votre nom, de votre titre et de votre établissement, de votre adresse courriel, de votre numéro de téléphone si vous choisissez de le fournir, ainsi que du contenu de votre message.",
          "Lorsque vous réservez un appel au moyen de notre calendrier Calendly, Calendly recueille également votre nom, votre adresse courriel, votre fuseau horaire et vos disponibilités afin de planifier la rencontre.",
          "Nous n'utilisons aucun traceur publicitaire sur ce site et n'achetons de renseignements personnels auprès de personne.",
        ],
      },
      {
        title: "Utilisation de vos renseignements",
        body: [
          "Pour répondre à votre demande, préparer et tenir notre appel, et vous transmettre l'information demandée.",
          "Pour offrir un atelier ou un audit pour lequel vous avez retenu nos services, et conserver un dossier de ce travail.",
          "Pour vous envoyer, à l'occasion, des messages de suivi au sujet de nos services, uniquement si vous l'avez demandé ou y avez consenti. Vous pouvez nous demander d'y mettre fin en tout temps.",
        ],
      },
      {
        title: "Services de tiers",
        body: [
          "Nous utilisons Calendly pour la prise de rendez-vous et un fournisseur de messagerie pour la correspondance. Lorsqu'un tiers traite des renseignements en notre nom, il le fait uniquement à nos fins et selon nos instructions.",
          "Nous ne vendons ni ne louons vos renseignements personnels, et nous ne les communiquons à personne d'autre, sauf si la loi l'exige.",
        ],
      },
      {
        title: "Témoins et données du site",
        body: [
          "Ce site se veut simple. Il ne dépose aucun témoin publicitaire ou de suivi intersites qui lui soit propre.",
          "Les services intégrés, comme le calendrier de réservation Calendly de la page Contact, peuvent déposer leurs propres témoins lorsque vous interagissez avec eux. Ces témoins sont régis par la politique de confidentialité du fournisseur concerné.",
        ],
      },
      {
        title: "Durée de conservation",
        body: [
          "Nous conservons les renseignements liés aux demandes et aux clients seulement tant qu'ils nous sont utiles pour vous servir, puis uniquement si nous avons un motif légitime ou une obligation légale de les conserver.",
          "Si vous nous demandez de supprimer vos renseignements et qu'aucune raison légale ne nous oblige à les conserver, nous les supprimons.",
        ],
      },
      {
        title: "Protection de vos renseignements",
        body: [
          "Les renseignements sont conservés dans des systèmes à accès contrôlé, communiqués uniquement aux personnes qui en ont besoin pour effectuer le travail, et ne sont jamais rendus publics.",
          "Aucune méthode de stockage n'est entièrement sûre\u00a0; c'est pourquoi nous limitons la collecte au minimum et ne conservons que ce dont nous avons réellement besoin.",
        ],
      },
      {
        title: "Vos choix",
        body: [
          "Vous pouvez nous demander quels renseignements nous détenons à votre sujet, nous demander de corriger toute erreur ou nous demander de les supprimer.",
          `Faites parvenir ces demandes à ${EMAIL} et nous y donnerons suite, généralement dans un délai de 30\u00a0jours.`,
        ],
      },
      {
        title: "Modifications de cette politique",
        body: [
          "Si nous modifions cette politique, nous mettrons cette page à jour et réviserons la date indiquée ci-dessus. En continuant d'utiliser le site après une mise à jour, vous acceptez la politique révisée.",
        ],
      },
    ],
  },
};

function Privacy() {
  const c = useCopy(copy);
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="eyebrow">{c.eyebrow}</p>
      <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl md:text-6xl">{c.title} <span className="text-gradient">{c.highlight}</span></h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{c.intro}</p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {c.sections.map((s, i) => (
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
        <h2 className="text-3xl">{c.questions}</h2>
        <p className="mt-4 text-ink-foreground/80">{c.writeTo} <a className="font-semibold underline" href={`mailto:${EMAIL}`}>{EMAIL}</a> {c.reply}</p>
      </div>
    </section>
  );
}
