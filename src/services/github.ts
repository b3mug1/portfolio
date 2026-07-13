import type { GithubStats } from "@/types";

type GithubUserApi = {
  public_repos?: number;
  followers?: number;
  following?: number;
  html_url?: string;
};

type GithubRepoApi = {
  stargazers_count?: number;
  forks_count?: number;
  language?: string | null;
};

type GithubEventApi = {
  type?: string;
  created_at?: string;
  payload?: {
    size?: number;
  };
};

async function requestGithub<T>(path: string, token?: string): Promise<T> {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
  });

  if (!response.ok) {
    throw new Error("GitHub API request failed");
  }

  return response.json() as Promise<T>;
}

export async function fetchGithubStats(username: string, token?: string): Promise<GithubStats | null> {
  try {
    const [user, repos, events] = await Promise.all([
      requestGithub<GithubUserApi>(`/users/${username}`, token),
      requestGithub<GithubRepoApi[]>(`/users/${username}/repos?per_page=100&sort=updated`, token),
      requestGithub<GithubEventApi[]>(`/users/${username}/events/public?per_page=100`, token)
    ]);

    const stars = repos.reduce((total, repo) => total + (repo.stargazers_count ?? 0), 0);
    const forks = repos.reduce((total, repo) => total + (repo.forks_count ?? 0), 0);

    const languageMap = new Map<string, number>();
    for (const repo of repos) {
      if (!repo.language) {
        continue;
      }

      languageMap.set(repo.language, (languageMap.get(repo.language) ?? 0) + 1);
    }

    const languages = [...languageMap.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([language]) => language);

    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const commits = events.reduce((total, event) => {
      if (event.type !== "PushEvent" || !event.created_at) {
        return total;
      }

      const eventDate = new Date(event.created_at).getTime();
      if (Number.isNaN(eventDate) || eventDate < weekAgo) {
        return total;
      }

      return total + (event.payload?.size ?? 0);
    }, 0);

    return {
      repos: user.public_repos ?? 0,
      stars,
      commits,
      languages,
      followers: user.followers ?? 0,
      following: user.following ?? 0,
      forks,
      profileUrl: user.html_url ?? `https://github.com/${username}`,
      lastSyncedAt: new Date().toISOString()
    };
  } catch {
    return null;
  }
}
