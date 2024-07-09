# tableCoins

The `tableCoins` component is designed to allow users to view the records retrieved from the database.

## Features

- **Rendering**: The component is capable to show the records.

## Props

### ListadoMonedas

This prop is *array*, and it has a default value: []. The component render this array in the table, lettting to the user to view the records of the array but only with the fields the dev has selected

## Usage 

Here's how to use the `tableCoins` component with a Vue template:

```html
<tableCoins :ListadoMonedas="arrayOfCoins"/>
```

Where `arrayOfCoins` is a variable type *array* that keeps the records of the coins. This is the value that the `tableCoins` is gonna render in the table

## Events

This component don't has events.

## Styling

The component uses TailwindCSS for styling. The table is designed to be visually cohesive with the rest of the application's design system.