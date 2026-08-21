import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "../components/ContactForm";
import { Icon, type IconName } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact MEAL Bridge to discuss MEAL consulting, systems development, organizational training, partnerships, or professional collaboration.",
  alternates: { canonical: "/contact" },
};

const conversations: Array<{ icon: IconName; title: string; text: string; intent: string }> = [
  { icon: "briefcase", title: "Consultancy or systems", text: "A technical challenge, assignment, system gap, digital workflow, or organizational priority.", intent: "service" },
  { icon: "book", title: "Training & Academy", text: "Individual learning, customized team development, coaching, or institutional capability.", intent: "training" },
  { icon: "network", title: "Partnership", text: "Technical, academic, research, innovation, delivery, or strategic collaboration.", intent: "partnership" },
  { icon: "users", title: "Professional network", text: "Consulting, mentoring, facilitation, research, specialist, or future team opportunities.", intent: "join" },
];

export default async function ContactPage({ searchParams }: { searchParams?: Promise<{ intent?: string }> }) {
  const params = searchParams ? await searchParams : {};
  const initialIntent = typeof params.intent === "string" ? params.intent : "";

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Contact"
        title={<>Start with the <span className="hero-accent">situation you need to change.</span></>}
        aside={
          <div className="contact-hero-aside"><Icon name="mail" /><span><small>Direct email</small><a href="mailto:info@meal-bridge.com">info@meal-bridge.com</a></span></div>
        }
      >
        <p>You do not need to know the exact service. Describe the challenge, opportunity, or capability you want to build and we will identify the right next conversation.</p>
      </PageHero>

      <section className="section conversation-section">
        <div className="container">
          <SectionHeading eyebrow="Choose a starting point" title="What kind of conversation do you need?">
            <p>Each option leads to the same inquiry form, with the context preselected so you can focus on the details that matter.</p>
          </SectionHeading>
          <div className="conversation-grid">
            {conversations.map((item) => (
              <Link href={`/contact?intent=${item.intent}#inquiry`} key={item.title}>
                <span><Icon name={item.icon} /></span><h2>{item.title}</h2><p>{item.text}</p><b>Start here <Icon name="arrow" /></b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section inquiry-section" id="inquiry">
        <div className="container inquiry-grid">
          <div className="inquiry-context">
            <SectionHeading eyebrow="Send an inquiry" title="Give us enough context to make the first response useful.">
              <p>Helpful information includes the organization or programme, the current challenge, who is affected, the intended outcome, and any relevant timing.</p>
            </SectionHeading>
            <div className="contact-direct-list">
              <a href="mailto:info@meal-bridge.com"><Icon name="mail" /><span><small>Email</small><strong>info@meal-bridge.com</strong></span></a>
              <div><Icon name="map" /><span><small>Location</small><strong>Rural Damascus, Syria</strong></span></div>
              <div><Icon name="globe" /><span><small>Delivery</small><strong>MENA · Remote &amp; on-site</strong></span></div>
            </div>
            <div className="response-note"><Icon name="shield" /><p>Your information is used to review and respond to this inquiry. Please do not include sensitive beneficiary data or confidential case information.</p></div>
          </div>
          <div className="form-shell">
            <div className="form-shell-head"><span>MEAL Bridge inquiry</span><p>Required fields are marked with *</p></div>
            <ContactForm initialIntent={initialIntent} />
          </div>
        </div>
      </section>

      <section className="section simple-cta-section">
        <div className="container simple-cta">
          <div><span className="eyebrow">Not ready for a formal inquiry?</span><h2>Start with one clear question.</h2></div>
          <a className="button button-secondary button-large" href="mailto:info@meal-bridge.com">Email MEAL Bridge <Icon name="arrow" /></a>
        </div>
      </section>
    </main>
  );
}
