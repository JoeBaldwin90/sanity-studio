import { defineField, defineType } from 'sanity'

export const artistType = defineType({
  name: "artistDetails",
  title: "Artist Details",
  type: "document",
  fields: [
    defineField({
      type: "string",
      name: "name",
    })],
});



