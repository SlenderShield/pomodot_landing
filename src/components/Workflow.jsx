import { Button } from './ui';

const steps = [['01', 'Capture what matters', 'Get every thought out of your head and into a simple, private inbox.'], ['02', 'Choose one next step', 'Make today manageable with visual boards, lists, and thoughtful priorities.'], ['03', 'Set a gentle rhythm', 'Pair your selected task with a focus interval, then take a real break.']];

export function Workflow() {
  return <section className="workflow section" id="workflow" aria-labelledby="workflow-title"><div className="workflow-copy"><p className="eyebrow">A rhythm you can return to</p><h2 id="workflow-title">From scattered<br />to <em>settled.</em></h2><p>Great work rarely happens in one giant leap. Pomodot makes it easier to begin, stay present, and finish with energy left over.</p><Button href="#timer">Try a focus sprint <span aria-hidden="true">→</span></Button></div><ol>{steps.map(([number, title, text]) => <li key={number}><span aria-hidden="true">{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>;
}
