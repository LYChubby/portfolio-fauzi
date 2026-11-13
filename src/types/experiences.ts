export type ExperienceItem = {
  _id: string;
  position: string;
  company: string;
  category: "work" | "organization";
  description: string;
  responsibilities?: string[];
  technologies?: string[];
  startDate?: string;
  endDate?: string;
  isCurrent?: boolean;
  order?: number;
};
