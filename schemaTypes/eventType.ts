import { defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      type: "string",
      name: "name",
    }),
  defineField({
      type: "slug",
      name: "slug",
    }),
  defineField({
      type: "string",
      name: "eventType",
    }),
  defineField({
      type: "datetime",
      name: "date",
    }),
  defineField({
      type: "number",
      name: "doorsOpen",
    }),
  defineField({
      type: "reference",
      name: "venue",
      to: [{ type: "venue" }]
    }),
    defineField({
      type: "reference",
      name: "headline",
      to: [{ type: "artist" }]
    }),
    defineField({
      type: "image",
      name: "image",
    }),
    defineField({
      type: "array",
      name: "details",
      of: [{ type: "block" }]
    }),
    defineField({
      type: "url",
      name: "tickets",
    })
  ],
});



