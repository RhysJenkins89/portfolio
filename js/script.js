// Dark/light mode toggle
const toggleTheme = document.querySelector('#darkModeToggle');
let isDarkMode = true;
toggleTheme.addEventListener('click', () => {
    if (isDarkMode) {
        isDarkMode = !isDarkMode;
        document.querySelector('.moon-icon').style.display = 'block'
        document.querySelector('.sun-icon').style.display = 'none'
    } else {
        isDarkMode = !isDarkMode;
        document.querySelector('.moon-icon').style.display = 'none'
        document.querySelector('.sun-icon').style.display = 'block'
    }

    // setTheme function
    const mainBody = document.querySelector('#body');
    const headingsLevelOne = document.querySelectorAll('h1');
    const headingsLevelTwo = document.querySelectorAll('h2');
    const paragraphs = document.querySelectorAll('.text');
    // Note that here I loop over the elements that will need the light-mode class. There's probably a better way to do this. 
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