import React from 'react';
import slugify from "slugify";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import nightOwl from 'react-syntax-highlighter/dist/cjs/styles/prism/night-owl';
import type { ReactMarkdownNames } from 'react-markdown/lib/ast-to-react';
import type { ReactMarkdownProps} from '../../../global-type'

const headingBold = ({node, ...props}:ReactMarkdownProps) => {
    return React.createElement(node.tagName, {className:'font-bold mb-6', ...props, 
})  
}

const defaultComponents = {
    h1:headingBold,
    h2:headingBold,
    h3:headingBold,
    p({node, ...props}:ReactMarkdownProps){
        const embed = Array.from(node.children).find((child) => child.tagName === "tweet" || child.tagName === "codepen" || child.tagName === "guestBookForm") 
        if(embed) return <>{props.children}</>
        return <p {...props} className={`mb-6`}></p>
    }



}