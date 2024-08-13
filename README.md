# Budget Mate

App created to study reactjs with a range of libs.

This project has been bootstrap with vitejs `npm create vite@latest`. 

Vitejs is a modern building tool designed for fast development and build process. It that provides traditional capabilities like bundler (traditionally done by webpack, grunt, etc) and compiler/transpiler (traditionally done by babel) at the same time and works leveraging ECMAScript 6/ES2015 specification.


### Styled-Components

Styled components is what is called css in js (vanilla vs css in js vs declarative css). It helps to create scoped css.

Once the dependency is added, the following can be done:

1. create a global css with all the default styling for the project (global.ts -> use in App.tsx)
2. declare a default theme and integrate it into the projects types to enable IDE auto-complition (themes/default.ts and @types/styled.d.ts). 
3. wrap the the app root component with the ThemeProvider (App.tsx)



