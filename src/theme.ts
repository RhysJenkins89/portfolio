const rootElement = document.querySelector("html") as HTMLElement;
const themeIcons = document.querySelectorAll("[data-theme-toggle]") as NodeListOf<HTMLElement>;
const sunIcon = document.querySelector(".sun") as HTMLElement;
const moonIcon = document.querySelector(".moon") as HTMLElement;
const userHasSelectedTheme: boolean = Boolean(window.localStorage.getItem("themeSelection"));
let isDarkMode: boolean = true;

// Add the scss to the webpack build

window.onload = () => {
    document.body.style.transition = "all 1s ease";
    const allTextElements: NodeListOf<HTMLElement> = document.querySelectorAll(".text");
    allTextElements.forEach((element) => {
        element.style.transition = "all 1s ease";
    });
};

function themeToggle(): void {
    checkUserThemePreference();

    themeIcons.forEach((icons) => {
        icons.addEventListener("click", () => {
            updateTheme();
        });
    });
}

function updateTheme(): void {
    if (isDarkMode) {
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
        rootElement.dataset.theme = "light";
        window.localStorage.setItem("themeSelection", "light");
        isDarkMode = false;
    } else {
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
        rootElement.dataset.theme = "dark";
        window.localStorage.setItem("themeSelection", "dark");
        isDarkMode = true;
    }
}

function checkUserThemePreference(): void {
    if (!userHasSelectedTheme) return;
    rootElement.dataset.theme = window.localStorage.getItem("themeSelection")!;
    if (window.localStorage.getItem("themeSelection") === "dark") {
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
        return;
    } else {
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
        isDarkMode = false;
    }
}

export default themeToggle;
