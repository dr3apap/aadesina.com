import React from 'react';
import DemoCard from '../demo-card/demo-card';
import ContentBlock from '../../components/content-block/content-block'
import Feature from '../../components/feature-demo/feature-demo'
function Demos({ sectionIntro, demos, feature }) {
    return (<section id="demos" tabIndex="-1" className="mt-20 p-0 space-y-8">
        <div>
            <ContentBlock type='demo' children={sectionIntro} />
        </div>
        <Feature {...feature[0]} />
        {/* Carousel */}
        <div className="demos-wrapper relative">
            <div
                className="demos-wrapper--slider-wrapper overflow-hidden"
            > {/*Decoy for overflow so that slide button can align with slider */}

                {/* Demos cards wrapper */}

                <div className="demos-slider inline-flex items-start gap-x-2 touch-none transition duration-150 ">
                    {/* Demos card */}
                    {demos.map((demo) => (<DemoCard key={demo
                        ._id}  {...demo} />
                    ))}

                </div>{/* carousel slider*/}
            </div>{/*carousel inner for hidden overflow */}
            <div className="hidden lg:block">
                <button className="demos-slider--ctl left-[-1.75rem] hidden">&#10094;</button>
                <button className="demos-slider--ctl right-[-1.75rem]">&#10095;</button>
            </div> {/*slider control button */}
        </div> {/* Carousel end*/}
    </section>); {/*Demos section end */ }

}
export default Demos;
