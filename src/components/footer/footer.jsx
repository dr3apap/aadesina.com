import React from "react";
import Link from "../link/link";

const Footer = () => {
    return <footer className="mx-auto mt-24 mb-4 max-w-screen-md bg-fg-light">
        <div className="text-fluid--1 grid place-items-center gap-y-2 w-full"> { /* Footer items wrapper*/}
            <ul className="text-surface-headings font-bold flex gap-x-8 self-start">{["/", "about-me", "demos", "Blog"].map((route, index) => {
                return <li class="hover:bg-gradient-to-b from-brand-accent-fill to-brand-fill text-center p-1 la:bg-none"><Link route={index > 2 ? `/${route.toLowerCase()}` : `#${route}`} key={index}>{index == 0 ? "Home" : index == 1 ? "About" : index == 2 ? "Demos" : route}</Link></li>
            })}
            </ul>
            <div className="flex flex-wrap justify-center">
                <Link route="https://www.twitter.com/Dr3_147" linkStyle="text-text-1 w-14 h-14 grid place-items-center rounded-md hover:bg-text-2-accent" 
                    target="_blank" rel="noopener noreferrer" title="follow me on twitter">
                   <svg fill="currentColor" className="w-10 h-10" viewBox="0 0 24 24" role="img">
              <title>Twitter icon</title>
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
            </svg>
                </Link>

                <Link route="https://www.github.com/dr3apap" linkStyle="text-text-1 w-14 h-14 grid place-items-center rounded-md hover:bg-text-2-accent"
                    target="_blank" rel="noopener noreferrer" title="Have look on what I'm working on Github">
                     <svg fill="currentColor" className="w-10 h-10" viewBox="0 0 24 24" role="img">
              <title>Github icon</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
                </Link>
                <Link route="https://www.linkedin.com/in/adebola-adesina-8881a4195/"
                    linkStyle="text-text-1 w-14 h-14 grid place-items-center rounded-md hover:bg-text-2-accent" target="_blank" rel="noopener noreferrer">
                   <svg fill="currentColor" className="w-10 h-10" viewBox="0 0 24 24"  role="img">
            <title>Linkedin icon</title>
        <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path></svg>

                </Link>
            </div>
            <div className="text-fluid-0">
                    Adebola &copy; <span>{`${new Date().getFullYear()}`}</span>
                </div>
        </div> { /* Footer items end*/}
    </footer>
}
export default Footer;