# CoinFinder

The `coinFinder` component is designed to allow users to search coins among the table in the database. Once a promp is submitted by the enter key or the button, the component emits the promp so it can be handled by the parent component and process it.

## Features

- **Promp**: The user can type in the input and then click the button or press the enter key to submit the text.


## Events

### eBusqueda

This event is emmited when the user press the enter key or click the search button. It sends the promp as a payload

## Usage

Here's how to use the `coinFinder` component with a Vue template:

```html
<coinFinder @eBusqueda="handlePromp"><coinFinder/>
```

Where `handlePromp` is a method in the Vue component that handles the promp received from the `coinFinder` component.

## Props

This component does not use any props.

## Styling

The component uses TailwindCSS for styling. The component is designed to be visually cohesive with the rest of the application's design system.