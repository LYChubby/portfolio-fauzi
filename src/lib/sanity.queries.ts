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

export const certificationQuery = groq`
  *[_type == "certification"] | order(order asc, issueDate desc) {
    _id,
    name,
    issuer,
    issueDate,
    credentialNumber,
    credentialUrl,
    order
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    name,
    role,
    shortDescription,
    aboutDescription,
    "profileImageUrl": profileImage.asset->url,
    email,
    githubUrl,
    whatsappUrl,
    "cvUrl": cvFile.asset->url
  }
`;
