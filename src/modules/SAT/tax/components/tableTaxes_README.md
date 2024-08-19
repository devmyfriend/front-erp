# tableTaxes.vue

## Props

- **editable** (`Boolean`): 
  - Description: Determines if the table has edit and delete options available.
  - Default value: `false`.

- **accion** (`Array`): 
  - Description: Allows passing a list of actions to be handled in the table.
  - Default value: `[]`.

## Emits

- **eAccion**: 
  - Description: Emits an event with the tax data and the selected action (edit or delete).
  - Arguments:
    - `impuesto` (`Object`): The selected tax.
    - `accion` (`Number`): The action to be performed (1 for edit, 2 for delete).

## Functions

- **handleAccion(impuesto, accion)**:
  - Description: Handles the edit and delete actions, emitting the `eAccion` event with the corresponding data.
  - Arguments:
    - `impuesto` (`Object`): The selected tax.
    - `accion` (`Number`): The action to be performed.

## Composables Used

- **useTheme**: 
  - Description: Used to get the current theme and apply dynamic classes based on the selected theme.

- **useTaxes**: 
  - Description: Composable that handles the logic for loading taxes through the store (`taxesCollection` and `loadTaxes`).

## Lifecycle

- **onMounted**: 
  - Description: Calls `loadTaxes` to load the taxes from the store when the component is mounted.

## Styles

- The CSS classes are dynamically linked to the current theme using the `useTheme` composable. This ensures that the table follows the color scheme of the selected theme.
