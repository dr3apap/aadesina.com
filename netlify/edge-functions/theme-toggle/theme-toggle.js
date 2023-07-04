//import 'dotenv/config';
import { HTMLRewriter} from "https://ghuc.cc/worker-tools/html-rewriter";
const COOKIE_KEY = "Adebola-Adesina";
const  THEME_STATE = ["system", "light", "dark"]

export default  async (request, context) => {
    // Get the res context so we can do some logic with it
    const res = await context.next();
    // We need the contenttype we are sending 
    const contentType = res.headers.get("content-type");
    // We don't want to send html on this route and we don't want to respond to request from demos path
    // it has his own thing
    if(!contentType.startsWith("text/html") || request.url.includes("/demos/")) return;
    // If the user send a cookie use it else (this is  the first time)
    const theme = context.cookies.get(COOKIE_KEY) || THEME_STATE[0];
        // If user has no cookie we default to system since that will be the first time they are 
        // changing theme
    const nextIndex = THEME_STATE.indexOf(theme) + 1;
    // Dark -> system
    const nextTheme = THEME_STATE.at(nextIndex) || THEME_STATE[0];
    // system -> light
    const afterNextTheme = THEME_STATE.at(THEME_STATE.indexOf(nextTheme) + 1) || THEME_STATE[0]; 
    //Get the real path for redirection in case is not from toggle path
    const path = request.headers.get("referer");
    // Check if the url has theme-toggle and redirect if not
    let url;
    if ((url = request.url).includes("theme-toggle")) {
    url = new URL(url);
    // Check searhcParams to see if requrest is  from client-side
    const isClient = (url.searchParams.get("client")) === "true"; 
   // Set response up if we made it here
   context.cookies.set({
    name: COOKIE_KEY,
    value: nextTheme, // for next theme
    path:"/",
    secure:true,
    httpOnly:true,
    expires:new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
   });
   if (isClient){
   const headers = {
        "content-type":"application/json",
        // "Access-Control-Allow-Origin": "http://localhost:3000",
        // "Vary": "Origin",

    };

    return new Response(JSON.stringify({theme:nextTheme, nextTheme:afterNextTheme}), {
        headers,
        status:200,
    });
   } 

        return new Response("Redirecting...", {
            status:301,
            headers:{
                Location:path,
                "Cache-Control":"no-cache",
            },
        })
    } 
    

   const label = `Set theme to ${nextTheme}`;

   return new HTMLRewriter().on('html', {
    element(element) {
        element.setAttribute("data-theme", theme)

   },
}).on('span[id=theme-toggle-label]', {
    element(element){
        element.setInnerContent(label);
    },
}).on('.theme-toggle', {
    element(element){
        element.setAttribute('title', label);
    }
}).transform(res);

}