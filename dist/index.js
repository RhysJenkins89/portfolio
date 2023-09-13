"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = require("./theme");
(0, theme_1.default)();
const rootElement = document.querySelector("html");
const overlay = document.querySelector(".overlay");
const themesContainer = document.querySelector(".theme-list-container");
checkUserThemePreference();
(function addTransitionsToElements() {
    themesContainer.style.transition = "all .75s ease";
})();
(function themeSelector() {
    addListenerToOverlay();
    const themeSelector = document.querySelector(".theme-container p");
    themeSelector.addEventListener("click", () => {
        overlay.classList.toggle("visible");
        themesContainer.classList.toggle("visible");
    });
    const themeItems = document.querySelectorAll(".theme-list-container ul li");
    themeItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            const targetElement = event.target;
            const themeString = targetElement.innerText.toLowerCase();
            if (themeString.indexOf(" ") >= 0) {
                const editedString = themeString.replace(/ /g, "-");
                rootElement.dataset.theme = editedString;
                overlay.classList.remove("visible");
                themesContainer.classList.remove("visible");
                window.localStorage.setItem("theme-selection", editedString);
                return;
            }
            rootElement.dataset.theme = themeString;
            overlay.classList.remove("visible");
            themesContainer.classList.remove("visible");
            window.localStorage.setItem("theme-selection", themeString);
        });
    });
})();
function addListenerToOverlay() {
    overlay.addEventListener("click", () => {
        toggleOverlay();
    });
}
function toggleOverlay() {
    overlay.classList.toggle("visible");
    themesContainer.classList.toggle("visible");
}
function checkUserThemePreference() {
    const userHasSelectedTheme = Boolean(window.localStorage.getItem("theme-selection"));
    if (!userHasSelectedTheme)
        return;
    rootElement.dataset.theme = window.localStorage.getItem("theme-selection");
}
