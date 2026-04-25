'use client';

import portfolioData from '@/content/portfolio.json';

export default function Research() {
  return (
    <section id="research" className="section reveal">
      <div className="cmd-line">
        <span className="prompt-user">rohit</span>
        <span className="prompt-at">@</span>
        <span className="prompt-host">dev</span>:
        <span className="prompt-dir">~/papers</span>
        <span className="prompt-sym">$</span>
        <span className="prompt-cmd">grep</span>
        <span className="prompt-flag">-r</span>
        <span className="prompt-arg">"authored"</span>
        <span className="prompt-flag">| sort -k year</span>
      </div>
      <div className="output">
        {portfolioData.research.map((paper, index) => (
          <div key={index} className="paper-entry">
            <div className="paper-id">{paper.id}</div>
            <div className="paper-title">{paper.title}</div>
            <div className="paper-meta">
              {paper.venue ? (
                <>
                  <span className="venue">{paper.venue}</span> &nbsp;·&nbsp; {paper.authors}
                </>
              ) : (
                <span>{paper.authors}</span>
              )}
            </div>
            <div className="paper-abstract">{paper.abstract}</div>
            <div className="paper-links">
              {paper.links.map((link, linkIndex) => (
                <a key={linkIndex} href={link.url} className="paper-link">
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
