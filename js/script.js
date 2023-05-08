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

function lightDarkToggle() {
    document.querySelector('#body').classList.toggle('light-mode');
    document.querySelectorAll('h1').forEach(element => element.classList.toggle('light-mode'));
    document.querySelectorAll('h2').forEach(element => element.classList.toggle('light-mode'));
    document.querySelectorAll('.text').forEach(element => element.classList.toggle('light-mode'));
}

sunContainer.addEventListener('click', () => {
    // Return to correct transition styles if necessary
    sunContainer.style.transition = 'all 1s ease-out';
    sunIcon.style.transition = 'all 1s ease-in';

    // Move out and fade out the sun
    sunContainer.classList.add('fade-out');
    sunIcon.classList.add('fade-out');

    // Move in and fade in the moon 
    moonContainer.classList.remove('moved');
    moonIcon.classList.remove('moved');

    // If the moon contains the the fade-out class, remove it
    if (moonContainer.classList.contains('fade-out')) {
        moonContainer.classList.remove('fade-out');
        moonIcon.classList.remove('fade-out');
    }

    lightDarkToggle();

    setTimeout(() => {
        // After one second, move the sun to correct position
        sunContainer.classList.add('moved');
        sunIcon.classList.add('moved');

        // Add the correct transition styles
        sunContainer.style.transition = 'all 1s ease-in';
        sunIcon.style.transition = 'all 1s ease-out';
    }, 1000);
});

moonContainer.addEventListener('click', () => {
    // Return to correct transition styles if necessary
    moonContainer.style.transition = 'all 1s ease-out'
    moonIcon.style.transition = 'all 1s ease-in'

    // Move out and fade out the moon
    moonContainer.classList.add('fade-out');
    moonIcon.classList.add('fade-out');

    // Move in and fade in the sun
    sunContainer.classList.remove('moved');
    sunIcon.classList.remove('moved');

    // If the sun contains the fade-out class, remove it
    if (sunContainer.classList.contains('fade-out')) {
        sunContainer.classList.remove('fade-out');
        sunIcon.classList.remove('fade-out');
    }

    lightDarkToggle();

    setTimeout(() => {
        // After one second, move the moon to the correct postition 
        moonContainer.classList.add('moved');
        moonIcon.classList.add('moved');

        // Add the correct transition styles
        moonContainer.style.transition = 'all 1s ease-in'
        moonIcon.style.transition = 'all 1s ease-out'
    }, 1000);
});