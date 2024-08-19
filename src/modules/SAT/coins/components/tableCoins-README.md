# `tableCoins` Component

The `tableCoins` component is a Vue 3 table component that displays a list of currencies. This component is dynamic and can handle different visual states depending on whether the currencies are active or inactive and whether the table is editable or clickable.

## Props

- **editable**: A boolean that, when `true`, allows the table to display edit and delete buttons for each row.
- **clickeable**: A boolean that, when `true`, allows the rows in the table to be selectable, emitting an event when a row is selected.

## Emits

- **eAccion**: Emits an event with two parameters: the selected currency and the action (edit or delete) to be performed.
- **eSelect**: Emits an event with the selected currency when a row is clickable.

## Lifecycle Hook

- **onMounted**: When the component is mounted, it calls `cargarDatos` to load the collection of currencies from the store.

## Methods

- **handleAccion**: This method handles edit and delete actions. It takes a currency and an action as parameters and emits the `eAccion` event.
- **selectItem**: This method is called when a row is selected (if `clickeable` is `true`) and emits the `eSelect` event.

## Component Structure

- **Table**: The table displays the columns "Clave" (Key), "Nombre" (Name), "Status", and if editable, an additional column for actions.
- **Table Body**: Each row in the table consists of the currency data and, if editable, the edit and delete icons.

## Code and Functionality

The code defines the behavior of each part of the component, from the table structure to the user interaction with the rows and available actions.

### Example Usage

```vue
<template>
    <tableCoins :editable="true" @eAccion="handleAction" @eSelect="handleSelect" />
</template>

<script setup>
import { tableCoins } from '@/modules/SAT/coins/components/tableCoins.vue';

const handleAction = (currency, action) => {
    // Handle edit or delete action
};

const handleSelect = (currency) => {
    // Handle currency selection
};
</script>
