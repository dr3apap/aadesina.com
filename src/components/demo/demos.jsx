import React from 'react';
import DemoCard from '../demo-card/demo-card';
import ContentBlock from '../../components/content-block/content-block'
import Feature from '../../components/feature-demo/feature-demo'
function Demos({ sectionIntro, demos, feature }) {
    return (<section id="demos" tabIndex="-1" className="mt-20 p-0 space-y-8 ">
        <div>
            <ContentBlock type='demo' children={sectionIntro} />
        </div>
        <Feature {...feature[0]} />
        {/* Carousel */}
        <div className="demos-carousel relative">
            <div
                className="demos-carousel--inner overflow-hidden"
            > {/*Decoy for overflow so that slide button can align with slider */}

                {/* Demos cards wrapper */}
                <ul className="demos-carousel--slider touch-none">
                    {/* Demos card */}
                    {demos.map((demo) =>
                    (< DemoCard key={
                        demo
                            ._id
                    }  {...demo} />

                    ))}
                </ul>{/* carousel slider*/}
            </div>{/*carousel inner for hidden overflow */}
            <div className="hidden lg:block">
                <button className="demos-carousel--slider__cta left-[-1.75rem]" data-demo-ctl="left">&#10094;</button>
                <button className="demos-carousel--slider__cta right-[-1.75rem]" data-demo-ctl="right">&#10095;</button>
            </div> {/*slider control button */}


        </div> {/* Carousel end*/}
    </section>); {/*Demos section end */ }

}
export default Demos;
