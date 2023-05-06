// Dark/light mode toggle
const toggleButton = document.querySelector('#darkModeToggle');
let isDarkMode = true;
toggleButton.addEventListener('click', () => {
    if (isDarkMode) {
        isDarkMode = !isDarkMode;
    }

    // setTheme function
    const mainBody = document.querySelector('#body');
    const headingsLevelOne = document.querySelectorAll('h1');
    const headingsLevelTwo = document.querySelectorAll('h2');
    const paragraphs = document.querySelectorAll('.text');
    const textElements = [];
    textElements.push(headingsLevelOne, headingsLevelTwo, paragraphs);
    if (!isDarkMode) {
        mainBody.classList.toggle('light-mode');
        textElements.forEach(element => {
            element[0].classList.toggle('light-mode');
        });
    }
});