import { defineField, defineType } from "sanity";

export default defineType({
  name: "techStack",
  title: "Tech Stack",
  type: "document",

  fields: [
    defineField({
      name: "category",
      title: "Category Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
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
      title: "category",
      subtitle: "order",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `Display Order: ${subtitle ?? 0}`,
      };
    },
  },
});
