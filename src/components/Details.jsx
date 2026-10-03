const details = [['◌', 'Private by default', 'Your progress is saved locally, not turned into a profile.'], ['⌘', 'Keyboard-friendly', 'Start a timer, capture a thought, or reset a session without breaking flow.'], ['♧', 'Gentle cues', 'Choose quiet chimes that mark a transition without stealing your attention.'], ['↺', 'A safety net', 'Restore accidentally deleted tasks from a 30-day trash.']];

export function Details() {
  return <section className="details section" id="details" aria-labelledby="details-title"><div className="section-intro"><p className="eyebrow">Small details, deeply considered</p><h2 id="details-title">Designed to protect<br />your <em>attention.</em></h2></div><div className="detail-grid">{details.map(([icon, title, text]) => <article key={title}><span aria-hidden="true">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>;
}
