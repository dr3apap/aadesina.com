import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'demo',
  title: 'Demo',
  type: 'document',
  fields: [
    defineField({
      name: 'demoTitle',
      title: 'DemoTitle',
      type: 'string',
    }),

    defineField({
      name: 'demoCard',
      title: 'DemoCard',
      description: 'Demos"s Card content',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'string',
        }),
        defineField({
          name: 'imageAlt',
          title: 'ImageAlt',
          type: 'string',
        }),
        defineField({
          name: 'skills',
          title: 'Skills',
          description: 'Skill used for demo',
          type: 'array',
          of: [{type: 'string'}],
        }),

        defineField({
          name: 'link',
          title: 'Link',
          description: 'Link to demo',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          description: 'Demo"s description',
          type: 'markdown',
        }),
      ],
    }),
    defineField({
      name: 'feature',
      title: 'Featrue',
      type: 'boolean',
    }),
  ],
  initialValue: {
    feature: false,
  },

  preview: {
    select: {
      title: 'demoTitle',
      link: 'link',
    },

    prepare({link, title}) {
      return {title, subtitle: link && `link to ${title}`}
    },
  },
})
