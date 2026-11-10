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
