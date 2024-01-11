import React from 'react'

const featureComponents = {
    p({ node, ...props }) {
        const interactive = node.children.find(
            node.tagName == 'tweet' || node.tagName == 'codepen')
        if (interactive) return <>{propps.children}</>
        return <p {...props} className={`text-text-1 mt-2`}></p>
    },

    h3({ node, children, ...props }) {
        return <h3 className="text-fluid-1 text-text-2-accent font-bold mt-4 tracking-wide">{children}
        </h3>
    },
    img({ node, ...props }) {
        if (!props.src || props.alt) return
        return (
            <div className="flex gap-1 flex-wrap">
                <span className="w-8 h-8 grid place-items-center rounded-full bg-surface-3 hover:bg-surface-2">
                    <img
                        src={props.src}
                        alt={props.alt} key={props.src}
                    />
                </span>
            </div>
        )
    },


    div({ node, ...props }) {
        const { skills } = props
        return <div className="p-1">
            <h3 className="text-fluid-1 p-0 my-2 text-text-2-accent tracking-wide">Skills</h3>
            <div className="flex gap-1 flex-wrap">
                {skills.map((skillIcon, index) => (
                    <span className="w-8 h-8 grid place-items-center rounded-full bg-surface-3 hover:bg-surface-2">
                        <img
                            key={index}
                            src={`/asset/skills/${skillIcon}`}
                            alt={`image of ${skillIcon.replace(
                                /\.svg/,
                                ''
                            )}`}
                        />
                    </span>
                ))}{' '}
            </div>
        </div>
    }

}
export default featureComponents
