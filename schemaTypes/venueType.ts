import { defineField, defineType } from 'sanity'
import { PinIcon } from '@sanity/icons'

export const venueType = defineType({
  type: "document",
  name: "venue",
  title: "Venue",
  icon: PinIcon,
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






