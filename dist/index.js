"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var moonContainer = document.querySelector(".moon-container");
var sunContainer = document.querySelector(".sun-container");
var sunIcon = document.querySelector(".sun-icon");
var moonIcon = document.querySelector(".moon-icon");
var bodyElement = document.querySelector("#body");
var textElements = document.querySelectorAll(".text");
window.onload = function (event) {
    bodyElement.style.transition = "all 1s ease";
    textElements.forEach(function (element) {
        element.style.transition = "all 1s ease";
    });
};
function darkLightToggle() {
    function toggleTheme() {
        bodyElement.classList.toggle("light-mode");
        textElements.forEach(function (element) {
            return element.classList.toggle("light-mode");
        });
    }
    var clickDisabled = false;
    function addListeners(elementOne, iconOne, elementTwo, iconTwo) {
        elementOne.addEventListener('click', function () {
            if (clickDisabled)
                return;
            if (elementOne.classList.contains("moved"))
                return;
            clickDisabled = true;
            elementOne.style.transition = "all 1s ease-out";
            iconOne.style.transition = "all 1s ease-in";
            elementOne.classList.add("fade-out");
            iconOne.classList.add("fade-out");
            elementTwo.classList.remove("moved");
            iconTwo.classList.remove("moved");
            if (elementTwo.classList.contains("fade-out")) {
                elementTwo.classList.remove("fade-out");
                iconTwo.classList.remove("fade-out");
            }
            iconTwo.style.cursor = "pointer";
            iconOne.style.cursor = "default";
            toggleTheme();
            setTimeout(function () {
                elementOne.classList.add("moved");
                iconOne.classList.add("moved");
                elementOne.style.transition = "all 1s ease-in";
                iconOne.style.transition = "all 1s ease-out";
            }, 1000);
            setTimeout(function () {
                clickDisabled = false;
            }, 2000);
        });
    }
    // If I'm going to add a theme selector, this function will need to be significantly rewritten. Or, probably more likely, scrapped altogether. 
    addListeners(sunContainer, sunIcon, moonContainer, moonIcon);
    addListeners(moonContainer, moonIcon, sunContainer, sunIcon);
}
// IIFE 
(function themeSelector() {
    // On hover, show the user a popup with the available themes
    // On theme click, add the corresponding class to the body
    // This will talk to the scss, which updates the colour variables available
    var themeIcon = document.querySelector('.theme-icon');
    var themeSelector = document.querySelector('.theme-list-container');
    var themeElements = document.querySelectorAll('.theme-element');
    themeIcon.addEventListener('click', function () {
        // Note that themeIcon is the container for the placeholder text
        // When the user clicks the placeholder show/hide the themeSelector
        themeSelector.classList.toggle('visible');
        console.log('theme icon class clicked');
    });
})();
function renderProjects() {
    return __awaiter(this, void 0, void 0, function () {
        var cardsContainer, response, projectData, project;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cardsContainer = document.querySelector(".projects-container");
                    return [4 /*yield*/, fetch("./data/projects.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    projectData = _a.sent();
                    for (project in projectData) {
                        cardsContainer.insertAdjacentHTML("beforeend", "\n                <div class=\"project\">\n                    <h3 class=\"text project-heading\">".concat(projectData[project].title, "</h3>\n                    <p class=\"text project-subheading\">").concat(projectData[project].subheading, "</p>\n                    <p class=\"text project-text\">").concat(projectData[project].bodyText, "</p>\n                </div>\n            "));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// darkLightToggle()
// renderProjects()
