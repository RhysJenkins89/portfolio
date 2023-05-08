// Dark/light mode toggle
const toggleTheme = document.querySelector('#darkModeToggle');
let isDarkMode = true;
const moonContainer = document.querySelector('.moon-container');
const sunContainer = document.querySelector('.sun-container');
const sunIcon = document.querySelector('.sun-icon'); 
const moonIcon = document.querySelector('.moon-icon');
toggleTheme.addEventListener('click', () => {
    // if (isDarkMode) {
    //     isDarkMode = !isDarkMode;
    //     // moonIcon.style.display = 'block'
    //     // sunIcon.style.display = 'none'
    //     // moonContainer.classList.toggle('fade-out');
    //     // moonIcon.classList.toggle('fade-out');
    //     // sunContainer.classList.remove('moved');
    //     // sunIcon.classList.remove('moved');
    // } else {
    //     isDarkMode = !isDarkMode;
    //     // moonIcon.style.display = 'none'
    //     // sunIcon.style.display = 'block'
    //     moonContainer.classList.toggle('fade');
    //     moonIcon.classList.toggle('fade');
    //     sunIcon.classList.toggle('fade');
    // }

    // document.querySelector('#body').classList.toggle('light-mode');
    // document.querySelectorAll('h1').forEach(element => element.classList.toggle('light-mode'));
    // document.querySelectorAll('h2').forEach(element => element.classList.toggle('light-mode'));
    // document.querySelectorAll('.text').forEach(element => element.classList.toggle('light-mode'));
});

sunContainer.addEventListener('click', () => {
    sunContainer.style.transition = 'all 1s ease-out'
    sunIcon.style.transition = 'all 1s ease-in'
    sunContainer.classList.add('fade-out');
    sunIcon.classList.add('fade-out');
    moonContainer.classList.remove('moved');
    moonIcon.classList.remove('moved');
    moonContainer.classList.remove('fade-out');
    moonIcon.classList.remove('fade-out');
    setTimeout(() => {
        sunContainer.classList.add('moved');
        sunIcon.classList.add('moved');
        sunContainer.style.transition = 'all 1s ease-in';
        sunIcon.style.transition = 'all 1s ease-out';
    }, 1000);
})

moonContainer.addEventListener('click', () => {
    moonContainer.style.transition = 'all 1s ease-out'
    moonIcon.style.transition = 'all 1s ease-in'
    moonContainer.classList.add('fade-out');
    moonIcon.classList.add('fade-out');
    sunContainer.classList.remove('moved');
    sunIcon.classList.remove('moved');
    sunContainer.classList.remove('fade-out');
    sunIcon.classList.remove('fade-out');
    setTimeout(() => {
        moonContainer.classList.add('moved');
        moonIcon.classList.add('moved');
        moonContainer.style.transition = 'all 1s ease-in'
        moonIcon.style.transition = 'all 1s ease-out'
    }, 1000);
})