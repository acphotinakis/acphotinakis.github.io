import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { ArrowLeft, ArrowUp, Copy, Check } from 'lucide-react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="scroll-progress" style={{ height: `${progress}%` }} />;
};

const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-1.5 text-muted-foreground hover:text-foreground transition-colors duration-200 border border-border bg-background"
      aria-label="Copy code"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-primary" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
    </button>
  );
};

function highlightSyntax(code: string): string {
  // Simple syntax highlighting
  let highlighted = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Comments
  highlighted = highlighted.replace(
    /(\/\/.*$|#.*$)/gm,
    '<span class="token-comment">$1</span>',
  );
  // Strings
  highlighted = highlighted.replace(
    /(["'`])((?:(?!\1)[^\\]|\\.)*)(\1)/g,
    '<span class="token-string">$1$2$3</span>',
  );
  // Keywords
  highlighted = highlighted.replace(
    /\b(const|let|var|function|return|if|else|for|while|class|import|from|export|default|async|await|def|self|with|as|try|except|struct|fn|pub|mut|int|void|auto|template|typename|using|namespace)\b/g,
    '<span class="token-keyword">$1</span>',
  );
  // Numbers
  highlighted = highlighted.replace(
    /\b(\d+\.?\d*)\b/g,
    '<span class="token-number">$1</span>',
  );

  return highlighted;
}

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: JSX.Element[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      const code = codeLines.join('\n');
      elements.push(
        <div key={key++} className="relative my-6">
          {lang && (
            <div className="font-mono text-xs text-muted-foreground border border-border border-b-0 px-3 py-1.5 inline-block bg-secondary">
              {lang}
            </div>
          )}
          <pre className="bg-secondary border border-border p-5 overflow-x-auto">
            <code dangerouslySetInnerHTML={{ __html: highlightSyntax(code) }} />
          </pre>
          <CopyButton code={code} />
        </div>,
      );
      continue;
    }

    // Headers
    if (line.startsWith('# ')) {
      elements.push(
        <h1
          key={key++}
          className="font-mono font-bold text-3xl md:text-4xl text-foreground mt-10 mb-4"
        >
          {line.slice(2)}
        </h1>,
      );
      i++;
      continue;
    }
    if (line.startsWith('## ')) {
      elements.push(
        <h2
          key={key++}
          className="font-mono font-semibold text-xl md:text-2xl text-foreground mt-8 mb-3"
        >
          {line.slice(3)}
        </h2>,
      );
      i++;
      continue;
    }
    if (line.startsWith('### ')) {
      elements.push(
        <h3
          key={key++}
          className="font-mono font-semibold text-lg text-foreground mt-6 mb-2"
        >
          {line.slice(4)}
        </h3>,
      );
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      elements.push(
        <blockquote
          key={key++}
          className="border-l-[3px] border-primary pl-4 my-6 text-muted-foreground italic text-base"
        >
          {line.slice(2)}
        </blockquote>,
      );
      i++;
      continue;
    }

    // List items
    if (line.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="my-4 space-y-1.5 pl-4">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="text-muted-foreground flex items-start gap-2"
            >
              <span className="text-primary mt-1.5 text-xs">■</span>
              <span dangerouslySetInnerHTML={{ __html: renderInline(item) }} />
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    // Empty lines
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Paragraph
    elements.push(
      <p
        key={key++}
        className="text-muted-foreground leading-[1.7] my-4 text-[1.0625rem]"
      >
        <span dangerouslySetInnerHTML={{ __html: renderInline(line) }} />
      </p>,
    );
    i++;
  }

  return elements;
}

function renderInline(text: string): string {
  // Bold
  let result = text.replace(
    /\*\*(.*?)\*\*/g,
    '<strong class="text-foreground font-semibold">$1</strong>',
  );
  // Inline code
  result = result.replace(
    /`([^`]+)`/g,
    '<code class="font-mono text-sm bg-secondary border border-border px-1.5 py-0.5">$1</code>',
  );
  return result;
}

export function ArticleView() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center font-mono">
          <h1 className="text-2xl text-foreground mb-2">404</h1>
          <p className="text-muted-foreground mb-4">Post not found</p>
          <Link to="/blog" className="text-primary hover:underline">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <ScrollProgress />

      {/* Back button */}
      <button
        onClick={() => navigate('/blog')}
        className="fixed bottom-6 left-6 z-40 w-10 h-10 border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
        aria-label="Back to blog"
      >
        <ArrowLeft className="w-4 h-4" />
      </button>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-10 h-10 border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      <article className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
        {/* Meta */}
        <div className="mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            {post.category}
          </span>
          <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground mt-3">
            <time>{post.publishedDate}</time>
            <span className="text-border">|</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose-blog">{renderContent(post.content)}</div>

        {/* Footer nav */}
        <div className="border-t border-border mt-16 pt-8">
          <Link
            to="/blog"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            ← Back to all posts
          </Link>
        </div>
      </article>
    </div>
  );
}
