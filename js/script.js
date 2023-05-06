// Dark/light mode toggle
const toggleTheme = document.querySelector('#darkModeToggle');
let isDarkMode = true;
toggleTheme.addEventListener('click', () => {
    if (isDarkMode) {
        isDarkMode = !isDarkMode;
        toggleTheme.innerText = 'Dark'
    } else {
        isDarkMode = !isDarkMode;
        toggleTheme.innerText = 'Light'
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
});