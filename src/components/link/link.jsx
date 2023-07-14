import React from "react";
const Link = ({ route, children, linkStyle }) => {
    return <a href={route} className={linkStyle?linkStyle:"text-brand-fill text-fluid-1"}>{children}</a>

}
export default Link;