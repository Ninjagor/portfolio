'use client';

import { useState, useEffect } from 'react';
import MatrixRain from '@/components/MatrixRain';
import TopBar from '@/components/TopBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Research from '@/components/Research';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import portfolioData from '@/content/portfolio.json';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = portfolioData.navigation.map((nav) => nav.id);

    // Dynamic section detection - finds the section with most viewport coverage
    const updateActiveSection = () => {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = scrollY + viewportHeight >= documentHeight - 50;

      let maxVisibility = 0;
      let activeId = 'hero';

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibilityRatio = visibleHeight / rect.height;

        // Prioritize sections that are more visible and closer to top of viewport
        let score = visibilityRatio * (1 - Math.abs(rect.top) / viewportHeight);

        // Extra weight for sections near bottom when at bottom of page
        if (isAtBottom && rect.bottom > viewportHeight * 0.5) {
          score *= 1.5;
        }

        if (score > maxVisibility) {
          maxVisibility = score;
          activeId = id;
        }
      });

      setActiveSection(activeId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateActiveSection();
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Also update on scroll for more responsive highlighting
    const scrollHandler = () => {
      updateActiveSection();
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });

    // Ensure all reveal elements are visible on mount
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('visible');
      });
    }, 50);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <>
      <MatrixRain />
      <TopBar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Research />
        <Awards />
        <Contact />
        <div style={{ height: '80px' }}></div>
      </main>
    </>
  );
}
