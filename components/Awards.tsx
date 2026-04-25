'use client';

import portfolioData from '@/content/portfolio.json';

export default function Awards() {
  return (
    <section id="awards" className="section reveal">
      <div className="cmd-line">
        <span className="prompt-user">rohit</span>
        <span className="prompt-at">@</span>
        <span className="prompt-host">dev</span>:
        <span className="prompt-dir">~/portfolio</span>
        <span className="prompt-sym">$</span>
        <span className="prompt-cmd">cat</span>
        <span className="prompt-arg">awards.tsv</span>
        <span className="prompt-flag">| column -t</span>
      </div>
      <div className="output">
        <table className="awards-table">
          <thead>
            <tr>
              <th>year</th>
              <th>award</th>
              <th>organization</th>
              <th style={{ textAlign: 'right' }}></th>
            </tr>
          </thead>
          <tbody>
            {portfolioData.awards.map((award, index) => (
              <tr key={index}>
                <td className="award-year">{award.year}</td>
                <td className="award-name">{award.name}</td>
                <td className="award-org">{award.organization}</td>
                <td className="award-prize">{award.prize}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
