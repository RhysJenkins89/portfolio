const rootElement = document.querySelector("html") as HTMLElement;
const themeSelector = document.querySelector(".theme-text") as HTMLElement;
const themeImages = document.querySelectorAll("[data-theme-toggle]") as NodeListOf<HTMLElement>;
const userHasSelectedTheme: boolean = Boolean(window.localStorage.getItem("themeSelection"));
let isDarkMode: boolean = true;

window.onload = () => {
    document.body.style.transition = "all 1s ease";
    const allTextElements: NodeListOf<HTMLElement> = document.querySelectorAll(".text");
    allTextElements.forEach((element) => {
        element.style.transition = "all 1s ease";
    });
};

function themeToggle(): void {
    checkUserThemePreference();

    themeImages.forEach((image) => {
        image.addEventListener("click", () => {
            // Put this code into its own function
            if (isDarkMode) {
                document.querySelector(".sun")!.classList.add("hidden"); // Potentially guard here, but we're sorted
                rootElement.dataset.theme = "light";
                window.localStorage.setItem("themeSelection", "light");
                isDarkMode = false;
            } else {
                rootElement.dataset.theme = "dark";
                window.localStorage.setItem("themeSelection", "dark");
                isDarkMode = true;
            }
        });
    });

    themeSelector.addEventListener("click", () => {
        // Put this code into its own function
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
    if (window.localStorage.getItem("themeSelection") === "dark") {
        return;
    } else {
        isDarkMode = false;
    }
}

export default themeToggle;
