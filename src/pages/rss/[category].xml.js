import { getRssData } from '../../constants/queries';
import { genRssMarkup } from './_html-generator';
import { getPostByCategory } from '../../constants/queries';
import { getAllCategory } from '../../constants/queries';

const rssData = await getRssData();
const siteConfig = rssData.config || {};
const postByCategory = await getPostByCategory();
const categories = await getAllCategory();
const postByCat = categories.map(category => postByCategory[0][category.name]).filter(el => el != null)
export function getStaticPaths() {
const categoryPaths = postByCat.length > 0 ? postByCat.map(post => {
          return { 
              params: { category: post.title.toLowerCase()}, 
          }
           }):[]
  return categoryPaths
};

export const get = ({ params, request }) => {
  const metadata = {
    url: siteConfig?.rss?.url || 'https://aadesina.com/',
    title: siteConfig?.rss?.title || `${params.category} post from Adebola Adesina`,
    subtitle: siteConfig?.rss?.subtitle || 'Posts from Adebola',
    description: `The RSS feed for ${params.category} posts from Adebola Adesina`,
    author: siteConfig?.character || {},
    email: 'rss@aadesina.com',
    category: params.category,
  }
   const posts = postByCat.length > 0? postByCat.map((category) => {
        return category.title.toLowerCase() == params.category && 
        category.selection.map(post => ({
        ...post,
        url: `${metadata.url}dr3papa/${post.slug.current}`,
        }))

   })[0].sort((a, b) => {
    const dateA = new Date(a.publishedAt)
    const dateB = new Date(b.publishedAt)
    return dateB - dateA
  }):[];
  return new Promise((resolve, reject) => {
    resolve({
      body: genRssMarkup(
        posts,
        metadata
      ),
    })
  })
}



