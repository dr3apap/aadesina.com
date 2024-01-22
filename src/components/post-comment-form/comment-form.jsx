import React from "react";
function PostCommentForm() {
    return (
        <article id="comments--form-wrapper" className="grid gap-2 grid-cols-[auto_1fr] p-4 hover:bg-accent-surface-1 rounded-lg max-w-full w-full">
            <a classNaMe="w-10 h-10">
                <picture>
                    <img
                        className="rounded-full w-10 h-10" decoding="async" loading="lazy" src=""
                        alt="Author avatar"
                    />

                </picture>
                <span className="sr-only">author Avatar</span>
            </a>
            <div className=" p-4 bg-surface-3">
                <form action="" id="comments--form" className="flex flex-col gap-2">
                    <p className="text-text-accet-2 mb-4">Leave a comment</p>
                    <div className="flex flex-col gap-2">
                        <label className="text-fluid--1 font-bold" htmlFor="fullname" id="">Full Name</label>
                        <input className="p-2 mb-4 rounded-md" type="text" name="fullname" id="fullname" />
                        <label className="text-fluid--1 font-bold" htmlFor="email" id="email">
                            Email</label>
                        <input className="p-2 mb-4 rounded-md" type="text" name="email" id="email" />                <label className="text-fluid--1 font-bold" htmlFor="message">
                            Markdown is Accepted</label>
                        <textarea className="p-2 mb-4 rounded-md" name="message" id="meassage" placeholder="Comment:Use ``` for code block"></textarea>
                        <label className="block text-fluid-0 text-brand-secondary-light-text1" htmlFor="subscribe">
                            <input className="mr-4 form-input " type="checkbox" name="subscribe" id="subscribe" />Subscribe to comments</label>
                    </div>
                    <p className="">Please let's keep it clean.We're all adults let's learn from each other, agree to disagree while having a civil conversation.Comments must conform to the posted topic.Please do not spam.</p>
                </form>
                <div className="flex mt-8">
                    <button className="comments--form__ctl w-full px-3 py-1 bg-brand font-bold text-fluid--1 text-white text-center rounded-full border-transparent outline-transparent focus:border-[goldenrod] focus-visible:border-[goldenrod] hover:border-[goldenrod] border-4" type="submit">Post Comment</button>
                    <button className="comments--cancel comments--form__ctl w-full px-3 py-1 bg-accent-surface-3 font-bold text-fluid--1 text-accent-text-1 text-center rounded-full border-transparent outline-transparent focus:border-[goldenrod] focus-visible:border-[goldenrod] hover:border-[goldenrod] border-4 hidden" type="submit">Cancel Comment</button>
                </div>

            </div>
        </article>);
}

export default PostCommentForm; 
