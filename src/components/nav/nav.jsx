
import React from "react"; 
import ThemeToggle from "../theme-toggle/themeToggle";
import  Link  from "../link/link";

const Nav = () => { 
		 return  <div className="grid grid-cols-[1fr_max-content] gap-12 p-2 bg-surface-alpha z-10 sticky top-0 left-0"> 
		 <nav className="grid grid-cols-[max-content_1fr] la:grid-cols-[auto_1fr] ">
                    <Link route="/" linkStyle="col-span-1 w-14 h-14 grid place-items-center hover:bg-surface-1-accent rounded-md"><svg className=""  viewBox="0 0 91 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#E85D04" fillRule="evenodd" d="M23.088 0h46.79l.326.82L89.53 49.387l.718 1.807H79.688l-.3-.882-6.39-18.809h-9.13l-7.845 18.89-.332.8H34.593l-.3-.881-6.39-18.809H18.77l-7.844 18.89-.332.8H0l.84-1.86L22.742.763 23.088 0ZM19.86 28.88h7.15l-3.218-9.47-3.931 9.47Zm5.27-13.557 4.906 14.44 6.39 18.806h4.901L23.84 4.621 4.02 48.569h4.867L16.73 29.68l5.996-14.44 1.307-3.146 1.097 3.229Zm19.502 34.563L27.51 6.856 40.126 38.56l4.507 11.325 1.302-.553 4.266-9.459L65.3 6.397 45.935 49.333l-1.302.553ZM27.999 2.626H64.83L52.26 19.952v-.263H38.195L27.999 2.625Zm11.764 19.69 4.87 8.15 5.913-8.15H39.763ZM68.936 4.62l-19.82 43.948h4.867l7.844-18.889 5.996-14.44 1.307-3.146 1.097 3.229 4.906 14.44 6.39 18.806h4.901L68.936 4.621Zm-.047 14.79-3.931 9.468h7.148l-3.217-9.468Z" clipRule="evenodd"/>
					</svg>
						<span className="sr-only">aadesina.com</span>
						</Link>
                    <div className="box w-14 h-14 col-span-1 justify-self-end grid place-items-center  la:hidden" aria-controls="nav-toggle">
                        <div className="bar" style={{"--fade":0}} aria-expanded="false">
							<span className="nav-toggle-label sr-only">Menu Control</span>
						</div>
                    </div>
		<ul id="nav-toggle" aria-expanded="false" role-label="nav-list" className=" col-[1_/-1] flex gap-4 justify-self-center la:w-[768px] la:col-[2_/3] la:m-x-auto la:translate-x-[35px]">
            {["about-me", "demos", "Blog", "Contact"].map((route, index) => {return  <li className="text-fluid-0 hover:bg-gradient-to-b from-brand-accent-fill to-brand-fill text-center p-1 la:bg-none" key={index}><Link route={index > 1?`/${route.toLowerCase()}`:`#${route}`}>{index == 0?"About":index == 1?"Demos":route}</Link></li>})}
		</ul>
		</nav>
    <ThemeToggle/>
	</div>
}
export default Nav;
