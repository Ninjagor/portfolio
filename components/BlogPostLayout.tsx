'use client';

import { useState } from 'react';
import TopBar from './TopBar';

interface BlogPostLayoutProps {
  children: React.ReactNode;
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  const [activeSection, setActiveSection] = useState('blog');

  return (
    <>
      <TopBar activeSection={activeSection} onSectionChange={() => {}} />
      {children}
    </>
  );
}
