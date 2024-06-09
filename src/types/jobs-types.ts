export interface Job {
    title: string;
    subheading: string;
    started: string;
    finished: string;
    description: string;
    technologies: string[];
}

export interface JobsData {
    [index: string]: Job;
}
