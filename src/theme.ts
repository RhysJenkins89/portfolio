const rootElement = document.querySelector("html") as HTMLElement;
const themeSelector = document.querySelector(".theme-text") as HTMLElement;
const userHasSelectedTheme: boolean = Boolean(window.localStorage.getItem("themeSelection"));
let isDarkMode: boolean;

function themeToggle(): void {
    checkUserThemePreference();

    // document.body.style.transition = "all 1s ease";
    // The initial theme is dark, so if the user has previously selected a light theme, the JS will kick in
    // and change the colour over the course of a second if the above transition property is active.

    themeSelector.addEventListener("click", () => {
        if (isDarkMode) {
            rootElement.dataset.theme = "light";
            window.localStorage.setItem("themeSelection", "light");
            isDarkMode = false;
        } else {
            rootElement.dataset.theme = "dark";
            window.localStorage.setItem("themeSelection", "dark");
            isDarkMode = true;
        }
    });
}

function checkUserThemePreference(): void {
    if (!userHasSelectedTheme) return;
    rootElement.dataset.theme = window.localStorage.getItem("themeSelection")!;
}

export default themeToggle;
