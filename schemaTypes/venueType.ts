import { defineField, defineType } from 'sanity'

export const venueType= defineType({
  name: "venue",
  title: "Venue",
  type: "document",
  fields: [
    defineField({
      type: "string",
      name: "name",
    })],
});



