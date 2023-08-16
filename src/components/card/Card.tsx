type Feed = {
    pinned: boolean,
    permcard: boolean,
    pubDate: string,
    feed:string,
    _id:string,
    slug: {
        current: string
    }
    author: {
        name: string,
        displayName: string,
        avatar:string,
        specialty: {
            title: string,
        }

    },
    status: {
        title: string,
        icon: string,
    },
    location: {
        title: string,
    }
}

const Card = (props:Feed) => {
    const authorLink = `/home/${props.author.specialty ? props.author.specialty.title.toLowerCase() : ''}`
    return (
        <article  data-feed-id={props._id} className={`card grid grid-cols-[auto_1fr] p-4 gap-2 rounded-lg max-w-full w-full ${props.permcard? 'bg-surface-2 shadow-lg border border-surface-3':'hover:bg-surface-2'}`}>
            {props.pinned && !props.permcard && (<><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5}>
                    <path fill="currentColor" d="M9 4v6l-2 4v2h10v-2l-2-4V4" />
                    <path d="M12 16v5M8 4h8" />
                </g>
            </svg></div>
                <div>pinned feed</div></>)}
            <a href={authorLink}>
                <span className="sr-only">{`${props.author.name}'s feed`}</span>
                <img src={props.author.avatar} alt={`${props.author.name} image`} className="rounded-full bg-surface-4" width="80" height="80" />
            </a>
            <div className="card__content grid gap-y-1 leading-tight">
                <div className="flex gap-x-2 text-fluid--1 items-center text-text-4">
                    <a href={authorLink} className="hover:underline font-bold text-text1">{props.author.displayName}</a>
                    <span>•</span>
                    {props.pubDate && (<time dateTime={new Date(props.pubDate).toLocaleDateString('en-us', {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric'
                    })}>{`${new Date(props.pubDate).toLocaleDateString('en-us', {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric'
                    })}`}</time>)}
                </div>
                {props.status && (<div className="py-1 px-3 inline-flex items-center gap-1 bg-surface-4 rounded-full">
                    <span role="img" alt="Status icon" aria-hidden="true">{props.status.icon}</span>
                    <span className="text-fluid--2 font-bold">{props.status.title}</span>
                </div>)}
                <ContentBlock>{props.feed}</ContentBlock>
                {props.location && (<div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                        <path fill="currentColor" d="M12 12q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 10q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Z" />
                    </svg>
                    <span>{props.location.title}</span>
                </div>)}
                <div className="flex justify-end items-center">
                    {props.slug.current && (<a href={`/home/${props.slug.current}`} target="_blank" rel="noopener noreferrer" title="Permalink" className="w-10 h-10 grid place-item-center hover:bg-surface-4 rounded-md text-text-2 hover:text-brand-stroke">
                        <span className="sr-only">Permalink</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clip-rule="evenodd" />
                        </svg>
                    </a>)}
                    <button title="Like post" disabled className="w-10 h-10 grid place-items-center rounded-md text-text-2 opacity-20">
                        <span className="sr-only">Like button</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8Z" />
                        </svg>
                    </button>

                </div>
            </div>
        </article>
    )
}
export default Card;