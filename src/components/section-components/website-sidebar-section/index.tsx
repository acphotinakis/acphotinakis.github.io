import React from 'react';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';
import { Github, Linkedin, Instagram } from 'lucide-react'; // example icons

export function ProfileSidebar() {
  return (
    <aside
      style={{
        width: '320px',
        minHeight: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '2rem',
        borderRight: `1px solid ${COLOR_SCHEMA.border}`,
      }}
    >
      {/* Top Section: Name + Title + Intro */}
      <div>
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: COLOR_SCHEMA.textPrimary,
          }}
        >
          Andrew Photinakis
        </h1>
        <h2
          style={{
            fontSize: '1.2rem',
            color: COLOR_SCHEMA.textSecondary,
            marginTop: '0.25rem',
          }}
        >
          Computer Science & Finance
        </h2>
        <p
          style={{
            marginTop: '1.5rem',
            color: COLOR_SCHEMA.textSecondary,
            lineHeight: '1.6',
          }}
        >
          4th year CS student @ RIT. Interested in SWE, Data Science, Cloud, and
          Algo Trading.
        </p>

        {/* Nav Links */}
        <nav
          style={{
            marginTop: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {['About', 'Experience', 'Projects'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: COLOR_SCHEMA.textSecondary,
                fontWeight: '500',
                textDecoration: 'none',
                position: 'relative',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = COLOR_SCHEMA.accentRed)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = COLOR_SCHEMA.textSecondary)
              }
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Footer: Social Icons */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={22} color={COLOR_SCHEMA.textSecondary} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={22} color={COLOR_SCHEMA.textSecondary} />
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={22} color={COLOR_SCHEMA.textSecondary} />
        </a>
      </div>
    </aside>
  );
}
