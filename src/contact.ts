const form = document.querySelector("[data-form-submit]") as HTMLFormElement;

function handleFormSubmit(): void {
    form.addEventListener("submit", (event: Event) => {
        event.preventDefault();
        console.log("Submit event handler");
    });
}

export default handleFormSubmit;
