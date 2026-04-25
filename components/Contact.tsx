'use client';

import { useState, useEffect, useRef } from 'react';
import portfolioData from '@/content/portfolio.json';

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [typedText, setTypedText] = useState('');
  const contactRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const command = portfolioData.contact.finalCommand;
            let index = 0;
            const typeInterval = setInterval(() => {
              if (index <= command.length) {
                setTypedText(command.slice(0, index));
                index++;
              } else {
                clearInterval(typeInterval);
              }
            }, 55);
            return () => clearInterval(typeInterval);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section reveal" ref={contactRef}>
      <h2 className="sr-only">Contact</h2>
      <div className="cmd-line">
        <span className="prompt-user">rohit</span>
        <span className="prompt-at">@</span>
        <span className="prompt-host">dev</span>:
        <span className="prompt-dir">~/portfolio</span>
        <span className="prompt-sym">$</span>
        <span className="prompt-cmd">./contact.sh</span>
        <span className="prompt-flag">--open</span>
      </div>
      <div className="output">
        <div className="section-comment" style={{ marginBottom: '20px' }}>
          <span className="cm">/*</span>{' '}
          <span className="info">{portfolioData.contact.comment}</span> <span className="cm">*/</span>
        </div>

        <div className="contact-grid">
          {portfolioData.contact.items.map((item, index) => {
            let Icon;
            if (item.label === 'email') Icon = MailIcon;
            else if (item.label === 'github') Icon = GithubIcon;
            else if (item.label === 'linkedin') Icon = LinkedinIcon;
            else return null;

            return (
              <a key={index} href={item.url} className="contact-item">
                <span className="contact-icon"><Icon /></span>
                <span>
                  <span className="contact-label">{item.label}</span>
                  {item.value}
                </span>
              </a>
            );
          })}
        </div>

        <div className="final-prompt">
          <span className="prompt-sym">$</span>
          <span className="typed">{typedText}</span>
          <span className="blink">█</span>
        </div>
      </div>
    </section>
  );
}
