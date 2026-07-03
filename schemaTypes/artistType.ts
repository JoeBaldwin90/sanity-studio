import { defineField, defineType } from 'sanity'

export const artistType = defineType({
  name: "artist",
  title: "Artist",
  type: "document",
  fields: [
    defineField({
      type: "string",
      name: "name",
    }),
    defineField({
      type: "text",
      name: "description",
    }),
    defineField({
      type: "image",
      name: "photo",
    }),
  ],
    
});



