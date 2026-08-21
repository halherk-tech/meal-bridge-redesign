import Link from "next/link";
import { Icon } from "./Icon";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" className="footer-wordmark" aria-label="MEAL Bridge home">
            <span>MEAL</span> BRIDGE
            <small>CONSULTING LLC</small>
          </Link>
          <p>
            Practical MEAL consulting, systems development, and professional learning for organizations creating meaningful impact.
          </p>
          <div className="footer-signal"><span /> Empowering smarter decisions</div>
        </div>

        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/services">Solutions</Link>
          <Link href="/academy">Academy</Link>
          <Link href="/about">About</Link>
          <Link href="/contact?intent=partnership">Partnerships</Link>
          <Link href="/contact?intent=join">Join our network</Link>
        </div>

        <div className="footer-column">
          <h2>Core capabilities</h2>
          <Link href="/services#consultancy">MEAL consultancy</Link>
          <Link href="/services#systems">Systems development</Link>
          <Link href="/academy">Capacity development</Link>
          <Link href="/services#accountability">Accountability systems</Link>
          <Link href="/services#digital">Digital MEAL solutions</Link>
        </div>

        <div className="footer-column footer-contact">
          <h2>Contact</h2>
          <a href="mailto:info@meal-bridge.com"><Icon name="mail" /> info@meal-bridge.com</a>
          <span><Icon name="map" /> Rural Damascus, Syria</span>
          <span><Icon name="globe" /> MENA region · Remote &amp; on-site</span>
          <Link className="text-link" href="/contact">Send an inquiry <Icon name="arrow" /></Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} MEAL Bridge Consulting LLC. All rights reserved.</p>
        <p>Monitoring · Evaluation · Accountability · Learning</p>
      </div>
    </footer>
  );
}
