const overlay = document.querySelector(".overlay") as HTMLElement
const themesContainer = document.querySelector(".theme-list-container") as HTMLElement

(function addTransitionsToElements(): void {
    themesContainer.style.transition = 'all .75s ease'
})()

// IIFE
;(function themeSelector(): void {
    addListenerToOverlay()
    const themeSelector = document.querySelector(
        ".theme-container p"
    ) as HTMLElement
    themeSelector.addEventListener("click", () => {
        overlay.classList.toggle("visible")
        themesContainer.classList.toggle("visible")
    })
    const themeItems = document.querySelectorAll(
        ".theme-list-container ul li"
    ) as NodeListOf<HTMLElement>
    themeItems.forEach((item) => {
        item.addEventListener("click", (event: Event) => {
            const targetElement = event.target as HTMLElement
            const themeString: string = targetElement.innerText.toLowerCase()
            const rootElement = document.querySelector("html") as HTMLElement
            if (themeString.indexOf(" ") >= 0) {
                const editedString: string = themeString.replace(/ /g, "-")
                rootElement.dataset.theme = editedString
                overlay.classList.remove("visible")
                themesContainer.classList.remove("visible")
                return
            }
            rootElement.dataset.theme = themeString
            overlay.classList.remove("visible")
            themesContainer.classList.remove("visible")
        })
    })
})()

function addListenerToOverlay(): void {
    overlay.addEventListener("click", () => {
        toggleOverlay()
    })
}

function toggleOverlay(): void {
    overlay.classList.toggle("visible")
    themesContainer.classList.toggle("visible")
}

// On click, show a list of themes
// On individual theme click, get the exact theme that the user cLIcked
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
