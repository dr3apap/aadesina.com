import { getRssData } from '../../constants/queries.ts'
import { genRssMarkup } from './_html-generator.js'

const rssData = await getRssData();
const siteConfig = rssData.config || {}
const allTags = rssData.tags || []
const posts = rssData.posts || []
const allCategory = rssData.category || []
const categoryName = posts.find(post => post.category !== null).category.name
const metadata = {
  url: siteConfig?.rss?.url || 'https://aadesina.com/',
  title: siteConfig?.rss?.title || 'Adebola Adesina',
  subtitle:siteConfig?.rss?.subtitle || 'Posts from Adebola',
  description:siteConfig?.rss?.description || 'The RSS feed for posts from Adebola Adesina',
  author: siteConfig?.character || '',
  email: 'rss@aadesina.com',
  catergory:categoryName,
}


const allPosts = posts.length > 0? posts.map((post) => ({
  ...post,
  url: `${metadata.url}posts/${post.slug.current}`,
})):[]
const sortedPosts = allPosts.length > 0?[...allPosts].sort((a, b) => {
  const dateA = new Date(a.publishedAt)
  const dateB = new Date(b.publishedAt)
  return dateB - dateA
}):[]

export const get = () =>
  new Promise((resolve, reject) => {
    resolve({
      body: genRssMarkup(sortedPosts, metadata),
    })
  })
