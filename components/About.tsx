'use client';

import portfolioData from '@/content/portfolio.json';

export default function About() {
  return (
    <section id="about" className="section reveal">
      <h2 className="sr-only">About</h2>
      <div className="cmd-line">
        <span className="prompt-user">rohit</span>
        <span className="prompt-at">@</span>
        <span className="prompt-host">dev</span>:
        <span className="prompt-dir">~/portfolio</span>
        <span className="prompt-sym">$</span>
        <span className="prompt-cmd">cat</span>
        <span className="prompt-arg">about.md</span>
      </div>
      <div className="output">
        <div className="cat-output" data-filename={portfolioData.about.filename}>
          {portfolioData.about.paragraphs.map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '12px' }} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>

        <div
          style={{
            marginTop: '16px',
            fontSize: '12px',
            color: 'var(--fg-dim)',
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap'
          }}
        >
          <span>
            <span style={{ color: 'var(--amber)' }}>loc</span> {portfolioData.about.meta.location}
          </span>
          <span>
            <span style={{ color: 'var(--amber)' }}>edu</span> {portfolioData.about.meta.education}
          </span>
          <span>
            <span style={{ color: 'var(--amber)' }}>lang</span> {portfolioData.about.meta.languages}
          </span>
        </div>
      </div>
    </section>
  );
}
