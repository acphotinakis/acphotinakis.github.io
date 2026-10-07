'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { PROJECT_TYPES } from '@/types/project';
import type { ProjectType, Project } from '@/types/project';
import { getAllYears, getAllDomains, getAllTechnologies, filterProjects } from '@/data/projects';

interface ProjectFiltersProps {
  projects: Project[];
  onFilterChange: (filtered: Project[]) => void;
  className?: string;
}

export function ProjectFilters({ projects, onFilterChange, className }: ProjectFiltersProps) {
  const [selectedTypes, setSelectedTypes] = useState<ProjectType[]>([]);
  const [selectedYears, setSelectedYears] = useState<(string | number)[]>([]);
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    types: true,
    years: true,
    domains: false,
    technologies: false,
  });

  const allYears = useMemo(() => getAllYears(), []);
  const allDomains = useMemo(() => getAllDomains(projects), [projects]);
  const allTechnologies = useMemo(() => getAllTechnologies(projects), [projects]);

  const activeFilterCount = selectedTypes.length + selectedYears.length + selectedDomains.length + selectedTechnologies.length + (searchQuery ? 1 : 0);

  const applyFilters = useCallback(() => {
    const filtered = filterProjects(projects, {
      types: selectedTypes.length > 0 ? selectedTypes : undefined,
      years: selectedYears.length > 0 ? selectedYears : undefined,
      domains: selectedDomains.length > 0 ? selectedDomains : undefined,
      technologies: selectedTechnologies.length > 0 ? selectedTechnologies : undefined,
      searchQuery: searchQuery || undefined,
    });
    onFilterChange(filtered);
  }, [projects, selectedTypes, selectedYears, selectedDomains, selectedTechnologies, searchQuery, onFilterChange]);

  // Apply filters on any change
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const toggleType = (type: ProjectType) => {
    setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  };

  const toggleYear = (year: string | number) => {
    setSelectedYears(prev => prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]);
  };

  const toggleDomain = (domain: string) => {
    setSelectedDomains(prev => prev.includes(domain) ? prev.filter(d => d !== domain) : [...prev, domain]);
  };

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev => prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]);
  };

  const clearAll = () => {
    setSelectedTypes([]);
    setSelectedYears([]);
    setSelectedDomains([]);
    setSelectedTechnologies([]);
    setSearchQuery('');
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const FilterSection = ({ 
    title, 
    sectionKey, 
    children, 
    badgeCount = 0,
    alwaysOpen = false 
  }: { 
    title: string; 
    sectionKey: string; 
    children: React.ReactNode;
    badgeCount?: number;
    alwaysOpen?: boolean;
  }) => {
    const isOpen = alwaysOpen || expandedSections[sectionKey];
    
    return (
      <details className="group w-full sm:w-auto" open={alwaysOpen}>
        {!alwaysOpen && (
          <summary className={cn(
            'cursor-pointer flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors border border-border rounded-lg bg-background whitespace-nowrap list-none',
            isOpen ? 'text-foreground bg-muted' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
          )}>
            <span className="flex items-center gap-2">
              {title}
              {badgeCount > 0 && (
                <span className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded-full">{badgeCount}</span>
              )}
            </span>
            <svg className={cn('w-3.5 h-3.5 transition-transform', isOpen && 'rotate-180')} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
        )}
        <div className={cn(
          'mt-2 flex flex-wrap gap-2',
          alwaysOpen ? '' : 'animate-in fade-in-0 zoom-in-95 duration-200'
        )} role="group" aria-label={`${title} filters`}>
          {children}
        </div>
      </details>
    );
  };

  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="relative flex-1 max-w-xs sm:max-w-md">
          <label htmlFor="project-search" className="sr-only">Search projects</label>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              id="project-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-muted-foreground/50"
              aria-label="Search projects by title, description, or technology"
            />
          </div>
        </div>

        {activeFilterCount > 0 && (
          <button
            onClick={clearAll}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2 border border-border rounded-lg hover:bg-muted flex items-center gap-1 whitespace-nowrap"
            aria-label={`Clear all ${activeFilterCount} filters`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear all
            <span className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">{activeFilterCount}</span>
          </button>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4" role="group" aria-label="Project filters">
        <FilterSection title="Type" sectionKey="types" badgeCount={selectedTypes.length} alwaysOpen>
          {PROJECT_TYPES.map(({ value, label, icon, color }) => (
            <button
              key={value}
              onClick={() => toggleType(value)}
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200',
                'whitespace-nowrap',
                selectedTypes.includes(value)
                  ? `bg-${color}-100 text-${color}-700 border-${color}-300 dark:bg-${color}-900/30 dark:text-${color}-300 dark:border-${color}-700 shadow-sm`
                  : 'bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground'
              )}
              aria-pressed={selectedTypes.includes(value)}
              aria-label={`Filter by ${label} projects`}
            >
              <span aria-hidden="true">{icon}</span>
              {label}
              {selectedTypes.includes(value) && (
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
              )}
            </button>
          ))}
        </FilterSection>

        <FilterSection title="Year" sectionKey="years" badgeCount={selectedYears.length} alwaysOpen>
          {allYears.map(year => (
            <button
              key={year}
              onClick={() => toggleYear(year)}
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200',
                'whitespace-nowrap',
                selectedYears.includes(year)
                  ? 'bg-primary/10 text-primary border-primary/30 dark:bg-primary/20 dark:border-primary/50 shadow-sm'
                  : 'bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground'
              )}
              aria-pressed={selectedYears.includes(year)}
              aria-label={`Filter by year ${year}`}
            >
              {year}
              {selectedYears.includes(year) && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
            </button>
          ))}
        </FilterSection>

        <FilterSection title="Domains" sectionKey="domains" badgeCount={selectedDomains.length}>
          {allDomains.map(domain => (
            <button
              key={domain}
              onClick={() => toggleDomain(domain)}
              className={cn(
                'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border transition-all duration-200',
                'whitespace-nowrap',
                selectedDomains.includes(domain)
                  ? 'bg-primary/10 text-primary border-primary/30 dark:bg-primary/20 dark:border-primary/50 shadow-sm'
                  : 'bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground'
              )}
              aria-pressed={selectedDomains.includes(domain)}
              aria-label={`Filter by ${domain}`}
            >
              {domain}
              {selectedDomains.includes(domain) && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
            </button>
          ))}
        </FilterSection>

        <FilterSection title="Technologies" sectionKey="technologies" badgeCount={selectedTechnologies.length}>
          {allTechnologies.map(tech => (
            <button
              key={tech}
              onClick={() => toggleTechnology(tech)}
              className={cn(
                'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border transition-all duration-200',
                'whitespace-nowrap',
                selectedTechnologies.includes(tech)
                  ? 'bg-primary/10 text-primary border-primary/30 dark:bg-primary/20 dark:border-primary/50 shadow-sm'
                  : 'bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground'
              )}
              aria-pressed={selectedTechnologies.includes(tech)}
              aria-label={`Filter by ${tech}`}
            >
              {tech}
              {selectedTechnologies.includes(tech) && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
            </button>
          ))}
        </FilterSection>
      </div>
    </div>
  );
}