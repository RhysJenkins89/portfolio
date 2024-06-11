function cursorSpotlight() {
    console.log("spotlight function");
    // Get the cursor position
    document.addEventListener("mousemove", (event: MouseEvent) => {
        console.log("event:", event.clientX);
        console.log("event:", event.clientY);
    });
}

export default cursorSpotlight;
