export interface GithubProject {
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  license?: string;
  created_at: string;
  pushed_at: string;
  archived: boolean;
}

export interface GithubApiProject {
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  license?: string;
  created_at: string;
  pushed_at: string;
  archived: boolean;
}
