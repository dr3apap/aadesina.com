import { HTMLRewriter} from "https://ghuc.cc/worker-tools/html-rewriter";
const COOKIE_KEY = "adebola-theme"
const  THEME_STATE = ["system", "light", "dark"]

export default  async (request, context) => {
    const res = await context.next();
    const contentType = res.headers.get("content-type");

    if(!contentType.startsWith("text/html") || request.url.includes("/demos/")) return;

    const theme = context.cookies.get(COOKIE_KEY) || THEME_STATE[0];
    const nextIndex = THEME_STATE.indexOf(theme) + 1;
    const nextTheme = THEME_STATE.at(nextIndex) || THEME_STATE[0];
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
    value: nextTheme,
    path:"/",
    secure:true,
    httpOnly:true,
    expires:new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
   });

   if (isClient){
    const headers = {
        "content-type":"application/json",
        // "Access-Control-Allow-Origin": "http://localhost:3000",
        // "Vary": "Origin",

    };

    return new Response(JSON.stringify({theme:nextTheme, nextTheme:afterNextTheme}), {
        headers,
        statusCode:200,
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