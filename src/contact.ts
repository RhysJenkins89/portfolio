const form = document.querySelector("[data-form-submit]") as HTMLFormElement;
const emailInput = document.querySelector("#email") as HTMLInputElement;
const emailErrorText = document.querySelector("[data-email-error-text]") as HTMLElement;

if (emailInput && emailErrorText) {
    emailInput.addEventListener("input", (event: Event) => {
        // Form validation
        console.log("Email input");
        if (emailInput.validity.typeMismatch) {
            emailInput.classList.add("invalid");
            emailErrorText.classList.add("visible");
        } else {
            emailInput.classList.remove("invalid");
            emailErrorText.classList.remove("visible");
        }
    });
}

function handleFormSubmit(): void {
    if (form) {
        form.addEventListener("submit", (event: Event) => {
            event.preventDefault();
            console.log("Submit event handler");
            // Check if the email field is valid
        });
    }
}

export default handleFormSubmit;
