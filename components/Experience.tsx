'use client';

import portfolioData from '@/content/portfolio.json';

export default function Experience() {
  return (
    <section id="experience" className="section reveal">
      <h2 className="sr-only">Experience</h2>
      <div className="cmd-line">
        <span className="prompt-user">rohit</span>
        <span className="prompt-at">@</span>
        <span className="prompt-host">dev</span>:
        <span className="prompt-dir">~/experience</span>
        <span className="prompt-sym">$</span>
        <span className="prompt-cmd">cat</span>
        <span className="prompt-arg">experience.md</span>
      </div>
      <div className="output">
        {(portfolioData.experience as any[]).map((exp: any, index: number) => (
          <div key={index} style={{ marginBottom: '32px' }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--fg)' }}>
              {exp.role}
            </div>
            {exp.organization && (
              <div style={{ fontSize: '14px', color: 'var(--cyan)', marginTop: '4px' }}>
                {exp.organization}
              </div>
            )}
            <div style={{ fontSize: '12px', color: 'var(--fg-dim)', marginTop: '4px' }}>
              {exp.date}
            </div>
            <div style={{ fontSize: '13px', color: 'var(--fg-mid)', marginTop: '8px', lineHeight: '1.6' }}>
              {exp.description}
            </div>
            {exp.blogPostSlug && (
              <div style={{ marginTop: '12px' }}>
                <a
                  href={`/blog/${exp.blogPostSlug}`}
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    border: '1px solid var(--green)',
                    color: 'var(--green)',
                    background: 'var(--green-dim)',
                    textDecoration: 'none',
                    fontSize: '11px',
                    borderRadius: '2px',
                    transition: 'all 0.2s'
                  }}
                >
                  Read Blog Post →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
