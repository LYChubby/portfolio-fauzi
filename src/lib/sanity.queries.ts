import { groq } from "next-sanity";

export const experienceQuery = groq`
  *[_type == "experience"] | order(order asc, startDate desc) {
    _id,
    position,
    company,
    category,
    description,
    responsibilities,
    technologies,
    startDate,
    endDate,
    isCurrent,
    order
  }
`;

export const projectQuery = groq`
  *[_type == "project"] | order(featured desc, order asc) {
    _id,
    title,
    slug,
    category,
    description,
    "thumbnailUrl": thumbnail.asset->url,
    technologies,
    githubUrl,
    demoUrl,
    featured,
    order
  }
`;

export const techStackQuery = groq`
  *[_type == "techStack"] | order(order asc) {
    _id,
    category,
    description,
    technologies,
    order
  }
`;
