import { defineField, defineType } from "sanity";

export default defineType({
  name: "certification",
  title: "Certifications",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Certification Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "issuer",
      title: "Issuing Organization",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "issueDate",
      title: "Issue Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "credentialNumber",
      title: "Credential Number",
      type: "string",
    }),

    defineField({
      name: "credentialUrl",
      title: "Credential URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "issuer",
    },
  },
});
