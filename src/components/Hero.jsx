import { Button, PrimaryCta } from './ui';
import { hero } from '../content/site';

const today = new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });

export function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <p className="hero-kicker"><span /> {hero.kicker}</p>
        <h1>{hero.title}<em>{hero.titleAccent}</em></h1>
        <p className="hero-text">{hero.text}</p>
        <div className="hero-actions"><PrimaryCta /><Button href="#roadmap" variant="ghost">See what’s in v1</Button></div>
        <ul className="hero-trust">{hero.trust.map(item => <li key={item}>{item}</li>)}</ul>
      </div>
      <div className="hero-preview" aria-hidden="true">
        <div className="preview-top"><span className="preview-brand"><b /> Today</span><span>{today}</span></div>
        <div className="preview-main">
          <div className="mini-timer"><div><strong>24:12</strong><span>Focus session</span></div></div>
          <div className="mini-task">
            <span>IN FOCUS</span>
            <h3>Draft product launch announcement</h3>
            <p>2 of 4 subtasks complete</p>
            <div><b>Pause</b><em>from any device</em></div>
          </div>
        </div>
        <div className="preview-devices"><span className="on">Laptop · started</span><span className="on">Phone · live</span><span>Tablet · offline</span></div>
        <div className="preview-footer"><span><i /> Synced just now</span><span>Queued changes: 0</span></div>
      </div>
    </section>
  );
}
