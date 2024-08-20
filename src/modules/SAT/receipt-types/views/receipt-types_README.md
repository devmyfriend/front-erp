
# `receipts-types` View

The `receipts-types` view is responsible for displaying and managing the list of receipt types in the SAT system. It provides functionality for adding, editing, and deleting receipt types using various components and composables within the Vue.js ecosystem.

## Components Used

- **`btnFormulario`**: A button component that triggers the creation of a new receipt type.
- **`tableReceipt`**: A table component that displays the list of available receipt types.
- **`deleteModal`**: A modal component that confirms the deletion of a receipt type.
- **`receiptTypesModal`**: A modal component used for adding or editing a receipt type.

## Composables

- **`useLayout`**: Manages the layout settings, specifically the title and subtitle of the page.
- **`useReceiptsTypes`**: Handles the business logic related to receipt types, including loading, searching, adding, editing, and deleting them.
- **`useTheme`**: Provides the current theme settings, which can influence the styling of the view.

## Script Setup

- **`onBeforeMount`**: Uses the `setTitle` and `setViewTitle` methods from `useLayout` to set the title and subtitle of the view before the component is mounted.

- **State and Methods**: 
  - **`showModal`**: Controls the visibility of the modal for adding/editing receipt types.
  - **`modoFormulario`**: Determines whether the form is in creation mode (`0`) or edit mode (`1`).
  - **`modalData`**: Holds the data of the selected receipt type for editing or deleting.
  - **`bodyFrm`**: Holds the form data for creating or editing a receipt type.
  - **`esperarTabla`**: Handles actions from the table, such as editing or deleting a receipt type.
  - **`esperarModal`**: Manages form submission for creating or editing a receipt type.
  - **`esperarCancelar`**: Resets the form and closes the modal.
  - **`borrarRegistro`**: Handles the deletion of a receipt type.

## Template Structure

- **Add Button**: 
  - The `btnFormulario` component allows users to trigger the creation of a new receipt type. Clicking this button displays the creation/editing modal.

- **Receipt Types Table**: 
  - The `tableReceipt` component displays the list of available receipt types, allowing actions such as editing and deleting.

- **Delete Modal**: 
  - The `deleteModal` component confirms the deletion of a selected receipt type. It is only displayed if `modalData` is not `null`.

- **Receipt Types Modal**: 
  - The `receiptTypesModal` component is used for adding or editing a receipt type. It is displayed when `showModal` is `true`.

## Example Usage

```vue
<template>
    <div class="flex mb-6 h-inputHeight justify-end">
        <btnFormulario @eNuevo="showModal = true; modoFormulario = 0"
            class="text-base px-4 py-2 text-white rounded-md uppercase font-semibold flex items-center justify-center transition-all duration-300 max-w-24 min-w-24 md:max-w-32 md:min-w-32 xl:max-w-36 xl:min-w-36" />
    </div>
    <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
        <tableReceipt :editable="true" @eAccion="esperarTabla" />
        <deleteModal :id="modalData" v-if="modalData !== null" @eEliminar="borrarRegistro"
            @eCancelar="esperarCancelar" />
    </div>
    <receiptTypesModal :datos="bodyFrm" :mostrar="showModal" :modo="modoFormulario" @eConfirm="esperarModal"
        @eCancel="esperarCancelar" />
</template>
```
