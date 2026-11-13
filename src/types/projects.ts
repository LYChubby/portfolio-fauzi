export type Project = {
  _id: string;
  title: string;
  category: string;
  description: string;
  thumbnailUrl?: string;
  technologies?: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
};
