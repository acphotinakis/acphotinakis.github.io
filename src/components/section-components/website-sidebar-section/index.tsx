import { COLOR_SCHEMA } from '@/interfaces/colorSchema';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { cardSections, CardSection } from '@/components/gitprofile';
import { useState } from 'react';

export function ProfileSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const flattenedSections: CardSection[] = cardSections.flatMap((section) => {
    if (section.dropdown && section.dropdown.length > 0) {
      return [section, ...section.dropdown];
    }
    return section;
  });

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="fixed z-50 p-2 text-white rounded-md top-4 left-4 md:hidden bg-black/50"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 transform transition-transform duration-300 md:relative md:translate-x-0 md:w-80 flex flex-col justify-between min-h-screen p-8 border-r ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
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
            className="mt-1 text-md"
            style={{ color: COLOR_SCHEMA.textSecondary }}
          >
            Computer Science & Finance
          </h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 mb-8 ml-3 text-sm">
          {flattenedSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="relative font-medium transition-all duration-200 group"
              style={{ color: COLOR_SCHEMA.textSecondary }}
              onClick={() => setMobileOpen(false)} // Close sidebar on mobile after click
            >
              <span
                className="inline-block transition-transform duration-200 group-hover:translate-x-2 group-hover:text-red-500"
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
            href="https://github.com/acphotinakis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={22} color={COLOR_SCHEMA.textSecondary} />
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-photinakis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={22} color={COLOR_SCHEMA.textSecondary} />
          </a>
        </div>
      </aside>

      {/* Overlay when mobile menu is open */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
