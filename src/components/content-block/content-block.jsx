import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import defaultComponents from './default-components'
import demos from '../demo/demos';
import featureDemo from '../feature-demo/feature-demo';
import about from '../about/about';
import footer from '../footer/footer';
import links from './links-components';
import article from './article-components';
import remarkToc from './remarkToc';
import rss from './rss-components'
import comment from '../post-comment/post-comment'

const remarkPlugins = [[remarkGfm, { singleTilde: false }]]
const rehypePlugins = [rehypeRaw]
const elementToDisallowed = ['script'];


const PostContentBlock = ({ type, children }) => {
    let components = { ...defaultComponents }
    switch (type) {
        case "about":
            components = {
                ...defaultComponents, ...about
            }
            break;
        case "demo":
            components = {
                ...defaultComponents, ...demos
            }
            break;

        case "feature-demo":
            components = {
                ...defaultComponents, ...featureDemo
            }
            break;
        case "footer":
            components = {
                ...defaultComponents, ...footer
            }
            break;
        case "article":
            components = {
                ...defaultComponents, ...article
            }
            break;
        case "links":
            components = {
                ...defaultComponents, ...links
            }
            break;

        case "rss":
            components = {
                ...defaultComponents, ...rss
            }
            break;
        case "comment":
            components = {
                ...defaultComponents, ...comment
            }
            break;
    }
    return (<Markdown
        remarkPlugins={
            type === 'article' ? [...remarkPlugins, remarkToc] : [...remarkPlugins]
        }
        rehypePlugins={rehypePlugins}
        components={components}
        disallowedElements={type == 'comment' ? elementToDisallowed : []}
    >
        {children}
    </Markdown>)
}
export default PostContentBlock
