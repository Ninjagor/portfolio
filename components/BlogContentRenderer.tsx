'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface ContentBlock {
  type: string;
  level?: number;
  text?: string;
  src?: string;
  alt?: string;
  caption?: string;
  language?: string;
  title?: string;
  code?: string;
  items?: string[];
  attribution?: string;
  equation?: string;
}

interface BlogContentRendererProps {
  content: ContentBlock[];
}

export default function BlogContentRenderer({ content }: BlogContentRendererProps) {
  const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'heading':
        const level = block.level || 2;
        const headingStyles = {
          color: 'var(--green)',
          marginTop: '32px',
          marginBottom: '16px',
          fontSize: level === 2 ? '20px' : '16px',
          fontWeight: 'bold'
        };

        if (level === 2) {
          return <h2 key={index} style={headingStyles}>{block.text}</h2>;
        } else if (level === 3) {
          return <h3 key={index} style={headingStyles}>{block.text}</h3>;
        } else {
          return <h4 key={index} style={headingStyles}>{block.text}</h4>;
        }

      case 'paragraph':
        return (
          <p 
            key={index} 
            style={{ 
              marginBottom: '16px', 
              lineHeight: '1.8',
              color: 'var(--fg)'
            }}
            dangerouslySetInnerHTML={{ __html: block.text || '' }}
          />
        );

      case 'latex':
        return (
          <div 
            key={index} 
            style={{ 
              marginBottom: '16px',
              padding: '16px',
              background: 'var(--bg1)',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              overflowX: 'auto'
            }}
          >
            <BlockMath math={block.equation || ''} />
          </div>
        );

      case 'image':
        return (
          <figure 
            key={index} 
            style={{ 
              marginBottom: '24px',
              textAlign: 'center'
            }}
          >
            <img
              src={block.src}
              alt={block.alt}
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '4px',
                border: '1px solid var(--border)'
              }}
            />
            {block.caption && (
              <figcaption 
                style={{ 
                  marginTop: '8px', 
                  fontSize: '12px', 
                  color: 'var(--fg-dim)',
                  fontStyle: 'italic'
                }}
              >
                {block.caption}
              </figcaption>
            )}
          </figure>
        );

      case 'code':
        return (
          <div key={index} style={{ marginBottom: '24px' }}>
            {block.title && (
              <div 
                style={{ 
                  fontSize: '11px', 
                  color: 'var(--amber)', 
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                {block.title}
              </div>
            )}
            <pre 
              style={{
                background: 'var(--bg1)',
                border: '1px solid var(--border)',
                padding: '16px',
                borderRadius: '4px',
                overflowX: 'auto',
                fontSize: '13px',
                lineHeight: '1.6',
                color: 'var(--fg)'
              }}
            >
              <code>{block.code}</code>
            </pre>
          </div>
        );

      case 'list':
        return (
          <ul 
            key={index} 
            style={{ 
              marginBottom: '16px', 
              paddingLeft: '24px',
              color: 'var(--fg)'
            }}
          >
            {block.items?.map((item, itemIndex) => (
              <li key={itemIndex} style={{ marginBottom: '8px', lineHeight: '1.6' }}>
                {item}
              </li>
            ))}
          </ul>
        );

      case 'quote':
        return (
          <blockquote 
            key={index} 
            style={{ 
              marginBottom: '24px',
              padding: '16px 20px',
              borderLeft: '3px solid var(--green)',
              background: 'var(--bg1)',
              color: 'var(--fg-mid)',
              fontStyle: 'italic',
              lineHeight: '1.8'
            }}
          >
            <p style={{ marginBottom: '8px' }}>{block.text}</p>
            {block.attribution && (
              <cite style={{ fontSize: '12px', color: 'var(--fg-dim)' }}>
                — {block.attribution}
              </cite>
            )}
          </blockquote>
        );

      default:
        return null;
    }
  };

  return (
    <div className="blog-content">
      {content.map((block, index) => renderBlock(block, index))}
    </div>
  );
}
