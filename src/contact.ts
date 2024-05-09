const form = document.querySelector("[data-form-submit]") as HTMLFormElement;
const emailInput = document.querySelector("#email") as HTMLInputElement;

if (emailInput) {
    emailInput.addEventListener("input", (event: Event) => {
        if (emailInput.validity.typeMismatch) {
            emailInput.classList.add("invalid");
        } else {
            emailInput.classList.remove("invalid");
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
