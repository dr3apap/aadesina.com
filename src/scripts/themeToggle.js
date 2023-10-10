const TOGGLE_FORM = document.querySelector('#theme-toggle')
const TOGGLE_BUTTON = TOGGLE_FORM.querySelector('button')
const TOGGLE_LABEL = TOGGLE_FORM.querySelector('#theme-toggle-label')
const url = TOGGLE_FORM.action
const navToggle = document.querySelector('div[aria-controls]')
const navMenu = document.querySelector('nav ul')
const bar = document.querySelector('.bar')

function toggleNav(e) {
  let barState =
    e.currentTarget.firstElementChild.getAttribute('aria-expanded') == 'true' ||
    false
  bar.setAttribute('aria-expanded', !barState)
  navMenu.classList.toggle('show')
}
navToggle.addEventListener('click', toggleNav)

const toggleTheme = async () => {
  const themeState = await (
    await fetch(`${url}?${new URLSearchParams({ client: true })}`)
  ).json()
  document.documentElement.dataset.theme = themeState.theme
  const label = `Set theme to ${themeState.nextTheme}`
  TOGGLE_LABEL.textContent = label
  TOGGLE_BUTTON.title = label
}
const handleSubmit = (e) => {
  e.preventDefault()
  toggleTheme()
}
TOGGLE_FORM.addEventListener('submit', handleSubmit)

