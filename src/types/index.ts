export type Locale = "en" | "ru";

export type LocalizedText = Record<Locale, string>;

export type SkillCategory = {
  title: LocalizedText;
  skills: string[];
};

export type Project = {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  image: string;
  tech: string[];
  features: LocalizedText[];
  githubUrl: string;
  liveUrl: string;
};

export type ExperienceItem = {
  period: string;
  role: LocalizedText;
  company: string;
  details: LocalizedText;
  achievements: LocalizedText[];
};

export type BlogPost = {
  id: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  date: string;
  readTime: LocalizedText;
  tags: string[];
};

export type EducationItem = {
  school: string;
  degree: LocalizedText;
  period: string;
};

export type TimelineEntry = {
  year: string;
  title: LocalizedText;
  text: LocalizedText;
};

export type GithubStats = {
  repos: number;
  stars: number;
  commits: number;
  languages: string[];
  followers: number;
  following: number;
  forks: number;
  profileUrl: string;
  lastSyncedAt: string;
};
