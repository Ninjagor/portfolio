'use client';

import portfolioData from '@/content/portfolio.json';

export default function Skills() {

  return (
    <section id="skills" className="section">
      <h2 className="sr-only">Skills</h2>
      <div className="cmd-line">
        <span className="prompt-user">rohit</span>
        <span className="prompt-at">@</span>
        <span className="prompt-host">dev</span>:
        <span className="prompt-dir">~/portfolio</span>
        <span className="prompt-sym">$</span>
        <span className="prompt-cmd">tree</span>
        <span className="prompt-flag">--depth 2</span>
        <span className="prompt-arg">skills/</span>
      </div>
      <div className="output">
        <div className="section-comment" style={{ marginBottom: '18px' }}>
          <span className="cm">/*</span>{' '}
          <span className="info">{portfolioData.skills.comment}</span> <span className="cm">*/</span>
        </div>
        <div className="skills-grid">
          {portfolioData.skills.categories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <div className={`skill-cat-title ${category.color !== 'default' ? category.color : ''}`}>
                {category.title}
              </div>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-row">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div
                      className={`skill-bar-fill ${category.color !== 'default' ? category.color : ''}`}
                      style={{ width: skill.level + '%' }}
                    />
                  </div>
                  <span className="skill-pct">{skill.level}%</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
