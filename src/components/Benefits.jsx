const benefits = [
  ['↗', 'Work anywhere, reliably', 'Your tasks and timer keep working in airplanes, tunnels, cafés, and every other moment Wi-Fi disappears.', 'Offline-first by design'],
  ['⌁', 'Pick up on any device', 'Start a sprint on your laptop, check it on your phone, and resume without losing your place.', 'Thoughtful device sync'],
  ['＋', 'Turn thoughts into progress', 'Capture an idea in seconds, then shape it into a task, board, or calm plan when you are ready.', 'Quick capture to done'],
];

export function Benefits() {
  return <section className="section" id="product" aria-labelledby="benefits-title"><div className="section-intro"><p className="eyebrow">A calmer way to get things done</p><h2 id="benefits-title">Everything you need.<br /><em>Nothing competing for attention.</em></h2><p>Pomodot gives your plans and focus sessions one quiet home—without adding another system to manage.</p></div><div className="benefit-grid">{benefits.map(([icon, title, body, tag]) => <article className="benefit-card" key={title}><span className="feature-icon" aria-hidden="true">{icon}</span><h3>{title}</h3><p>{body}</p><span className="feature-tag">{tag} <b aria-hidden="true">→</b></span></article>)}</div></section>;
}
