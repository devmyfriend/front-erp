# `coins.vue` View

The `coins.vue` view is responsible for displaying and managing the list of coins in the SAT system. It provides functionality for searching, adding, editing, and deleting coins.

## Components Used

- **`coinFinder`**: A component used to search for coins by name.
- **`tableCoins`**: A table component that displays the list of coins.
- **`deleteModal`**: A modal component that confirms the deletion of a coin.
- **`btnFormulario`**: A button component that triggers the creation of a new coin.
- **`coinsModal`**: A modal component used for adding or editing a coin.

## Composables

- **`useLayout`**: Manages the layout settings, specifically the title and subtitle of the page.
- **`useCoins`**: Handles the business logic related to coins, including fetching, searching, adding, editing, and deleting coins.
- **`useTheme`**: Provides the current theme settings.

## Setup Script

- **`onBeforeMount`**: The `setTitle` and `setViewTitle` methods from `useLayout` are used to set the title and subtitle of the view before the component is mounted.

- **State and Methods**: 
  - **`modalData`**: Holds the data of the coin to be edited or deleted.
  - **`showModal`**: Controls the visibility of the modal for adding/editing coins.
  - **`modoFormulario`**: Determines whether the form is in creation mode (`0`) or edit mode (`1`).
  - **`bodyFrm`**: Holds the form data for creating or editing a coin.
  - **`esperarTabla`**: Handles actions from the table, such as editing or deleting a coin.
  - **`esperarBusqueda`**: Triggers the search functionality when a search term is entered.
  - **`esperarModal`**: Handles the form submission for creating or editing a coin.
  - **`borrarRegistro`**: Handles the deletion of a coin.
  - **`esperarCancelar`**: Resets the modal and form data.

## Template Structure

- **Search and Add Button**: 
  - The `coinFinder` component allows users to search for coins.
  - The `btnFormulario` component provides a button to trigger the creation of a new coin.

- **Coin Table**: 
  - The `tableCoins` component displays the list of coins, allowing for actions such as editing and deleting.

- **Delete Modal**: 
  - The `deleteModal` component confirms the deletion of a selected coin.

- **Coins Modal**: 
  - The `coinsModal` component is used for adding or editing a coin. It is displayed when `showModal` is `true`.

## Example Usage

```vue
<template>
    <div 
        class="flex flex-row mb-6 h-inputHeight justify-between">
        <div class="flex flex-row mb-6 h-inputHeight gap-4">
            <coinFinder @eBusqueda="esperarBusqueda" />
        </div>
        <btnFormulario @eNuevo="showModal = true; modoFormulario = 0"
            class="text-base px-4 py-2 text-white rounded-md h-full uppercase font-semibold flex items-center justify-center transition-all duration-300 max-w-24 md:max-w-32 xl:max-w-36" />
    </div>
    <div
        class="w-full items-center flex flex-col flex-grow overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
        <tableCoins :editable="true" @eAccion="esperarTabla" />
        <deleteModal :id="modalData" v-if="modalData !== null" @eEliminar="borrarRegistro"
            @eCancelar="esperarCancelar" />
    </div>
    <coinsModal :datos="bodyFrm" :mostrar="showModal" :modo="modoFormulario" @eConfirm="esperarModal"
        @eCancel="esperarCancelar" />
</template>
