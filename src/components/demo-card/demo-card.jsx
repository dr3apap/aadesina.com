import React from 'react'
import ContentBlock from '../../components/content-block/content-block'

function DemoCard({ demoCard: { image: imageSrc, imageAlt, description, title, skills, link }, demoTitle }) {
    return (
        <div className="demos-slider--card relative shrink-0">
            <div className="">
                <img
                    src={`/asset/demos/${imageSrc}`}
                    alt={`Image of ${imageAlt ? imageAlt : imageSrc.replace(/\.jpg|png|svg/, '')}`}
                    className="w-full aspect-square"
                />
            </div>
            <h3 className="text-fluid-1 px-4 text-accent-text-2 tracking-wide">{demoTitle}</h3>
            <details className="demo--accordion px-1 bg-surface-1">
                {/*accordion */}
                <summary
                    data-toc-summary="true"
                    className="flex justify-between cursor-pointer p-4"
                >
                    <span className="uppercase text-fluid--1 font-bold">Learn More</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-brand-stroke"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </summary>
                <div className="p-2 absolute top-0 bottom-0 left-0 right-0 bg-surface-2">
                    <div className="px-1 relative bg-surface-alpha">
                        {/*accordion description */}
                        <h3 className="text-fluid-2 la:text-fluid-1 mb-2 text-accent-text-2 tracking-wide">
                            Description
                        </h3>
                        <ContentBlock type="demo" children={description} />
                    </div>
                    <div className="p-1">
                        <h3 className="text-fluid-1 p-0 my-2 text-accent-text-2 tracking-wide">Skills</h3>
                        <div className="flex gap-1 flex-wrap">
                            {skills.map((skillIcon, index) => (
                                <span className="w-8 h-8 grid place-items-center rounded-full bg-surface-3 hover:bg-surface-2">
                                    <img
                                        key={index}
                                        src={`/asset/skills/${skillIcon}.svg`}
                                        alt={<span className="sr-only"> `Icon of ${skillIcon}`</span>}
                                    />
                                </span>
                            ))}{' '}
                        </div>
                    </div>
                    <span className="demo--accordion__ctl absolute top-2 right-[-2px] -translate-x-1/4 -translate-y-1/4 bg-surface-1 text-text-2 p-[.5rem] rounded-full hover:bg-hover-light">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                                fill="currentColor"
                            />
                        </svg>
                    </span>
                </div>
            </details > {' '}
            {/* accordion end */}
            <a
                href={link}
                className="block p-4 text-accent-text-2 underline underline-offset-2 decoration-brand decoration-2 cursor-pointer"
            >
                {`Try-${demoTitle.trim()}`}
            </a>
        </div >
    )
    {
        /* demos card end */
    }
}
export default DemoCard
