import React from 'react'
function Hero() {
  return (
    <header className="h-[80vh] flex iems-center mt-4">
        <div className="w-full">
      <div className="hero-container text-left">
        <h2 className="reference mb-4 text-fluid-3 italic text-brand ">
          Let<span className="text-fluid-3 not-italic pl-2 align-middle">👇🏾</span>
        </h2>
        <h1 className="uppercase leading-none heading-1">
          <span className="text-fluid-7 leading-none pl-4  text-text-2-accent md:text-fluid-9 md:pl-6 font-black la:text-fluid-8 la:pl-7">
            Adebola
          </span>
          <span className="heading-2 text-fluid-5 leading-none font-black pl-1 text-text-2-accent block mt-[-.5rem] md:text-fluid-7 la:mt-[-1rem]">
            Adesina
          </span>
        </h1>
      </div>
      <div className="pt-10 text-text-1">
        <h2 className="title text-fluid-1 p-0 mb-4 mt-12">
          With Excepetional Digital Design and Creativity
        </h2>
        <ul className="la:flex gap-4">
          <li
            style={{"--i":0}}
            className="offer mb-2 underline decoration-brand underline-offset-4 decoration-2 la:mb-0"
          >
            <p className="text-text-1">Elevate your online businesses</p>
          </li>
          <li
            style={{"--i":1}}
            className="offer mb-2 underline decoration-brand underline-offset-4 decoration-2 la:mb-0"
          >
            <p className="text-text1">Enhance your web Expereiences</p>
          </li>
          <li
            style={{"--i":2}}
            className="offer mb-2 underline decoration-brand underline-offset-4 decoration-2 la:mb-0"
          >
            <p className="text-text-1">
              Brings your ideas to live on all technology media
            </p>
          </li>
        </ul>
      </div>
    </div>
</header>
    
  )
}

export default Hero
