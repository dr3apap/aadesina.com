function pagesRouter() {
  const pages = {}
  let currentPage
  let currentPageLink
  const pageLinks = Array.from(
    document.querySelectorAll('nav ul > li  a')
  ).filter((el, i) => ![3, 4].includes(i))

  document.querySelectorAll('[data-tab-panel]').forEach((panel) => {
    const path = panel.getAttribute('id')
    pages[path] = panel
  })
  const footerNavigator = Array.from(
    document.querySelectorAll('footer ul > li a')
  ).filter((el, i) => [0, 1].includes(i))
  footerNavigator.forEach((el) => el.addEventListener('click', footerSwitch))
  const soloLink = document
    .querySelector('#solo')
    .addEventListener('click', (e) => {
      e.preventDefault()
      const [prevPage, nextPage] = pagesExtractor(pageLinks, e.currentTarget)
      pageSwitch(prevPage, nextPage)
    })

  function footerSwitch(e) {
    e.preventDefault()
    let footerPrev
    if (e.currentTarget.dataset.tabCurrent == 'false') {
      const [prevPage, nextPage] = pagesExtractor(pageLinks, e.currentTarget)
      footerPrev = footerNavigator.find((el) => el.dataset.tabCurrent == 'true')
      pageSwitch(prevPage, nextPage)
      syncFooterLinks(footerPrev, e.currentTarget)
    }
  }

  function pagesExtractor(links, nextLink) {
    let nextPage
    let prevPage
    nextPage = links.find(
      (el) => el.getAttribute('href') == nextLink.getAttribute('href')
    )
    prevPage = links.find((el) => el.dataset.tabCurrent == 'true')
    return [prevPage, nextPage]
  }

  function syncFooterLinks(prev, next) {
    if (next && prev && typeof prev != 'object' && typeof next != 'object')
      return
    prev.dataset.tabCurrent = false
    prev.querySelector('span').classList.remove('border-b-brand', 'text-text-1')
    next.dataset.tabCurrent = true
    next.querySelector('span').classList.add('border-b-brand', 'text-text-1')
  }

  function pageSwitch(prev, next) {
    if (next && prev && typeof prev != 'object' && typeof next != 'object')
      return
    prev.dataset.tabCurrent = false
    prev.querySelector('span').classList.remove('border-b-brand', 'text-text-1')
    next.dataset.tabCurrent = true
    next.querySelector('span').classList.add('border-b-brand', 'text-text-1')
    pages[prev.getAttribute('href')].className = 'hidden'
    pages[next.getAttribute('href')].className = 'block'
  }

  function pageNavigator(e) {
    e.preventDefault()
    pageLinks.forEach((el) => {
      if (el.dataset.tabCurrent == 'true') currentPage = el
    })
    if (parseLink(e.currentTarget.getAttribute('href')) == currentPage) return
    pageSwitch(currentPage, e.currentTarget)
    if (e.currentTarget.getAttribute('href') != '/contact') {
      const [footerPrev, footerNext] = pagesExtractor(
        footerNavigator,
        e.currentTarget
      )
      syncFooterLinks(footerPrev, footerNext)
    }
  }

  for (const el of pageLinks) el.addEventListener('click', pageNavigator)

  function parseLink(link) {
    return link == '/home' || link == '/' ? '/' : link.slice(1)
  }
}

document.addEventListener('DOMContentLoaded', pagesRouter)
