import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ProjectFilters } from './ProjectFilters';
import { codingProjects } from '@/data/projects';

describe('ProjectFilters', () => {
  const mockOnFilterChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders search input', () => {
    render(<ProjectFilters projects={codingProjects} onFilterChange={mockOnFilterChange} />);
    expect(screen.getByPlaceholderText('Search projects...')).toBeInTheDocument();
  });

  it('renders type filter chips', () => {
    render(<ProjectFilters projects={codingProjects} onFilterChange={mockOnFilterChange} />);
    expect(screen.getByRole('button', { name: /filter by research projects/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /filter by system projects/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /filter by cli tool projects/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /filter by simulator projects/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /filter by library projects/i })).toBeInTheDocument();
  });

  it('renders year filter chips', () => {
    render(<ProjectFilters projects={codingProjects} onFilterChange={mockOnFilterChange} />);
    expect(screen.getByRole('button', { name: /filter by year 2026/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /filter by year 2025/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /filter by year 2024/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /filter by year 2022/i })).toBeInTheDocument();
  });

  it('renders collapsible domains section', () => {
    render(<ProjectFilters projects={codingProjects} onFilterChange={mockOnFilterChange} />);
    expect(screen.getByText('Domains')).toBeInTheDocument();
  });

  it('renders collapsible technologies section', () => {
    render(<ProjectFilters projects={codingProjects} onFilterChange={mockOnFilterChange} />);
    expect(screen.getByText('Technologies')).toBeInTheDocument();
  });

  it('calls onFilterChange when type filter toggled', async () => {
    render(<ProjectFilters projects={codingProjects} onFilterChange={mockOnFilterChange} />);
    const researchButton = screen.getByRole('button', { name: /filter by research projects/i });
    fireEvent.click(researchButton);
    
    await waitFor(() => {
      expect(mockOnFilterChange).toHaveBeenCalled();
    });
    
    const filtered = mockOnFilterChange.mock.calls[mockOnFilterChange.mock.calls.length - 1][0];
    expect(filtered.every(p => p.projectType === 'research')).toBe(true);
  });

  it('calls onFilterChange when year filter toggled', async () => {
    render(<ProjectFilters projects={codingProjects} onFilterChange={mockOnFilterChange} />);
    const yearButton = screen.getByRole('button', { name: /filter by year 2026/i });
    fireEvent.click(yearButton);
    
    await waitFor(() => {
      expect(mockOnFilterChange).toHaveBeenCalled();
    });
    
    const filtered = mockOnFilterChange.mock.calls[mockOnFilterChange.mock.calls.length - 1][0];
    expect(filtered.every(p => p.metadata.year === 2026)).toBe(true);
  });

  it('calls onFilterChange when domain filter toggled', async () => {
    render(<ProjectFilters projects={codingProjects} onFilterChange={mockOnFilterChange} />);
    const domainsSummary = screen.getByText('Domains');
    fireEvent.click(domainsSummary);
    
    const domainButton = screen.getByRole('button', { name: /filter by secure data handling/i });
    fireEvent.click(domainButton);
    
    await waitFor(() => {
      expect(mockOnFilterChange).toHaveBeenCalled();
    });
  });

  it('calls onFilterChange when technology filter toggled', async () => {
    render(<ProjectFilters projects={codingProjects} onFilterChange={mockOnFilterChange} />);
    const techSummary = screen.getByText('Technologies');
    fireEvent.click(techSummary);
    
    await waitFor(() => {
      const techButton = screen.getByRole('button', { name: /filter by functional react/i });
      fireEvent.click(techButton);
    });
    
    await waitFor(() => {
      expect(mockOnFilterChange).toHaveBeenCalled();
    });
  });

  it('calls onFilterChange when search query changes', async () => {
    render(<ProjectFilters projects={codingProjects} onFilterChange={mockOnFilterChange} />);
    const searchInput = screen.getByPlaceholderText('Search projects...');
    fireEvent.change(searchInput, { target: { value: 'blockchain' } });
    
    await waitFor(() => {
      expect(mockOnFilterChange).toHaveBeenCalled();
    });
    
    const filtered = mockOnFilterChange.mock.calls[0][0];
    expect(filtered.length).toBeGreaterThan(0);
  });

  it('shows clear all button when filters active', async () => {
    render(<ProjectFilters projects={codingProjects} onFilterChange={mockOnFilterChange} />);
    const researchButton = screen.getByRole('button', { name: /filter by research projects/i });
    fireEvent.click(researchButton);
    
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /clear all/i })).toBeInTheDocument();
    });
  });

  it('clears all filters when clear all clicked', async () => {
    render(<ProjectFilters projects={codingProjects} onFilterChange={mockOnFilterChange} />);
    const researchButton = screen.getByRole('button', { name: /filter by research projects/i });
    fireEvent.click(researchButton);
    
    await waitFor(() => {
      const clearButton = screen.getByRole('button', { name: /clear all/i });
      fireEvent.click(clearButton);
    });
    
    await waitFor(() => {
      expect(mockOnFilterChange).toHaveBeenCalledWith(codingProjects);
    });
  });

  it('applies multiple filters together', async () => {
    render(<ProjectFilters projects={codingProjects} onFilterChange={mockOnFilterChange} />);
    
    const researchButton = screen.getByRole('button', { name: /filter by research projects/i });
    fireEvent.click(researchButton);
    
    const yearButton = screen.getByRole('button', { name: /filter by year 2025/i });
    fireEvent.click(yearButton);
    
    await waitFor(() => {
      expect(mockOnFilterChange).toHaveBeenCalled();
    });
    
    const filtered = mockOnFilterChange.mock.calls[mockOnFilterChange.mock.calls.length - 1][0];
    expect(filtered.every(p => p.projectType === 'research' && p.metadata.year === 2025)).toBe(true);
  });

  it('has proper ARIA roles and labels', () => {
    render(<ProjectFilters projects={codingProjects} onFilterChange={mockOnFilterChange} />);
    
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('group', { name: /type filters/i })).toBeInTheDocument();
    expect(screen.getByRole('group', { name: /year filters/i })).toBeInTheDocument();
    expect(screen.getByRole('group', { name: /domains filters/i })).toBeInTheDocument();
    expect(screen.getByRole('group', { name: /technologies filters/i })).toBeInTheDocument();
  });

  it('shows badge count on active filters', async () => {
    render(<ProjectFilters projects={codingProjects} onFilterChange={mockOnFilterChange} />);
    const researchButton = screen.getByRole('button', { name: /filter by research projects/i });
    fireEvent.click(researchButton);
    
    await waitFor(() => {
      const typeSection = screen.getByRole('group', { name: /type filters/i });
      expect(typeSection).toHaveTextContent('Research');
    });
  });

  it('toggles filter on and off', async () => {
    render(<ProjectFilters projects={codingProjects} onFilterChange={mockOnFilterChange} />);
    const researchButton = screen.getByRole('button', { name: /filter by research projects/i });
    
    fireEvent.click(researchButton);
    await waitFor(() => {
      expect(mockOnFilterChange).toHaveBeenCalled();
    });
    
    fireEvent.click(researchButton);
    await waitFor(() => {
      expect(mockOnFilterChange).toHaveBeenCalledWith(codingProjects);
    });
  });
});