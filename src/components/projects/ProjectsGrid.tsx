'use client';

import { useState, useMemo, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ProjectCard, ProjectCardSkeleton } from './ProjectCard';
import type { Project } from '@/types/project';
import { Grid, List } from 'react-window';

type ViewMode = 'grid' | 'list';

interface ProjectsGridProps {
  projects: Project[];
  isLoading?: boolean;
  onProjectExpand?: (slug: string) => void;
  className?: string;
  virtualizeThreshold?: number;
}

const CARD_HEIGHT = 360;
const COMPACT_CARD_HEIGHT = 200;
const CARD_WIDTH = 380;
const LIST_ITEM_HEIGHT = 180;

function GridItem({ index, style, data }: { index: number; style: React.CSSProperties; data: { projects: Project[]; onExpand?: (slug: string) => void; variant: 'default' | 'compact' | 'featured' } }) {
  const { projects, onExpand, variant } = data;
  const project = projects[index];
  
  const combinedStyle = { ...style, animationDelay: `${index * 30}ms` };
  
  return (
    <div style={combinedStyle} className="animate-in fade-in zoom-in-95 duration-300">
      <ProjectCard project={project} variant={variant} onExpand={onExpand} />
    </div>
  );
}

function ListItem({ index, style, data }: { index: number; style: React.CSSProperties; data: { projects: Project[]; onExpand?: (slug: string) => void; variant: 'default' | 'compact' | 'featured' } }) {
  const { projects, onExpand, variant } = data;
  const project = projects[index];
  
  const combinedStyle = { ...style, animationDelay: `${index * 30}ms` };
  
  return (
    <div style={combinedStyle} className="animate-in fade-in zoom-in-95 duration-300">
      <ProjectCard project={project} variant={variant} onExpand={onExpand} />
    </div>
  );
}

export function ProjectsGrid({ 
  projects, 
  isLoading = false, 
  onProjectExpand, 
  className,
  virtualizeThreshold = 20
}: ProjectsGridProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const gridRef = useRef<typeof Grid>(null);
  const listRef = useRef<typeof List>(null);

  const shouldVirtualize = projects.length >= virtualizeThreshold;
  const cardVariant = viewMode === 'list' ? 'compact' : 'default';
  const itemHeight = viewMode === 'list' ? LIST_ITEM_HEIGHT : CARD_HEIGHT;

  const itemData = useMemo(() => ({
    projects,
    onExpand: onProjectExpand,
    variant: cardVariant,
  }), [projects, onProjectExpand, cardVariant]);

  const renderGrid = () => (
    <Grid
      ref={gridRef}
      className={cn('animate-in fade-in duration-300', 'w-full')}
      columnCount={viewMode === 'grid' ? 3 : 1}
      columnWidth={CARD_WIDTH}
      height={Math.min(projects.length * itemHeight, window.innerHeight * 0.8)}
      itemCount={projects.length}
      itemData={itemData}
      width="100%"
      itemKey={({ index }) => projects[index].id}
      overscanCount={3}
    >
      {GridItem}
      </Grid>
  );

  const renderList = () => (
    <List
      ref={listRef}
      className={cn('animate-in fade-in duration-300', 'w-full')}
      height={Math.min(projects.length * itemHeight, window.innerHeight * 0.8)}
      itemCount={projects.length}
      itemData={itemData}
      itemHeight={LIST_ITEM_HEIGHT}
      itemKey={({ index }) => projects[index].id}
      overscanCount={5}
      width="100%"
    >
      {ListItem}
      </List>
  );

  if (isLoading) {
    return (
      <div className={cn('space-y-4', className)}>
        <div className="flex flex-col sm:flex-row gap-4" role="list" aria-label="Project skeletons">
          {[...Array(6)].map((_, i) => (
            <ProjectCardSkeleton key={i} variant="default" />
          ))}
        </div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className={cn('text-center py-16', className)}>
        <div className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-foreground mb-1">No projects found</h3>
        <p className="text-sm text-muted-foreground">Try adjusting your filters or search terms.</p>
      </div>
    );
  }

  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <p className="text-sm text-muted-foreground" aria-live="polite" role="status">
          Showing <span className="font-mono font-bold">{projects.length}</span> project{projects.length !== 1 ? 's' : ''}
        </p>
        <div className="flex items-center gap-2" role="group" aria-label="View mode">
          <button
            onClick={() => setViewMode('grid')}
            className={cn(
              'p-2 rounded-lg border transition-colors',
              viewMode === 'grid'
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background text-muted-foreground border-border hover:bg-muted'
            )}
            aria-pressed={viewMode === 'grid'}
            aria-label="Grid view"
            title="Grid view"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={cn(
              'p-2 rounded-lg border transition-colors',
              viewMode === 'list'
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background text-muted-foreground border-border hover:bg-muted'
            )}
            aria-pressed={viewMode === 'list'}
            aria-label="List view"
            title="List view"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div role="list" aria-label="Projects" className="w-full">
        {shouldVirtualize 
          ? (viewMode === 'grid' ? renderGrid() : renderList())
          : (
            <div
              className={cn(
                viewMode === 'grid' ? 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3' : 'space-y-3',
                'animate-in fade-in duration-300'
              )}
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  variant={cardVariant}
                  onExpand={onProjectExpand}
                  style={{ animationDelay: `${index * 30}ms` }}
                />
              ))}
            </div>
          )
        }
      </div>
    </div>
  );
}

interface ProjectsGridSkeletonProps {
  count?: number;
}

export function ProjectsGridSkeleton({ count = 6 }: ProjectsGridSkeletonProps) {
  return (
    <div className="space-y-4" role="list" aria-label="Project skeletons" aria-busy="true">
      {[...Array(count)].map((_, i) => (
        <ProjectCardSkeleton key={i} variant="default" />
      ))}
    </div>
  );
}