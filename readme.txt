Readme: Portfolio project

I've put the todo section here at the top of the file in order to make it easy to see at a glance what I'm going to be working on. In this readme, I also discuss the tools I used to build this site and the design of the site, in addition to general thoughts on the project.

// Currently I'm working on: 
* Rewriting the BEM notation throughout the site

// Todo:
* Reorganise the sass files so the buttons are in one folder, the text is in one folder, etc
* Completely refactor the nav section
* Continue to rewrite the BEM notation
* Load dark mode based on the user's system preference
* Refactor the dark mode functions
* Research a better fix for the hamburger colour functionality
* Credit the photographers

// Tools that I used
* HTML
* Sass
* JavaScript
    * jQuery
    * Waypoints.js

The tools I used to build this site are fairly self-explanatory. For my purposes, HTML, Sass, and JavaScript cover everything that I need for simple static site. I don't need to link to a database, so I don't need to use any backend technologies.  

I aim to keep my HTML and Sass simple and readable. At the moment, I'm rewriting the BEM notation throughout the site. When I began building the site in late 2020, I didn't fully understand BEM notation. However, now that I have researched the topic in more detail, I better understand how to write simple, clear classes that any developer could pick up and use relatively quickly. 

The JavaScript library, Waypoints.js, solves the problem of the colour of the hamburger. The site's background-color is an off-white, but the header images are dark, meaning that if a dark hamburger scrolls over, it's very difficult to see. 

Waypoints.js solves this problem -- mostly. Waypoints is a JavaScript library that allows users to add trigger points on elements. Once the user scrolls to the trigger point, Waypoints runs a function. I use these functions to switch the class on the hamburger, and because I have a transition on the parent element, the colour smoothly changes from dark to light when the hamburger scrolls over an image. 




 