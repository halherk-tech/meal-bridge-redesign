import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconName } from "./components/Icon";
import { SectionHeading } from "./components/SectionHeading";

export const metadata: Metadata = {
  title: "Stronger MEAL Systems. Better Decisions.",
  description:
    "MEAL Bridge strengthens organizations through integrated consultancy, systems development, and applied professional learning across MENA.",
  alternates: { canonical: "/" },
};

const audiences = ["NGOs & INGOs", "UN agencies", "Public institutions", "Civil society", "Universities", "Development partners"];

const divisions: Array<{
  id: string;
  number: string;
  icon: IconName;
  title: string;
  description: string;
  points: string[];
  href: string;
  link: string;
}> = [
  {
    id: "consultancy",
    number: "01",
    icon: "briefcase",
    title: "Consultancy",
    description: "Technical advice and hands-on implementation that turn MEAL standards into systems teams can actually use.",
    points: ["MEAL system design", "Monitoring, evaluation & accountability", "Assessments, research & TPM"],
    href: "/services#consultancy",
    link: "Explore consultancy",
  },
  {
    id: "systems",
    number: "02",
    icon: "layers",
    title: "Systems Development",
    description: "Digital infrastructure, data workflows, and decision tools designed around operational realities—not technology for its own sake.",
    points: ["Dashboards & decision support", "Data workflows & automation", "Digital feedback & knowledge systems"],
    href: "/services#systems",
    link: "Explore systems",
  },
  {
    id: "academy",
    number: "03",
    icon: "book",
    title: "Academy",
    description: "Applied learning pathways that build professional competence, organizational capability, and confident MEAL leadership.",
    points: ["Instructor-led programmes", "Customized organizational training", "Mentoring & professional pathways"],
    href: "/academy",
    link: "Explore the academy",
  },
];

