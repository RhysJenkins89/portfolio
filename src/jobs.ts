import { JobsData } from "./types/jobs-types";

const jobsContainer = document.querySelector(".main-jobs-container") as HTMLElement;

async function renderJobs(): Promise<void> {
    // Note: json orders number-like keys are ordered differently from string-like keys. This is why 5874 is 'fiveeightsevenfour'.
    // See this reddit post: https://www.reddit.com/r/node/comments/tcr7kn/why_does_jsonstringify_reorder_keys/
    try {
        const response: Response = await fetch("./data/jobs.json");
        const jobsData: JobsData = await response.json();
        for (const job in jobsData) {
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
