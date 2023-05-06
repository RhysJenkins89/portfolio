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
    console.log(paragraphs);
    // Note that here I loop over the elements that will need the light-mode class. There's probably a better way to do this. 
    // const textElements = [];
    // textElements.push(headingsLevelOne, headingsLevelTwo, paragraphs);
    if (!isDarkMode) {
        mainBody.classList.toggle('light-mode');
        headingsLevelOne.forEach(element => {
            element.classList.toggle('light-mode');
        });
        headingsLevelTwo.forEach(element => {
            element.classList.toggle('light-mode');
        });
        paragraphs.forEach(element => {
            element.classList.toggle('light-mode');
        });
    }
});