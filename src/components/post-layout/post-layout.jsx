import PostHeader from "../post-header/post-header";
import BlogComment from "../post-comment/post-comment";
import BlogCommentForm from "../post-comment-form/comment-form";
import  PostContentBlock  from "../post-content/PostContentBlock.jsx";


function PostLayout({sharelink, heroImageSrc, ...props}){

return <>
        <PostHeader heroImageSrc={heroImageSrc}  sharelink={sharelink} {...props}/>        
        <main className="p-8 mx-auto my-48 max-w-screen-md overflow-hidden">
         <article  className="grid grid-cols-1 gap-y-10">
            <PostContentBlock type="article" children={props.body}/>
            {props.siteConfig?.footer && (
           <aside className="relative my-12 rounded-lg bg-surface-2 text-text-2 p-9 leading-tight gap-2 text-fluid-1 grid place-items-center">
              <span className="absolute top-0 left-0 p-2 bg-surface-4 rounded-md -translate-x-1/4 border-2 border-surface-1 -translate-y-1/4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                </svg>
              </span>
              <PostContentBlock type="footer">{props.siteConfig?.footer}</PostContentBlock>
            </aside>)}
           
            <form className="mb-16 border-2 border-dotted border-accent p-2 flex" id="subscription" action="" method="POST">
            <label className="block text-fluid-1 py-4 w-[30%]" htmlFor="subscribe">Don't want to miss a thing?</label>
            <input type="text" name="subscribe" id="subscribe" className="p-2 border border-solid m-0 w-[30%]" placeholder="Subscribe to feed!"/>
            <input type="submit" name="subscription" value="Subscribe" className="p-2 bg-accent border border-solid -ml-3 text-brand w-[30%]"/>
           
            </form>
        <h3
            className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center mb-12 font-bold text-fluid-1 before:block before:h-4 before:bg-gradient-to-r before:from-accent before:to-brand  after:block after:h-4 after:bg-gradient-to-l after:from-accent after:to-brand"
        >
            Reader Comments
        </h3>
        <ul className="comments border-2 border-solid p-8">
          { props.comments.map((comment) => <BlogComment comment={comment}/> )}
          <BlogCommentForm/>
        </ul>   
        </article>
    </main>

</>;
}
export default PostLayout;