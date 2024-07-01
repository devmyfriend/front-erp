
# productKeyModal

This Vue component integrates SweetAlert2 to display a modal window with a table of selectable records. It allows users to select a record from the table, which then emits the selected record's data. It also provides a cancel button to close the modal without selection.

## Props

- **registros**: `Array` (required) - An array of objects representing the records to be displayed in the table.

## Events

- **eSeleccionar**: Emitted with the selected record's data when a row is clicked.
- **eCancelar**: Emitted when the cancel button is clicked or the modal is closed without selection.

## Usage

Include the component in your Vue application and ensure you pass the `registros` prop with the data to display:

```html
<selection-component :registros="yourDataArray"></selection-component>
```

## Styling

The component uses specific classes and inline styles to style the table and buttons within the SweetAlert2 modal.

- The table is fully styled with CSS for borders, background colors, and hover effects.
- The cancel button is styled to have a consistent look with other modals in the application.

## Example

Here's how the component might look when triggered:

```javascript
showTable();  // Call this method to display the modal
```

## Dependencies

This component requires SweetAlert2 to be included in your project.
