import { defineField, defineType } from 'sanity'
import {UsersIcon} from '@sanity/icons'

export const artistType = defineType({
  name: "artist",
  title: "Artist",
  icon: UsersIcon,
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



