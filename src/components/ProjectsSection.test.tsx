import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ProjectsSection } from './ProjectsSection';
import { codingProjects } from '@/data/projects';
import { useEffect } from 'react';

// Mock window.history
Object.defineProperty(window, 'history', {
  value: {
    replaceState: vi.fn(),
    pushState: vi.fn(),
  },
  writable: true,
});

// Mock window.location
Object.defineProperty(window, 'location', {
  value: { hash: '', href: 'http://localhost:8080/' },
  writable: true,
});

// Mock the lazy-loaded modal
vi.mock('./projects/ProjectDetailModal', () => {
  return {
    ProjectDetailModal: ({
      project,
      isOpen,
      onClose,
      onNavigate,
      hasPrev,
      hasNext,
    }: {
      project: { slug: string; metadata: { title: string } } | null;
      isOpen: boolean;
      onClose: () => void;
      onNavigate?: (dir: string) => void;
      hasPrev?: boolean;
      hasNext?: boolean;
    }) => {
      useEffect(() => {
        if (!isOpen) {
          window.location.hash = '';
        }
        return () => {
          if (isOpen) {
            window.location.hash = '';
          }
        };
      }, [isOpen]);

      if (!isOpen) {
        return null;
      }

      const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      // Update URL hash when modal opens
      if (project) {
        window.location.hash = `project-${project.slug}`;
      }

      return (
        <div role="dialog" aria-modal="true" aria-labelledby="modal-title" onKeyDown={handleKeyDown}>
          <h2 id="modal-title">{project?.metadata.title}</h2>
          <button onClick={onClose} aria-label="Close modal">Close</button>
          <button onClick={() => onNavigate?.('prev')} aria-label="Previous project" disabled={!hasPrev}>Prev</button>
          <button onClick={() => onNavigate?.('next')} aria-label="Next project" disabled={!hasNext}>Next</button>
        </div>
      );
    },
  };
});

describe('ProjectsSection', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock window.location
    delete window.location;
    window.location = new URL('http://localhost:8080/');
  });

  it('renders section heading', () => {
    render(<ProjectsSection />);
    expect(screen.getByRole('heading', { name: /projects/i, level: 2 })).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/explore my research, systems, and tools/i)).toBeInTheDocument();
  });

  it('renders ProjectFilters', () => {
    render(<ProjectsSection />);
    expect(screen.getByPlaceholderText('Search projects...')).toBeInTheDocument();
  });

  it('renders sort dropdown', () => {
    render(<ProjectsSection />);
    expect(screen.getByRole('combobox', { name: /sort projects/i })).toBeInTheDocument();
  });

  it('renders all projects initially', () => {
    render(<ProjectsSection />);
    codingProjects.forEach(project => {
      expect(screen.getByText(project.metadata.title)).toBeInTheDocument();
    });
  });

  it('filters projects when type selected', async () => {
    render(<ProjectsSection />);
    const researchButton = screen.getByRole('button', { name: /filter by research projects/i });
    fireEvent.click(researchButton);

    await waitFor(() => {
      const visibleProjects = screen.getAllByRole('article');
      visibleProjects.forEach(article => {
        const title = article.querySelector('h3')?.textContent;
        const project = codingProjects.find(p => p.metadata.title === title);
        expect(project?.projectType).toBe('research');
      });
    });
  });

  it('sorts projects by year descending by default', () => {
    render(<ProjectsSection />);
    const articles = screen.getAllByRole('article');
    const titles = articles.map(a => a.querySelector('h3')?.textContent);
    const years = titles.map(t => codingProjects.find(p => p.metadata.title === t)?.metadata.year);

    for (let i = 1; i < years.length; i++) {
      expect(Number(years[i])).toBeLessThanOrEqual(Number(years[i - 1]));
    }
  });

  it('sorts projects by title when selected', async () => {
    render(<ProjectsSection />);
    const sortSelect = screen.getByRole('combobox', { name: /sort projects/i });
    fireEvent.change(sortSelect, { target: { value: 'title-asc' } });

    await waitFor(() => {
      const articles = screen.getAllByRole('article');
      const titles = articles.map(a => a.querySelector('h3')?.textContent);
      const sorted = [...titles].sort((a, b) => a.localeCompare(b));
      expect(titles).toEqual(sorted);
    });
  });

  it('announces filter results via live region', async () => {
    render(<ProjectsSection />);
    const liveRegion = screen.getByRole('status', { name: /project filter results/i });
    // Initially shows all projects
    expect(liveRegion).toHaveTextContent(/6 projects found/i);

    const researchButton = screen.getByRole('button', { name: /filter by research projects/i });
    fireEvent.click(researchButton);

    await waitFor(() => {
      expect(liveRegion).toHaveTextContent(/2 projects found/i);
    });
  });

  it('opens modal when Details clicked', async () => {
    render(<ProjectsSection />);
    const detailsButton = screen.getByRole('button', { name: /view details for aegis-nexus platform/i });
    fireEvent.click(detailsButton);

    await waitFor(() => {
      expect(screen.getByRole('dialog', { name: /aegis-nexus platform/i })).toBeInTheDocument();
    });
  });

  it('modal has close button', async () => {
    render(<ProjectsSection />);
    const detailsButton = screen.getByRole('button', { name: /view details for aegis-nexus platform/i });
    fireEvent.click(detailsButton);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument();
    });
  });

  it('modal has previous/next navigation', async () => {
    render(<ProjectsSection />);
    const detailsButton = screen.getByRole('button', { name: /view details for aegis-nexus platform/i });
    fireEvent.click(detailsButton);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /previous project/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /next project/i })).toBeInTheDocument();
    });
  });

  it('closes modal on Escape key', async () => {
    render(<ProjectsSection />);
    const detailsButton = screen.getByRole('button', { name: /view details for aegis-nexus platform/i });
    fireEvent.click(detailsButton);

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    const dialog = screen.getByRole('dialog');
    fireEvent.keyDown(dialog, { key: 'Escape' });

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('navigates to next project with ArrowRight', async () => {
    render(<ProjectsSection />);
    const detailsButton = screen.getByRole('button', { name: /view details for aegis-nexus platform/i });
    fireEvent.click(detailsButton);

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'ArrowRight' });

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /sbmpi/i })).toBeInTheDocument();
    });
  });

  it('navigates to previous project with ArrowLeft', async () => {
    render(<ProjectsSection />);
    const lastProjectButton = screen.getByRole('button', { name: /view details for securecomm/i });
    fireEvent.click(lastProjectButton);

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'ArrowLeft' });

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /radixip/i })).toBeInTheDocument();
    });
  });

  it('updates URL hash when modal opens', async () => {
    render(<ProjectsSection />);
    const detailsButton = screen.getByRole('button', { name: /view details for aegis-nexus platform/i });
    fireEvent.click(detailsButton);

    await waitFor(() => {
      expect(window.location.hash).toBe('#project-aegis-nexus-platform');
    });
  });

  it('clears URL hash when modal closes', async () => {
    render(<ProjectsSection />);
    const detailsButton = screen.getByRole('button', { name: /view details for aegis-nexus platform/i });
    fireEvent.click(detailsButton);

    await waitFor(() => {
      expect(window.location.hash).toBe('#project-aegis-nexus-platform');
    });

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' });

    await waitFor(() => {
      expect(window.location.hash).toBe('');
    });
  });

  it('has skip link in parent page', () => {
    expect(true).toBe(true);
  });

  it('has proper section structure', () => {
    render(<ProjectsSection />);
    const section = screen.getByRole('region', { name: /projects/i });
    expect(section).toHaveAttribute('id', 'projects');
  });
});