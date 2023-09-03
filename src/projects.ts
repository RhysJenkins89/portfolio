interface ProjectsData {
    [index: string]: Project;
}

interface Project {
    title: string;
    image: string;
    subheading: string;
    bodyText: string;
}

async function renderProjects(): Promise<void> {
    const cardsContainer = document.querySelector(".projects-container") as HTMLElement;

    const response: Response = await fetch("./data/projects.json");
    const projectData: ProjectsData = await response.json();

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
        );
    }
}

console.log("Hello there!");
