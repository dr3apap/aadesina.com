import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import defaultComponents from './default-components'

const remarkPlugins = [[remarkGfm, { singleTilde:false }]]
const rehypePlugins = [rehypeRaw]

const PostContentBlock = ({children}) => {
    let components = {...defaultComponents}
    // switch(type){
    //     case "about":
    //         return 
    // }
    return (<Markdown
            remarkPlugins={remarkPlugins}
            rehypePlugins={rehypePlugins}
            components={components}
            >
            {children}
            </Markdown>)
}
export default PostContentBlock