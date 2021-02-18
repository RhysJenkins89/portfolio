// Variables
const hamButton = document.getElementById("button");
const overlay = document.querySelector(".navigation__overlay");
const links = document.querySelector(".navigation__links");
const navBackground = document.querySelector(".navigation__links--top");
const newCheck = document.querySelector(".nav__ham");
let menuOpen = false;

// Waypoint function
const waypointFunction = () => {
    newCheck.classList.toggle("newStyle");
    if (menuOpen) {
        hamButton.classList.toggle("background");
        // navBackground.classList.toggle("navigation__open");
    }
}

const firstOffset = {offset: "25%"}
const standardOffset = {offset: "7%"}

// Waypoints

// About
const aboutMain = $(".about");

aboutMain.waypoint(waypointFunction, firstOffset);

// Skills
const skillsHeader = $(".skills");

skillsHeader.waypoint(waypointFunction, standardOffset);

const skillsMain = $(".skills__content");

skillsMain.waypoint(waypointFunction, standardOffset);

// Projects
const projectsHeader = $(".projects");

projectsHeader.waypoint(waypointFunction, standardOffset);

const projectsMain = $(".projects__content");

projectsMain.waypoint(waypointFunction, standardOffset);

// Contact
const contactHeader = $(".contact");

contactHeader.waypoint(waypointFunction, standardOffset);

const contactMain = $(".contact__content");

contactMain.waypoint(waypointFunction, standardOffset);

// Hamburger
hamButton.addEventListener("click", function() {
    if (!menuOpen) {    
        hamButton.classList.add("open");
        overlay.classList.add("navigation__open")
        links.classList.add("navigation__open");
        if (!newCheck.classList.contains("newStyle")) {
            hamButton.classList.add("background");
            // navBackground.classList.add("navigation__open");
        }
        menuOpen = true;
    } else {
        hamButton.classList.remove("open");
        hamButton.classList.remove("background");
        // navBackground.classList.remove("navigation__open");
        overlay.classList.remove("navigation__open");
        links.classList.remove("navigation__open");
        menuOpen = false;
    }
});

// Overlay
overlay.addEventListener("click", function () {
    overlay.classList.remove("navigation__open");
    links.classList.remove("navigation__open");
    hamButton.classList.remove("open");
    hamButton.classList.remove("background");
    // navBackground.classList.remove("navigation__open");
    menuOpen = false;    
});

// Nav links
links.addEventListener("click", () => {
    overlay.classList.remove("navigation__open");
    links.classList.remove("navigation__open");
    hamButton.classList.remove("open");
    hamButton.classList.remove("background");
    // navBackground.classList.remove("navigation__open");
    menuOpen = false;
});

// The following removes the global transition: none once the page has loaded.  
window.addEventListener("load", () => {
    document.body.classList.remove("preload");
});