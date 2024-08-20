
# tableReceipt Component

## Overview
The `tableReceipt` component is used to display a table of receipt types within the application. This component can show or hide an actions column based on the `editable` prop, allowing users to edit or delete receipts.

## Props
- **`editable`**: (Boolean, default: `false`)
  - Defines whether the table is editable, showing or hiding the actions column.

- **`accion`**: (Array, default: `[]`)
  - An array that defines available actions for the table, though it is not directly used in the component.

## Emits
- **`eAccion`**
  - Emitted with the receipt and the selected action. Useful for handling edit or delete actions.

## Lifecycle Hooks
- `onMounted`: Loads the receipts when the component is mounted.

## Composition Functions
- `useReceiptsTypes`: Manages the loading and retrieval of receipt types.
  - `receiptsCollection`: An array of receipt types.
  - `loadReceipts()`: A function to load the receipt types from the store.

- `useTheme`: Provides access to the current theme, allowing the component to apply theme-specific styles.

## Template Structure
The template contains:
- A table with two main columns: `Clave` and `Nombre`.
- An additional `Acciones` column is displayed if the `editable` prop is `true`.
- Each row displays a receipt type, with dynamic classes applied based on the current theme.

## Dynamic Classes
- The table headers' background colors are dynamically set based on the current theme.
- The text and background color of each row also depend on the current theme and the receipt type's status.

## Example Usage
```vue
<tableReceipt :editable="true" :accion="['edit', 'delete']" @eAccion="handleAction" />
```
