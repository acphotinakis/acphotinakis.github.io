import { describe, it, expect } from 'vitest';
import { codingProjects, filterProjects, sortProjects, getProjectBySlug, getFeaturedProjects, getAllYears, getAllDomains, getAllTechnologies } from './projects';
import type { Project, ProjectType } from '@/types/project';

describe('projects data utilities', () => {
  describe('codingProjects', () => {
    it('should have 6 projects', () => {
      expect(codingProjects).toHaveLength(6);
    });

    it('each project should have required fields', () => {
      codingProjects.forEach(project => {
        expect(project.id).toBeDefined();
        expect(project.slug).toBeDefined();
        expect(project.metadata.title).toBeDefined();
        expect(project.metadata.year).toBeDefined();
        expect(project.projectType).toBeDefined();
        expect(project.status).toBeDefined();
        expect(project.featured).toBeDefined();
        expect(project.thumbnail).toBeDefined();
      });
    });

    it('should have correct project types', () => {
      const types = codingProjects.map(p => p.projectType);
      expect(types).toContain('research');
      expect(types).toContain('system');
      expect(types).toContain('cli');
      expect(types).toContain('library');
    });

    it('should have 2 featured projects', () => {
      const featured = codingProjects.filter(p => p.featured);
      expect(featured).toHaveLength(2);
    });

    it('should have unique slugs', () => {
      const slugs = codingProjects.map(p => p.slug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(slugs.length);
    });
  });

  describe('getProjectBySlug', () => {
    it('should return project for valid slug', () => {
      const project = getProjectBySlug('aegis-nexus-platform');
      expect(project).toBeDefined();
      expect(project?.metadata.title).toBe('Aegis-Nexus Platform');
    });

    it('should return undefined for invalid slug', () => {
      const project = getProjectBySlug('non-existent');
      expect(project).toBeUndefined();
    });
  });

  describe('getFeaturedProjects', () => {
    it('should return only featured projects', () => {
      const featured = getFeaturedProjects();
      expect(featured.every(p => p.featured)).toBe(true);
      expect(featured).toHaveLength(2);
    });
  });

  describe('getAllYears', () => {
    it('should return unique years sorted descending', () => {
      const years = getAllYears();
      expect(years).toEqual([2026, 2025, 2024, 2022]);
    });
  });

  describe('getAllDomains', () => {
    it('should return unique domains sorted alphabetically', () => {
      const domains = getAllDomains(codingProjects);
      expect(domains.length).toBeGreaterThan(0);
      expect(domains).toEqual([...domains].sort());
    });
  });

  describe('getAllTechnologies', () => {
    it('should return unique technologies sorted alphabetically', () => {
      const techs = getAllTechnologies(codingProjects);
      expect(techs.length).toBeGreaterThan(0);
      expect(techs).toEqual([...techs].sort());
    });
  });

  describe('filterProjects', () => {
    it('should return all projects when no filters applied', () => {
      const filtered = filterProjects(codingProjects, {});
      expect(filtered).toHaveLength(6);
    });

    it('should filter by project type', () => {
      const filtered = filterProjects(codingProjects, { types: ['research'] });
      expect(filtered.every(p => p.projectType === 'research')).toBe(true);
      expect(filtered).toHaveLength(2);
    });

    it('should filter by year', () => {
      const filtered = filterProjects(codingProjects, { years: [2026] });
      expect(filtered.every(p => p.metadata.year === 2026)).toBe(true);
      expect(filtered).toHaveLength(2);
    });

    it('should filter by domain', () => {
      const filtered = filterProjects(codingProjects, { domains: ['Secure Data Handling'] });
      expect(filtered.length).toBeGreaterThan(0);
      expect(filtered.every(p => p.metadata.primaryDomains.includes('Secure Data Handling'))).toBe(true);
    });

    it('should filter by technology', () => {
      const filtered = filterProjects(codingProjects, { technologies: ['MPI (Message Passing Interface)'] });
      expect(filtered.length).toBeGreaterThan(0);
      expect(filtered.every(p => 
        p.technologies.programmingModels.includes('MPI (Message Passing Interface)') || 
        p.technologies.systemConcepts.includes('MPI (Message Passing Interface)')
      )).toBe(true);
    });

    it('should filter by search query', () => {
      const filtered = filterProjects(codingProjects, { searchQuery: 'blockchain' });
      expect(filtered.length).toBeGreaterThan(0);
      expect(filtered[0].metadata.title.toLowerCase()).toContain('blockchain');
    });

    it('should combine multiple filters', () => {
      const filtered = filterProjects(codingProjects, { 
        types: ['research'], 
        years: [2025] 
      });
      expect(filtered.every(p => p.projectType === 'research' && p.metadata.year === 2025)).toBe(true);
    });

    it('should return empty array when no matches', () => {
      const filtered = filterProjects(codingProjects, { searchQuery: 'xyznonexistent' });
      expect(filtered).toHaveLength(0);
    });
  });

  describe('sortProjects', () => {
    it('should sort by year descending by default', () => {
      const sorted = sortProjects(codingProjects, { field: 'year', direction: 'desc' });
      const years = sorted.map(p => Number(p.metadata.year));
      expect(years).toEqual([...years].sort((a, b) => b - a));
    });

    it('should sort by year ascending', () => {
      const sorted = sortProjects(codingProjects, { field: 'year', direction: 'asc' });
      const years = sorted.map(p => Number(p.metadata.year));
      expect(years).toEqual([...years].sort((a, b) => a - b));
    });

    it('should sort by title ascending', () => {
      const sorted = sortProjects(codingProjects, { field: 'title', direction: 'asc' });
      const titles = sorted.map(p => p.metadata.title.toLowerCase());
      expect(titles).toEqual([...titles].sort());
    });

    it('should sort by title descending', () => {
      const sorted = sortProjects(codingProjects, { field: 'title', direction: 'desc' });
      const titles = sorted.map(p => p.metadata.title.toLowerCase());
      expect(titles).toEqual([...titles].sort().reverse());
    });

    it('should sort by type', () => {
      const sorted = sortProjects(codingProjects, { field: 'type', direction: 'asc' });
      const types = sorted.map(p => p.projectType);
      expect(types).toEqual([...types].sort());
    });
  });
});