import React from 'react';
import ContentBlock from '../../components/content-block/content-block'
function About({ aboutData, ...props }) {
    return (<section id="about" tabIndex="-1">
        <div className="">
            <ContentBlock type="about" children={aboutData} />
        </div>
    </section>
    )
}
export default About;
