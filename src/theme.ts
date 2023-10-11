const rootElement = document.querySelector("html") as HTMLElement;
const themeSelector = document.querySelector(".theme-text") as HTMLElement;
const userHasSelectedTheme: boolean = Boolean(window.localStorage.getItem("themeSelection"));
let isDarkMode: boolean;

function themeToggle(): void {
    checkUserThemePreference();

    window.onload = () => {
        document.body.style.transition = "all 1s ease";
        const allTextElements: NodeListOf<HTMLElement> = document.querySelectorAll(".text");
        allTextElements.forEach((element) => {
            element.style.transition = "all 1s ease";
        });
    };

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
