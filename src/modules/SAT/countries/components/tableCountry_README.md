# tableCountry

The `tableCountry` component is designed to allow users to view the records retrieved from the database.

## Features

- **Rendering**: The component is capable to show the records.

## Props

### ListadoPaises

This prop is *array*, and it has a default value: []. The component render this array in the table, lettting to the user to view the records of the array but only with the fields the dev has selected

## Usage 

Here's how to use the `tableCountry` component with a Vue template:

```html
<tableCountry :ListadoPaises="arrayOfCountry"/>
```

Where `arrayOfCountry` is a variable type *array* that keeps the records of the Country. This is the value that the `tableCountry` is gonna render in the table

## Events

This component don't has events.

## Styling

The component uses TailwindCSS for styling. The table is designed to be visually cohesive with the rest of the application's design system.