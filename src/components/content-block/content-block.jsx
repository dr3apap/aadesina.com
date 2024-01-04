import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import defaultComponents from './default-components'
import demos from './demos-components';
import featureDemo from './feature-components';
import blog from './blog-components'
import about from './about-components';
import footer from './footer-components';
import hero from './hero-components';
import links from './links-components';
import article from './article-components';
import remarkToc from './remarkToc';
import rss from './rss-components';
import comment from './comment-components';

const remarkPlugins = [[remarkGfm, { singleTilde: false }]]
const rehypePlugins = [rehypeRaw]
const elementToDisallowed = ['script'];


const ContentBlock = ({ type, children }) => {
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
        case "hero":
            components = {
                ...defaultComponents, ...hero
            }
            break; k
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
        case "blog":
            components = {
                ...defaultComponents, ...blog
            }
            break;
        default:
            components = {
                ...defaultComponents
            }
    }
    return (<Markdown
        remarkPlugins={
            type === 'article' ? [...remarkPlugins, remarkToc] : [...remarkPlugins]
        }
        rehypePlugins={rehypePlugins}
        components={components}
        disallowedElements={type == 'comment' ? elementToDisallowed : []}
        children={typeof children == 'string' ? children : children.props.value.toString()}
    />)
}
export default ContentBlock
