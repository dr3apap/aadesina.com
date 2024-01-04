import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'commentReply',
  title: 'CommentReply',
  type: 'document',
  fields: [
    defineField({
      name: 'replier',
      title: 'Replier',
      type: 'commenter',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'mainComment',
      title: 'MainComment',
      type: 'reference',
      description:'Coment to reply to',
      to: [{type: 'comment'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'object',
      description: 'Comment reply content',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'markdown',
          description: 'Body of comment reply',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})
