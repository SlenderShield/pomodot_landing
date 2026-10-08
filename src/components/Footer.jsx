import { Brand, PrimaryCta } from './ui';
import { cta } from '../content/site';

export function CTA() {
  return (
    <section className="cta section" aria-labelledby="cta-title">
      <div><p className="eyebrow">{cta.eyebrow}</p><h2 id="cta-title">{cta.title}<br /><em>{cta.accent}</em></h2><p>{cta.text}</p></div>
      <PrimaryCta light />
      <small>{cta.note}</small>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container footer-main">
        <div><Brand /><p>The calm task manager with a Pomodoro timer that follows you.</p></div>
        <nav className="footer-links" aria-label="Footer"><a href="#why">Why Pomodot</a><a href="#product">Product</a><a href="#roadmap">Roadmap</a><a href="#faq">FAQ</a><a href="#timer">Try the timer</a></nav>
      </div>
      <div className="container footer-bottom"><span>© 2026 Pomodot. Made for thoughtful work.</span><span>Offline-first · Web, Android &amp; iOS</span></div>
    </footer>
  );
}
