import { cn } from '@/lib/utils';
import { PROJECT_TYPES } from '@/types/project';
import type { ProjectType } from '@/types/project';

interface ProjectTypeBadgeProps {
  type: ProjectType;
  size?: 'sm' | 'md';
  className?: string;
}

export function ProjectTypeBadge({ type, size = 'md', className }: ProjectTypeBadgeProps) {
  const config = PROJECT_TYPES.find(t => t.value === type);
  const colorClasses: Record<string, string> = {
    purple: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    green: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    orange: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
    gray: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  };

  if (!config) return null;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-medium uppercase tracking-wider',
        'border',
        colorClasses[config.color] || colorClasses.gray,
        size === 'sm'
          ? 'text-[10px] px-1.5 py-0.5'
          : 'text-xs px-2 py-0.5',
        className
      )}
    >
      <span aria-hidden="true">{config.icon}</span>
      {config.label}
    </span>
  );
}

interface StatusBadgeProps {
  status: 'active' | 'completed' | 'archived';
  size?: 'sm' | 'md';
  className?: string;
}

export function StatusBadge({ status, size = 'md', className }: StatusBadgeProps) {
  const colorClasses = {
    active: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    completed: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    archived: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  };

  const labels = {
    active: 'Active',
    completed: 'Completed',
    archived: 'Archived',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-medium uppercase tracking-wider border',
        colorClasses[status],
        size === 'sm' ? 'text-[10px] px-1.5 py-0.5' : 'text-xs px-2 py-0.5',
        className
      )}
    >
      {labels[status]}
    </span>
  );
}

interface TechPillProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function TechPill({ children, className, variant = 'outline' }: TechPillProps) {
  const variants = {
    primary: 'bg-primary text-primary-foreground border-primary',
    secondary: 'bg-secondary text-secondary-foreground border-secondary',
    outline: 'bg-transparent text-muted-foreground border-border',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 text-[11px] font-medium border rounded',
        'whitespace-nowrap',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

interface FeaturedBadgeProps {
  className?: string;
}

export function FeaturedBadge({ className }: FeaturedBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider',
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
        'border border-yellow-300 dark:border-yellow-700',
        'px-2 py-0.5',
        className
      )}
    >
      <span aria-hidden="true">⭐</span>
      Featured
    </span>
  );
}