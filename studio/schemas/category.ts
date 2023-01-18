import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
   
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ],
})
