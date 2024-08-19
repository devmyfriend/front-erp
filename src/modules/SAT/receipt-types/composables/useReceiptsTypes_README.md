
# useReceiptsTypes Composable Documentation

This composable handles the logic for managing receipt types (comprobantes) within the SAT module. It interacts with the `receiptStore` to load, create, update, and delete receipt types, while providing a reactive data structure for the UI to interact with.

## State

- `receiptsCollection` (`ref([])`): Holds the collection of receipt types.
- `showModal` (`ref(false)`): Controls the visibility of the modal for creating or editing receipt types.
- `modoFormulario` (`ref(0)`): Defines the mode of the form, either `0` for creating a new receipt or `1` for editing an existing one.
- `modalData` (`ref(null)`): Stores the ID of the selected receipt for deletion.
- `bodyFrm` (`ref({ ClaveTipoDeComprobante: "", Descripcion: "" })`): Holds the data for the receipt form (ClaveTipoDeComprobante and Descripcion).

## Methods

- `loadReceipts`: Asynchronously loads the receipt types from the store and populates the `receiptsCollection`.
- `cargarDatos`: A helper function that calls `loadReceipts` to load the receipt types.
- `esperarTabla(data)`: Handles the actions on the receipt table. If the action is 1, it calls `subirDatos` to load the receipt data into the form. If the action is 2, it prepares the data for deletion.
- `subirDatos(datos)`: Loads the selected receipt data into the `bodyFrm` and opens the modal for editing.
- `esperarModal(datos)`: Handles form submission. Depending on the form mode (`modoFormulario`), it will either create or update the receipt in the store.
- `esperarCancelar`: Resets the form and modal state.
- `borrarRegistro`: Deletes the selected receipt using the stored `modalData`.

## Usage Example

```vue
<script setup>
import { useReceiptsTypes } from '@/path-to-composable/useReceiptsTypes';

const {
  receiptsCollection,
  showModal,
  modoFormulario,
  modalData,
  bodyFrm,
  cargarDatos,
  esperarTabla,
  subirDatos,
  esperarModal,
  esperarCancelar,
  borrarRegistro,
} = useReceiptsTypes();

onMounted(() => {
  cargarDatos();
});
</script>

<template>
  <!-- Table and Modal will interact with the composable's state and methods -->
</template>
```

This composable helps to manage the flow of receipt creation, modification, and deletion while keeping the state reactive and synchronized with the store.
