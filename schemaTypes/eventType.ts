import { defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  groups: [  //  Define groups for the event schema
    { name: "details", title: "Details" },
    { name: "editorial", title: "Editorial" },
  ],
  fields: [
    defineField({
      type: "string",
      name: "name",
      group: "details",
    }),
    defineField({
      type: "slug",
      name: "slug",
      group: "details",
      options: { source: "name" },
      validation: (Rule) => Rule.required().error("A slug is required for this event"), // Make the slug field required
      hidden: ({ document }) => !document?.name, // Hide the slug field if the name is not set
    }),
    defineField({
      type: "string",
      name: "eventType",
      group: "details",
      options: {
        list: ['in person', 'livestream'], // Define the options for the eventType field
        layout: 'radio'
      }
    }),
    defineField({
      type: "datetime",
      name: "date",
      group: "details",
    }),
    defineField({
      type: "number",
      name: "doorsOpen",
      group: "details",
      description: "Time in minutes before the event that doors open", // Add a description for the doorsOpen field
      initialValue: 60,
    }),
    defineField({
      type: "reference",
      name: "venue",
      group: "details",
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
      group: "details",
      to: [{ type: "artist" }] // Reference to the artistType schema
    }),
    defineField({
      type: "image",
      name: "image",
      group: "editorial",
    }),
    defineField({
      type: "array",
      name: "details",
      group: "editorial",
      of: [{ type: "block" }] // Allow rich text content in the details field
    }),
    defineField({
      type: "url",
      name: "tickets",
      group: ['details', 'editorial'], // Allow the tickets field to be displayed in both the details and editorial groups
    })
  ],
});



