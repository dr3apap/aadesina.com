import {defineType, defineField} from 'sanity';

export default defineType({
    name:'comment',
    title:'Comment',
    type:'document',
    fields:[
        defineField({
            name:'title',
            title:'Title',
            type:'string',
        }),
        defineField({
            name:'type',
            title:'Type',
            type:'string',
            validation:Rule => Rule.required(),
        }),
        defineField({
            name:'reply',
            title:'Reply',
            description:'The reply to the main comment',
            type:'array',
            of:[
            {type:'reference', weak:true, to:{type:'comment'}}]
    }),
            
        defineField({
            name:'post',
            title:'Post',
            description:'The post to comment to',
            type:'reference',
            to:{type:'post'},
        }),

        defineField({
          name:'publishedAt',
          title:'published At',
          type:'datetime',
          validation:Rule => Rule.required(),
        }),

        defineField({
            name:'commenter',
            title:'Commenter',
            type:'reference',
            to:{type:'commenter'},
            
        }),
        defineField({
            name:'body',
            title:'Body',
            description:'The body of the comment',
            type:'markdown',
            validation:Rule => Rule.required(),
            
        }),
    ],
 preview: {
    select: {
      title: 'title',
      commenter: 'commenter.name',
      media: 'mainImage',
      reply:'reply',
      
    },
    prepare(selection) {
      const {commenter, reply} = selection
      return {...selection, ...reply, subtitle: commenter && `by ${commenter}`}
    },
  },

})