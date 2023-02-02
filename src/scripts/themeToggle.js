const TOGGLE_FORM = document.querySelector("#theme-toggle");
const TOGGLE_BUTTON = TOGGLE_FORM.querySelector("button");
const TOGGLE_LABEL = TOGGLE_FORM.querySelector("#theme-toggle-label");

const toggleTheme = async () => {
    const themeState = await (await fetch(`/theme-toggle?${new URLSearchParams({client:true,})}`)).json();
  document.documentElement.dataset.theme = themeState.theme;
  const label = `Set theme to ${themeState.nextTheme}`;
  TOGGLE_LABEL.textContent = label 
  TOGGLE_BUTTON.title = label;

}
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleTheme();
  } 
  TOGGLE_FORM.addEventListener("submit", handleSubmit);