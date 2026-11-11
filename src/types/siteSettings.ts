export type SiteSettings = {
  _id: string;
  name: string;
  role: string;
  shortDescription: string;
  aboutDescription?: string;
  profileImageUrl?: string;
  email?: string;
  githubUrl?: string;
  whatsappUrl?: string;
  cvUrl?: string;
};
