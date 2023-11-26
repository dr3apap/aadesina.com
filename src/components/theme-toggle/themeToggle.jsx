import "./theme-toggle.css";
const ThemeToggle = () => {
    return <form className="justify-self-end place-items-center" id="theme-toggle" action="theme-toggle">
        <button aria-controls="theme-toggle" className="theme-toggle w-11 h-11 relative hover:bg-surface-3 rounded-md">
            <span aria-describedby="theme-toggle__icon" className="theme-toggle__icon absolute inset-0 w-full h-full grid place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 aspect-square">
                    <g className="theme-toggle__monitor">
                        {/** Monitor */}
                        <path fill="none" stroke="currentColor" strokeWidth="2" fillRule="evenodd"
                            d="M1 19h22V1H1v18Zm4 4h14H5Zm3 0h8v-4H8v4ZM7.757 5.757l2.122 2.122l-2.122-2.122ZM9 10H6h3Zm.879 2.121l-2.122 2.122l2.122-2.122ZM12 13v3v-3Zm2.121-.879l2.122 2.122l-2.122-2.122ZM18 10h-3h3Zm-1.757-4.243l-2.122 2.122l2.122-2.122ZM12 7V4v3Zm0 0a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z" clipRule="evenodd"
                        />
                    </g>
                    <g className="transform-box-fill transform origin-ceter scale-[var(--icon-scale)] translate-y-[var(--icon-translate)]">
                        {/**  Sun */}
                        <path className="theme-toggle__status theme-toggle__sun" d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
                        {/**  Moon */}
                        <path className="theme-toggle__status theme-toggle__moon" fill="var(--text1)" d="M12 2a9.91 9.91 0 0 0-3 .46a10 10 0 0 1 0 19.08A10 10 0 1 0 12 2Z" />
                    </g>
                </svg>
            </span>
            <span id="theme-toggle-label" className="sr-only">Set theme to system</span>
        </button>
    </form>
}
export default ThemeToggle;

