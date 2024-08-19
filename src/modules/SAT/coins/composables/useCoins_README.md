# useCoins Composable

## Overview
The `useCoins` composable in Vue manages the logic for handling currencies (monedas) in the application. It interacts with the Pinia store `coinsStore` to perform CRUD operations on currencies and manages the display of a modal for creating or editing currencies.

## Reactive Variables
- `coinsCollection`: An array that stores the loaded currencies.
- `modalData`: Stores the data of the selected currency for editing or deleting.
- `showModal`: Controls the visibility of the modal.
- `modoFormulario`: Indicates whether the form is in creation mode (0) or edit mode (1).
- `bodyFrm`: Reactive object that contains the form data for a currency.

## Functions
- `findCoins`: Searches for currencies based on a given text.
- `cargarDatos`: Loads all currencies from the store.
- `esperarTabla`: Manages actions from the currency table (edit or delete).
- `esperarBusqueda`: Handles the search for currencies.
- `subirDatos`: Prepares the data for editing in the form.
- `esperarModal`: Submits the form data to create or update a currency.
- `borrarRegistro`: Deletes a selected currency.
- `esperarCancelar`: Resets the form and closes the modal.

## Usage
This composable is used to encapsulate the logic related to currency management in a Vue component. It provides functions and reactive data that can be used within the component to interact with the currency data.

