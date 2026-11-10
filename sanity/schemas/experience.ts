import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",

  fields: [
    defineField({
      name: "position",
      title: "Position / Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "company",
      title: "Company / Organization",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Work Experience", value: "work" },
          { title: "Organization", value: "organization" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
    }),

    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      validation: (Rule) =>
        Rule.custom((endDate, context) => {
          const startDate = (context.document as { startDate?: string })?.startDate;

          if (endDate && startDate && endDate < startDate) {
            return "End Date tidak boleh lebih awal dari Start Date.";
          }

          return true;
        }),
    }),

    defineField({
      name: "isCurrent",
      title: "Currently Active",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],

  preview: {
    select: {
      title: "position",
      subtitle: "company",
    },
  },
});