const differentiators: Array<{ icon: IconName; title: string; text: string }> = [
  { icon: "globe", title: "Context before templates", text: "International standards adapted to organizational realities across Syria and the wider MENA region." },
  { icon: "wrench", title: "Built for implementation", text: "Practical tools, roles, workflows, and decision routines—not recommendations that remain on a shelf." },
  { icon: "shield", title: "Quality embedded", text: "Structured technical review, data-quality thinking, and clear accountability across every engagement." },
  { icon: "users", title: "Capacity that remains", text: "Coaching, mentoring, and knowledge transfer are built into the work so teams retain the capability." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MEAL Bridge Consulting LLC",
  url: "https://meal-bridge.com",
  email: "info@meal-bridge.com",
  description: "MEAL consulting, systems development, and professional learning across MENA.",
  areaServed: "MENA",
  address: { "@type": "PostalAddress", addressLocality: "Rural Damascus", addressCountry: "SY" },
};

export default function Home() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="home-hero">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="hero-bridge-line" aria-hidden="true" />
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <span className="eyebrow">Consultancy · Systems development · Academy</span>
            <h1><span>Stronger MEAL systems.</span> Better decisions. Greater impact.</h1>
            <p className="hero-lead">
              We help mission-driven organizations turn evidence, accountability, learning, and technology into stronger programmes and sustainable institutional capability.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary button-large" href="/services">
                Explore our solutions <Icon name="arrow" />
              </Link>
              <Link className="button button-secondary button-large" href="/contact">
                Discuss your priorities
              </Link>
            </div>
            <div className="hero-proof" aria-label="MEAL Bridge highlights">
              <div><strong>12+</strong><span>years of leadership experience</span></div>
              <div><strong>3</strong><span>integrated business divisions</span></div>
              <div><strong>MENA</strong><span>regional focus</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-topline"><span /> Integrated MEAL ecosystem</div>
            <img src="/assets/evidence-to-impact.webp" alt="A MEAL team translating evidence into better decisions and community impact" />
            <div className="hero-data-card hero-data-card-left">
              <Icon name="chart" />
              <div><strong>Evidence → insight</strong><span>Information designed for action</span></div>
            </div>
            <div className="hero-data-card hero-data-card-right">
              <span className="status-dot" />
              <div><strong>Systems that teams use</strong><span>Practical · connected · sustainable</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="audience-strip" aria-label="Organizations we support">
        <div className="container audience-inner">
          <p>Designed for organizations creating public and social value</p>
          <div className="audience-list">
            {audiences.map((audience) => <span key={audience}>{audience}</span>)}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="One partner. Three connected capabilities." title={<>From strategy to systems to <span className="accent-text">professional practice.</span></>}>
            <p>MEAL challenges rarely sit in one department. Our three divisions work together so advice, technology, and capacity development reinforce each other.</p>
          </SectionHeading>
          <div className="division-grid">
            {divisions.map((division) => (
              <article className={`division-card division-card-${division.id}`} key={division.id}>
                <div className="division-card-head">
                  <span className="division-icon"><Icon name={division.icon} /></span>
                  <span className="division-number">{division.number}</span>
                </div>
                <h2>{division.title}</h2>
                <p>{division.description}</p>
                <ul className="check-list">
                  {division.points.map((point) => <li key={point}><Icon name="check" /> {point}</li>)}
                </ul>
                <Link className="card-link" href={division.href}>{division.link} <Icon name="arrow" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ecosystem-section">
        <div className="container ecosystem-grid">
          <div className="ecosystem-visual">
            <img src="/assets/meal-ecosystem.webp" alt="Integrated MEAL ecosystem connecting evidence, people, processes, technology, and impact" />
            <div className="image-caption"><span>Integrated thinking</span> Evidence is only valuable when it changes decisions.</div>
          </div>
          <div>
            <SectionHeading eyebrow="From information to institutional action" title="Connect the full evidence-to-impact cycle.">
              <p>We look beyond individual tools. The real value comes from connecting data, people, governance, feedback, and learning into one usable management system.</p>
            </SectionHeading>
            <ol className="flow-list">
              <li><span>01</span><div><strong>Generate reliable evidence</strong><p>Clarify information needs, indicators, methods, responsibilities, and quality controls.</p></div></li>
              <li><span>02</span><div><strong>Translate evidence into insight</strong><p>Make information accessible through analysis, dashboards, feedback loops, and sense-making.</p></div></li>
              <li><span>03</span><div><strong>Enable timely action</strong><p>Connect insights to programme decisions, accountability, resource allocation, and adaptation.</p></div></li>
              <li><span>04</span><div><strong>Strengthen future performance</strong><p>Embed learning so the organization becomes more capable with every programme cycle.</p></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <SectionHeading align="center" eyebrow="Why MEAL Bridge" title="Technical depth without losing the operational reality.">
            <p>Our work is rigorous enough for governance and donor confidence, but practical enough for teams to implement under real constraints.</p>
          </SectionHeading>
          <div className="differentiator-grid">
            {differentiators.map((item) => (
              <article key={item.title}>
                <span><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section delivery-section">
        <div className="container delivery-grid">
          <div>
            <SectionHeading eyebrow="How we work" title="A disciplined route from complexity to capability.">
              <p>Every engagement is shaped around the organization, but the management logic remains clear and transparent.</p>
            </SectionHeading>
            <Link className="text-link" href="/about#approach">See our working principles <Icon name="arrow" /></Link>
          </div>
          <div className="delivery-steps">
            {[
              ["01", "Understand", "Context, priorities, stakeholders, constraints, and intended decisions."],
              ["02", "Diagnose", "System strengths, gaps, risks, information flows, and capacity needs."],
              ["03", "Design & build", "Practical frameworks, tools, workflows, technology, and governance."],
              ["04", "Embed & improve", "Coaching, rollout, quality checks, learning, and continuous adaptation."],
            ].map(([number, title, text]) => (
              <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta">
          <div>
            <span className="eyebrow eyebrow-light">Start with the challenge—not a predefined package</span>
            <h2>What needs to work better in your MEAL system?</h2>
            <p>Share the situation, the decision you need to make, or the capability you want to build. We will help define the right starting point.</p>
          </div>
          <Link className="button button-white button-large" href="/contact">Start the conversation <Icon name="arrow" /></Link>
        </div>
      </section>
    </main>
  );
}
