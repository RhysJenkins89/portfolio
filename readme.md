# Portfolio

I'm currently redesigning and rebuilding my portfolio site.

## Doing

-   Writing and updating copy

## To do

-   Remove the maps Node modules
-   Add a prefers theme check in theme.ts
-   Add the scss to the webpack build
-   Write new/better copy
-   Add a What I'm working on section
-   Add a form, which when submitted sends the user's data to a database
-   Build a backend with email/text submission functionality
-   Build/find a system for the correct font-size values across devices
-   Change the browser tab icon colour depending on the browser theme
-   Sticky header

## General notes

### How to run the site

To build the TypeScript, run `npm run dev`. This command will run Webpack, building the TyepScript, and watch for updates.

To build the CSS, run `npm run sass`. This command will build the SCSS and watch for updates.

### Notes on the code

The `text` class allows any text to which it is applied to transition from light to dark with the theme.

Before doing something specific with the map, I should turn this site into an actual portfolio page that represents me at least reasonably well. It's the copy that I have to write, and I want to include a form that submits data that I can read.

The idea: build an app with React Native and a website with React. Both can fetch data from the same database, which could easilly be Google Firebase. Using Firebase would give me login/authentication functionality.
