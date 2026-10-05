import { PrimaryCta, SectionIntro } from './ui';
import { workflow } from '../content/site';

export function Workflow() {
  return (
    <section className="workflow section" id="workflow" aria-labelledby="workflow-title">
      <div className="workflow-copy">
        <SectionIntro id="workflow-title" eyebrow={workflow.eyebrow} title={workflow.title} accent={workflow.accent} text={workflow.text} />
        <PrimaryCta />
      </div>
      <ol>{workflow.steps.map(([number, title, text]) => <li key={number}><span aria-hidden="true">{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
    </section>
  );
}
