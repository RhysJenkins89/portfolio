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
        elementOne.addEventListener('click', () => {
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

    addListeners(sunContainer, sunIcon, moonContainer, moonIcon)
    addListeners(moonContainer, moonIcon, sunContainer, sunIcon)

    // There's also a lof of repeated code in the following two functions. I suggest that we consoldate them into one function.
    // sunContainer.addEventListener("click", () => {
    //     if (clickDisabled) return
    //     if (sunContainer.classList.contains("moved")) return

    //     clickDisabled = true

    //     // Return to correct transition styles if necessary
    //     sunContainer.style.transition = "all 1s ease-out"
    //     sunIcon.style.transition = "all 1s ease-in"

    //     // Move out and fade out the sun
    //     sunContainer.classList.add("fade-out")
    //     sunIcon.classList.add("fade-out")

    //     // Move in and fade in the moon
    //     moonContainer.classList.remove("moved")
    //     moonIcon.classList.remove("moved")

    //     // If the moon contains the fade-out class, remove it
    //     if (moonContainer.classList.contains("fade-out")) {
    //         moonContainer.classList.remove("fade-out")
    //         moonIcon.classList.remove("fade-out")
    //     }

    //     // Add a pointer cursor to the moon and remove it from the sun
    //     moonIcon.style.cursor = "pointer"
    //     sunIcon.style.cursor = "default"

    //     toggleTheme()

    //     setTimeout(() => {
    //         // After one second, move the sun to correct position
    //         sunContainer.classList.add("moved")
    //         sunIcon.classList.add("moved")

    //         // Add the correct transition styles
    //         sunContainer.style.transition = "all 1s ease-in"
    //         sunIcon.style.transition = "all 1s ease-out"
    //     }, 1000)

    //     // Return click events
    //     setTimeout(() => {
    //         clickDisabled = false
    //     }, 2000)
    // })

    // moonContainer.addEventListener("click", () => {
    //     if (clickDisabled) return
    //     if (moonContainer.classList.contains("moved")) return

    //     clickDisabled = true

    //     // Return to correct transition styles if necessary
    //     moonContainer.style.transition = "all 1s ease-out"
    //     moonIcon.style.transition = "all 1s ease-in"

    //     // Move out and fade out the moon
    //     moonContainer.classList.add("fade-out")
    //     moonIcon.classList.add("fade-out")

    //     // Move in and fade in the sun
    //     sunContainer.classList.remove("moved")
    //     sunIcon.classList.remove("moved")

    //     // If the sun contains the fade-out class, remove it
    //     if (sunContainer.classList.contains("fade-out")) {
    //         sunContainer.classList.remove("fade-out")
    //         sunIcon.classList.remove("fade-out")
    //     }

    //     // Add a pointer cursor to the sun and remove it from the moon
    //     sunIcon.style.cursor = "pointer"
    //     moonIcon.style.cursor = "default"

    //     toggleTheme()

    //     setTimeout(() => {
    //         // After one second, move the moon to the correct postition
    //         moonContainer.classList.add("moved")
    //         moonIcon.classList.add("moved")

    //         // Add the correct transition styles
    //         moonContainer.style.transition = "all 1s ease-in"
    //         moonIcon.style.transition = "all 1s ease-out"
    //     }, 1000)

    //     // Return click events
    //     setTimeout(() => {
    //         clickDisabled = false
    //     }, 2000)
    // })
}

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

darkLightToggle()
// renderProjects()
