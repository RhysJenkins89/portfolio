# Portfolio

I'm currently redesigning and rebuilding my portfolio site.

## Doing

-   Build the landing intro section

## To do

-   Add 404 page
-   Create a logo for the browser tab
-   Add the scss to the webpack build
-   Add a What I'm working on section
-   Build/find a system for the correct font-size values across devices
-   Change the browser tab icon colour depending on the browser theme
-   Accessibility throughout the site
-   Cursor spotlight effect

## General notes

The site is deployed from the `master` branch. Pushing to this branch will trigger a deployment. At the moment, I also have two feature branches, the content of which should be merged into one branch in order to build the site on that branch. Feature branches don't seem appropriate given that the site isn't finished in any meaningful sense.

### How to run the site

To run the site locally, start a local server with the Live Server extension.

To build the TypeScript, run `npm run dev`. This command will run Webpack, which will build the TyepScript and watch for updates.

To build the CSS, run `npm run sass`. This command will build the SCSS and watch for updates.

### Notes on the code

The `text` class allows any text to which it is applied to transition from light to dark with the theme.

### Resources

-   https://www.wix.com/studio/blog/font-size
-   Heading font: https://thecritic.co.uk/
-   https://brittanychiang.com/
