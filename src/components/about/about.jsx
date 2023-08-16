import React from 'react';
function About(){
return (<section id="about-me" tabindex="-1">
  <div className="">
    <h2 className="text-fluid-2 mb-4">
      Adebola is a Passionate Developer
    </h2>
    <img
      src="./asset/dr3-no-background-2.png" alt="
      Adebola
      Adesina
      headshot"
      className="float-left rounded-full w-48 aspect-square circle-shape mr-4"
    />
    <p
      className="first-line:uppercase first-line:tracking-widest first-letter:float-left first-letter:font-bold first-letter:text-fluid-5 first-letter:text-brand first-letter:mr-2 "
    >
      I'm a full stack software engineer with exceptional digital experience
      specializing in web development, web3, embedded
      software and Iot .
    </p>
    <p>
      I'm passionate in what I do, crafting scalable software with
      adequate security and performance. The usability, functionality,
      usefulness and security of a web application is a
      must and therefore my top priority. I'm an advocate of a well tested and
      continuous software testing. Above all, I enjoy sharing knowledge about
      computer programming and software development that actually solve
      problems, improve quality of life with unbreakable internet security.
    </p>
    
  </div>
</section>
)
}
export default About;