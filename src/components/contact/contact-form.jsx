import React from 'react'

export default function Contact() {
    return (<form id="contact" action="contact-form" className="mt-32 px-4" style={{ '--index': -1 }} data-current="false">
        <label
            className="block mb-20 pb-4  text-fluid-0 text-accent-text-1"
            htmlFor="full-name"
        >
            Full Name
            <input
                className="appearance-none w-full h-20 pl-4 border border-solid border-brand rounded"

                type="text"
                name="fullname"
                id="full-name"

            />
        </label>
        <label
            className="block mb-24 pb-4  text-fluid-0 text-accent-text-1"
            htmlFor="contact-email"
        >
            Email
            <input
                className="w-full h-20 pl-4 border border-solid border-brand rounded"
                type="text"
                name="email"
                id="contact-email"

            />
        </label>
        <label
            className="block mb-24 pb-4 text-fluid-0 text-accent-text-1"
            htmlFor="contact-company"
        >
            Company
            <input
                className="w-full h-20 pl-4 border border-solid border-brand rounded"
                type="text"
                name="company"
                id="contact-company"
            />
        </label>
        <p className="mb-8 text-fluid-1 pb-4">
            Please Choose What your Inquiry is About
        </p>
        <label
            className="block mb-24 pb-4 text-fluid-0 text-accent-text-1"
            htmlFor="full-time"
        >
            <input
                className="mr-4 htmlForm-input border border-solid border-brand-text1 rounded"
                type="checkbox"
                name="fulltime"
                id="full-time"
            />
            Full time employment
        </label>
        <label
            className="block mb-24 pb-4  text-fluid-0 text-accent-text-1"
            htmlFor="part-time"
        >
            <input
                className="mr-4 htmlForm-input border border-solid border-brand-text1 rounded"
                type="checkbox"
                name="parttime"
                id="part-time"
            />
            Part time employtment
        </label>
        <label
            className="block mb-24 pb-4  text-fluid-0 text-accent-text-1"
            htmlFor="contact-contract"
        >
            <input
                className="mr-4 htmlForm-input border border-solid border-brand-text1 rounded"
                type="checkbox"
                name="contract"
                id="contact-contract"
            />
            Contract
        </label>
        <label
            className="block mb-24 pb-4  text-fluid-0 text-accent-text-1"
            htmlFor="contact-other"
        >
            <input
                className="mr-4 htmlForm-input border border-solid border-brand-text1 rounded"
                type="checkbox"
                name="other"
                id="contact-other"
            />
            Other
        </label>
        <label
            className="block mb-24 pb-4 text-fluid-0 text-accent-text-1"
            htmlFor="contact-message"
        >
            Message{' '}
            <textarea
                className="w-full border border-solid border-brand p-3 rounded"
                name="message"
                id="contact-message"
                cols="30"
                rows="10"
            ></textarea>
        </label>
        <button className="contact--cta px-4 py-2 bg-brand hover:bg-accent-surface-1 border-2 border-solid border-[goldenrod] text-fluid-0 text-accent-text-1 rounded-full w-full" type="submit">
            Submit
        </button>
    </form>)
}

