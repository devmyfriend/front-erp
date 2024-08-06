
# theme-switcher Component

The `theme-switcher` component is a Vue.js component that allows users to switch between different themes. It provides a dropdown selection for available themes and updates the application theme dynamically.

## Features

- **Theme Switching**: Allows users to switch between predefined themes.
- **Reactive**: Updates the current theme reactively based on user selection.
- **Integration with useTheme**: Utilizes the `useTheme` composable for theme management.

## Usage

Here's how to use the `theme-switcher` component within a Vue template:

```html
<theme-switcher></theme-switcher>
```

And there's the short version of the same component within a Vue template:

```JavaScript
    import themeSwitcher from '@/commons/ui/theme-switcher/theme-switcher.vue';
```
```html
<themeSwitcher />
```

## Props

This component does not accept any props.

## Example

Here's an example of the component's template and script:

```html
<script setup>
import { useTheme } from '@/commons/composables/theme';
import { ref, onBeforeMount, watch } from 'vue';

const { theme, setTheme } = useTheme();
const temaActual = ref('');

function cambiarTema() {
    setTheme(temaActual.value);
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
    <select class="px-4 max-w-max max-h-full py-0 h-full text-[0.8rem]"
            v-model="temaActual" @change="cambiarTema">
        <option value="MyFriend">MyFriend</option>
        <option value="TheFit">The Fit Gym / The Fit Bar</option>
        <option value="Bonavida">Bonavida</option>
    </select>
</template>
```

## Methods

### cambiarTema

This method sets the current theme based on the user's selection.

## Dependencies

Ensure you have the following composables defined and imported correctly:

- **useTheme**: The theme composable for managing themes.

## Styling

The component uses minimal styling to fit within the application's design system. The dropdown is styled to match the theme and fit within the layout seamlessly.

- **Dropdown**: The dropdown is styled with padding and height adjustments to match the design requirements.
