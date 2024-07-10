
# deleteModal

This component is designed to confirm deletion operations within the application. It integrates with SweetAlert2 to provide a user-friendly confirmation dialog before performing delete actions.

## Props

- **registro**: `Object` (required) - The record to be deleted.
- **tipoRegistro**: `String` (required) - The type of the record.
- **id**: `String` (required) - The identifier of the record.

## Events

- **eEliminar**: Emitted when the deletion is confirmed.
- **eCancelar**: Emitted when the deletion is cancelled.

## Usage

This component is typically initialized when needed in the application logic, triggered by user actions such as clicking a delete button.

## Styling

No direct styling applied; utilizes styles from SweetAlert2 for consistency and responsiveness.
