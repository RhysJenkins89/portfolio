"use strict";
function darkLightToggle() {
    var moonContainer = document.querySelector('.moon-container');
    var sunContainer = document.querySelector('.sun-container');
    var sunIcon = document.querySelector('.sun-icon');
    var moonIcon = document.querySelector('.moon-icon');
    var bodyElement = document.querySelector('#body');
    function toggleTheme() {
        bodyElement.classList.toggle('light-mode');
        document.querySelectorAll('h1').forEach(function (element) { return element.classList.toggle('light-mode'); });
        document.querySelectorAll('h2').forEach(function (element) { return element.classList.toggle('light-mode'); });
        document.querySelectorAll('.text').forEach(function (element) { return element.classList.toggle('light-mode'); });
    }
    var clickDisabled = false;
    sunContainer.addEventListener('click', function () {
        if (clickDisabled)
            return;
        if (sunContainer.classList.contains('moved'))
            return;
        // Remove click events
        clickDisabled = true;
        // Return to correct transition styles if necessary
        sunContainer.style.transition = 'all 1s ease-out';
        sunIcon.style.transition = 'all 1s ease-in';
        // Move out and fade out the sun
        sunContainer.classList.add('fade-out');
        sunIcon.classList.add('fade-out');
        // Move in and fade in the moon 
        moonContainer.classList.remove('moved');
        moonIcon.classList.remove('moved');
        // If the moon contains the fade-out class, remove it
        if (moonContainer.classList.contains('fade-out')) {
            moonContainer.classList.remove('fade-out');
            moonIcon.classList.remove('fade-out');
        }
        // Add a pointer cursor to the moon and remove it from the sun
        moonIcon.style.cursor = 'pointer';
        sunIcon.style.cursor = 'default';
        toggleTheme();
        setTimeout(function () {
            // After one second, move the sun to correct position
            sunContainer.classList.add('moved');
            sunIcon.classList.add('moved');
            // Add the correct transition styles
            sunContainer.style.transition = 'all 1s ease-in';
            sunIcon.style.transition = 'all 1s ease-out';
        }, 1000);
        // Return click events
        setTimeout(function () {
            clickDisabled = false;
        }, 2000);
    });
    moonContainer.addEventListener('click', function () {
        if (clickDisabled)
            return;
        if (moonContainer.classList.contains('moved'))
            return;
        // Remove click events
        clickDisabled = true;
        // Return to correct transition styles if necessary
        moonContainer.style.transition = 'all 1s ease-out';
        moonIcon.style.transition = 'all 1s ease-in';
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
        // Add a pointer cursor to the sun and remove it from the moon
        sunIcon.style.cursor = 'pointer';
        moonIcon.style.cursor = 'default';
        toggleTheme();
        setTimeout(function () {
            // After one second, move the moon to the correct postition 
            moonContainer.classList.add('moved');
            moonIcon.classList.add('moved');
            // Add the correct transition styles
            moonContainer.style.transition = 'all 1s ease-in';
            moonIcon.style.transition = 'all 1s ease-out';
        }, 1000);
        // Return click events
        setTimeout(function () {
            clickDisabled = false;
        }, 2000);
    });
}
;
darkLightToggle();
