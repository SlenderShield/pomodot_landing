import { links } from '../content/site';

export function Brand() {
  return <a className="brand" href="#top" aria-label="Pomodot home"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>pomodot</span></a>;
}

export function Button({ children, href, variant = 'primary', ...props }) {
  const className = `button button-${variant}`;
  return href ? <a href={href} className={className} {...props}>{children}</a> : <button className={className} {...props}>{children}</button>;
}

// Main call to action: "Get early access" once a waitlist exists, otherwise the live timer preview.
export function PrimaryCta({ light = false, short = false }) {
  const external = Boolean(links.waitlistUrl);
  const label = external ? 'Get early access' : short ? 'Try the timer' : 'Try the focus timer';
  // In the header, very narrow screens swap to a shorter label so the nav never overflows.
  const compact = short && !external ? 'Try it' : null;
  return (
    <Button href={external ? links.waitlistUrl : '#timer'} {...(light ? { 'data-on-dark': true } : {})}>
      {compact ? <><span className="label-full">{label}</span><span className="label-compact" aria-label={label}>{compact}</span></> : label}
      <span aria-hidden="true">→</span>
    </Button>
  );
}

const paths = {
  list: <path d="M9 7h11M9 12h11M9 17h11M4.5 7h.01M4.5 12h.01M4.5 17h.01" />,
  clock: <><circle cx="12" cy="13" r="8" /><path d="M12 9v4l3 2M9.5 3h5" /></>,
  sync: <path d="M20 11a8 8 0 0 0-14-4M4 4v4h4M4 13a8 8 0 0 0 14 4M20 20v-4h-4" />,
  lock: <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
  keys: <><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M7 10h.01M11 10h.01M15 10h.01M8 14h8" /></>,
  bell: <path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15zM10 21h4" />,
  trash: <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  x: <path d="M6 6l12 12M18 6L6 18" />,
};

export function Icon({ name, size = 20 }) {
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export function SectionIntro({ eyebrow, title, accent, text, id }) {
  return <div className="section-intro"><p className="eyebrow">{eyebrow}</p><h2 id={id}>{title} <em>{accent}</em></h2>{text && <p>{text}</p>}</div>;
}
