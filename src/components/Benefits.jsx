import { Icon, SectionIntro } from './ui';
import { pillars } from '../content/site';

export function Benefits() {
  return (
    <section className="section" id="product" aria-labelledby="benefits-title">
      <SectionIntro id="benefits-title" eyebrow={pillars.eyebrow} title={pillars.title} accent={pillars.accent} text={pillars.text} />
      <div className="benefit-grid">
        {pillars.items.map(item => (
          <article className="benefit-card" key={item.title}>
            <span className="feature-icon"><Icon name={item.icon} size={22} /></span>
            <span className="feature-tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
