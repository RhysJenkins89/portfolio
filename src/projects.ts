import { ProjectsData } from "./types/projects-types";

const cardsContainer = document.querySelector(".main-projects-container") as HTMLElement;

async function renderProjects(): Promise<void> {
    try {
        const response: Response = await fetch("./dat/projects.json");
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
    } catch (error) {
        console.log(error);
        cardsContainer.insertAdjacentHTML("beforeend", "<p>No data found.</p>");
    }
}

export default renderProjects;
