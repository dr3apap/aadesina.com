import { getRssData } from '../../constants/queries';
import { genRssMarkup } from './_html-generator';

const rssData = await getRssData();
const siteConfig = rssData?.Config ||{};
const allTags = rssData?.tags || [];
const posts = rssData?.posts  || [];

export function getStaticPaths() {
  const tagPaths = allTags.length  > 0? allTags.map((tag) => {
    return { params: { tag: tag.title.toLowerCase() } }
  }):[]
  return tagPaths
};

export const get = ({ params, request }) => {
  const metadata = {
    url: siteConfig?.rss?.url || 'https://aadesina.com/',
    title: siteConfig?.rss?.title || 'https://aadesina.com/',
    subtitle: siteConfig?.rss?.subtitle || 'Posts from Adebola',
    description: `The RSS feed for ${params.tag} posts from Adebola Adesina`,
    author: siteConfig.character,
    email: 'rss@aadesina.com',
    tag: params.tag,
  }
  const posts = posts.length > 0?posts.filter(post => {
    return params.tag && post.tags && post.tags.length > 0 && post.tags.find(tag => {
      return tag !== null && tag.title.toLowerCase() === params.tag.toLowerCase()
    })
  }).map((post) => ({
    ...post,
    url: `${metadata.url}posts/${post.slug.current}`,
  })).sort((a, b) => {
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



