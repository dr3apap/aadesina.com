import React from 'react'
function Contact() {
  return (
    <main className="px-4 py-24 mx-auto my-24 max-w-screen-la bg-surface-1">
      <htmlForm action="" id="contact" className="mt-32 p-2">
        <label
          className="block mb-20 pb-4  text-fluid-1 text-text-1-accent"
          htmlFor="fullname"
          id=""
        >
          Full Name
          <input
            className="appearance-none w-full h-20 pl-4 border border-solid border-brand-light"
            type="text"
            name="fullname"
            id="fullname"
          />
        </label>
        <label
          className="block mb-24 pb-4  text-fluid-1 text-text-1-accent"
          htmlFor=""
          id="email"
        >
          Email
          <input
            className="w-full h-20 pl-4 border border-solid border-brand-light"
            type="text"
            name=""
            id="email"
          />
        </label>
        <label
          className="block mb-24 pb-4  text-fluid-1 text-text-1-accent"
          htmlFor="company"
        >
          Company
          <input
            className="w-full h-20 pl-4 border border-solid border-brand-light"
            type="text"
            name=""
            id="company"
          />
        </label>
        <p className="mb-8 text-fluid-2 pb-4 -2">
          Please Choose What your Inquiry is About
        </p>
        <label
          className="block mb-24 pb-4  text-fluid-1 text-text-1-accent"
          htmlFor=""
        >
          <input
            className="mr-4 htmlForm-input border border-solid border-brand-light-text1"
            type="checkbox"
            name=""
            id=""
          />
          Full time employment
        </label>
        <label
          className="block mb-24 pb-4  text-fluid-1 text-text-1-accent"
          htmlFor=""
        >
          <input
            className="mr-4 htmlForm-input border border-solid border-brand-light-text1"
            type="checkbox"
            name=""
            id=""
          />
          Part time employtment
        </label>
        <label
          className="block mb-24 pb-4  text-fluid-1 text-text-1-accent"
          htmlFor=""
        >
          <input
            className="mr-4 htmlForm-input border border-solid border-brand-light-text1"
            type="checkbox"
            name=""
            id=""
          />
          Contract
        </label>
        <label
          className="block mb-24 pb-4  text-fluid-1 text-text-1-accent"
          htmlFor=""
        >
          <input
            className="mr-4 htmlForm-input border border-solid border-brand-light-text1"
            type="checkbox"
            name=""
            id=""
          />
          Other
        </label>
        <label
          className="block mb-24 pb-4 text-fluid-1 text-text-1-accent"
          htmlFor="message"
        >
          Message{' '}
          <textarea
            className="w-full border border-solid border-brand-light p-3"
            name="message"
            id="meassage"
            cols="30"
            rows="10"
          ></textarea>
        </label>
        <button className="cta-btn px-8 py-4 bg-brand hover:bg-hover-light border-2 border-solid border-[goldenrod] text-fluid-1 text-text-1-accent rounded-full w-full">
          Submit
        </button>
      </htmlForm>
    </main>
  )
}

export default Contact
