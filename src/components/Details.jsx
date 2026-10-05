import { Icon, SectionIntro } from './ui';
import { details } from '../content/site';

export function Details() {
  return (
    <section className="details section" id="details" aria-labelledby="details-title">
      <SectionIntro id="details-title" eyebrow={details.eyebrow} title={details.title} accent={details.accent} />
      <div className="detail-grid">{details.items.map(([icon, title, text]) => <article key={title}><span className="detail-icon"><Icon name={icon} size={20} /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
  );
}
