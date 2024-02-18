export interface Project {
    title: string;
    image: string;
    subheading: string;
    bodyText: string;
}

export interface ProjectsData {
    [index: string]: Project;
}
