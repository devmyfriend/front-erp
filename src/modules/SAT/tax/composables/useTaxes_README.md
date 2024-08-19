
# useTaxes Composable

## Description
The `useTaxes` composable is responsible for managing tax-related data within the application. It handles the loading, creation, updating, and deletion of tax records through interactions with the `taxStore`.

## State Management
- **`taxesCollection`**: A reactive reference holding the collection of taxes loaded from the store.
- **`showModal`**: A reactive reference controlling the visibility of a modal used for creating or editing tax records.
- **`modoFormulario`**: A reactive reference indicating the form mode (0 for creating, 1 for editing).
- **`modalData`**: A reactive reference holding the key of the selected tax for deletion.
- **`bodyFrm`**: A reactive object that serves as the data model for the form inputs.

## Methods
- **`loadTaxes`**: Asynchronously loads the tax data from the store and updates `taxesCollection`.
- **`cargarDatos`**: Calls `loadTaxes` to refresh the tax data.
- **`esperarTabla(data)`**: Handles actions based on user interactions with the tax table. It either triggers the data upload for editing or sets up the tax for deletion.
- **`subirDatos(datos)`**: Prepares the form for editing by populating `bodyFrm` with the selected tax data and opening the modal.
- **`esperarModal(datos)`**: Processes the form submission for creating or updating a tax record, then refreshes the data and closes the modal.
- **`esperarCancelar`**: Resets the form, closes the modal, and clears any selected tax data.
- **`borrarRegistro`**: Deletes the selected tax record and refreshes the data.

## Usage
To use this composable in a component, import and call the `useTaxes` function:

```javascript
import { useTaxes } from '@/modules/SAT/taxes/composables/useTaxes';

const { taxesCollection, showModal, modoFormulario, modalData, bodyFrm, loadTaxes, cargarDatos, esperarTabla, subirDatos, esperarModal, esperarCancelar, borrarRegistro } = useTaxes();
```

## Notes
- This composable is heavily dependent on the `taxStore`, which provides the necessary methods for interacting with the backend API.
- The form mode (`modoFormulario`) determines whether the form is in create or edit mode.
