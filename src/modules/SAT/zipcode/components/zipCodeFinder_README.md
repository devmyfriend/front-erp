
# zipCodeFinder Component

## Description

The `zipCodeFinder` component is a search input designed to find postal codes. It includes an input field and a search icon, allowing users to either press the "Enter" key or click the search icon to initiate a search. If a postal code is found, a modal with the postal code details is displayed. If not, a message informs the user that the postal code was not found.

## Props

This component does not require any props.

## Emits

- None

## Slots

- None

## Methods

### `findZipCode`

This method triggers a search for the postal code entered in the input field.

- If a postal code is found, a modal displays details such as country, postal code, state, municipality, and locality.
- If no postal code is found, a message informs the user.
- If the input is empty, it triggers the loading of all postal codes.

## Dependencies

- `useZipCode`: A store that manages the state of postal codes.
- `Swal`: A library for displaying modal dialogs (SweetAlert2).
- `searchIco`: A component for displaying the search icon.

## Usage Example

```vue
<template>
  <div class="flex items-center h-inputHeight">
    <input
      class="text-primaryFontColor rounded-inputRadius border-inputBorder border-inputWidth p-paddingInput lg:w-96 md:w-60 sm:w-32 outline-none h-full text-base"
      type="text" v-model="txtBusqueda" @keyup.enter="findZipCode" placeholder="Buscar código postal" />
    <searchIco class="cursor-pointer max-h-buscadorIconHeight ml-4" @click="findZipCode" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useZipCode } from "@/store/zipCode/zipCodeStore";
import Swal from "sweetalert2";
import searchIco from "@/commons/ui/icons/actionIcons/searchIco.vue";

const store = useZipCode();
const txtBusqueda = ref("");

const findZipCode = async () => {
  const cp = txtBusqueda.value;
  if (cp) {
    const result = await store.findZipCode(cp);
    if (result && result.length > 0) {
      const data = result[0];
      Swal.fire({
        title: "Código Postal Encontrado",
        html: `
            <div>
              <p><strong>País:</strong> ${data.pais}</p>
              <p><strong>Código Postal:</strong> ${data.codigo_postal}</p>
              <p><strong>Estado:</strong> ${data.estado}</p>
              <p><strong>Municipio:</strong> ${data.municipio}</p>
              <p><strong>Localidad:</strong> ${data.localidad}</p>
            </div>
          `,
        icon: "info",
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "No encontrado",
        text: "No hay códigos postales de esta zona",
      });
    }
  } else {
    await store.loadZipCode();
  }
};
</script>

<style scoped>
input::placeholder {
  color: theme("colors.disabled.DEFAULT");
}
</style>
```

## Analysis

### Pros:
- **Usability**: The component is user-friendly, allowing users to easily search for postal codes.
- **Feedback**: Provides clear feedback to the user whether a postal code is found or not.
- **Reactivity**: Utilizes Vue's reactivity effectively with `ref` and store management.

### Cons:
- **Dependence on Swal**: The component relies heavily on SweetAlert2 for displaying results, which may not be desirable in all projects.
- **Lack of Prop Validation**: There is no validation of input, which might lead to unexpected behavior if the input is not as expected.

