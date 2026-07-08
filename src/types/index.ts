export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  details: string;
  achievements: string[];
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
};

export type GithubStats = {
  repos: number;
  stars: number;
  commits: number;
  languages: string[];
};
