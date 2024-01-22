function pagesRouter() {
  const pages = {}
  const linksObj = { nav: {}, footer: {} }
  const DEFAULT_PAGE = '/'
  let currentPage = DEFAULT_PAGE

  const navLinks = Array.from(
    document.querySelectorAll('nav ul > li a')
  ).filter((el, i) => ![1, 2].includes(i))

  document.querySelectorAll('[data-tab-panel]').forEach((panel) => {
    const path = panel.getAttribute('id')
    pages[path] = panel
  })
  const footerLinks = Array.from(
    document.querySelectorAll('footer ul > li a')
  ).filter((el, i) => ![1, 2].includes(i))

  navLinks.forEach((navLink) => {
    const link = navLink.getAttribute('href')
    linksObj.nav[link] = navLink
  })
  footerLinks.forEach((footerLink) => {
    const link = footerLink.getAttribute('href')
    linksObj.footer[link] = footerLink
  })

  // It's a solo contact form links
  const soloLink = document.querySelector('#solo')
  if (soloLink)
    soloLink.addEventListener('click', (e) => {
      e.preventDefault()
      const [prevPage, nextPage] = pagesExtractor(navLinks, e.currentTarget)
      pageSwitch(prevPage, nextPage)
    })

  function linkSync(prev, next) {
    prev.dataset.tabCurrent = 'false'
    prev.querySelector('span').classList.remove('border-b-brand', 'text-text-1')
    next.dataset.tabCurrent = 'true'
    next.querySelector('span').classList.add('border-b-brand', 'text-text-1')
  }

  function pageSwitch(prev, next) {
    if (next && prev && typeof prev != 'object' && typeof next != 'object')
      return
    linkSync(prev, next)
    pages[prev.getAttribute('href')].className = 'hidden'
    pages[next.getAttribute('href')].className = 'block'
  }

  function pageNavigator(link) {
    return function (e) {
      e.preventDefault()
      let prevLink
      let currentLink
      if ((currentLink = e.currentTarget.getAttribute('href')) == currentPage)
        return
      prevLink = currentPage
      currentPage = currentLink
      pageSwitch(linksObj[link][prevLink], e.currentTarget)
      const otherLink = link == 'nav' ? 'footer' : 'nav'
      linkSync(linksObj[otherLink][prevLink], linksObj[otherLink][currentLink])
    }
  }

  for (const el of navLinks) el.addEventListener('click', pageNavigator('nav'))

  footerLinks.forEach((el) =>
    el.addEventListener('click', pageNavigator('footer'))
  )
}
document.addEventListener('DOMContentLoaded', pagesRouter)
