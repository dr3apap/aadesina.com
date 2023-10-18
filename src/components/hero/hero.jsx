import React from 'react'
function Hero() {
    return (
        <header className="h-[80vh] flex iems-center mt-4">
            <div className="w-full mt-8">
                <div className="hero-container text-left">
                    <h2 className="reference mb-4 text-fluid-3 italic text-brand ">
                        Let<span className="text-fluid-3 not-italic pl-2 align-middle">👇🏾</span>
                    </h2>
                    <h1 className="uppercase leading-none heading-1">
                        <span className="text-fluid-6 leading-none pl-4  text-text-2-accent md:text-fluid-9 md:pl-6 font-black la:text-fluid-8 la:pl-7">
                            Adebola
                        </span>
                        <span className="heading-4 text-fluid-3 leading-none font-black pl-2 text-text-2-accent block mt-[-.4rem] md:text-fluid-7 la:mt-[-1rem]">
                            Adesina
                        </span>
                    </h1>
                </div>
                <div className="pt-10 text-text-1">
                    <h2 className="title text-fluid-1 p-0 mb-4 mt-12">
                        With Excepetional Digital Design and Creativity
                    </h2>
                    <ul className="la:flex">
                        <li
                            style={{ "--i": 0 }}
                            className="offer mb-2 underline decoration-brand underline-offset-4 decoration-2 la:mb-0"
                        >
                            <span className="text-text-1">Elevate your online businesses</span>
                        </li>
                        <li
                            style={{ "--i": 1 }}
                            className="offer mb-2 underline decoration-brand underline-offset-4 decoration-2 la:mb-0"
                        >
                            <span className="text-text1">Enhance your web Expereiences</span>
                        </li>
                        <li
                            style={{ "--i": 2 }}
                            className="offer mb-2 underline decoration-brand underline-offset-4 decoration-2 la:mb-0"
                        >
                            <span className="text-text-1">
                                Brings your ideas to live on all technology media
                            </span>
                        </li>
                        <li style={{ "--i": 3 }} className="offer mb-2 la:mb-0"><span className="flex gap-x-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                                <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                            </svg>
                            <span>
                                <a className="font-bold text-brand decoration-4 decoration-brand" href="/links">
                                    /links
                                </a>
                            </span>
                        </span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Hero
