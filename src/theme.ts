export default function testfunc(): void {
    console.log("testing a function");
}

// const rootElement = document.querySelector("html") as HTMLElement;
// const overlay = document.querySelector(".overlay") as HTMLElement;
// const themesContainer = document.querySelector(".theme-list-container") as HTMLElement;

// checkUserThemePreference();
// (function addTransitionsToElements(): void {
// themesContainer.style.transition = "all .75s ease";
// })();

// (function themeSelector(): void {
// addListenerToOverlay();
// const themeSelector = document.querySelector(".theme-container p") as HTMLElement;
// themeSelector.addEventListener("click", () => {
// overlay.classList.toggle("visible");
// themesContainer.classList.toggle("visible");
// });
// const themeItems = document.querySelectorAll(".theme-list-container ul li") as NodeListOf<HTMLElement>;
// themeItems.forEach((item) => {
// item.addEventListener("click", (event: Event) => {
// const targetElement = event.target as HTMLElement;
// const themeString: string = targetElement.innerText.toLowerCase();
// if (themeString.indexOf(" ") >= 0) {
// const editedString: string = themeString.replace(/ /g, "-");
// rootElement.dataset.theme = editedString;
// overlay.classList.remove("visible");
// themesContainer.classList.remove("visible");
// window.localStorage.setItem("theme-selection", editedString);
// return;
// }
// rootElement.dataset.theme = themeString;
// overlay.classList.remove("visible");
// themesContainer.classList.remove("visible");
// window.localStorage.setItem("theme-selection", themeString);
// });
// });
// })();

// function addListenerToOverlay(): void {
// overlay.addEventListener("click", () => {
// toggleOverlay();
// });
// }

// function toggleOverlay(): void {
// overlay.classList.toggle("visible");
// themesContainer.classList.toggle("visible");
// }

// function checkUserThemePreference(): void {
// const userHasSelectedTheme: boolean = Boolean(window.localStorage.getItem("theme-selection"));
// if (!userHasSelectedTheme) return;
// rootElement.dataset.theme = window.localStorage.getItem("theme-selection")!;
// }