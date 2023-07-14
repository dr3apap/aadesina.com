
import React from "react"; 
import ThemeToggle from "../theme-toggle/themeToggle";
import  Link  from "../link/link";

const Nav = () => { 
		 return  <div className="grid grid-cols-[1fr_max-content] gap-12 p-2 bg-surface-alpha z-10 sticky top-0 left-0"> 
		 <nav className="grid grid-cols-[max-content_1fr]">
                    <Link route="/" linkStyle="col-span-1 w-14 h-14 grid place-items-center hover:bg-surface-1-accent rounded-md"><img className=""src="/asset/dr3-logo.png"
                            alt="Adebola Adesina logo"/>
						<span className="sr-only">aadesina.com</span>
						</Link>
                    <div className="box w-14 h-14 col-span-1 justify-self-end grid place-items-center la:hidden" aria-controls="nav-toggle">
                        <div className="bar" style={{"--fade":0}} aria-expanded="false">
							<span className="nav-toggle-label sr-only">Menu Control</span>
						</div>
                    </div>
		<ul id="nav-toggle" aria-expanded="false" role-label="nav-list" className=" col-[1_/-1] flex gap-4 justify-self-center la:col-[2/2] la:justify-self-start la:w-[768px] la:origin-left translate-x-[8%] la:mx-auto my-0">
            {["/", "About", "Demos", "Blog", "Contact"].map((route, index) => {return  <li className="text-fluid-0 hover:bg-gradient-to-b from-brand-accent-fill to-brand-fill text-center p-1 la:bg-none"><Link route={index > 2?`/${route.toLowerCase()}`:route} key={index}>{index == 0?"Home":route}</Link></li>})}
		</ul>
		</nav>
    <ThemeToggle/>
	</div>
}
export default Nav;
