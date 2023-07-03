function darkLightToggle(): void {
    const moonContainer = document.querySelector('.moon-container') as HTMLElement;
    const sunContainer = document.querySelector('.sun-container') as HTMLElement;
    const sunIcon = document.querySelector('.sun-icon') as HTMLElement; 
    const moonIcon = document.querySelector('.moon-icon') as HTMLElement;
    const bodyElement = document.querySelector('#body') as HTMLElement;
    
    function toggleTheme() {
        bodyElement.classList.toggle('light-mode');
        document.querySelectorAll('h1').forEach(element => element.classList.toggle('light-mode'));
        document.querySelectorAll('h2').forEach(element => element.classList.toggle('light-mode'));
        document.querySelectorAll('.text').forEach(element => element.classList.toggle('light-mode'));
    }
    
    let clickDisabled: boolean = false;
    
    sunContainer.addEventListener('click', () => {
        if (clickDisabled) return;
        if (sunContainer.classList.contains('moved')) return;
    
        // Remove click events
        clickDisabled = true;
        const helloThere: string = 'Hello there!'
    
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
    
        setTimeout(() => {
            // After one second, move the sun to correct position
            sunContainer.classList.add('moved');
            sunIcon.classList.add('moved');
    
            // Add the correct transition styles
            sunContainer.style.transition = 'all 1s ease-in';
            sunIcon.style.transition = 'all 1s ease-out';
        }, 1000);
    
        // Return click events
        setTimeout(() => {
            clickDisabled = false;
        }, 2000)
    });
    
    moonContainer.addEventListener('click', () => {
        if (clickDisabled) return;
        if (moonContainer.classList.contains('moved')) return;
    
        // Remove click events
        clickDisabled = true;
    
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
    
        // Add a pointer cursor to the sun and remove it from the moon
        sunIcon.style.cursor = 'pointer';
        moonIcon.style.cursor = 'default';
    
        toggleTheme();
    
        setTimeout(() => {
            // After one second, move the moon to the correct postition 
            moonContainer.classList.add('moved');
            moonIcon.classList.add('moved');
    
            // Add the correct transition styles
            moonContainer.style.transition = 'all 1s ease-in'
            moonIcon.style.transition = 'all 1s ease-out'
        }, 1000);
    
        // Return click events
        setTimeout(() => {
            clickDisabled = false;
        }, 2000)
    });
};

// async function renderProjects() { // Return type?

    // // Get container element into which to render content
    // const cardsContainer = document.querySelector('.cards-container') as HTMLElement
    // // Fetch the project data from the json file
    // // Loop over the project data
    // // Render a card component for each project item

    // const response = await fetch('./data/projects.json')
    // const projectData = await response.json()
    // console.log(projectData)
    // console.log('testing')

    // for (const project in projectData) {
        // console.log(projectData[project])
        // // Inside this loop, render a project data card and amend to the appropriate HTML element
        // cardsContainer.insertAdjacentHTML('beforeend',
            // `
                // <div>
                    // <h2>${projectData[project].title}</h2>
                    // <p>${projectData[project].subheading}</p>
                    // <p>${projectData[project].bodyText}</p>
                // </div>
            // `
        // )
    // }
// } 

darkLightToggle()
// renderProjects()