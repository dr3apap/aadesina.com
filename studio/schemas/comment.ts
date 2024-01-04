import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'post',
      title: 'Post',
      description: 'The post to comment to',
      type: 'reference',
      to: {type: 'post'},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'replies',
      title: 'Replies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'commentReply'}}],
    }),

    defineField({
      name: 'publishedAt',
      title: 'published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'commenter',
      title: 'Commenter',
      type: 'reference',
      to: {type: 'commenter'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      description: 'The body of the comment',
      type: 'markdown',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      commenter: 'commenter.name',
      media: 'mainImage',
      reply: 'reply',
    },
    prepare(selection) {
      const {commenter, reply} = selection
      return {...selection, ...reply, subtitle: commenter && `by ${commenter}`}
    },
  },
})
