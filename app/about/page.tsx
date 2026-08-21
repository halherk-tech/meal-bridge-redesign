import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconName } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "About MEAL Bridge",
  description: "Learn why MEAL Bridge exists, how we work, and the leadership and principles behind our MEAL consultancy, systems, and Academy.",
  alternates: { canonical: "/about" },
};

const principles: Array<{ icon: IconName; title: string; text: string }> = [
  { icon: "target", title: "Evidence first", text: "Recommendations must be grounded in credible information, disciplined analysis, and an explicit decision need." },
  { icon: "users", title: "People-centred", text: "MEAL systems should strengthen accountability, improve services, and respect the people whose lives generate the data." },
  { icon: "wrench", title: "Practical by design", text: "A technically perfect framework has little value if teams cannot operate it under real constraints." },
  { icon: "spark", title: "Learning oriented", text: "Every engagement should leave stronger capability, clearer judgment, and a better next cycle." },
  { icon: "shield", title: "Integrity always", text: "Confidentiality, transparency, ethical judgment, and responsible evidence use are non-negotiable." },
  { icon: "globe", title: "Locally grounded", text: "International practice must be adapted to context—not imposed without understanding institutions and communities." },
];

const approach = [
  ["01", "Understand before prescribing", "We begin with the organization’s context, decisions, people, existing systems, incentives, risks, and operating constraints."],
  ["02", "Design the whole operating model", "We connect methodology, roles, workflows, technology, governance, and capability rather than treating them as separate deliverables."],
  ["03", "Build with the people who will use it", "Participation and iterative testing make solutions more usable, more owned, and more likely to survive implementation."],
  ["04", "Transfer capability throughout", "Coaching, mentoring, documentation, and guided practice are embedded from the start—not postponed to a final handover."],
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About MEAL Bridge"
        title={<>Built to close the gap between <span className="hero-accent">MEAL theory and practice.</span></>}
        aside={
          <div className="about-hero-facts">
            <div><strong>3</strong><span>connected divisions</span></div>
            <div><strong>12+</strong><span>years leadership experience</span></div>
            <div><strong>MENA</strong><span>regional focus</span></div>
          </div>
        }
      >
        <p>We exist to help organizations build MEAL capability that improves decisions, accountability, programme quality, and long-term institutional performance.</p>
      </PageHero>

      <section className="section story-section">
        <div className="container story-grid-new">
          <div>
            <SectionHeading eyebrow="Why we exist" title="Strong organizations need more than compliant tools.">
              <p>MEAL Bridge was founded on a simple observation: technical knowledge is widely available, yet many organizations still struggle to translate it into connected systems, confident teams, and decisions that improve programmes.</p>
            </SectionHeading>
            <p className="story-body">Our role is to bridge those gaps—between evidence and action, standards and local realities, technology and people, learning and leadership. The result should not be dependency on an external consultant. It should be stronger organizational capability.</p>
          </div>
          <div className="purpose-stack">
            <article className="purpose-card purpose-card-mission"><span>Our mission</span><h2>Strengthen organizations through practical MEAL consulting, systems, and learning that improve performance, transparency, and evidence-based decision-making.</h2></article>
            <article className="purpose-card"><span>Our vision</span><h2>Organizations across MENA equipped to create sustainable, measurable, and people-centred impact.</h2></article>
          </div>
        </div>
      </section>

      <section className="section principle-section">
        <div className="container">
          <SectionHeading eyebrow="What guides the work" title="Principles visible in the final system—not only the proposal.">
            <p>These principles shape how we diagnose problems, make technical choices, work with partners, and judge whether an engagement has created lasting value.</p>
          </SectionHeading>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article key={principle.title}><span><Icon name={principle.icon} /></span><h2>{principle.title}</h2><p>{principle.text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section approach-section" id="approach">
        <div className="container">
          <SectionHeading eyebrow="Our working approach" title="Build capacity, not dependency.">
            <p>Success is not measured only by what we deliver. It is measured by what the organization can understand, operate, adapt, and improve after the engagement.</p>
          </SectionHeading>
          <div className="approach-list">
            {approach.map(([number, title, text]) => (
              <article key={number}><span>{number}</span><h2>{title}</h2><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section leadership-section">
        <div className="container leadership-grid-new">
          <div className="leadership-photo-new">
            <img src="/assets/humam-alherk.webp" alt="Humam Alherk, Founder and CEO of MEAL Bridge Consulting LLC" />
            <div className="leadership-photo-label"><span>Founder &amp; CEO</span><strong>Humam Alherk</strong></div>
          </div>
          <div>
            <SectionHeading eyebrow="Leadership" title="Experience shaped in real operating environments.">
              <p>MEAL Bridge is led by Humam Alherk, a MEAL/MERL professional with more than twelve years of progressive experience across humanitarian and development contexts.</p>
            </SectionHeading>
            <p className="leadership-copy">His experience spans organizational MEAL leadership, emergency response, accountability, evaluations, programme information, digital workflows, capacity development, and the practical work of helping teams turn evidence into decisions.</p>
            <blockquote><Icon name="quote" /><p>“The strongest MEAL system is not the most complicated one. It is the one people trust, understand, use, and continuously improve.”</p></blockquote>
            <div className="leadership-pillars">
              <span><Icon name="shield" /> Integrity</span>
              <span><Icon name="target" /> Impact</span>
              <span><Icon name="spark" /> Innovation</span>
              <span><Icon name="users" /> Local capability</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section collaboration-section">
        <div className="container collaboration-grid">
          <div>
            <SectionHeading eyebrow="Collaboration" title="Extend capability through the right partnerships.">
              <p>MEAL Bridge works with NGOs, universities, public institutions, independent specialists, technology partners, and professional networks where complementary strengths can create greater value.</p>
            </SectionHeading>
          </div>
          <div className="collaboration-types">
            <span>Technical assignments</span><span>Academic collaboration</span><span>Research & learning</span><span>Digital innovation</span><span>Professional networks</span><span>Regional initiatives</span>
          </div>
          <Link className="button button-secondary" href="/contact?intent=partnership">Explore a partnership <Icon name="arrow" /></Link>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta">
          <div><span className="eyebrow eyebrow-light">A stronger next cycle</span><h2>Leave the organization more capable than we found it.</h2><p>That is the standard behind every consultancy, system, learning programme, and partnership.</p></div>
          <Link className="button button-white button-large" href="/contact">Talk with MEAL Bridge <Icon name="arrow" /></Link>
        </div>
      </section>
    </main>
  );
}
