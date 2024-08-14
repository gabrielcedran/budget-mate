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


### Accessibility

When developing application, especially web applications, it's important to take especial care with accessibility (where users use screen reader to use your application).

Many times, when rendering modals, popovers, tooltips, etc, it doesn't mean anything to the screen reader, unless it's clearly specified.

It's possible to create accessible UIs only following the ARIA (Accessible Rich Internet Application) semantics (which tends to be hard) or use libs that deliver accessible components (widely tested by the communities).

Example of libs are:

- Ariakit
- Headless UI (built by the Tailwind devs)
- Chakra UI (the downside is that it brings Chakra UI default styles)
- Radix-ui (non intrusive styles, only the guaranteed accessible components. It also allows for granular import, only bringing the components that will be used by the application, instead of the whole lib)

`npm i @radix-ui/react-dialog`

The Radix-ui Dialog.Trigger is a button. When working with styled-components that are 2 options:

```javascript

// 1. create a trigger button as a styled component:
import * as Dialog from '@radix-ui/react-dialog'

export const Button = styled(Dialog.Trigger)`...`

// 2. provide a styled button as a child of Dialog.Trigger (notice the asChild property):

<Dialog.Trigger asChild>
    <StyledButton>New Transaction</StyledButton>
</Dialog.Trigger>
```

The `Dialog.Portal` is actually a react Portal.


### Json Server

Json Server is a powerful mock server mostly used by FE developers to mock apis.

`npm i json-server -D`

To execute the json server, run the command `npx json-server {config_file.json}`. The config file json has to be according to json-server documentation.


### Custom hooks

React allows developers to create their own hooks (which may use of other hooks). Custom hooks which have state will cause rerender should that state change.


Custom hooks often help developers reduce components complexity by isolating complex logic into the hooks, and then simply utilising them in the components.


### Forms on react

To work with uncontrolled components and form validation react has a myriad of possibilities. For this project, the following will be used:

- React hook form - for uncontrolled forms 
- zod - for form validation and schema definition
- @hookform/resolvers - to integrate react hook from and zod


#### Non standard html components

When creating components that differ from the native html components behaviour (like input texts, textareas, checkboxes), it's necessary to integrate these custom components with react hook form via a control api, so that it knows how to handle them and fetch their values.

Implementation reference on NewTransactionModal/index.tsx#line-44 or commit if this change.


### ESLint / Style Guide and Formatting

Careful with the new eslint 9.x as it does not support the traditional shareable configs out of the box anymore.

`npm i -D eslint @rocketseat/eslint-config@3.0.12`

Create a `eslint.config.mjs` with the expected content - see content in the file itself.

To run the eslint: `npm eslint`. To fix all the issues `npm eslint --fix`