// Dark/light mode toggle
const toggleTheme = document.querySelector('#darkModeToggle');
let isDarkMode = true;
const sunIcon = document.querySelector('.sun-icon'); 
const moonIcon = document.querySelector('.moon-icon');
toggleTheme.addEventListener('click', () => {
    if (isDarkMode) {
        isDarkMode = !isDarkMode;
        moonIcon.style.display = 'block'
        sunIcon.style.display = 'none'
    } else {
        isDarkMode = !isDarkMode;
        moonIcon.style.display = 'none'
        sunIcon.style.display = 'block'
    }

    document.querySelector('#body').classList.toggle('light-mode');
    document.querySelectorAll('h1').forEach(element => element.classList.toggle('light-mode'));
    document.querySelectorAll('h2').forEach(element => element.classList.toggle('light-mode'));
    document.querySelectorAll('.text').forEach(element => element.classList.toggle('light-mode'));
});