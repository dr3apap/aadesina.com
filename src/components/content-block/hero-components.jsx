import React from 'react'

const heroComponents = {
    h2({ node, ...props }) {
        return <h2 className="title text-fluid-1 p-0 mb-4 mt-12" {...props}>
        </h2 >
    },

    ul({ node, ...props }) {
        const childs = node.children.filter((child) => child.tagName == 'li')
        return <ul className="la:flex gap-x-2">
            {childs.map((child, index) => <li
                style={{ "--i": index }}
                className="offer mb-2 underline decoration-brand underline-offset-4 decoration-2 la:mb-0"
            >
                <span className="text-text-1">{child.children[0].value}</span>
            </li>)}
            <li style={{ "--i": 3 }} className="offer mb-2 la:mb-0"><span className="flex gap-x-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                </svg>
                <span>
                    <a className="font-bold text-brand decoration-4 decoration-brand" href="/links">
                        /links
                    </a>
                </span>
            </span>
            </li>

        </ul>

    },
}

export default heroComponents

