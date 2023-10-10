import React from 'react';
import DemoCard from '../demo-card/demo-card';
function Demos({data}){
return (<section id="demos" tabindex="-1" className="mt-20 p-0">
        <div className="demos-header mb-8">
        <h2 className="text-fluid-2 md:text-fluid-3 mb-4 p-0">Adebola's Demos</h2>
        <p>
            Learning is effective when it's combined with doing and havning fun.
        </p>
        <p>I created some demos and systems.</p>
    </div>

    {/* Carousel */}
      <div className="demos-wrapper relative">
    <div
        className="demos-wrapper--slider-wrapper overflow-hidden transition duration-150"
    > {/*Decoy for overflow so that slide button can align with slider */}
        
        {/* Demos cards wrapper */}
      
        <div className="demos-slider inline-flex items-start align-start gap-10 touch-none">
            {/* Demos card */}
            {data.map((demo) => ( <DemoCard key={demo.title} {...demo}/>
            ))}
        
         </div>{/* carousel slider*/}
        </div>{/*carousel inner for hidden overflow */}
        <div className="">        
            <button className="demos-slider--ctl left-[-1.75rem] hidden">&#10094;</button>
            <button className="demos-slider--ctl right-[-1.75rem]">&#10095;</button>
      </div> {/*slider control button */}
    </div> {/* Carousel end*/}
</section>); {/*Demos section end */}

}
export default Demos;