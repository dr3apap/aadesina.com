import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogContent',
  title: 'BlogContent',
  description: 'Curated blog Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'markdown',
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'markdown',
    }),

    ...[
      'frontEnd',
      'iot',
      'operatingSystem',
      'backEnd',
      'networking',
      'tool',
      'gameDesign',
      'systemDesign',
    ].map((postCategory) => {
      return defineField({
        name: postCategory,
        title: `${postCategory.charAt(0).toUpperCase()}${postCategory.slice(1)}`,
        description: `List of post in ${postCategory} category`,
        type: 'object',
        fields: [
          defineField({
            name: 'title',
            title: 'Title',
            description: 'Category title',
            type: 'string',
            intialValue: postCategory,
          }),
          defineField({
            name: 'selection',
            title: 'Selection',
            type: 'array',
            of: [{type: 'reference', to: {type: 'post'}}],
          }),
        ],
      })
    }),
  ],

  preview: {
    select: {
      title: 'description',
    },
  },
})
