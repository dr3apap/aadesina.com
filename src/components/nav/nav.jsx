import React from "react";
import ThemeToggle from "../theme-toggle/themeToggle";
const Nav = ({ items }) => {
    return <div className="grid grid-cols-[1fr_max-content] gap-12 p-2 bg-surface-alpha z-10 sticky top-0 left-0">
        <nav className="grid grid-cols-[max-content_1fr] la:grid-cols-[auto_1fr] px-2">
            <a href="/" className="col-span-1 w-11 h-11 grid place-items-center hover:bg-surface-3 rounded-md"><svg className="w-9" viewBox="0 0 91 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#E85D04" fillRule="evenodd" d="M23.088 0h46.79l.326.82L89.53 49.387l.718 1.807H79.688l-.3-.882-6.39-18.809h-9.13l-7.845 18.89-.332.8H34.593l-.3-.881-6.39-18.809H18.77l-7.844 18.89-.332.8H0l.84-1.86L22.742.763 23.088 0ZM19.86 28.88h7.15l-3.218-9.47-3.931 9.47Zm5.27-13.557 4.906 14.44 6.39 18.806h4.901L23.84 4.621 4.02 48.569h4.867L16.73 29.68l5.996-14.44 1.307-3.146 1.097 3.229Zm19.502 34.563L27.51 6.856 40.126 38.56l4.507 11.325 1.302-.553 4.266-9.459L65.3 6.397 45.935 49.333l-1.302.553ZM27.999 2.626H64.83L52.26 19.952v-.263H38.195L27.999 2.625Zm11.764 19.69 4.87 8.15 5.913-8.15H39.763ZM68.936 4.62l-19.82 43.948h4.867l7.844-18.889 5.996-14.44 1.307-3.146 1.097 3.229 4.906 14.44 6.39 18.806h4.901L68.936 4.621Zm-.047 14.79-3.931 9.468h7.148l-3.217-9.468Z" clipRule="evenodd" />
            </svg>
                <span className="sr-only">aadesina.com</span>
            </a>
            <div className="box w-11 h-11 col-span-1 justify-self-end grid place-items-center rounded-md sm:hidden" aria-controls="nav-toggle ">
                <div className="bar" style={{ "--fade": 0 }} aria-expanded="false">
                    <span className="nav-toggle-tabLabel sr-only">Menu Control</span>
                </div>
            </div>
            <ul id="nav-toggle" aria-expanded="false" role-tabLabel="nav-list" className="col-[1_/-1] grid grid-flow-col auto-cols-[1fr] items-center md:col-[2_/3] lg:w-content translate-x-11 lg:mx-auto text-fluid--2">
                {items.map(({ active, link, tabLabel }) => { return <li className="text-center hover:bg-surface-3 flex-grow" key={tabLabel}><a data-tab-current={active} className={"font-bold grid place-items-center w-full h-full text-accent-text-2 hover:no-underline focus-visible:outline-0 focus-visible:bg-surface-2"} href={tabLabel == 'Demos' || tabLabel == 'About' ? `/#${tabLabel.toLowerCase()}` : tabLabel == 'Home' ? '/' : `/${tabLabel.toLowerCase()}`}><span className={`${active ? "border-b-brand text-text-1" : ""}decoration-4 decoration-brand p-2 px-4 border-y-4 border-transparent`}>{tabLabel}</span></a></li> })}</ul>

        </nav>
        <ThemeToggle />
    </div >
}
export default Nav;
