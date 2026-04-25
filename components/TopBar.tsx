'use client';

import { useState, useEffect } from 'react';
import portfolioData from '@/content/portfolio.json';

interface TopBarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function TopBar({ activeSection, onSectionChange }: TopBarProps) {
  const [time, setTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleNavClick = (navId: string) => {
    onSectionChange(navId);
    document.getElementById(navId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

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
                  handleNavClick(nav.id);
                }}
              >
                {nav.label}
              </a>
            </span>
          ))}
        </nav>
        <div className="tb-right">
          <button 
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
          <span className="online-dot"></span>
          <span className="tb-time">{time}</span>
        </div>
      </div>

      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <span className="tb-path">{portfolioData.meta.path}</span>
            <button 
              className="close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <nav className="mobile-nav-links">
            {portfolioData.navigation.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className={activeSection === nav.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(nav.id);
                }}
              >
                {nav.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
