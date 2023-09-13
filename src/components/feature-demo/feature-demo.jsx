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
        <div className="flex justify-between mt-4 sm:mt-8 pb-3">
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
          <button className="self-end bg-brand p-2 rounded-full text-text-1 text-fluid--1 sm:text-fluid-0 border-2 border-solid border-[goldenrod] hover:bg-hover-light">
            Try Bug-Tracker
          </button>
        </div>
      </div>
      <img
        src={`/asset/demos/${imageSrc}`}
        alt={`Image of ${imageSrc.replace(/\.jpeg|jpg|png|svg/, '')}`}
        className="sm:align-top sm:w-[50%]"
      />
      <div className="absolute text-brand text-center bg-surface-2 bottom-0 left-0 right-0 origin-center -rotate-45 translate-y-[28%] translate-x-[41%] sm:translate-x-[43%]">
        <span className="text-fluid--1 md:text-fluid-0 font-bold tracking-widest uppercase block text-center p-10 md:p-12 sm:translate-y-[-19%] translate-y-[-14%] translate-x-[2%]">
          Featured
        </span>
      </div>
    </section>
  )
}
export default featureDemo
