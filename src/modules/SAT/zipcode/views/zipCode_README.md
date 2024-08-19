# zipCodeView

## Description
The `zipCodeView` component serves as the primary view for managing and displaying postal codes within the application. This view integrates two key components: a search bar (`zipCodeFinder`) for finding specific postal codes and a table (`tableZipCodes`) to display the list of postal codes.

## Components
- **`zipCodeFinder.vue`**: A search bar that allows users to input and search for specific postal codes.
- **`tableZipCodes.vue`**: A table that lists all the postal codes available in the database, with options for editing or deleting each entry.

## Setup and Usage
### Props
The `zipCodeView` does not accept any props.

### Emits
No events are emitted by the `zipCodeView`.

### Lifecycle Hooks
- **`onBeforeMount`**: The title and subtitle for the view are set using `setTitle` and `setViewTitle` from the `useLayout` composable.

### Example Usage
```vue
<script setup>
import { onBeforeMount } from "vue";
import tabla from "@/modules/SAT/zipcode/components/tableZipCodes.vue";
import buscadorZipCode from "@/modules/SAT/zipcode/components/zipCodeFinder.vue";
import { useLayout } from "@/commons/composables/useLayout.js";
const { setTitle, setViewTitle } = useLayout();

onBeforeMount(() => {
  setTitle("Códigos postales");
  setViewTitle("Listado de Códigos Postales");
});
</script>

<template>
  <div class="flex flex-col min-w-full min-h-9 max-w-full max-h-9 mb-6">
    <buscadorZipCode />
  </div>
  <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
    <tabla />
  </div>
</template>

<style scoped></style>
