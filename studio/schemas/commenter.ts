import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'commenter',
  title: 'Commenter',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'comment'}, {type: 'commentReply'}]}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'HeadShot',
      type: 'string',
    }),
  ],
})
