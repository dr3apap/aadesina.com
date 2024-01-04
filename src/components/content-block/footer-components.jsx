import React from 'react'

const footerComponents = {
    p({ node, ...props }) {
        const interactive = node.children.find((child) =>
            child.tagName == 'tweet' || child.tagName == 'codepen')
        if (interactive) return <>{node.children}</>
        return <p {...props} className={`mb-4`}></p>
    }
}

export default footerComponents
