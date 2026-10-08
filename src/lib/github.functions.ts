const USERNAME = "acphotinakis";
const API = "https://api.github.com";

export type GithubProfile = {
  login: string;
  name: string;
  avatarUrl: string;
  bio: string | null;
  publicRepos: number;
  followers: number;
  following: number;
  htmlUrl: string;
  createdAt: string;
};

export type GithubRepo = {
  name: string;
  description: string | null;
  htmlUrl: string;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
};

export type GithubData = {
  profile: GithubProfile;
  topRepos: GithubRepo[];
  totalStars: number;
  totalForks: number;
  fetchedAt: string;
};

async function ghFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API failed [${res.status}]: ${body}`);
  }
  return (await res.json()) as T;
}

// Runs in the browser: GitHub Pages has no server, and the GitHub API allows CORS.
export async function getGithubData(): Promise<GithubData> {
  const [user, repos] = await Promise.all([
    ghFetch<{
      login: string;
      name: string;
      avatar_url: string;
      bio: string | null;
      public_repos: number;
      followers: number;
      following: number;
      html_url: string;
      created_at: string;
    }>(`/users/${USERNAME}`),
    ghFetch<
      Array<{
        name: string;
        description: string | null;
        html_url: string;
        language: string | null;
        stargazers_count: number;
        forks_count: number;
        updated_at: string;
        fork: boolean;
      }>
    >(`/users/${USERNAME}/repos?per_page=100&sort=updated`),
  ]);

  const own = repos.filter((r) => !r.fork);
  const mapped: GithubRepo[] = own.map((r) => ({
    name: r.name,
    description: r.description,
    htmlUrl: r.html_url,
    language: r.language,
    stars: r.stargazers_count,
    forks: r.forks_count,
    updatedAt: r.updated_at,
  }));

  const topRepos = [...mapped].sort((a, b) => b.stars - a.stars).slice(0, 6);

  return {
    profile: {
      login: user.login,
      name: user.name,
      avatarUrl: user.avatar_url,
      bio: user.bio,
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      htmlUrl: user.html_url,
      createdAt: user.created_at,
    },
    topRepos,
    totalStars: mapped.reduce((s, r) => s + r.stars, 0),
    totalForks: mapped.reduce((s, r) => s + r.forks, 0),
    fetchedAt: new Date().toISOString(),
  };
}
