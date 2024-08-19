# `coinFinder` Component

The `coinFinder` component is a Vue 3 input component designed to search for coins by their name. It emits search results based on the user's input.

## Props

- **color**: A string that determines the color of the search icon. The default value is `'white'`.

## Emits

- **eBusqueda**: Emits an event when a search is performed. It passes the search text if results are found, or it emits without parameters if no results are found.

## Methods

- **buscar**: This method is triggered when the user presses the Enter key or clicks the search icon. It checks the search text:
  - If the text is not empty, it calls the `findCoins` method from the `coinsStore`.
  - If results are found, it emits the `eBusqueda` event with the search text.
  - If no results are found, it triggers a SweetAlert modal with a "No results found" message and emits `eBusqueda` without parameters.

## Component Structure

- **Input Field**: The main input field where the user can type the name of the coin they want to search for.
- **Search Icon**: A clickable icon that also triggers the `buscar` method. The color of the icon is customizable via the `color` prop.

## Code and Functionality

The code defines the behavior of the `coinFinder` component, allowing users to search for coins and handle the results accordingly. The component also uses SweetAlert for user feedback when no results are found.

### Example Usage

```vue
<template>
    <coinFinder @eBusqueda="handleSearch" />
</template>

<script setup>
import coinFinder from '@/modules/SAT/coins/components/coinFinder.vue';

const handleSearch = (searchText) => {
    if (searchText) {
        // Process the search result
    } else {
        // Handle no result found
    }
};
</script>
