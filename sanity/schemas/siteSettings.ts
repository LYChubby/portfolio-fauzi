import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "role",
      title: "Professional Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "shortDescription",
      title: "Hero Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "aboutDescription",
      title: "About Description",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "profileImage",
      title: "Profile Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
      validation: (Rule) =>
        Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
          name: "email",
          invert: false,
        }),
    }),

    defineField({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
    }),

    defineField({
      name: "whatsappUrl",
      title: "WhatsApp URL",
      type: "url",
    }),

    defineField({
      name: "cvFile",
      title: "Curriculum Vitae (PDF)",
      type: "file",
      options: {
        accept: ".pdf",
      },
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "profileImage",
    },
  },
});
