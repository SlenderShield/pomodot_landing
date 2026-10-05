import { Icon, SectionIntro } from './ui';
import { roadmap } from '../content/site';

export function Roadmap() {
  return (
    <section className="section" id="roadmap" aria-labelledby="roadmap-title">
      <SectionIntro id="roadmap-title" eyebrow={roadmap.eyebrow} title={roadmap.title} accent={roadmap.accent} text={roadmap.text} />
      <div className="roadmap-grid">
        {roadmap.columns.map(column => (
          <article key={column.status} className={`roadmap-col roadmap-${column.status}`}>
            <header><span className="roadmap-badge">{column.label}</span><small>{column.sub}</small></header>
            <ul>
              {column.items.map(([title, note]) => (
                <li key={title}>
                  <span className="roadmap-mark" aria-hidden="true">{column.status === 'v1' ? <Icon name="check" size={13} /> : null}</span>
                  <div><strong>{title}</strong>{note && <span>{note}</span>}</div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="roadmap-note">{roadmap.note}</p>
    </section>
  );
}
