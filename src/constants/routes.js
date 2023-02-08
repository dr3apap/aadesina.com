

const ROUTES = {
    home:{
        link:'/home',
        tabLabel:'Feed',
        render:true,
        enabled:true,
        renderer:"",
    },
    about:{
        link:'/about',
        tabLabel:'About',
        render:true,
        enabled:true,
        renderer:"",
    },
    demos:{
        link:'/Demos',
        tabLabel:'Demos',
        render:true,
        enabled:true,
        renderer:"",
    },
    contact:{
        link:'/Contact',
        tabLabel:'Contact',
        render:true,
        enabled:true,
        renderer:"",
    },
    blog:{
        link:'/Sharing',
        tabLabel:'About',
        render:true,
        enabled:true,
        renderer:"",
    }



}

export const getRoutes = route => {
    const activeRoute = Object.keys(ROUTES).reduce((acc, cur) => {
       acc.push({
            ...ROUTES[cur],
            active:(!route && cur === ROUTES.home.link.replace(/\//, "")) || cur.includes(route)
       });
       return acc;
    },[]);
    return activeRoute;
}
