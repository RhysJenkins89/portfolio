// Variables
const hamButton = document.getElementById("buttonHam");
const overlay = document.querySelector(".navigation__overlay");
const links = document.querySelector(".navigation__links");
const linksProper = document.getElementsByClassName("navigation__links--link")
const navBackground = document.querySelector(".navigation__links--top");
const navHam = document.querySelector(".nav__ham");
const toggleButton = document.getElementsByClassName("navigation__button")[0];
const cards = document.getElementsByClassName("card");
const buttons = document.getElementsByClassName("button");
let menuOpen = false;
let darkModeOn;

const enableDarkMode = () => {
    document.body.classList.add("dark");
    links.classList.add("dark");
    document.querySelector(".button--dark").classList.add("dark-on");
    document.querySelector(".button--light").classList.add("light-on");
    toggleButton.classList.add("dark");
    navHam.classList.remove("ham-dark");
    hamButton.classList.remove("background");

    // Looping over the nav text
    for (let i = 0; i < linksProper.length; i++) {
        let eachLink = linksProper[i];
        eachLink.classList.add("dark");
    }

    // Looping over the heading elements
    const headers = document.getElementsByClassName("header");
    for (let i = 0; i < headers.length; i++) {  
        let eachHeader = headers[i];
        eachHeader.classList.add("dark");
    }

    // Looping over the text elements
    const paragraphs = document.getElementsByClassName("text");
    for (let i = 0; i < paragraphs.length; i++) {
        let eachParagraph = paragraphs[i];
        eachParagraph.classList.add("dark");
    }

    // Looping over the card elements
    for (let i = 0; i < cards.length; i++) {
        let eachCard = cards[i];
        eachCard.classList.add("dark");
    }

    // Looping over the card headers
    const cardHeaders = document.getElementsByClassName("card__header")
    for (let i = 0; i < cardHeaders.length; i++) {
        let eachHead = cardHeaders[i];
        eachHead.classList.add("dark");
    }

    // Looping over the card text
    const cardParagraphs = document.getElementsByClassName("card__text")
    for (let i = 0; i < cardParagraphs.length; i++) {
        let eachPara = cardParagraphs[i];
        eachPara.classList.add("dark");
    }

    // Looping over the button elements
    for (let i = 0; i < buttons.length; i++) {
        let eachButton = buttons[i];
        eachButton.classList.add("dark");
    }

    darkModeOn = true;
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    document.body.classList.remove("dark");
    links.classList.remove("dark");
    document.querySelector(".button--dark").classList.remove("dark-on");
    document.querySelector(".button--light").classList.remove("light-on");
    toggleButton.classList.remove("dark");
    navHam.classList.add("ham-dark");


    // Looping over the nav text
    for (let i = 0; i < linksProper.length; i++) {
        let eachLink = linksProper[i];
        eachLink.classList.remove("dark");
    }

    // Looping over the heading elements
    const headers = document.getElementsByClassName("header");
    for (let i = 0; i < headers.length; i++) {  
        let eachHeader = headers[i];
        eachHeader.classList.remove("dark");
    }

    // Looping over the text elements
    const paragraphs = document.getElementsByClassName("text");
    for (let i = 0; i < paragraphs.length; i++) {
        let eachParagraph = paragraphs[i];
        eachParagraph.classList.remove("dark");
    }

    // Looping over the card elements
    for (let i = 0; i < cards.length; i++) {
        let eachCard = cards[i];
        eachCard.classList.remove("dark");
    }

    // Looping over the card headers
    const cardHeaders = document.getElementsByClassName("card__header")
    for (let i = 0; i < cardHeaders.length; i++) {
        let eachHead = cardHeaders[i];
        eachHead.classList.remove("dark");
    }

    // Looping over the card text
    const cardParagraphs = document.getElementsByClassName("card__text")
    for (let i = 0; i < cardParagraphs.length; i++) {
        let eachPara = cardParagraphs[i];
        eachPara.classList.remove("dark");
    }

    // Looping over the button elements
    for (let i = 0; i < buttons.length; i++) {
        let eachButton = buttons[i];
        eachButton.classList.remove("dark");
    }

    darkModeOn = false;
    localStorage.setItem("darkMode", null);
}

// Dark mode local storage
let darkMode = localStorage.getItem("darkMode");
if (darkMode == "enabled") {
    enableDarkMode();
    darkModeOn = true;
}

// Waypoint functions
const waypointTop = (direction) => {
    if (document.body.classList.contains("dark")) return;
    if (direction == "up") navHam.classList.add("ham-dark");
    if (direction == "down") navHam.classList.remove("ham-dark");
    if (menuOpen && direction == "up") hamButton.classList.remove("background");
    if (menuOpen && direction == "down") hamButton.classList.add("background");
} 

const waypointBottom = (direction) => {
    if (document.body.classList.contains("dark")) return;
    if (direction == "up") navHam.classList.remove("ham-dark");
    if (direction == "down") navHam.classList.add("ham-dark");    
    if (menuOpen && direction == "up") hamButton.classList.add("background");
    if (menuOpen && direction == "down") hamButton.classList.remove("background");
}

const firstOffset = {offset: "25%"}
const standardOffset = {offset: "7%"}

// Waypoints

// About
const aboutMain = $(".about");
aboutMain.waypoint(waypointBottom, firstOffset);

// Skills
const skillsHeader = $(".skills");
skillsHeader.waypoint(waypointTop, standardOffset);

const skillsMain = $("#skills-content");
skillsMain.waypoint(waypointBottom, standardOffset);

// Projects
const projectsHeader = $(".projects");
projectsHeader.waypoint(waypointTop, standardOffset);

const projectsMain = $("#projects-content");
projectsMain.waypoint(waypointBottom, standardOffset);

// Contact
const contactHeader = $(".contact");
contactHeader.waypoint(waypointTop, standardOffset);

const contactMain = $("#contact-content"); // todo the offset here doesn't work properly
contactMain.waypoint(waypointBottom, standardOffset);

// Hamburger
hamButton.addEventListener("click", function() {
    if (!menuOpen) {    
        hamButton.classList.add("open");
        overlay.classList.add("navigation__open")
        links.classList.add("navigation__open");
        if (!navHam.classList.contains("ham-dark")) {
            hamButton.classList.add("background");
        }
        if (document.body.classList.contains("dark")) {
            navHam.classList.remove("ham-dark");
            hamButton.classList.remove("background");
        }
        menuOpen = true;
    } else {
        hamButton.classList.remove("open");
        hamButton.classList.remove("background");
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
    menuOpen = false;    
});

// Nav links
for (let i = 0; i < linksProper.length; i++) {
    let link = linksProper[i];
    link.addEventListener("click", () => {
        overlay.classList.remove("navigation__open");
        links.classList.remove("navigation__open");
        hamButton.classList.remove("open");
        hamButton.classList.remove("background");
        menuOpen = false;    
    })
}

// Dark mode toggle
toggleButton.addEventListener("click", () => { 
    darkModeOn ? disableDarkMode() : enableDarkMode();
})

// The following removes the global transition: none once the page has loaded.  
window.addEventListener("load", () => {
    document.body.classList.remove("preload");
});