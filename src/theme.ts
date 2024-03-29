const rootElement = document.querySelector("html") as HTMLElement;
const themeIcons = document.querySelectorAll("[data-theme-toggle]") as NodeListOf<HTMLElement>;
const sunIcon = document.querySelector(".sun") as HTMLElement;
const moonIcon = document.querySelector(".moon") as HTMLElement;
const allTextElements: NodeListOf<HTMLElement> = document.querySelectorAll(".text");
const allFormElements: NodeListOf<HTMLInputElement> = document.querySelectorAll("[data-form-element]");
const userHasSelectedTheme: boolean = Boolean(window.localStorage.getItem("themeSelection"));
let isDarkMode: boolean = true;

window.onload = () => {
    const transitionAllOneSecond: string = "all 1s ease";
    document.body.style.transition = transitionAllOneSecond;
    allTextElements.forEach((element) => {
        element.style.transition = transitionAllOneSecond;
    });
    allFormElements.forEach((element) => {
        element.style.transition = transitionAllOneSecond;
    });
};

function themeToggle(): void {
    checkPreviousTheme();

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

function checkPreviousTheme(): void {
    if (!userHasSelectedTheme) return;
    rootElement.dataset.theme = window.localStorage.getItem("themeSelection")!;
    if (window.localStorage.getItem("themeSelection") === "dark") {
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
    } else {
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
        isDarkMode = false;
    }
}

export default themeToggle;
