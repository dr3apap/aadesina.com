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
      name: 'demoHero',
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
      name: 'postCategory',
      title: 'Post Category',
      type: 'array',
      of:[{type:'string'}],
      options:{
        list:[{title:'Web', value:'Web'},
        {title:'Front End', value:'FrontEnd'},
        {title:'Back End', value:'Back End'},
        {title:'System Design', value:'SystemDesign'},
        {title:'Iot', value:'Iot'},
        {title:'Programming Fundamental', value:'ProgrammingFundamental'},
        {title:'Operating System', value:'OperatingSytem'},
        {title:'Networking', value:'Networking'},
        {title:'Graphic/Animation', value:'GraphicAndAnimation'}]
      },
      validation:Rule => Rule.required(),
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
      options:{
        layout:"tags"
      },
      validation:Rule => Rule.unique(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
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
