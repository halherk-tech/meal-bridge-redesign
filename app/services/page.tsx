import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconName } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "MEAL Consultancy & Systems Development",
  description: "Integrated MEAL consultancy and systems development—from strategy and accountability to dashboards, automation, and digital decision support.",
  alternates: { canonical: "/services" },
};

const consultancy: Array<{ icon: IconName; title: string; text: string; outputs: string[]; id?: string }> = [
  { icon: "compass", title: "MEAL system design & strengthening", text: "Build or upgrade the architecture connecting strategy, programmes, evidence, accountability, learning, and decision-making.", outputs: ["MEAL frameworks", "Indicator architecture", "Roles, SOPs & governance"] },
  { icon: "chart", title: "Monitoring & evaluation", text: "Create monitoring and evaluation approaches that produce credible evidence for performance, adaptation, and strategic decisions.", outputs: ["M&E plans", "Evaluation designs", "Tools & analysis plans"] },
  { icon: "users", title: "Accountability & community engagement", text: "Design safe, accessible, and responsive feedback systems that strengthen trust and organizational accountability.", outputs: ["Feedback mechanisms", "Referral pathways", "Response & analysis workflows"], id: "accountability" },
  { icon: "search", title: "Research, assessments & evaluations", text: "Generate decision-ready evidence through rigorous, context-sensitive research and evaluation assignments.", outputs: ["Baseline & endline studies", "Needs assessments", "Independent evaluations"] },
  { icon: "shield", title: "Third-party monitoring & quality assurance", text: "Provide independent verification, field insight, and structured quality assurance for complex programmes and portfolios.", outputs: ["Monitoring protocols", "Verification tools", "Independent reporting"] },
  { icon: "spark", title: "Learning & adaptive management", text: "Turn evidence and operational experience into learning routines that improve future programme choices.", outputs: ["Learning agendas", "Review workshops", "Decision & adaptation tracking"] },
];

const systems: Array<{ icon: IconName; title: string; text: string; outputs: string[] }> = [
  { icon: "layers", title: "Data architecture & workflows", text: "Connect data collection, validation, storage, analysis, reporting, and ownership into a coherent operating model.", outputs: ["Data-flow design", "Validation rules", "Governance & access"] },
  { icon: "chart", title: "Dashboards & business intelligence", text: "Give decision-makers focused, role-relevant views of performance, risk, accountability, and emerging trends.", outputs: ["Decision dashboards", "Indicator tracking", "Management views"] },
  { icon: "network", title: "Automation & system integration", text: "Reduce manual friction by connecting repeated workflows, platforms, and information products.", outputs: ["Workflow automation", "System connections", "Reporting pipelines"] },
  { icon: "users", title: "Digital feedback & case management", text: "Build structured digital pathways for feedback intake, referral, follow-up, analysis, and responsible closure.", outputs: ["Case workflows", "Role-based tracking", "Accountability analytics"] },
  { icon: "spark", title: "Responsible AI for MEAL", text: "Identify practical, governed uses of AI that improve analysis, documentation, quality checks, and knowledge access.", outputs: ["Use-case assessment", "Human review controls", "AI-enabled workflows"] },
  { icon: "book", title: "Knowledge & learning systems", text: "Make programme knowledge easier to find, interpret, share, and reuse across teams and programme cycles.", outputs: ["Knowledge structures", "Learning repositories", "Retrieval & synthesis workflows"] },
];

