import { defineField, defineType } from 'sanity'

export const venue = defineType({
  type: "document",
  name: "venue",
  title: "Venue",
  fields: [
    defineField({
      type: "string",
      name: "name",
    }),
    defineField({
      type: "string",
      name: "city",
    }),
    defineField({
      type: "string",
      name: "country",
    }),
  ],
});






