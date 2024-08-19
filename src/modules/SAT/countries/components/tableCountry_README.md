# tableCountry Component

## Overview
The `tableCountry` component is a Vue table component that displays a list of countries. It uses data loaded from a composable and renders it in a table with a specific format.

## Props
- No props are directly passed to this component.

## Variables and Functions
- `countriesCollection`: A reactive reference that holds the collection of countries loaded from the `useCountries` composable.
- `loadCountries`: A function imported from `useCountries` that loads the countries when the component is mounted.
- `theme`: The current theme of the application, obtained from the `useTheme` composable.

## Lifecycle Hooks
- `onMounted`: Calls the `loadCountries` function when the component is mounted, triggering the loading of country data.

## Template Structure
- **Table**:
  - **Columns**:
    - `Clave`: Displays the country code.
    - `Nombre`: Displays the country name.

```vue
<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th class="bg-primaryHeaderTable" :class="`bg-${theme}-headers`">Clave</th>
                <th class="bg-primaryHeaderTable" :class="`bg-${theme}-headers`">Nombre</th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white" v-for="(pais, index) in countriesCollection" :key="index" :class="`text-${theme}-text`">
                <td
                    class="h-primaryBodyTableHeight border-b-secondaryTableWidth px-2 ">
                    {{ pais.ClavePais }}
                </td>
                <td
                    class="h-primaryBodyTableHeight border-b-secondaryTableWidth px-2 border-l-primaryTableWidth">
                    {{ pais.Descripcion }}
                </td>
            </tr>
        </tbody>
    </table>
</template>
