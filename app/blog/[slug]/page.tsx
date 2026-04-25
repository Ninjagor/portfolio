import { notFound } from 'next/navigation';
import Link from 'next/link';
import BlogPostLayout from '@/components/BlogPostLayout';
import blogData from '@/content/blog.json';
import BlogContentRenderer from '@/components/BlogContentRenderer';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  bannerImage: string;
  readTime: string;
  content: any[];
}

export async function generateStaticParams() {
  return blogData.posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData.posts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.bannerImage],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData.posts.find((p) => p.slug === slug) as BlogPost | undefined;

  if (!post) {
    notFound();
  }

  return (
    <BlogPostLayout>
      <div className="blog-post">
        <section className="section">
          <div className="cmd-line">
            <span className="prompt-user">rohit</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">dev</span>:
            <span className="prompt-dir">~/blog</span>
            <span className="prompt-sym">$</span>
            <span className="prompt-cmd">cat</span>
            <span className="prompt-arg">{post.slug}.md</span>
          </div>
        
        <div className="output">
          {/* Back to Blog Link */}
          <Link 
            href="/blog"
            style={{
              display: 'inline-block',
              marginBottom: '24px',
              color: 'var(--green)',
              textDecoration: 'none',
              fontSize: '13px'
            }}
          >
            ← Back to Blog
          </Link>

          {/* Banner Image */}
          {post.bannerImage && (
            <img
              src={post.bannerImage}
              alt={post.title}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '4px',
                marginBottom: '24px',
                border: '1px solid var(--border)'
              }}
            />
          )}

          {/* Post Meta */}
          <div style={{ marginBottom: '24px' }}>
            <h1 
              style={{ 
                color: 'var(--green)', 
                fontSize: '28px', 
                marginBottom: '12px',
                fontWeight: 'bold'
              }}
            >
              {post.title}
            </h1>
            <div style={{ fontSize: '12px', color: 'var(--fg-dim)', marginBottom: '8px' }}>
              <span style={{ color: 'var(--amber)' }}>date</span> {post.date}
              {' · '}
              <span style={{ color: 'var(--amber)' }}>author</span> {post.author}
              {' · '}
              <span style={{ color: 'var(--amber)' }}>read</span> {post.readTime}
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  style={{
                    fontSize: '11px',
                    padding: '2px 8px',
                    border: '1px solid var(--border)',
                    color: 'var(--cyan)',
                    background: 'var(--bg1)',
                    borderRadius: '2px'
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Post Content */}
          <div 
            style={{
              padding: '24px',
              background: 'var(--bg1)',
              border: '1px solid var(--border)',
              borderRadius: '4px'
            }}
          >
            <BlogContentRenderer content={post.content} />
          </div>
        </div>
      </section>
    </div>
    </BlogPostLayout>
  );
}
