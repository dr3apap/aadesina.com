import React from 'react'
function Footer({ items }) {
    return (
        <footer className="mv-0 mx-auto max-w-screen-md py-8 text-text-2">
            <div className="text-fluid--2 grid place-items-center gap-y-2 w-full">
                {' '}
                {/* Footer items wrapper*/}
                <ul className="font-bold flex gap-x-2 self-start">
                    {items.filter((item) => item.tabLabel != "Contact").map(({ active, link, tabLabel }) => { return <li className="text-center hover:bg-surface-3" key={tabLabel}><a data-tab-current={active} className={"font-bold grid place-items-center w-full h-full text-text-2-accent block hover:no-underline focus-visible:outline-0 focus-visible:bg-surface-2"} href={tabLabel == 'Demos' || tabLabel == 'About' ? `/#${tabLabel.toLowerCase()}` : tabLabel == 'Home' ? '/' : `/${tabLabel.toLowerCase()}`}><span className={`${active ? "border-b-brand text-text-1" : ""}decoration-4 decoration-brand p-2 px-4 border-y-4 border-transparent`}>{tabLabel}</span></a></li> })}</ul>

                <div className="flex gap-x-4 flex-wrap justify-center">
                    <a
                        className="text-text-2 w-10 h-10 grid place-items-center rounded-md hover:bg-surface-3"
                        href="/rss/rss.xml"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Grab my RSS Feed!"
                    >
                        <svg
                            fill="currentColor"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            role="img"
                        >
                            <title>Rss icon</title>
                            <path d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z" />
                            <path d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.twitter.com/Dr3_147"
                        className="text-text-2 w-10 h-10 grid place-items-center rounded-md hover:bg-surface-3"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow me on twitter"
                    >
                        <svg
                            fill="currentColor"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            role="img"
                        >
                            <title>Twitter icon</title>
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                        </svg>
                    </a>

                    <a
                        href="https://www.github.com/dr3apap"
                        className="text-text-1 w-12 h-12 grid place-items-center rounded-md hover:bg-surface-3"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Have a look on what I'm working on, on Github"
                    >
                        <svg
                            fill="currentColor"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            role="img"
                        >
                            <title>Github icon</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/adebola-adesina-8881a4195/"
                        className="text-text-1 w-12 h-12 grid place-items-center rounded-md hover:bg-surface-3"
                        title="Connect with me on linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            fill="currentColor"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            role="img"
                        >
                            <title>Linkedin icon</title>
                            <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
                        </svg>
                    </a>
                </div>
                <div>
                    Adebola &copy; <span>{`${new Date().getFullYear()}`}</span>
                </div>
            </div>{' '}
            {/* Footer items end*/}
        </footer>
    )
}
export default Footer
