import { SectionIntro } from './ui';
import { sync } from '../content/site';

export function SyncShowcase() {
  return (
    <section className="section sync" id="sync" aria-labelledby="sync-title">
      <div className="sync-grid">
        <div>
          <SectionIntro id="sync-title" eyebrow={sync.eyebrow} title={sync.title} accent={sync.accent} text={sync.text} />
          <ul className="sync-points">{sync.points.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ul>
        </div>
        <div className="device-stack" aria-hidden="true">
          {sync.devices.map(([name, note, time], index) => (
            <div className={`device device-${index}`} key={name}>
              <span className="device-name">{name}</span>
              <strong>{time}</strong>
              <span className="device-note">{note}</span>
            </div>
          ))}
          <div className="device-line" />
        </div>
      </div>
      <blockquote className="promise">{sync.promise}</blockquote>
    </section>
  );
}
