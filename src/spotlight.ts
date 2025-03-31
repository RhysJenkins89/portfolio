const bodyElement = document.querySelector("body") as HTMLElement;

function cursorSpotlight(): void {
    console.log("Spotlight function");
    console.log("Body element:", bodyElement);
    // Get the cursor position
    document.addEventListener("mousemove", (event: MouseEvent) => {
        // console.log("event:", event.clientX);
        // console.log("event:", event.clientY);
    });
}

export default cursorSpotlight;
