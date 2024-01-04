import {defineType, defineField} from 'sanity'
import post from './post'
import author from './author'
import tag from './tag'
import feature from './feature'
import demo from './demo'
import comment from './comment'
import commenter from './commenter'
import siteConfig from './siteConfig'
import category from './category'
import content from './content'
import commentReply from './commentReply'

const categoryTypes = [
  'frontEnd',
  'iot',
  'operatingSystem',
  'backEnd',
  'networking',
  'tool',
  'gameDesign',
  'systemDesign',
]
const postCategoryTypes = categoryTypes.map((postCategory) => {
  return defineType({
    name: postCategory,
    title: `${postCategory.charAt(0).toUpperCase()}${postCategory.slice(1)}`,
    type: 'document',
    fields: [
      defineField({
        name: 'post',
        title: 'Post',
        description: 'Related Post',
        type: 'array',
        of: [{type: 'reference', to: {type: 'post'}}],
      }),
    ],

    //preview: {
    //select: {
    //post: 'post',
    //},
    // prepare({post, category}) {
    //   return {
    //     postCategory: category,
    //     ListPost: `List of post in ${category} category: ${post.map((post) => post.category)}`,
    //   }
    // },
    //},
  })
})
export const schemaTypes = [
  post,
  siteConfig,
  // ...postCategoryTypes,
  demo,
  feature,
  tag,
  author,
  commenter,
  comment,
  category,
  content,
  commentReply,
]
