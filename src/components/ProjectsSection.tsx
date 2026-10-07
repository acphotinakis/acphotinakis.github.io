'use client';

import { useState, useCallback, useMemo, useEffect, Suspense, lazy } from 'react';
import { codingProjects, filterProjects, sortProjects, type Project } from '@/data/projects';
import { ProjectFilters } from './projects/ProjectFilters';
import { ProjectsGrid } from './projects/ProjectsGrid';

const ProjectDetailModal = lazy(() => import('./projects/ProjectDetailModal').then(m => ({ default: m.ProjectDetailModal })));

export function ProjectsSection() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(codingProjects);
  const [sortOption, setSortOption] = useState<{ field: 'year' | 'title' | 'type'; direction: 'asc' | 'desc' }>({
    field: 'year',
    direction: 'desc',
  });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterAnnouncement, setFilterAnnouncement] = useState('');
  const [urlSynced, setUrlSynced] = useState(false);

  // Sync filters to URL for shareable links
  useEffect(() => {
    if (!urlSynced) {
      const params = new URLSearchParams(window.location.search);
      const typeParam = params.get('type');
      const yearParam = params.get('year');
      const searchParam = params.get('search');
      
      // Note: Full filter sync would require exposing filter state from ProjectFilters
      // This is a placeholder for future enhancement
      setUrlSynced(true);
    }
  }, [urlSynced]);

  const handleFilterChange = useCallback((projects: Project[]) => {
    setFilteredProjects(projects);
    setFilterAnnouncement(`${projects.length} project${projects.length !== 1 ? 's' : ''} found`);
  }, []);

  const sortedProjects = useMemo(() => sortProjects(filteredProjects, sortOption), [filteredProjects, sortOption]);

  const handleProjectExpand = useCallback((slug: string) => {
    const project = codingProjects.find(p => p.slug === slug);
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
      // Update URL with project slug for deep linking
      const url = new URL(window.location.href);
      url.hash = `project-${slug}`;
      window.history.replaceState({}, '', url);
    }
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
    // Clear hash on close
    const url = new URL(window.location.href);
    url.hash = '';
    window.history.replaceState({}, '', url);
  }, []);

  const handleNavigate = useCallback((direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    const currentIndex = sortedProjects.findIndex(p => p.id === selectedProject.id);
    let newIndex: number;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : sortedProjects.length - 1;
    } else {
      newIndex = currentIndex < sortedProjects.length - 1 ? currentIndex + 1 : 0;
    }
    const newProject = sortedProjects[newIndex];
    if (newProject) {
      setSelectedProject(newProject);
      // Update URL hash
      const url = new URL(window.location.href);
      url.hash = `project-${newProject.slug}`;
      window.history.replaceState({}, '', url);
    }
  }, [selectedProject, sortedProjects]);

  const hasPrev = selectedProject ? sortedProjects.findIndex(p => p.id === selectedProject.id) > 0 : false;
  const hasNext = selectedProject ? sortedProjects.findIndex(p => p.id === selectedProject.id) < sortedProjects.length - 1 : false;

  return (
    <section 
      id="projects" 
      role="region" 
      aria-label="Projects"
      className="py-24 relative border-t border-border"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-10">
          <h2 className="section-heading tracking-widest uppercase">PROJECTS</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            Explore my research, systems, and tools spanning distributed systems, security, networking, and AI.
          </p>
        </div>

        <div aria-live="polite" aria-atomic="true" className="sr-only" role="status" aria-label="Project filter results">
          {filterAnnouncement}
        </div>

        <div className="space-y-8">
          <ProjectFilters
            projects={codingProjects}
            onFilterChange={handleFilterChange}
          />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <label htmlFor="sort-projects" className="text-sm text-muted-foreground whitespace-nowrap">Sort by:</label>
              <select
                id="sort-projects"
                value={`${sortOption.field}-${sortOption.direction}`}
                onChange={(e) => {
                  const [field, direction] = e.target.value.split('-');
                  setSortOption({ field: field as 'year' | 'title' | 'type', direction: direction as 'asc' | 'desc' });
                }}
                className="px-3 py-1.5 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer"
                aria-label="Sort projects"
              >
                <option value="year-desc">Year (Newest)</option>
                <option value="year-asc">Year (Oldest)</option>
                <option value="title-asc">Title (A-Z)</option>
                <option value="title-desc">Title (Z-A)</option>
                <option value="type-asc">Type (A-Z)</option>
                <option value="type-desc">Type (Z-A)</option>
              </select>
            </div>
          </div>

          <ProjectsGrid
            projects={sortedProjects}
            onProjectExpand={handleProjectExpand}
          />
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <Suspense fallback={<div className="fixed inset-0 z-50 flex items-center justify-center p-4" aria-busy="true"><div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent" /></div>}>
          <ProjectDetailModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onNavigate={handleNavigate}
            hasPrev={hasPrev}
            hasNext={hasNext}
          />
        </Suspense>
      )}
    </section>
  );
}