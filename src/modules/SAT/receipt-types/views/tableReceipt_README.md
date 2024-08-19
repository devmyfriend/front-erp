
# tableReceipt Component

## Props

- **`editable`**: (Boolean, default: `false`)
  - Defines whether the table is editable, showing or hiding the actions column.

- **`accion`**: (Array, default: `[]`)
  - Array that defines available actions for the table, though not directly used in the component.

## Emits

- **`eAccion`**
  - Emitted with the receipt and the selected action. Useful for handling edit or delete actions.

## Functions

- **`handleAccion`**
  - Emits the `eAccion` event, passing the receipt and the selected action (edit or delete).

## Behavior

- On component mount (`onMounted`), the `loadReceipts` function is called to load receipts.
- The data is displayed in a table with a fixed header.
- If `editable` is `true`, an additional column with icons for editing and deleting is displayed.
