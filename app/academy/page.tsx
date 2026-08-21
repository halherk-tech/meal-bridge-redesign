import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconName } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "MEAL Bridge Academy",
  description: "Applied MEAL learning pathways, customized organizational training, mentoring, and professional development for individuals and institutions.",
  alternates: { canonical: "/academy" },
};

const audiences: Array<{ icon: IconName; title: string; text: string; label: string }> = [
  { icon: "users", title: "Emerging professionals", text: "Build a credible foundation and translate concepts into practical workplace skills.", label: "Enter the profession" },
  { icon: "briefcase", title: "MEAL practitioners", text: "Deepen technical practice, specialization, and confidence in complex assignments.", label: "Advance your practice" },
  { icon: "building", title: "Organizations & teams", text: "Strengthen shared standards, workflows, leadership, and institutional capability.", label: "Build team capability" },
];

const pathways = [
  { number: "01", level: "Foundation", title: "Understand the MEAL operating model", text: "Core concepts, roles, programme logic, indicators, data quality, accountability, learning, and the decisions MEAL must support.", outcomes: ["Professional orientation", "Shared MEAL language", "Practical foundation"] },
  { number: "02", level: "Professional practice", title: "Design and operate stronger systems", text: "Applied competencies for developing frameworks, plans, tools, workflows, feedback mechanisms, analysis, and reporting products.", outcomes: ["Technical competence", "Workplace application", "Portfolio-ready outputs"] },
  { number: "03", level: "Specialization", title: "Deepen expertise in a focused discipline", text: "Advanced learning in system design, accountability, evaluation, digital MEAL, data, humanitarian contexts, and other specialist areas.", outcomes: ["Advanced methods", "Complex casework", "Specialist confidence"] },
  { number: "04", level: "Leadership & institutional capacity", title: "Lead sustainable MEAL capability", text: "Strategic learning for MEAL leaders and organizations covering governance, team structures, quality, influence, learning culture, and change management.", outcomes: ["Strategic leadership", "Institutional systems", "Sustainable capability"] },
];

const formats: Array<{ icon: IconName; title: string; text: string }> = [
  { icon: "book", title: "Instructor-led courses", text: "Structured public programmes combining expert facilitation, discussion, tools, and applied assignments." },
  { icon: "building", title: "Organizational programmes", text: "Customized learning built around an institution’s systems, teams, programmes, and performance priorities." },
  { icon: "users", title: "Coaching & mentoring", text: "Focused guidance that helps professionals apply learning, navigate challenges, and accelerate development." },
  { icon: "network", title: "Talent pathways", text: "Progressive opportunities connecting learning, practice, professional exposure, and future assignments." },
];

export default function AcademyPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="MEAL Bridge Academy"
        title={<>Learn. Practice. <span className="hero-accent">Lead.</span></>}
        aside={
          <div className="academy-hero-panel">
            <span>Applied learning model</span>
            <div><b>Learn</b><i /> <b>Apply</b><i /> <b>Reflect</b><i /> <b>Lead</b></div>
          </div>
        }
      >
        <p>Professional learning that develops practical MEAL competence—not short-term knowledge that disappears after the final session.</p>
      </PageHero>

      <section className="section academy-audience-section">
        <div className="container">
          <SectionHeading eyebrow="Learning designed around the next capability" title="Different starting points. Clear professional progression.">
            <p>The Academy supports people entering the profession, practitioners strengthening technical depth, and organizations building shared institutional capability.</p>
          </SectionHeading>
          <div className="academy-audience-grid">
            {audiences.map((item) => (
              <article key={item.title}>
                <span className="academy-audience-icon"><Icon name={item.icon} /></span>
                <small>{item.label}</small>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pathway-section">
        <div className="container">
          <SectionHeading eyebrow="Learning pathways" title="A route from foundation to professional leadership.">
            <p>Each pathway develops a different level of capability while keeping practical application, feedback, and real MEAL work at the centre.</p>
          </SectionHeading>
          <div className="academy-pathways">
            {pathways.map((pathway) => (
              <article key={pathway.number}>
                <div className="pathway-index"><span>{pathway.number}</span><i /></div>
                <div className="pathway-main"><small>{pathway.level}</small><h2>{pathway.title}</h2><p>{pathway.text}</p></div>
                <div className="pathway-outcomes">{pathway.outcomes.map((outcome) => <span key={outcome}><Icon name="check" />{outcome}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section format-section">
        <div className="container">
          <SectionHeading eyebrow="How learning is delivered" title="The right format for the capability you need.">
            <p>Delivery can be public or customized, individual or team-based, short and focused or progressive over time.</p>
          </SectionHeading>
          <div className="format-grid">
            {formats.map((format, index) => (
              <article key={format.title}><span><Icon name={format.icon} /></span><small>0{index + 1}</small><h2>{format.title}</h2><p>{format.text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section learning-model-section">
        <div className="container learning-model-grid">
          <div>
            <SectionHeading eyebrow="The Academy standard" title="Practice is part of the curriculum—not an afterthought.">
              <p>Our learning design connects explanation to demonstration, guided practice, feedback, and workplace application.</p>
            </SectionHeading>
            <div className="learning-principles">
              <article><Icon name="target" /><div><h3>Purpose-led</h3><p>Every activity links to a professional capability and a real decision or task.</p></div></article>
              <article><Icon name="wrench" /><div><h3>Tool-enabled</h3><p>Learners work with practical methods, templates, cases, and implementation choices.</p></div></article>
              <article><Icon name="users" /><div><h3>Human feedback</h3><p>Facilitation, discussion, coaching, and peer learning deepen judgment—not just recall.</p></div></article>
              <article><Icon name="spark" /><div><h3>Growth-oriented</h3><p>Reflection and feedback identify the next level of professional development.</p></div></article>
            </div>
          </div>
          <div className="learning-model-visual" aria-label="Learning cycle">
            <div className="learning-orbit"><span>Practice</span><span>Feedback</span><span>Application</span><span>Reflection</span><strong>Capability</strong></div>
            <p>Knowledge becomes valuable when it changes professional practice.</p>
          </div>
        </div>
      </section>

      <section className="section institutional-section">
        <div className="container institutional-grid">
          <div>
            <span className="eyebrow eyebrow-light">For organizations</span>
            <h2>Training becomes strategic when it is connected to the system.</h2>
          </div>
          <div>
            <p>Customized programmes can combine technical assessment, team learning, coaching, tools, and implementation support. This helps organizations close real capability gaps rather than deliver isolated training events.</p>
            <ul className="check-list institutional-list">
              <li><Icon name="check" /> Organizational needs and competency assessment</li>
              <li><Icon name="check" /> Contextualized cases, tools, and assignments</li>
              <li><Icon name="check" /> Leadership and team learning tracks</li>
              <li><Icon name="check" /> Follow-up coaching and implementation support</li>
            </ul>
            <Link className="button button-white" href="/contact?intent=training">Request organizational training <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>

      <section className="section final-cta-section academy-final-cta">
        <div className="container final-cta">
          <div><span className="eyebrow eyebrow-light">Your next capability</span><h2>Build skills that hold up in real work.</h2><p>Tell us where you or your team currently stand and the capability you want to develop next.</p></div>
          <Link className="button button-white button-large" href="/contact?intent=training">Explore the right pathway <Icon name="arrow" /></Link>
        </div>
      </section>
    </main>
  );
}
