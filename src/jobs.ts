import { JobsData } from "./types/jobs-types";

const jobsContainer = document.querySelector(".main-jobs-container") as HTMLElement;

async function renderJobs(): Promise<void> {
    try {
        const response: Response = await fetch("./data/jobs.json");
        const jobsData: JobsData = await response.json();
        console.log("Jobs data:", jobsData);
        for (const job in jobsData) {
            // console.log("job:", job);
            jobsContainer.insertAdjacentHTML(
                "beforeend",
                `
                    <div class="jobs">
                        <h3 class="text">${jobsData[job].title}</h3>
                        <p class="text job-subheading">${jobsData[job].subheading}</p>
                        <p class="text job-text">${jobsData[job].description}</p>
                    </div>
                `
            );
        }
    } catch (error) {
        console.log(error);
        jobsContainer.insertAdjacentHTML("beforeend", "<p>No data found.</p>");
    }
}

export default renderJobs;
