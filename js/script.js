var hamButton = document.getElementById("button");

var overlay = document.querySelector(".navigation__overlay");

var links = document.querySelector(".navigation__links");

var menuOpen = false;

hamButton.addEventListener("click", function() {
    if (!menuOpen) {
        hamButton.classList.add("open");
        overlay.classList.add("navigation__open")
        links.classList.add("navigation__open");
        menuOpen = true;
    } else {
        hamButton.classList.remove("open");
        overlay.classList.remove("navigation__open");
        links.classList.remove("navigation__open");
        menuOpen = false;
    }
});

overlay.addEventListener("click", function () {
    overlay.classList.remove("navigation__open");
    hamButton.classList.remove("open");
    links.classList.remove("navigation__open");
    menuOpen = false;    
});

links.addEventListener("click", () => {
    overlay.classList.remove("navigation__open");
    links.classList.remove("navigation__open");
    hamButton.classList.remove("open");
    menuOpen = false;
});

// The following removes the global transition: none once the page has loaded.  
window.addEventListener("load", () => {
    document.body.classList.remove("preload");
});

//Remove the refresh id issue.


