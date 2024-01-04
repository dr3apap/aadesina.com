import React from 'react'

const blogComponents = {

    h1({ node, children, ...props }) {
        return <h1 className="text-fluid-2 la:text-fluid-3 uppercase tracking-wide text-text-2-accent mb-3" {...props}>
            {children}
        </h1>
    },

    h2({ node, children, ...props }) {
        return <h2 className="text-fluid-2 la:text-fluid-3 text-text-2-accent mb-2 uppercase tracking-wide" {...props}>{children}
        </h2>
    },

}
export default blogComponents
