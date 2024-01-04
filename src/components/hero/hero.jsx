import React from 'react'
import ContentBlock from '../../components/content-block/content-block'

function Hero({ heroData, ...props }) {
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
                    <ContentBlock type='hero' children={heroData} />
                </div>
            </div>
        </header >
    )
}

export default Hero
