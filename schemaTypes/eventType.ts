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
      options: { source: "name" },
      validation: (Rule) => Rule.required().error("A slug is required for this event"), // Make the slug field required
      hidden: ({ document }) => !document?.name, // Hide the slug field if the name is not set
    }),
    defineField({
      type: "string",
      name: "eventType",
      options: {
        list: ['in person', 'livestream'], // Define the options for the eventType field
        layout: 'radio'
      }
    }),
    defineField({
      type: "datetime",
      name: "date",
    }),
    defineField({
      type: "number",
      name: "doorsOpen",
      description: "Time in minutes before the event that doors open", // Add a description for the doorsOpen field
      initialValue: 60,
    }),
    defineField({
      type: "reference",
      name: "venue",
      to: [{ type: "venue" }],
      readOnly: ({ value, document }) => !value && document?.eventType === 'livestream', // Make the venue field read-only if the eventType is livestream
      validation: (Rule) => // Add a custom validation rule to ensure that only in-person events can have a venue
        Rule.custom((value, context) => {
          if (value && context?.document?.eventType === 'livestream') {
            return "Only in person events can have a venue";
          }
          return true;
        })  
    }),
    defineField({
      type: "reference",
      name: "headline",
      to: [{ type: "artist" }] // Reference to the artistType schema
    }),
    defineField({
      type: "image",
      name: "image",
    }),
    defineField({
      type: "array",
      name: "details",
      of: [{ type: "block" }] // Allow rich text content in the details field
    }),
    defineField({
      type: "url",
      name: "tickets",
    })
  ],
});



