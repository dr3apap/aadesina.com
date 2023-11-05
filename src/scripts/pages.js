function pageNavigator() {
  const Navigator = Array.prototype.slice.call(
    document.querySelectorAll('nav ul > li'),
    2
  )
  const footer = Array.prototype.slice.call(
    document.querySelectorAll('footer ul > li'),
    3
  )

  //const blogPage = document.querySelector('#/blog')
  const contactPage = document.querySelector('[data-tab-panel]')
  console.log(contactPage)
  let currentPageLink = ''
  function currentPage(e) {
    e.preventDefault()
    if (currentPageLink.length == 0) {
      currentPageLink = e.currentTarget
    } else {
      if (currentPageLink.getAttribute('href').length > 0) {
        currentPageLink.classList.remove('current')
        currentPageLink.classList.add('hover')
        currentPageLink = e.currentTarget
      }
      currentPageLink.classList.remove('hover')
      currentPageLink.classList.add('current')
      currentPageLink.href = `${contactPage.getAttribute('id').slice(1)}`
    }
  }
}

document.addEventListener('DOMContentLoaded', pageNavigator);
