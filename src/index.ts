const moonContainer = document.querySelector(".moon-container") as HTMLElement
const sunContainer = document.querySelector(".sun-container") as HTMLElement
const sunIcon = document.querySelector(".sun-icon") as HTMLElement
const moonIcon = document.querySelector(".moon-icon") as HTMLElement
const bodyElement = document.querySelector("#body") as HTMLElement
const textElements = document.querySelectorAll(
    ".text"
) as NodeListOf<HTMLElement>

window.onload = (event) => {
    bodyElement.style.transition = "all 1s ease"
    textElements.forEach((element) => {
        element.style.transition = "all 1s ease"
    })
}

// Vim: command, count, motion
// It would be useful to automatically go to the start of the code whenever I jump to a line

function darkLightToggle(): void {
    function toggleTheme() {
        bodyElement.classList.toggle("light-mode")
        textElements.forEach((element) =>
            element.classList.toggle("light-mode")
        )
    }

    let clickDisabled: boolean = false

    function addListeners(
        elementOne: HTMLElement,
        iconOne: HTMLElement,
        elementTwo: HTMLElement,
        iconTwo: HTMLElement
    ): void {
        elementOne.addEventListener("click", () => {
            if (clickDisabled) return
            if (elementOne.classList.contains("moved")) return

            clickDisabled = true

            elementOne.style.transition = "all 1s ease-out"
            iconOne.style.transition = "all 1s ease-in"
            elementOne.classList.add("fade-out")
            iconOne.classList.add("fade-out")

            elementTwo.classList.remove("moved")
            iconTwo.classList.remove("moved")

            if (elementTwo.classList.contains("fade-out")) {
                elementTwo.classList.remove("fade-out")
                iconTwo.classList.remove("fade-out")
            }

            iconTwo.style.cursor = "pointer"
            iconOne.style.cursor = "default"

            toggleTheme()

            setTimeout(() => {
                elementOne.classList.add("moved")
                iconOne.classList.add("moved")
                elementOne.style.transition = "all 1s ease-in"
                iconOne.style.transition = "all 1s ease-out"
            }, 1000)

            setTimeout(() => {
                clickDisabled = false
            }, 2000)
        })
    }

    // If I'm going to add a theme selector, this function will need to be significantly rewritten. Or, probably more likely, scrapped altogether.
    addListeners(sunContainer, sunIcon, moonContainer, moonIcon)
    addListeners(moonContainer, moonIcon, sunContainer, sunIcon)
}

// IIFE
(function themeSelector(): void {
    // On click, switch between two themes
    const themeIcon = document.querySelector(".theme-icon") as HTMLElement
    const themeSelector = document.querySelector(
        ".theme-list-container"
    ) as HTMLElement
    const themeElements = document.querySelectorAll(
        ".theme-element"
    ) as NodeListOf<HTMLElement>
    themeIcon.addEventListener("click", () => {
        console.log("theme icon class clicked")
        if (document.body.classList.contains("80s-after-dark")) {
            document.body.classList.remove("80s-after-dark")
            document.body.classList.add("light")
        } else {
            document.body.classList.remove('light')
            document.body.classList.add('80s-after-dark')
        }
    })
})()

// On click, show a list of themes
// On individual theme click, get the exact theme that the user clicked
// Get the string data from the user click
// Add the string to the data-theme attribute on the html element

interface ProjectsData {
    [index: string]: Project
}

interface Project {
    title: string
    image: string
    subheading: string
    bodyText: string
}

async function renderProjects(): Promise<void> {
    const cardsContainer = document.querySelector(
        ".projects-container"
    ) as HTMLElement

    const response: Response = await fetch("./data/projects.json")
    const projectData: ProjectsData = await response.json()

    for (const project in projectData) {
        cardsContainer.insertAdjacentHTML(
            "beforeend",
            `
                <div class="project">
                    <h3 class="text project-heading">${projectData[project].title}</h3>
                    <p class="text project-subheading">${projectData[project].subheading}</p>
                    <p class="text project-text">${projectData[project].bodyText}</p>
                </div>
            `
        )
    }
}

// darkLightToggle()
// renderProjects()
