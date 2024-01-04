import React from 'react'
import Hero from '../../components/hero/hero'
import About from '../../components/about/about'
import Feature from '../../components/feature-demo/feature-demo'
import Demos from '../../components/demo/demos'

export default function LandingPage({ heroData, aboutData, demosData, feature }) {
    return <>
        <Hero heroData={heroData} />
        <About aboutData={aboutData} />
        <Feature {...feature[0]} />
        <Demos {...demosData} />
        <p className="mt-12">
            Like what you read or see so far and have an idea or ideas, business or
            businesses that you want to turn into reality or elevated? do not hesitate
            to contact me. I'm open to working with individuals, organization and
            groups. <a href="/contact" id="solo" className="text-brand font-bold decoration-4 decoration-brand">Contact</a>
        </p>
    </>
}
