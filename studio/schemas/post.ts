import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation:Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrtiption',
      description:"Used for page description/OG images",
      type: 'string',
      validation:Rule => Rule.required(),
    }),
    defineField({
      name: 'og',
      title: 'Open Graph',
      type: 'object',
      fields: [
        defineField({
          name:'title',
          title:'Title',
          type:'string',
          }),
        defineField({
          name:'hue',
          title:'Hue',
          type:'string',
          }),
        defineField({
          name:'gradient',
          title:'Gradient',
          type:'string',
        })
      ]
    }),
    
    defineField({
      name: 'demo hero',
      title: 'Demo Hero',
      description:'Usea a 3:1 raio for banner images that point to a URL for a demo',
      type: 'object',
      fields: [
        defineField({
          name:'demo',
          title:'Embeded Demo as hero',
          description:"point to a demo to embed",
          type:'string',
          }),
        defineField({
          name:'image',
          title:'Image',
          description:'Backup Image of demo',
          type:'string',
          }),
        defineField({
          name:'imageAlt',
          title:'Image alt',
          type:'string',
        }),

        defineField({
          name:'attribution',
          title:'Image Attribution',
          type:'string',
        }),
      ]
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      validation:Rule => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      description:'The body of the post/article',
      type: 'markdown',
      validation:Rule => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
