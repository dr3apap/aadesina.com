import React from 'react'
function featureDemo({ imageSrc, skills, title, description }) {
  return (
    <section
      id="featured"
      className="mt-20 overflow-hidden relative flex flex-col shadow-lg sm:flex-row"
    >
      {/* Feature wrapper */}
      <div className="bg-surface-1 px-4 sm:w-[50%]">
        <h3 className="text-fluid-2 text-text-2-accent font-bold mt-4 tracking-wide">
          {title}
        </h3>
        <p className="text-text-1 mt-4">{description}</p>
        {/* Skills */}
        <div className="flex justify-between mt-4 sm:mt-8 pb-4">
          <div className="">
            <h3 className="text-fluid-2 text-text-2-accent font-bold p-0 mb-4 tracking-wide">
              Skills
            </h3>
            <div className="flex gap-2 flex-wrap">
              {skills.map((skillIcon) => (
                <img
                  src={`/asset/skills/${skillIcon}`}
                  alt={`image of ${skillIcon.replace(
                    /\.svg/,
                    ''
                  )} width="20", height="20"`}
                  key={skillIcon}
                />
              ))}{' '}
            </div>
          </div>
          <button className="self-end bg-brand p-1 sm:px-4 rounded-full text-text-1 text-fluid--1 border-2 border-solid border-[goldenrod] hover:bg-hover-light">
            Try Bug-Tracker
          </button>
        </div>
      </div>
      <img
        src={`/asset/demos/${imageSrc}`}
        alt={`Image of ${imageSrc.replace(/\.jpeg|jpg|png|svg/, '')}`}
        className="sm:align-top sm:w-[50%]"
      />
      <div className="absolute text-brand text-center bg-surface-2 bottom-0 left-0 right-0 origin-center -rotate-45 translate-y-[17%] translate-x-[40%] sm:translate-x-[45%]">
        <span className="text-fluid-0 font-bold tracking-widest uppercase block text-center p-5 pb-14">
          Featured
        </span>
      </div>
    </section>
  )
}
export default featureDemo
