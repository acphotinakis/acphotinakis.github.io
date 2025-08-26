import React, { ReactNode, useState } from 'react';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';

// Utility for merging class names
const cn = (...classes: (string | undefined | false)[]) =>
  classes.filter(Boolean).join(' ');

interface SidebarProps {
  children?: ReactNode;
  className?: string;
  width?: string;
  collapsedWidth?: string;
}

interface SidebarItemProps {
  label: string;
  icon?: ReactNode;
  badge?: ReactNode;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

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
        'flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors duration-200',
        className,
      )}
      style={{
        backgroundColor: active ? COLOR_SCHEMA.accentRed : 'transparent',
        color: active ? COLOR_SCHEMA.textPrimary : COLOR_SCHEMA.textPrimary,
        fontWeight: active ? '600' : '400',
        border: active ? `1px solid ${COLOR_SCHEMA.accentRed}` : 'none',
      }}
      onMouseEnter={(e) => {
        if (!active)
          e.currentTarget.style.backgroundColor = COLOR_SCHEMA.hoverCard;
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      {icon && (
        <span style={{ color: COLOR_SCHEMA.textSecondary }}>{icon}</span>
      )}
      <span className="flex-1">{label}</span>
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
        'flex flex-col rounded-xl transition-all duration-300 ease-in-out',
        className,
      )}
      style={{
        width: collapsed ? collapsedWidth : width,
        backgroundColor: COLOR_SCHEMA.cardBackground,
        boxShadow: 'inset 0 0 4px rgba(0,0,0,0.5)',
      }}
    >
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ borderBottom: `1px solid ${COLOR_SCHEMA.border}` }}
      >
        {!collapsed && (
          <span
            style={{
              fontSize: '1.125rem',
              fontWeight: 'bold',
              color: COLOR_SCHEMA.textPrimary,
            }}
          >
            Menu
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            padding: '0.25rem',
            borderRadius: '4px',
            backgroundColor: 'transparent',
            color: COLOR_SCHEMA.textSecondary,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = COLOR_SCHEMA.hoverCard)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = 'transparent')
          }
        >
          {collapsed ? '➤' : '◀'}
        </button>
      </div>

      <nav className="flex flex-col flex-1 gap-1 p-2">{children}</nav>

      <div
        style={{
          borderTop: `1px solid ${COLOR_SCHEMA.border}`,
          color: COLOR_SCHEMA.textSecondary,
          fontSize: '0.875rem',
          marginTop: 'auto',
          padding: '0.75rem 1rem',
          textAlign: 'center',
        }}
      >
        {!collapsed ? 'Andrew Photinakis' : 'AP'}
      </div>
    </div>
  );
};

// SidebarNav
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
    <Sidebar className="h-screen p-2">
      {cardSections.map((section) => {
        const IconComponent = sectionIcons.get(section.id);
        return (
          <SidebarItem
            key={section.id}
            label={section.name}
            icon={IconComponent ? <IconComponent /> : null}
            active={activeId === section.id}
            onClick={() => setActiveId(section.id)}
            className="mb-1"
          />
        );
      })}
    </Sidebar>
  );
};
