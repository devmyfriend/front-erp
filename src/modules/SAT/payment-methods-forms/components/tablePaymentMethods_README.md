# tablePaymentMethods

The `tablePaymentMethods` component is designed to allow users to view the records retrieved from the database.

## Features

- **Rendering**: The component is capable to show the records.

- **Disabled Records**: Some records are disabled by it's field `Activo`, so, the user will view it with other color.

## Props

### ListadoMetodos

This prop is *array*, and it has a default value: []. The component render this array in the table, lettting to the user to view the records of the array but only with the fields the dev has selected

## Usage 

Here's how to use the `tablePaymentMethods` component with a Vue template:

```html
<tablePaymentMethods :ListadoMetodos="arrayOfPaymentMethods"/>
```

Where `arrayOfPaymentMethods` is a variable type *array* that keeps the records of the PaymentMethods. This is the value that the `tablePaymentMethods` is gonna render in the table

## Events

This component don't has events.

## Styling

The component uses TailwindCSS for styling. The table is designed to be visually cohesive with the rest of the application's design system.