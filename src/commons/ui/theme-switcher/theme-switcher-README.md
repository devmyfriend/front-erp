
# theme-switcher Component

The `theme-switcher` component is a Vue.js component that allows users to switch between different themes. It provides a dropdown selection for available themes and updates the application theme dynamically. The component is responsive, offering different UI elements based on the screen size.

## Features

- **Theme Switching**: Allows users to switch between predefined themes.
- **Responsive Design**: Displays a dropdown menu on large screens and an icon-triggered menu on smaller screens.
- **Reactive**: Updates the current theme reactively based on user selection.
- **Integration with useTheme**: Utilizes the `useTheme` composable for theme management.

## Usage

Here's how to use the `theme-switcher` component within a Vue template:

```html
<theme-switcher></theme-switcher>
```

Short version of the same component:

```javascript
import themeSwitcher from '@/commons/ui/theme-switcher/theme-switcher.vue';
```
```html
<themeSwitcher />
```

## Props

This component does not accept any props.

## Methods

### cambiarTema

This method sets the current theme based on the user's selection.

### abrirDropdown

This method toggles the visibility of the dropdown menu.

### cerrarDropdown

This method closes the dropdown menu.

## Example

Here's an example of the component's template and script:

```html
<script setup>
import { useTheme } from '@/commons/composables/theme';
import { ref, onBeforeMount, watch } from 'vue';
import dropdownIco from '../icons/actionIcons/dropdownIco.vue';

const { theme, setTheme } = useTheme();
const temaActual = ref('');
const mostrarDropdown = ref(false);

function cambiarTema() {
    setTheme(temaActual.value);
    cerrarDropdown();
}

function abrirDropdown() {
    mostrarDropdown.value = !mostrarDropdown.value;
}

function cerrarDropdown() {
    mostrarDropdown.value = false;
}

onBeforeMount(() => {
    temaActual.value = theme.value;
    setTheme(temaActual.value);
});

watch(() => theme.value, (newValue) => {
    temaActual.value = newValue;
});
</script>

<template>
    <h1 class="font-bold p-0 text-start uppercase text-white leading-[4vh] w-max mr-4 lg:text-[2rem] title cursor-pointer" @click="abrirDropdown">
        { '{' } theme { '}' }
    </h1>

    <select name="themeSwitcher"
        class="themeSwitcher hidden md:block px-4 min-h-6 h-2/3 max-h-8 py-0.5 
        cursor-pointer text-[0.8rem] shrink w-28 sm:w-auto" 
        v-model="temaActual"
        @change="cambiarTema">
        <option value="MyFriend">MyFriend</option>
        <option value="TheFit">The Fit Gym / The Fit Bar</option>
        <option value="Bonavida">Bonavida</option>
    </select>
    <div class="relative inline-block" @focusout="cerrarDropdown">
        <dropdownIco class="dropdownIco cursor-pointer block md:hidden max-h-3 hover:max-h-[14px] transition-all duration-200" @click="abrirDropdown"></dropdownIco>
        <div v-if="mostrarDropdown" class="dropdown-menu block md:hidden">
            <option class=" text-sm px-2 py-0 max-h-6 overflow-hidden text-start block whitespace-nowrap hover:bg-[#1967d2] hover:text-white" @click="() => { temaActual = 'MyFriend'; cambiarTema(); }">MyFriend</option>
            <option class=" text-sm px-2 py-0 max-h-6 overflow-hidden text-start block whitespace-nowrap hover:bg-[#1967d2] hover:text-white" @click="() => { temaActual = 'TheFit'; cambiarTema(); }">The Fit Gym / The Fit Bar</option>
            <option class=" text-sm px-2 py-0 max-h-6 overflow-hidden text-start block whitespace-nowrap hover:bg-[#1967d2] hover:text-white" @click="() => { temaActual = 'Bonavida'; cambiarTema(); }">Bonavida</option>
        </div>
    </div>
</template>
```

## Dependencies

Ensure you have the following composables defined and imported correctly:

- **useTheme**: The theme composable for managing themes.

## Styling

The component uses scoped styling to fit within the application's design system. The dropdown menu is styled with absolute positioning and a box shadow for a floating effect, and the dropdown icon has a subtle shadow to match the visual style.

- **Dropdown**: The dropdown is styled with padding and height adjustments to match the design requirements.
- **Icon**: The dropdown icon has a hover effect that increases its size slightly, adding interactivity.
- **Title**: The title has a drop shadow for better readability on different backgrounds.