import {defineType, defineField} from 'sanity';

export default defineType({
    name:'comment',
    title:'comment',
    type:'document',
    fields:[
        defineField({
            name:'title',
            title:'Title',
            type:'string',
        }),

        defineField({
            name:'post',
            title:'Post',
            description:'The post to comment to',
            type:'reference',
            to:{type:'post'},
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
    },
    prepare(selection) {
      const {commenter} = selection
      return {...selection, subtitle: commenter && `by ${commenter}`}
    },
  },

})