import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ProjectsGrid } from './ProjectsGrid';
import { codingProjects } from '@/data/projects';

describe('ProjectsGrid', () => {
  const mockOnProjectExpand = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders project count', () => {
    render(<ProjectsGrid projects={codingProjects} onProjectExpand={mockOnProjectExpand} />);
    const liveRegion = screen.getByRole('status');
    expect(liveRegion).toHaveTextContent(/showing/i);
    expect(liveRegion).toHaveTextContent(/6/i);
    expect(liveRegion).toHaveTextContent(/project/i);
  });

  it('renders grid view by default', () => {
    render(<ProjectsGrid projects={codingProjects} onProjectExpand={mockOnProjectExpand} />);
    expect(screen.getByRole('button', { name: /grid view/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /list view/i })).toBeInTheDocument();
  });

  it('renders all project cards', () => {
    render(<ProjectsGrid projects={codingProjects} onProjectExpand={mockOnProjectExpand} />);
    codingProjects.forEach(project => {
      expect(screen.getByText(project.metadata.title)).toBeInTheDocument();
    });
  });

  it('switches to list view when list button clicked', async () => {
    render(<ProjectsGrid projects={codingProjects} onProjectExpand={mockOnProjectExpand} />);
    const listButton = screen.getByRole('button', { name: /list view/i });
    fireEvent.click(listButton);
    
    await waitFor(() => {
      expect(listButton).toHaveAttribute('aria-pressed', 'true');
    });
  });

  it('switches to grid view when grid button clicked', async () => {
    render(<ProjectsGrid projects={codingProjects} onProjectExpand={mockOnProjectExpand} />);
    const gridButton = screen.getByRole('button', { name: /grid view/i });
    expect(gridButton).toHaveAttribute('aria-pressed', 'true');
    
    const listButton = screen.getByRole('button', { name: /list view/i });
    fireEvent.click(listButton);
    
    await waitFor(() => {
      expect(listButton).toHaveAttribute('aria-pressed', 'true');
    });
    
    fireEvent.click(gridButton);
    await waitFor(() => {
      expect(gridButton).toHaveAttribute('aria-pressed', 'true');
    });
  });

  it('calls onProjectExpand when card Details button clicked', async () => {
    render(<ProjectsGrid projects={codingProjects} onProjectExpand={mockOnProjectExpand} />);
    const detailsButton = screen.getByRole('button', { name: /view details for aegis-nexus platform/i });
    fireEvent.click(detailsButton);
    
    await waitFor(() => {
      expect(mockOnProjectExpand).toHaveBeenCalledWith('aegis-nexus-platform');
    });
  });

  it('shows empty state when no projects', () => {
    render(<ProjectsGrid projects={[]} onProjectExpand={mockOnProjectExpand} />);
    expect(screen.getByText('No projects found')).toBeInTheDocument();
    expect(screen.getByText('Try adjusting your filters or search terms.')).toBeInTheDocument();
  });

  it('shows loading skeletons when isLoading', () => {
    render(<ProjectsGrid projects={codingProjects} isLoading={true} onProjectExpand={mockOnProjectExpand} />);
    expect(screen.getByRole('list', { name: /project skeletons/i })).toBeInTheDocument();
  });

  it('renders project cards with correct variant in grid view', () => {
    render(<ProjectsGrid projects={codingProjects} onProjectExpand={mockOnProjectExpand} />);
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(6);
  });

  it('has proper ARIA live region for project count', () => {
    render(<ProjectsGrid projects={codingProjects} onProjectExpand={mockOnProjectExpand} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('has role list for projects container', () => {
    render(<ProjectsGrid projects={codingProjects} onProjectExpand={mockOnProjectExpand} />);
    expect(screen.getByRole('list', { name: /projects/i })).toBeInTheDocument();
  });

  it('renders skeleton with correct count', () => {
    const { container } = render(<ProjectsGrid projects={codingProjects} isLoading={true} />);
    const skeletons = container.querySelectorAll('[class*="animate-pulse"]');
    expect(skeletons.length).toBe(6);
  });

  it('announces project count changes', async () => {
    const { rerender } = render(<ProjectsGrid projects={codingProjects} onProjectExpand={mockOnProjectExpand} />);
    
    const filtered = codingProjects.slice(0, 3);
    rerender(<ProjectsGrid projects={filtered} onProjectExpand={mockOnProjectExpand} />);
    
    await waitFor(() => {
      const liveRegion = screen.getByRole('status');
      expect(liveRegion).toHaveTextContent(/showing/i);
      expect(liveRegion).toHaveTextContent(/3/i);
      expect(liveRegion).toHaveTextContent(/project/i);
    });
  });
});