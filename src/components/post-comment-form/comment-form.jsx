import React from "react";
function PostCommentForm() {
    return (<div id="comments--form-wrapper" className="grid bg-surface-4 w-full gap-2 p-2">
        <h2 className="text-text-accet-2 text-center text-fluid-1 p-2 relative">Leave a Comment</h2>
        <form action="" id="comments--form" className="p-2 grid gap-y-8">
            <label className="block text-fluid-0" htmlFor="fullname" id="">Full Name<input className="appearance-none w-full p-2 pl-4 border border-solid border-brand" type="text" name="fullname" id="fullname" /></label>
            <label className="block  text-fluid-0 text-brand-secondary-light-text1" htmlFor="email" id="email">Email<input className="w-full p-2 pl-4 border border-solid border-brand" type="text" name="email" id="email" /></label>
            <label className="block text-fluid-0" htmlFor="message">Markdown is Accepted<textarea className="w-full border border-solid border-brand p-3" name="message" id="meassage" cols="30" rows="10" placeholder="Comment:Use ``` for code block"></textarea></label>
            <label className="block text-fluid-0 text-brand-secondary-light-text1" htmlFor="subscribe"><input className="mr-4 form-input border border-solid border-brand" type="checkbox" name="subscribe" id="subscribe" />Subscribe to comments</label>
            <p className="">Please let's keep it clean.We're all adults let's learn from each other, agree to disagree while having a civil conversation.Comments must conform to the posted topic.Please do not spam.</p>
        </form>
        <div className="flex">
            <button className="comments--form__ctl px-4 py-2 bg-brand text-fluid-0 font-bold text-accent-text-1 rounded-full w-full uppercase hover:bg-accent-surface-1 border-2 border-solid border-[goldenrod] grow-1" type="s ubmit">Post Comment</button>
            <button className="comments--cancel comments--form__ctl px-4 py-2 bg-brand text-fluid-0 font-bold text-accent-text-1 rounded-full w-full uppercase hover:bg-accent-surface-1 border-2 border-solid border-[goldenrod] hidden" type="s ubmit">Cancel Comment</button>
        </div>

    </div>);
}

export default PostCommentForm; 
