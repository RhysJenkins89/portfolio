const overlay = document.querySelector(".overlay") as HTMLElement
const themesContainer = document.querySelector(".theme-list-container") as HTMLElement

;(function addTransitionsToElements(): void {
    themesContainer.style.transition = "all .75s ease"
})()

// IIFE
;(function themeSelector(): void {
    addListenerToOverlay()
    const themeSelector = document.querySelector(".theme-container p") as HTMLElement
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

function checkUserThemePreference(): void {
    const userHasSelectedTheme: boolean = Boolean(window.localStorage.getItem("theme-selection"))
    if (!userHasSelectedTheme) {
        return
    } else {
        const rootElement = document.querySelector("html") as HTMLElement
        rootElement.dataset.theme = window.localStorage.getItem("theme-selection")!
    }
}

// Add the user's theme preference to local storage
function saveUserThemePreference(userTheme: string): void {
    // Check local storage for the user's theme choice
    // If no theme exists, save the user's theme when it changes
    // If the theme exists, update the data-theme attribute on the html tag
    const userHasSelectedTheme: boolean = Boolean(window.localStorage.getItem("theme-selection"))
    console.log(userHasSelectedTheme)
    window.localStorage.setItem("theme-selection", userTheme)
}

saveUserThemePreference("theme")

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
    const cardsContainer = document.querySelector(".projects-container") as HTMLElement

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
