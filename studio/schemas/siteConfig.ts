import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteConfig',
  title: 'Site Config',
  description: 'General site configuration',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'markdown',
      description: 'Landing page Hero',
    }),

    defineField({
      name: 'character',
      title: 'Main Character',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'demo',
      title: 'Demo',
      description: 'Demo section related config',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionIntro',
          title: 'SectionIntro',
          type: 'markdown',
        }),
        defineField({
          name: 'demos',
          title: 'Demos',
          type: 'array',
          of: [{type: 'reference', to: {type: 'demo'}}],
        }),

        defineField({
          name: 'bannerDemo',
          title: 'Banner embeded demo',
          description: 'Use a 3:1 ratio for banner demos and pls reduce motion',
          type: 'object',
          fields: [
            defineField({
              name: 'bannerDemo',
              title: 'Banner embeded demo',
              description: 'Point to a demo to embed',
              type: 'string',
            }),
            defineField({
              name: 'banneAlt',
              title: 'Image Alt',
              type: 'string',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'rss',
      title: 'RSS',
      description: 'RSS related config',
      type: 'object',
      fields: [
        defineField({
          name: 'url',
          title: 'Base URL',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'about',
      title: 'About',
      description: 'Content for About Page',
      type: 'markdown',
    }),
    defineField({
      name: 'blog',
      title: 'Blog',
      description: 'Content for Blog page',
      type: 'object',

      fields: [
        defineField({
          name: 'blogHeading',
          title: 'Introduction heading for blog page',
          type: 'markdown',
        }),
        defineField({
          name: 'introduction',
          title: 'Introduction for the blog post',
          type: 'markdown',
        }),

        //defineField({
        //    name:'catIcons',
        //    title:'CatIcons',
        //    type:'array',
        //    of:[{type:'string'}]
        //}),
      ],
    }),
    defineField({
      name: 'post',
      title: 'post',
      description: 'Post related content',
      type: 'object',
      fields: [
        defineField({
          name: 'footer',
          title: 'Post footer',
          description: 'Sign off for post',
          type: 'markdown',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      footer: 'post.footer',
      introduction: 'introduction',
      blogHeading: 'blogHeading',
    },
    prepare({footer, introduction, blogHeading}) {
      return {
        title: 'site Configuration',
        introduction,
        footer: footer ? `Post footer and blogHeading ${footer}:${blogHeading}` : '',
        media: undefined,
      }
    },
  },
})
