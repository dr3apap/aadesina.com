import React from 'react'
import BlockContent from '../../components/content-block/content-block'
function featureDemo({ demoCard: { image: imageSrc, imageAlt, skills, description }, demoTitle }) {
    return (
        <div
            id="featured"
            className="overflow-hidden relative flex flex-col shadow-lg sm:flex-row"
        >
            {/* Feature wrapper */}
            <div className="bg-surface-1 px-4 sm:w-[60%] rounded-sm">
                <h3 className="text-fluid-1 text-accent-text-2 font-bold mt-4 tracking-wide">
                    {demoTitle}
                </h3>
                <BlockContent type='feature' children={description} />
                {/* Skills */}
                <div className="flex justify-between mt-4 sm:mt-8 pb-3">
                    <div className="">
                        <h3 className="text-fluid-1 text-accent-text-2 font-bold p-0 mb-2 tracking-wide">
                            Skills
                        </h3>
                        <div className="flex gap-1 flex-wrap">
                            {skills.map((skillIcon) => (
                                <span className="w-8 h-8 grid place-items-center rounded-full bg-surface-3 hover:bg-surface-2">
                                    <img
                                        src={`/asset/skills/${skillIcon}.svg`}
                                        alt={`image of ${skillIcon}`}
                                        key={skillIcon}
                                    />
                                </span>
                            ))}{' '}
                        </div>
                    </div>
                    <button className="self-end bg-brand p-2 px-4 rounded-full text-text-1 text-fluid-1 sm:text-fluid-0 border-2 border-solid border-[goldenrod] hover:bg-accent-surface-1">
                        Try{' '}{demoTitle}
                    </button>
                </div>
            </div>
            <img
                src={`/asset/demos/${imageSrc}`}
                className="sm:align-top sm:w-[40%]"
                alt={imageAlt ? `Image of ${imageAlt}` : `${imageSrc.replace(/\.jpeg|jpg|png|svg/, '')}`}
            />
            <div className="absolute text-brand text-center bg-surface-2 bottom-0 left-0 right-0 origin-center -rotate-45 translate-y-[28%] translate-x-[41%] sm:translate-x-[43%]">
                <span className="text-fluid--1 font-bold tracking-widest uppercase block text-center p-10  sm:translate-y-[-19%] translate-y-[-14%] translate-x-[2%]">
                    Featured
                </span>
            </div>
        </div>
    )
}
export default featureDemo
