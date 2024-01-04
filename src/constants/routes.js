import LandingPage from '../components/landing-page/landing-page.jsx'
import Contact from '../components/contact/contact-form.jsx'
import Blog from '../components/blog/blog.jsx'

export const ROUTES = {
  home: {
    link: '/',
    tabLabel: 'Home',
    render: true,
    enabled: true,
    renderer: LandingPage,
  },
  contact: {
    link: '/contact',
    tabLabel: 'Contact',
    render: true,
    enabled: true,
    renderer: Contact,
  },
  blog: {
    link: '/blog',
    tabLabel: 'Blog',
    render: true,
    enabled: true,
    renderer: Blog,
  },
}

const getRoutes = (route) => {
  const activeRoute = Object.keys(ROUTES).reduce((acc, cur) => {
    acc.push({
      ...ROUTES[cur],
      active: (!route && cur === 'home') || cur.includes(route),
    })
    return acc
  }, [])
  return activeRoute
}
export default getRoutes
