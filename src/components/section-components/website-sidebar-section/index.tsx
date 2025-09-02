import { COLOR_SCHEMA } from '@/interfaces/colorSchema';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { cardSections, CardSection } from '@/components/gitprofile';
import React from 'react';

export function ProfileSidebar() {
  const flattenedSections: CardSection[] = cardSections.flatMap((section) => {
    if (section.dropdown && section.dropdown.length > 0) {
      return [section, ...section.dropdown];
    }
    return section;
  });

  // Include all sections, including dropdowns
  const renderSections = (sections: CardSection[]) => {
    return sections.map((section: CardSection) => (
      <React.Fragment key={section.id}>
        <a
          href={`#${section.id}`}
          className="relative font-medium transition-all duration-200 group"
          style={{ color: COLOR_SCHEMA.textSecondary }}
        >
          <span
            className="inline-block transition-transform duration-200 group-hover:translate-x-2"
            style={{ position: 'relative' }}
          >
            {section.name}
          </span>
          <span className="absolute bottom-0 left-[-5px] h-[2px] w-0 bg-red-500 transition-all duration-200 group-hover:w-[calc(100%+10px)] group-hover:left-[5px]"></span>
        </a>
        {section.dropdown && (
          <div className="mt-2 ml-4">{renderSections(section.dropdown)}</div>
        )}
      </React.Fragment>
    ));
  };

  return (
    <aside
      className="flex flex-col justify-between min-h-screen p-8 border-r w-80"
      style={{
        backgroundColor: COLOR_SCHEMA.cardBg,
        borderColor: COLOR_SCHEMA.border,
      }}
    >
      {/* Top Section: Name + Title + Intro */}
      <div>
        <h1
          className="text-2xl font-bold"
          style={{ color: COLOR_SCHEMA.textPrimary }}
        >
          Andrew Photinakis
        </h1>
        <h2
          className="mt-1 text-lg"
          style={{ color: COLOR_SCHEMA.textSecondary }}
        >
          Computer Science & Finance
        </h2>
        <p
          className="mt-6 leading-relaxed text-md"
          style={{ color: COLOR_SCHEMA.textSecondary }}
        >
          5th year CS student @ RIT. Interested in SWE, Data Science, Cloud, and
          Algo Trading.
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4 mt-auto ml-3 text-sm">
        {flattenedSections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="relative font-medium transition-all duration-200 group"
            style={{ color: COLOR_SCHEMA.textSecondary }}
          >
            <span
              className="inline-block transition-transform duration-200 group-hover:translate-x-2"
              style={{ position: 'relative' }}
            >
              {section.name}
            </span>
            <span className="absolute bottom-0 left-[-5px] h-[2px] w-0 bg-red-500 transition-all duration-200 group-hover:w-[calc(100%+10px)] group-hover:left-[5px]"></span>
          </a>
        ))}
      </nav>

      {/* Footer: Social Icons */}
      <div className="flex gap-4 mt-10">
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
