'use client';

import { useState } from 'react';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import blogData from '@/content/blog.json';

export default function Blog() {
  const [activeSection, setActiveSection] = useState('blog');

  return (
    <>
      <TopBar activeSection={activeSection} onSectionChange={setActiveSection} />
      <section id="blog" className="section reveal">
        <h2 className="sr-only">Blog</h2>
        <div className="cmd-line">
          <span className="prompt-user">rohit</span>
          <span className="prompt-at">@</span>
          <span className="prompt-host">dev</span>:
          <span className="prompt-dir">~/blog</span>
          <span className="prompt-sym">$</span>
          <span className="prompt-cmd">ls</span>
          <span className="prompt-flag">-la</span>
        </div>
        <div className="output">
          <div className="section-comment" style={{ marginBottom: '20px' }}>
            <span className="cm">/*</span>{' '}
            <span className="info">Technical blog posts about ML, research, and development</span> <span className="cm">*/</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {blogData.posts.map((post, index) => (
              <Link 
                key={index}
                href={`/blog/${post.slug}`}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit',
                  padding: '20px',
                  background: 'var(--bg1)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  transition: 'all 0.2s',
                }}
                className="blog-post-card"
              >
                {post.bannerImage && (
                  <img
                    src={post.bannerImage}
                    alt={post.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '4px',
                      marginBottom: '16px',
                      border: '1px solid var(--border)'
                    }}
                  />
                )}
                
                <div style={{ marginBottom: '12px' }}>
                  <h3 
                    style={{ 
                      color: 'var(--cyan)', 
                      fontSize: '18px', 
                      marginBottom: '8px',
                      fontWeight: 'bold'
                    }}
                  >
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--fg-mid)', lineHeight: '1.6' }}>
                    {post.description}
                  </p>
                </div>

                <div style={{ fontSize: '12px', color: 'var(--fg-dim)', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--amber)' }}>date</span> {post.date}
                  {' · '}
                  <span style={{ color: 'var(--amber)' }}>read</span> {post.readTime}
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      style={{
                        fontSize: '11px',
                        padding: '2px 8px',
                        border: '1px solid var(--border)',
                        color: 'var(--cyan)',
                        background: 'var(--bg2)',
                        borderRadius: '2px'
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
