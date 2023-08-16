import React from "react";
function PostCommenthtmlForm(){
    return ( <form action="" id="comments" className="mt-32 p-2">
   <label className="block mb-8 pb-4  text-fluid-1 text-brand-secondary-light-text1" htmlFor="fullname" id="">Full Name<input className="appearance-none w-full h-20 pl-4 border border-solid border-brand-light" type="text" name="fullname" id="fullname"/></label>
   <label className="block mb-8 pb-4  text-fluid-1 text-brand-secondary-light-text1" htmlFor="" id="email">Email<input className="w-full h-20 pl-4 border border-solid border-brand-light" type="text" name="" id="email"/></label>
  <label className="block mb-8 pb-4 text-fluid-1 text-brand-secondary-light-text1" htmlFor="message">Markdown is Accepted<textarea className="w-full border border-solid border-brand-light p-3" name="message" id="meassage" cols="30" rows="10" placeholder="Comment:Use ``` for code block"></textarea></label>
  <label className="block mb-4 text-fluid-1 text-brand-secondary-light-text1" htmlFor=""><input className="mr-4 form-input border border-solid border-brand-light-text1" type="checkbox" name="" id=""/>Subscribe to comments</label>
  <p className="mb-8">Please let's keep it clean.We're all adulbts let's learn from each other, agree to disagree while having a civil conversation.Comments must conhtmlForm to the posted topic.Please do not spam.</p>
   <button className="cta-btn px-8 py-4 bg-brand text-fluid-1 font-bold text-text-1-accent rounded-full w-full uppercase hover:bg-hover-light border-2 border-solid border-[goldenrod]">Post Comment</button>
</form>);
}

export default PostCommenthtmlForm; 