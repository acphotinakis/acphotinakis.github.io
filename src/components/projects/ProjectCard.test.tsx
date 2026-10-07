import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectCard, ProjectCardSkeleton } from './ProjectCard';
import { codingProjects } from '@/data/projects';

describe('ProjectCard', () => {
  const project = codingProjects[0];
  const mockOnExpand = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders project title', () => {
    render(<ProjectCard project={project} onExpand={mockOnExpand} />);
    expect(screen.getByText(project.metadata.title)).toBeInTheDocument();
  });

  it('renders project type badge', () => {
    render(<ProjectCard project={project} onExpand={mockOnExpand} />);
    const typeConfig = { research: 'Research', system: 'System', cli: 'CLI Tool', simulator: 'Simulator', library: 'Library' };
    expect(screen.getByText(typeConfig[project.projectType])).toBeInTheDocument();
  });

  it('renders status badge', () => {
    render(<ProjectCard project={project} onExpand={mockOnExpand} />);
    const statusConfig = { active: 'Active', completed: 'Completed', archived: 'Archived' };
    expect(screen.getByText(statusConfig[project.status])).toBeInTheDocument();
  });

  it('renders year', () => {
    render(<ProjectCard project={project} onExpand={mockOnExpand} />);
    expect(screen.getByText(project.metadata.year.toString())).toBeInTheDocument();
  });

  it('renders truncated description', () => {
    render(<ProjectCard project={project} onExpand={mockOnExpand} />);
    const desc = project.highLevelDescription.length > 160 
      ? project.highLevelDescription.slice(0, 157) + '...'
      : project.highLevelDescription;
    expect(screen.getByText(desc)).toBeInTheDocument();
  });

  it('renders tech pills', () => {
    render(<ProjectCard project={project} onExpand={mockOnExpand} />);
    const techs = [...project.technologies.programmingModels.slice(0, 2), ...project.technologies.systemConcepts.slice(0, 2)].slice(0, 4);
    techs.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('shows overflow pill when more techs exist', () => {
    render(<ProjectCard project={project} onExpand={mockOnExpand} />);
    const allTechs = [...project.technologies.programmingModels, ...project.technologies.systemConcepts];
    if (allTechs.length > 4) {
      const overflow = allTechs.length - 4;
      expect(screen.getByText(`+${overflow}`)).toBeInTheDocument();
    }
  });

  it('renders featured badge when featured', () => {
    const featuredProject = { ...project, featured: true };
    render(<ProjectCard project={featuredProject} onExpand={mockOnExpand} />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('calls onExpand when Details button clicked', () => {
    render(<ProjectCard project={project} onExpand={mockOnExpand} />);
    const detailsButton = screen.getByRole('button', { name: /view details/i });
    fireEvent.click(detailsButton);
    expect(mockOnExpand).toHaveBeenCalledWith(project.slug);
  });

  it('calls onExpand when title clicked', () => {
    render(<ProjectCard project={project} onExpand={mockOnExpand} />);
    const titleLink = screen.getByRole('link', { name: project.metadata.title });
    fireEvent.click(titleLink);
    expect(mockOnExpand).toHaveBeenCalledWith(project.slug);
  });

  it('renders repo link with correct href', () => {
    render(<ProjectCard project={project} onExpand={mockOnExpand} />);
    const repoLink = screen.getByRole('link', { name: /view repository for/i });
    expect(repoLink).toHaveAttribute('href', project.links.repository);
    expect(repoLink).toHaveAttribute('target', '_blank');
    expect(repoLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders domain tags on thumbnail', () => {
    render(<ProjectCard project={project} onExpand={mockOnExpand} />);
    project.metadata.primaryDomains.slice(0, 3).forEach(domain => {
      const elements = screen.getAllByText(domain);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it('applies compact variant correctly', () => {
    const { container } = render(<ProjectCard project={project} variant="compact" onExpand={mockOnExpand} />);
    const article = container.querySelector('article');
    expect(article).not.toHaveClass('h-full');
  });

  it('applies featured variant correctly', () => {
    const featuredProject = { ...project, featured: true };
    const { container } = render(<ProjectCard project={featuredProject} variant="featured" onExpand={mockOnExpand} />);
    const article = container.querySelector('article');
    expect(article).toHaveClass('border-2');
    expect(article).toHaveClass('border-primary/20');
  });

  it('has proper ARIA attributes', () => {
    render(<ProjectCard project={project} onExpand={mockOnExpand} />);
    const detailsButton = screen.getByRole('button', { name: /view details/i });
    expect(detailsButton).toHaveAttribute('aria-label', `View details for ${project.metadata.title}`);
    
    const repoLink = screen.getByRole('link', { name: /view repository for/i });
    expect(repoLink).toHaveAttribute('aria-label', `View repository for ${project.metadata.title}`);
  });

  it('shows thumbnail image', () => {
    render(<ProjectCard project={project} onExpand={mockOnExpand} />);
    const img = screen.getByAltText(`${project.metadata.title} preview`);
    expect(img).toHaveAttribute('src', project.thumbnail);
    expect(img).toHaveAttribute('loading', 'lazy');
    expect(img).toHaveAttribute('width', '400');
    expect(img).toHaveAttribute('height', '225');
  });
});

describe('ProjectCardSkeleton', () => {
  it('renders skeleton with default variant', () => {
    const { container } = render(<ProjectCardSkeleton variant="default" />);
    const skeleton = container.querySelector('[class*="animate-pulse"]');
    expect(skeleton).toBeInTheDocument();
  });

  it('renders compact skeleton', () => {
    const { container } = render(<ProjectCardSkeleton variant="compact" />);
    const skeleton = container.querySelector('[class*="animate-pulse"]');
    expect(skeleton).toBeInTheDocument();
  });
});