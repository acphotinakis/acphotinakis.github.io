import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  children?: ReactNode;
  className?: string;
  width?: string; // default width
  collapsedWidth?: string; // width when collapsed
}

interface SidebarItemProps {
  label: string;
  icon?: ReactNode;
  badge?: ReactNode;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

// Utility for merging class names
const cn = (...classes: (string | undefined | false)[]) =>
  classes.filter(Boolean).join(' ');

export const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon,
  badge,
  onClick,
  active = false,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800',
        active ? 'bg-gray-200 dark:bg-gray-700 font-semibold' : '',
        className,
      )}
    >
      {icon && <span className="text-gray-500 dark:text-gray-400">{icon}</span>}
      <span className="flex-1 text-gray-900 dark:text-gray-100">{label}</span>
      {badge && <span>{badge}</span>}
    </button>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  className,
  width = '16rem',
  collapsedWidth = '4rem',
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        'flex flex-col bg-white dark:bg-gray-900 shadow-md rounded-xl transition-all duration-300 ease-in-out',
        className,
      )}
      style={{ width: collapsed ? collapsedWidth : width }}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
        {!collapsed && (
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
            Menu
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {collapsed ? '➤' : '◀'}
        </button>
      </div>

      <nav className="flex flex-col flex-1 gap-1 p-2">{children}</nav>

      {/* Footer */}
      <div
        className={cn(
          'px-4 py-3 border-t border-gray-100 dark:border-gray-800 text-gray-500 dark:text-gray-400 text-sm',
          'mt-auto flex justify-center items-center',
        )}
      >
        {!collapsed ? 'Andrew Photinakis' : 'AP'}
      </div>
    </div>
  );
};

// ----- SidebarNav ----- //

type CardSection = {
  name: string;
  id: string;
  path: string;
  dropdown?: CardSection[];
};

const sectionIcons = new Map<string, () => JSX.Element>([
  ['home', () => <span>🏠</span>],
  ['contacts', () => <span>👥</span>],
  ['education-honors', () => <span>🎓</span>],
  ['stock-options-ledger', () => <span>📊</span>],
  ['certifications-experience', () => <span>🏆</span>],
  ['skills', () => <span>🔧</span>],
  ['programming-languages', () => <span>💻</span>],
  ['frameworks-libraries', () => <span>📚</span>],
  ['tools-technologies', () => <span>🛠️</span>],
  ['concepts-skills', () => <span>🧠</span>],
  ['github-projects', () => <span>📁</span>],
]);

interface SidebarNavProps {
  cardSections: CardSection[];
  defaultActiveId?: string;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  cardSections,
  defaultActiveId,
}) => {
  const [activeId, setActiveId] = useState(
    defaultActiveId || cardSections[0]?.id,
  );

  return (
    <Sidebar className="h-screen p-2 bg-white shadow-md dark:bg-gray-900">
      {cardSections.map((section) => {
        const IconComponent = sectionIcons.get(section.id);
        return (
          <SidebarItem
            key={section.id}
            label={section.name}
            icon={IconComponent ? <IconComponent /> : null}
            active={activeId === section.id}
            onClick={() => setActiveId(section.id)}
            className={cn('mb-1')}
          />
        );
      })}
    </Sidebar>
  );
};
