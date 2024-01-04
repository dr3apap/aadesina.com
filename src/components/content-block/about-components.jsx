import React from 'react'

const aboutComponents = {
    h2({ node, children, ...props }) {
        return <h2 className="mb-4 text-fluid-2">{children}</h2>
    },
    p({ node, ...props }) {
        const interactive = node.children.find(
            (child) => child.tagName == 'tweet' || child.tagName == 'codepen')
        if (interactive) return <>{props.children}</>
        if (!props.children || props.children[0].toString().trim() === '') {
            return null
        }

        return (
            <p
                {...props}
                className={` ${node?.position?.start?.line === 5
                    ? 'first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-brand first-letter:mr-3 first-letter:float-left'
                    : ''
                    }`}
            ></p>)

    },



    img({ node, ...props }) {
        return (
            <figure className="lg:rounded-lg col-span-full max-w-[100vw]">
                <img src={props.src} className="float-left rounded-full w-48 aspect-square circle-shape mr-4" />
                {props.caption && props.caption !== '' && (
                    <figcaption className="text-text-3 text-fluid--2 text-center">
                        {props.caption}
                    </figcaption>
                )}
            </figure>
        )
    },

}
export default aboutComponents
