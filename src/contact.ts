const form = document.querySelector("[data-form-submit]") as HTMLFormElement;
const emailInput = document.querySelector("#email") as HTMLInputElement;

if (emailInput) {
    emailInput.addEventListener("input", (event: Event) => {
        if (emailInput.validity.typeMismatch) {
            console.log("typeMismatch is true");
            // Add the invalid styles here
        }
    });
}

function handleFormSubmit(): void {
    if (form) {
        form.addEventListener("submit", (event: Event) => {
            event.preventDefault();
            console.log("Submit event handler");
        });
    }
}

export default handleFormSubmit;
