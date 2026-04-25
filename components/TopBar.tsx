'use client';

import { useState, useEffect } from 'react';
import portfolioData from '@/content/portfolio.json';

interface TopBarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function TopBar({ activeSection, onSectionChange }: TopBarProps) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const s = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setTime(s);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="topbar">
        <div className="tb-left">
          <span className="tb-path">{portfolioData.meta.path}</span>
          <span className="tb-branch"> {portfolioData.meta.branch}</span>
          <span className="tb-status">✓</span>
        </div>
        <nav className="tb-nav">
          {portfolioData.navigation.map((nav, index) => (
            <span key={nav.id}>
              {index > 0 && <span className="sep">·</span>}
              <a
                href={`#${nav.id}`}
                className={activeSection === nav.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  onSectionChange(nav.id);
                  document.getElementById(nav.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {nav.label}
              </a>
            </span>
          ))}
        </nav>
        <div className="tb-right">
          <span className="online-dot"></span>
          <span style={{ color: 'var(--fg-dim)' }}>available</span>
          <span className="tb-time">{time}</span>
        </div>
      </div>

      <div id="mobile-nav">
        {portfolioData.navigation.map((nav) => (
          <a
            key={nav.id}
            href={`#${nav.id}`}
            className={activeSection === nav.id ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              onSectionChange(nav.id);
              document.getElementById(nav.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {nav.label}
          </a>
        ))}
      </div>
    </>
  );
}
