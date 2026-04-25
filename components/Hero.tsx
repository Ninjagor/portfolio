'use client';

import portfolioData from '@/content/portfolio.json';

const ASCII_ART = ` ██████╗  ██████╗ ██╗  ██╗██╗████████╗
 ██╔══██╗██╔═══██╗██║  ██║██║╚══██╔══╝
 ██████╔╝██║   ██║███████║██║   ██║
 ██╔══██╗██║   ██║██╔══██║██║   ██║
 ██║  ██║╚██████╔╝██║  ██║██║   ██║
 ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝   ╚═╝

 ██╗  ██╗ █████╗ ██████╗ ████████╗██╗  ██╗██╗██╗  ██╗
 ██║ ██╔╝██╔══██╗██╔══██╗╚══██╔══╝██║  ██║██║██║ ██╔╝
 █████╔╝ ███████║██████╔╝   ██║   ███████║██║█████╔╝
 ██╔═██╗ ██╔══██║██╔══██╗   ██║   ██╔══██║██║██╔═██╗
 ██║  ██╗██║  ██║██║  ██║   ██║   ██║  ██║██║██║  ██╗
 ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝`;

export default function Hero() {
    return (
        <section id="hero">
            <div className="hero-inner">
                <div className="hero-text-col">
                    <div id="boot-seq">
                        {portfolioData.hero.bootLines.map((line, index) => (
                            <div
                                key={index}
                                className={`boot-line ${line.status}`}
                            >
                                {line.text}
                            </div>
                        ))}
                    </div>

                    <pre className="ascii-name" aria-label={portfolioData.hero.name}>
                        {ASCII_ART}
                    </pre>

                    <div className="hero-tagline" id="tagline-line">
                        <span style={{ color: 'var(--green)', marginRight: '12px' }}>→</span>
                        <span id="tagline-typed">{portfolioData.hero.tagline}</span>
                    </div>

                    <div
                        className="hero-badges"
                        style={{
                            marginTop: '20px'
                        }}
                        id="hero-badges"
                    >
                        {portfolioData.hero.badges.map((badge, index) => (
                            <span key={index} className={`badge ${badge.color}`}>
                                {badge.text}
                            </span>
                        ))}
                    </div>

                    <div
                        style={{
                            marginTop: '28px',
                            fontSize: '12px',
                            color: 'var(--fg-dim)'
                        }}
                        id="hero-foot"
                    >
                        <span style={{ color: 'var(--green)' }}>↓</span> scroll to explore
                    </div>
                </div>

                <div className="hero-img-col" id="hero-img-col">
                    <div className="hero-img-frame">
                        <div className="hero-img-bar">
                            <span style={{ color: 'var(--fg-dim)', fontSize: '10px' }}>
                                {portfolioData.hero.image.filename}
                            </span>
                            <span style={{ color: 'var(--green)', fontSize: '10px' }}>
                                {portfolioData.hero.image.dimensions}
                            </span>
                        </div>
                        <div className="hero-img-placeholder">
                            <img
                                // src={`${process.env.NEXT_PUBLIC_BASE_PATH}/rohit_headshot.jpg`}
                                src={`/rohit_headshot.jpg`}
                                alt={portfolioData.hero.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="hero-img-meta">
                            <span style={{ color: 'var(--amber)' }}>name</span> {portfolioData.hero.name}
                            <br />
                            <span style={{ color: 'var(--amber)' }}>
                                loc&nbsp;
                            </span>{' '}
                            {portfolioData.hero.location}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
