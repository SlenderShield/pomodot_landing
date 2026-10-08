import { SectionIntro } from './ui';
import { faq } from '../content/site';

export function FAQ() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <SectionIntro id="faq-title" eyebrow={faq.eyebrow} title={faq.title} accent={faq.accent} />
      <div className="faq-list">
        {faq.items.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
      </div>
    </section>
  );
}
