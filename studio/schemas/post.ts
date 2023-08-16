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
      description:"Used for page description/OG meta",
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
      name: 'hero',
      title: 'Hero',
      description:'Use a 3:1 raio for banner images that point to a URL for a demo',
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
          name:'alt',
          title:'Image alt',
          type:'string',
        }),

        defineField({
          name:'attribution',
          title:'Image Attribution',
          type:'markdown',
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
      name: 'category',
      title: 'Post Category',
      type: 'reference',
      to:{type:'category'},
      validation:Rule => Rule.required(),
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
      validation:Rule => Rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated at',
      type: 'datetime',
      validation:Rule => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      description:'Body of the post',
      type: 'markdown',
      validation:Rule => Rule.required(),
    }),
    defineField({
      name:'comments',
      title:'Comments',
      type:'array',
      of:[
        {type:'reference', weak:true, to:{type:'comment'}}]
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection;
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
