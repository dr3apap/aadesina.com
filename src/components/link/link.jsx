import React from "react";
const Link = ({ route, children, linkStyle }) => {
    return <a href={route} className={linkStyle?linkStyle:"text-surface-headings text-fluid-1 font-bold"}>{children}</a>

}
export default Link;