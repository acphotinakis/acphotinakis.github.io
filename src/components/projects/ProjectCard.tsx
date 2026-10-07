import { cn } from '@/lib/utils';
import { ProjectTypeBadge, StatusBadge, TechPill, FeaturedBadge } from './ProjectBadges';
import type { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'compact' | 'featured';
  onExpand?: (slug: string) => void;
  className?: string;
}

export function ProjectCard({ project, variant = 'default', onExpand, className }: ProjectCardProps) {
  const primaryTech = [
    ...project.technologies.programmingModels.slice(0, 2),
    ...project.technologies.systemConcepts.slice(0, 2),
  ].slice(0, 4);

  const description = project.highLevelDescription.length > 160
    ? project.highLevelDescription.slice(0, 157) + '...'
    : project.highLevelDescription;

  const baseClasses = 'group relative flex flex-col transition-all duration-200';
  const variantClasses = {
    default: 'h-full',
    compact: 'h-auto',
    featured: 'h-full border-2 border-primary/20',
  };

  const showThumbnail = variant !== 'compact' && project.thumbnail;

  return (
    <article
      className={cn(
        'terminal-card rounded-xl overflow-hidden',
        'flex flex-col',
        'bg-card border-border',
        'hover:border-primary/50 hover:shadow-lg',
        'transition-all duration-300',
        'animate-in fade-in zoom-in-95 duration-300',
        baseClasses,
        variantClasses[variant],
        className
      )}
      style={{ animationDelay: `${Math.random() * 200}ms` }}
    >
      {showThumbnail && (
        <div className="relative h-40 w-full overflow-hidden bg-muted/30">
          <img
            src={project.thumbnail}
            alt={`${project.metadata.title} preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            width="400"
            height="225"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
            {project.metadata.primaryDomains.slice(0, 3).map((domain, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 bg-black/70 backdrop-blur text-white rounded border border-white/10 font-medium"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="relative p-5 pb-0 flex-1 flex flex-col">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <ProjectTypeBadge type={project.projectType} size="sm" />
            <StatusBadge status={project.status} size="sm" />
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
            <span aria-hidden="true">📅</span>
            {project.metadata.year}
          </div>
        </div>

        <a
          href={`#project-${project.slug}`}
          onClick={(e) => {
            e.preventDefault();
            onExpand?.(project.slug);
          }}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md -m-2 p-2"
        >
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-2">
            {project.metadata.title}
          </h3>
        </a>

        <p className="text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="px-5 py-4 border-t border-border/50 bg-muted/20">
        <div className="flex flex-wrap gap-1.5 mb-3" role="list" aria-label="Technologies">
          {primaryTech.map((tech, i) => (
            <TechPill key={tech} variant="outline" size="sm">
              {tech}
            </TechPill>
          ))}
          {primaryTech.length < [...project.technologies.programmingModels, ...project.technologies.systemConcepts].length && (
            <TechPill variant="outline" className="text-primary/70">
              +{([...project.technologies.programmingModels, ...project.technologies.systemConcepts].length - primaryTech.length)}
            </TechPill>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-border/50">
          <div className="flex items-center gap-2">
            {project.featured && <FeaturedBadge />}
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
              {project.metadata.primaryDomains[0]}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onExpand?.(project.slug);
              }}
              className="text-xs font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1 px-2 py-1 rounded hover:bg-primary/10"
              aria-label={`View details for ${project.metadata.title}`}
            >
              Details
              <span aria-hidden="true">→</span>
            </button>
            <a
              href={project.links.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 px-2 py-1 rounded hover:bg-muted"
              aria-label={`View repository for ${project.metadata.title}`}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

interface ProjectCardSkeletonProps {
  variant?: 'default' | 'compact' | 'featured';
}

export function ProjectCardSkeleton({ variant = 'default' }: ProjectCardSkeletonProps) {
  const variantClasses = {
    default: 'h-[360px]',
    compact: 'h-[200px]',
    featured: 'h-[360px]',
  };

  return (
    <div className={cn('terminal-card rounded-xl overflow-hidden animate-pulse', variantClasses[variant])}>
      {variant !== 'compact' && (
        <div className="h-40 w-full bg-muted" />
      )}
      <div className="p-5 pb-0 space-y-3">
        <div className="h-5 w-24 bg-muted rounded" />
        <div className="h-6 w-3/4 bg-muted rounded" />
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-5/6 bg-muted rounded" />
        <div className="h-4 w-4/6 bg-muted rounded" />
      </div>
      <div className="px-5 py-4 border-t border-border/50 bg-muted/20 space-y-3">
        <div className="flex gap-1.5">
          <div className="h-6 w-20 bg-muted rounded" />
          <div className="h-6 w-20 bg-muted rounded" />
          <div className="h-6 w-16 bg-muted rounded" />
        </div>
        <div className="h-8 w-full bg-muted rounded" />
      </div>
    </div>
  );
}