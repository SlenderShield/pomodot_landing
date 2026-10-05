import { Icon, SectionIntro } from './ui';
import { why } from '../content/site';

export function Why() {
  return (
    <section className="section" id="why" aria-labelledby="why-title">
      <SectionIntro id="why-title" eyebrow={why.eyebrow} title={why.title} accent={why.accent} />
      <div className="compare">
        {[['before', why.before, 'x'], ['after', why.after, 'check']].map(([key, group, icon]) => (
          <article key={key} className={`compare-card compare-${key}`}>
            <h3>{group.label}</h3>
            <ul>{group.items.map(item => <li key={item}><span className="compare-icon"><Icon name={icon} size={14} /></span>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