const engagementModels = [
  ["Advisory", "Targeted senior technical guidance for a defined challenge or strategic decision."],
  ["Project delivery", "End-to-end diagnosis, design, implementation, handover, and capacity transfer."],
  ["Retained support", "Ongoing technical accompaniment, quality assurance, and continuous improvement."],
  ["Integrated assignment", "Consultancy, systems development, and capacity building delivered as one coherent programme."],
];

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Solutions"
        title={<>From technical strategy to <span className="hero-accent">working systems.</span></>}
        aside={
          <div className="hero-mini-panel">
            <span>Integrated delivery</span>
            <ol><li>Diagnose the real constraint</li><li>Design around decisions</li><li>Build and embed capability</li></ol>
          </div>
        }
      >
        <p>MEAL Bridge combines specialist consultancy with systems development so organizations can move beyond isolated tools and build capability that works end to end.</p>
      </PageHero>

      <section className="section service-overview">
        <div className="container overview-grid">
          <SectionHeading eyebrow="Two divisions. One operating logic." title="Choose a starting point—not a silo.">
            <p>Some assignments begin with governance or methodology. Others begin with broken data flows or disconnected tools. We diagnose the system and bring in the right capabilities around the problem.</p>
          </SectionHeading>
          <nav className="section-jump" aria-label="Solutions on this page">
            <Link href="#consultancy"><span>01</span> Consultancy <Icon name="chevron" /></Link>
            <Link href="#systems"><span>02</span> Systems Development <Icon name="chevron" /></Link>
            <Link href="#engagement"><span>03</span> Ways to work together <Icon name="chevron" /></Link>
          </nav>
        </div>
      </section>

      <section className="section capability-section" id="consultancy">
        <div className="container">
          <div className="division-intro">
            <div className="division-intro-mark"><span>01</span><Icon name="briefcase" /></div>
            <SectionHeading eyebrow="Consultancy" title="Technical depth that reaches implementation.">
              <p>We help organizations clarify what the MEAL system must achieve, establish the right architecture, and support teams as the design moves into daily practice.</p>
            </SectionHeading>
          </div>
          <div className="capability-grid">
            {consultancy.map((item) => (
              <article className="capability-card" key={item.title} id={item.id}>
                <span className="capability-icon"><Icon name={item.icon} /></span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <div className="output-list"><strong>Typical outputs</strong>{item.outputs.map((output) => <span key={output}>{output}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section capability-section capability-section-alt" id="systems">
        <div className="container" id="digital">
          <div className="division-intro">
            <div className="division-intro-mark division-intro-mark-orange"><span>02</span><Icon name="layers" /></div>
            <SectionHeading eyebrow="Systems Development" title="Digital systems designed around real decisions.">
              <p>We translate operational requirements into usable data, feedback, automation, and learning systems—with governance and human judgment built in from the start.</p>
            </SectionHeading>
          </div>
          <div className="capability-grid">
            {systems.map((item) => (
              <article className="capability-card" key={item.title}>
                <span className="capability-icon capability-icon-orange"><Icon name={item.icon} /></span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <div className="output-list"><strong>Typical outputs</strong>{item.outputs.map((output) => <span key={output}>{output}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section integrated-section">
        <div className="container integrated-grid">
          <div>
            <SectionHeading eyebrow="Where the strongest value emerges" title="Integrate methodology, technology, and people.">
              <p>A dashboard cannot repair weak indicators. A framework cannot succeed without workflows and ownership. Training cannot compensate for a system that is difficult to use. Integrated assignments align all three.</p>
            </SectionHeading>
            <ul className="check-list check-list-large">
              <li><Icon name="check" /> Strategy and information needs define the technology</li>
              <li><Icon name="check" /> Governance and quality controls are built into workflows</li>
              <li><Icon name="check" /> Teams learn through implementation—not a separate handover</li>
              <li><Icon name="check" /> Feedback and learning connect directly to management decisions</li>
            </ul>
          </div>
          <div className="integrated-visual">
            <img src="/assets/evidence-to-impact.webp" alt="An integrated MEAL team using evidence to support action and community impact" />
            <div className="integrated-label"><Icon name="network" /><span><strong>One operating system</strong> People · process · data · governance</span></div>
          </div>
        </div>
      </section>

      <section className="section engagement-section" id="engagement">
        <div className="container">
          <SectionHeading eyebrow="Ways to work together" title="Match the engagement model to the need.">
            <p>The scope can be tightly focused or organization-wide. The right model depends on the complexity, urgency, internal capability, and level of implementation support required.</p>
          </SectionHeading>
          <div className="engagement-grid">
            {engagementModels.map(([title, text], index) => (
              <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <SectionHeading eyebrow="Common questions" title="Start with clarity.">
            <p>If the exact service is not obvious, describe the operational challenge. Defining the right problem is part of the work.</p>
          </SectionHeading>
          <div className="faq-list">
            <details><summary>Can you strengthen an existing MEAL system rather than build a new one?<Icon name="chevron" /></summary><p>Yes. We assess what already works, identify the highest-value gaps, and prioritize targeted improvements rather than replacing useful structures.</p></details>
            <details><summary>Can one assignment combine consulting and systems development?<Icon name="chevron" /></summary><p>Yes. This is often the strongest approach because the technical methodology, digital workflows, governance, and capacity transfer can be designed together.</p></details>
            <details><summary>Do you work remotely and on-site?<Icon name="chevron" /></summary><p>Most advisory, design, coaching, and digital work can be delivered remotely. Selected assessments, workshops, and implementation activities can be delivered on-site where feasible.</p></details>
            <details><summary>Can you work with our existing tools and platforms?<Icon name="chevron" /></summary><p>Yes. We begin with the operational requirement and the existing technology landscape, then determine whether configuration, integration, or a new solution creates the best value.</p></details>
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta">
          <div><span className="eyebrow eyebrow-light">Bring us the problem</span><h2>Let’s define the right intervention together.</h2><p>Tell us what is not working, what decision is being constrained, or what organizational capability needs to improve.</p></div>
          <Link className="button button-white button-large" href="/contact?intent=service">Discuss your needs <Icon name="arrow" /></Link>
        </div>
      </section>
    </main>
  );
}
