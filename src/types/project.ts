export type ProjectType = 'research' | 'system' | 'cli' | 'simulator' | 'library';

export type ProjectStatus = 'active' | 'completed' | 'archived';

export interface ProjectMetadata {
  title: string;
  repositoryType: string;
  authors: string[];
  affiliation: string;
  year: string | number;
  format: string;
  primaryDomains: string[];
}

export interface ProjectComponent {
  name: string;
  category: string;
  problemAddressed: string;
  keyMechanisms: string[];
  keyTakeaway: string;
}

export interface TechnicalThemes {
  scheduling: string;
  elasticity: string;
  faultToleranceResilience: string;
  parallelismModel: string;
  cloudAssumptionsChallenged: string;
}

export interface Technologies {
  programmingModels: string[];
  systemConcepts: string[];
  hardwareContext: string;
  workloadType: string;
}

export interface Audience {
  intendedUse: string;
  targetAudience: string;
}

export interface ProjectLinks {
  repository: string;
  paper?: string;
  demo?: string;
  docs?: string;
}

export interface Project {
  id: string;
  slug: string;
  metadata: ProjectMetadata;
  highLevelDescription: string;
  problemSpace: string[];
  coreContributions: string[];
  components: ProjectComponent[];
  technicalThemes: TechnicalThemes;
  technologies: Technologies;
  audience: Audience;
  keywords: string[];
  citation?: string;
  links: ProjectLinks;
  notes: string[];
  projectType: ProjectType;
  status: ProjectStatus;
  featured: boolean;
  thumbnail?: string;
  startDate?: string;
  endDate?: string;
}

export interface ProjectFilters {
  types: ProjectType[];
  years: (string | number)[];
  domains: string[];
  technologies: string[];
  searchQuery: string;
}

export interface ProjectSortOption {
  field: 'year' | 'title' | 'type';
  direction: 'asc' | 'desc';
}

export const PROJECT_TYPES: { value: ProjectType; label: string; icon: string; color: string }[] = [
  { value: 'research', label: 'Research', icon: '📊', color: 'purple' },
  { value: 'system', label: 'System', icon: '⚙️', color: 'blue' },
  { value: 'cli', label: 'CLI Tool', icon: '💻', color: 'green' },
  { value: 'simulator', label: 'Simulator', icon: '🎮', color: 'orange' },
  { value: 'library', label: 'Library', icon: '📦', color: 'gray' },
];

export const PROJECT_STATUS_COLORS: Record<ProjectStatus, string> = {
  active: 'green',
  completed: 'blue',
  archived: 'gray',
};