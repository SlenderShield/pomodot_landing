import { useId, useState } from 'react';
import { views } from '../content/site';

export function Views() {
  const names = Object.keys(views.tabs);
  const [active, setActive] = useState(names[0]);
  const tabId = useId();
  return (
    <section className="section views" id="views" aria-labelledby="views-title">
      <div className="views-heading">
        <div><p className="eyebrow">{views.eyebrow}</p><h2 id="views-title">{views.title} <em>{views.accent}</em></h2></div>
        <p>{views.text}</p>
      </div>
      <div className="view-tabs" role="tablist" aria-label="Product views">
        {names.map(item => <button id={`${tabId}-${item}`} key={item} className={item === active ? 'active' : ''} onClick={() => setActive(item)} role="tab" aria-selected={item === active} aria-controls={`${tabId}-panel`}>{item}</button>)}
      </div>
      <div className="board" id={`${tabId}-panel`} role="tabpanel" aria-labelledby={`${tabId}-${active}`}>
        {views.tabs[active].map(column => (
          <article className={column.active ? 'board-column featured' : 'board-column'} key={column.heading}>
            <header><span>{column.heading}</span><b>{String(column.tasks.length).padStart(2, '0')}</b></header>
            {column.tasks.map(([title, meta], index) => (
              <div className={index === 0 ? 'board-task' : 'board-task muted'} key={title}>
                {index === 0 && <span className={column.active ? 'task-pill coral' : 'task-pill'}>{column.pill}</span>}
                <h3>{title}</h3>
                <p>{meta}</p>
                {index === 0 && column.progress && <div className="progress" role="img" aria-label={`${column.progress} percent complete`}><i style={{ width: `${column.progress}%` }} /></div>}
              </div>
            ))}
          </article>
        ))}
      </div>
      <p className="views-note">{views.note} <a href="#roadmap">See the roadmap →</a></p>
    </section>
  );
}
