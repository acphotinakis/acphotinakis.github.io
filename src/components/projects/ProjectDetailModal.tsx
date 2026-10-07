'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronRight, ChevronLeft, ExternalLink, Github, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProjectTypeBadge, StatusBadge, TechPill, FeaturedBadge } from './ProjectBadges';
import type { Project } from '@/types/project';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (direction: 'prev' | 'next') => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

type DetailTab = 'overview' | 'architecture' | 'tech' | 'resources';

function OverviewIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ArchitectureIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );
}

function TechIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function ResourcesIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

const TABS: { id: DetailTab; label: string; icon: React.ReactNode }[] = [
  { id: 'overview', label: 'Overview', icon: <OverviewIcon /> },
  { id: 'architecture', label: 'Architecture', icon: <ArchitectureIcon /> },
  { id: 'tech', label: 'Tech Stack', icon: <TechIcon /> },
  { id: 'resources', label: 'Resources', icon: <ResourcesIcon /> },
];

function TabButton({ tab, isActive, onClick }: { tab: typeof TABS[0]; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${tab.id}`}
      id={`tab-${tab.id}`}
      className={cn(
        'flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-t-lg transition-colors',
        'border-b-2',
        isActive
          ? 'border-primary text-primary bg-primary/5'
          : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
      )}
    >
      <span aria-hidden="true">{tab.icon}</span>
      {tab.label}
    </button>
  );
}

function OverviewPanel({ project }: { project: Project }) {
  return (
    <div 
      role="tabpanel" 
      id="panel-overview" 
      tabIndex={0} 
      aria-labelledby="tab-overview"
      className="space-y-6 animate-in fade-in duration-200"
    >
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Description</h4>
        <p className="text-base text-foreground leading-relaxed">{project.highLevelDescription}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Problem Space</h4>
          <ul className="space-y-2" role="list">
            {project.problemSpace.map((prob, i) => (
              <li key={i} className="flex gap-3 text-sm text-foreground/90">
                <span className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true">▸</span>
                <span>{prob}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Core Contributions</h4>
          <ul className="space-y-2" role="list">
            {project.coreContributions.map((con, i) => (
              <li key={i} className="flex gap-3 text-sm text-foreground/90">
                <span className="text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Target Audience</h4>
        <p className="text-sm text-foreground/90 italic">{project.audience.targetAudience}</p>
      </div>

      {project.notes.length > 0 && (
        <div className="border-l-2 border-primary/30 pl-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Notes</h4>
          <ul className="space-y-1" role="list">
            {project.notes.map((note, i) => (
              <li key={i} className="text-sm text-muted-foreground italic">{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ArchitecturePanel({ project }: { project: Project }) {
  return (
    <div role="tabpanel" id="panel-architecture" tabIndex={0} aria-labelledby="tab-architecture" className="space-y-6 animate-in fade-in duration-200">
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">System Components</h4>
        <div className="space-y-4" role="list">
          {project.components.map((comp, i) => (
            <article key={comp.name} className="p-4 bg-muted/30 border border-border/50 rounded-lg">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-foreground">{comp.name}</span>
                  <span className="text-[11px] px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-full">{comp.category}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mb-3">"{comp.problemAddressed}"</p>
              <div className="flex flex-wrap gap-1.5 mb-3" role="list" aria-label="Key mechanisms">
                {comp.keyMechanisms.map((mech, j) => (
                  <TechPill key={j} variant="secondary" size="sm">{mech}</TechPill>
                ))}
              </div>
              <p className="text-sm text-foreground"><span className="font-semibold text-primary">Key Takeaway:</span> {comp.keyTakeaway}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="border border-border/50 rounded-lg p-4 bg-muted/20">
        <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-4">Technical Themes Matrix</h4>
        <dl className="grid gap-4 sm:grid-cols-2" role="list">
          {[
            { label: 'Scheduling', value: project.technicalThemes.scheduling },
            { label: 'Elasticity', value: project.technicalThemes.elasticity },
            { label: 'Resilience', value: project.technicalThemes.faultToleranceResilience },
            { label: 'Parallelism', value: project.technicalThemes.parallelismModel },
            { label: 'Cloud Challenges', value: project.technicalThemes.cloudAssumptionsChallenged },
          ].map((theme, i) => (
            <div key={i} className="space-y-1">
              <dt className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{theme.label}</dt>
              <dd className="text-sm text-foreground leading-relaxed font-mono">{theme.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function TechStackPanel({ project }: { project: Project }) {
  return (
    <div role="tabpanel" id="panel-tech" tabIndex={0} aria-labelledby="tab-tech" className="space-y-6 animate-in fade-in duration-200">
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Programming Models</h4>
        <div className="flex flex-wrap gap-2" role="list">
          {project.technologies.programmingModels.map((tech, i) => (
            <TechPill key={i} variant="primary">{tech}</TechPill>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">System Concepts</h4>
        <div className="flex flex-wrap gap-2" role="list">
          {project.technologies.systemConcepts.map((tech, i) => (
            <TechPill key={i} variant="secondary">{tech}</TechPill>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Hardware Context</h4>
          <p className="text-sm text-foreground/90 font-mono">{project.technologies.hardwareContext}</p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Workload Type</h4>
          <p className="text-sm text-foreground/90 font-mono">{project.technologies.workloadType}</p>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">All Keywords</h4>
        <div className="flex flex-wrap gap-1.5" role="list">
          {project.keywords.map((kw, i) => (
            <TechPill key={i} variant="outline" size="sm">#{kw}</TechPill>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResourcesPanel({ project }: { project: Project }) {
  return (
    <div role="tabpanel" id="panel-resources" tabIndex={0} aria-labelledby="tab-resources" className="space-y-6 animate-in fade-in duration-200">
      <div className="flex flex-wrap gap-3" role="list" aria-label="Project links">
        <a
          href={project.links.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
          aria-label={`View ${project.metadata.title} repository on GitHub`}
        >
          <Github className="w-4 h-4" aria-hidden="true" />
          View Repository
        </a>
        {project.links.paper && (
          <a
            href={project.links.paper}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-background text-foreground rounded-lg font-medium text-sm hover:bg-muted transition-colors"
            aria-label={`View ${project.metadata.title} paper`}
          >
            <FileText className="w-4 h-4" aria-hidden="true" />
            View Paper
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-background text-foreground rounded-lg font-medium text-sm hover:bg-muted transition-colors"
            aria-label={`View ${project.metadata.title} demo`}
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            Live Demo
          </a>
        )}
        {project.links.docs && (
          <a
            href={project.links.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-background text-foreground rounded-lg font-medium text-sm hover:bg-muted transition-colors"
            aria-label={`View ${project.metadata.title} documentation`}
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            Documentation
          </a>
        )}
      </div>

      {project.citation && (
        <div className="bg-muted/30 border border-border/50 rounded-lg p-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Citation</h4>
          <pre className="text-[11px] font-mono text-foreground/90 overflow-x-auto whitespace-pre-wrap">{project.citation}</pre>
        </div>
      )}

      <div className="border-t border-border/50 pt-4 space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Metadata</h4>
        <dl className="grid gap-2 sm:grid-cols-2 text-sm" role="list">
          <div><dt className="text-muted-foreground">Repository Type</dt><dd className="font-mono">{project.metadata.repositoryType}</dd></div>
          <div><dt className="text-muted-foreground">Authors</dt><dd className="font-mono">{project.metadata.authors.join(', ')}</dd></div>
          <div><dt className="text-muted-foreground">Affiliation</dt><dd className="font-mono">{project.metadata.affiliation}</dd></div>
          <div><dt className="text-muted-foreground">Year</dt><dd className="font-mono">{project.metadata.year}</dd></div>
          <div><dt className="text-muted-foreground">Format</dt><dd className="font-mono">{project.metadata.format}</dd></div>
          <div><dt className="text-muted-foreground">Status</dt><dd><StatusBadge status={project.status} /></dd></div>
        </dl>
      </div>
    </div>
  );
}

const PANELS: Record<DetailTab, React.FC<{ project: Project }>> = {
  overview: OverviewPanel,
  architecture: ArchitecturePanel,
  tech: TechStackPanel,
  resources: ResourcesPanel,
};

export function ProjectDetailModal({ project, isOpen, onClose, onNavigate, hasPrev, hasNext }: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState<DetailTab>('overview');
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === 'Escape') {
      onClose();
      return;
    }

    if (e.key === 'Tab') {
      const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }

    if (e.key === 'ArrowLeft' && hasPrev && onNavigate) {
      onNavigate('prev');
    }
    if (e.key === 'ArrowRight' && hasNext && onNavigate) {
      onNavigate('next');
    }
  }, [isOpen, onClose, onNavigate, hasPrev, hasNext]);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      modalRef.current?.focus();
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyDown);
        previousActiveElement.current?.focus();
      };
    }
  }, [isOpen, project, handleKeyDown]);

  if (!isOpen || !project) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-4xl max-h-[90vh] bg-background border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-200 flex flex-col"
      >
        <div className="flex items-start justify-between p-4 border-b border-border bg-muted/30 sticky top-0 z-10">
          <div className="flex items-center gap-3 min-w-0">
            <ProjectTypeBadge type={project.projectType} />
            <StatusBadge status={project.status} />
            {project.featured && <FeaturedBadge />}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate?.('prev')}
              disabled={!hasPrev}
              className="p-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:pointer-events"
              aria-label="Previous project"
              aria-disabled={!hasPrev}
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              onClick={() => onNavigate?.('next')}
              disabled={!hasNext}
              className="p-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:pointer-events"
              aria-label="Next project"
              aria-disabled={!hasNext}
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <header className="mb-6 pb-4 border-b border-border">
            <h2 id="modal-title" className="text-2xl font-bold text-foreground mb-2">{project.metadata.title}</h2>
            <p id="modal-description" className="text-muted-foreground text-sm">{project.highLevelDescription}</p>
          </header>

          <div className="border-b border-border mb-6" role="tablist" aria-label="Project details">
            {TABS.map(tab => (
              <TabButton
                key={tab.id}
                tab={tab}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>

          {(() => {
            switch (activeTab) {
              case 'overview':
                return <OverviewPanel project={project} />;
              case 'architecture':
                return <ArchitecturePanel project={project} />;
              case 'tech':
                return <TechStackPanel project={project} />;
              case 'resources':
                return <ResourcesPanel project={project} />;
              default:
                return <OverviewPanel project={project} />;
            }
          })()}
        </div>
      </div>
    </div>
  );

  if (typeof window === 'undefined') return null;

  return createPortal(modalContent, document.body);
}