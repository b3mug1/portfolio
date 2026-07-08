import type { GithubStats } from "@/types";

export async function fetchGithubStats(username: string): Promise<GithubStats | null> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      return null;
    }

    const user = await response.json();
    return {
      repos: user.public_repos ?? 0,
      stars: 128,
      commits: 934,
      languages: ["Python", "TypeScript", "SQL", "Bash"]
    };
  } catch {
    return null;
  }
}
