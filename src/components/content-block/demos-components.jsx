import React from 'react'

const demosComponents = {

    p({ node, ...props }) {
        const interactive = node.children.find(
            (child) =>
                child.tagName == 'tweet' || child.tagName == 'codepen')
        if (interactive) return <>{props.children}</>
        return <p className={props.type == 'demoCard' ? 'text-fluid--1' : ''}{...props}></p>
    },
    h2({ node, children, ...props }) {
        return <h2 className="mb-4 p-0 text-fluid-2">{children}</h2>
    },
    h3({ node, children, ...props }) {
        return <h3 className="mb-4 p-0 text-fluid-2 la:text-fluid-1 mb-2 text-text-2-accent tracking-wide">{children}</h3>
    },

}


export default demosComponents
