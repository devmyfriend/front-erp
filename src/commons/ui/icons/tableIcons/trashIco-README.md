
# trashIco

The `trashIco` component is an icon designed to visually represent a trash or delete action. It adjusts its color dynamically based on the provided prop or the current theme.

## Features

- **Dynamic Color**: The icon's fill color can be set via a prop or dynamically based on the current theme.
- **Theme Integration**: Uses a theme composable to determine the appropriate color variable based on the active theme.
- **Smooth Transitions**: Includes smooth transition animations for a polished user experience.

## Props

### color

- **Type**: String
- **Optional**: true
- **Description**: The color to use for the icon's fill. If not provided, the color is determined based on the current theme.

## Usage

Here's how to use the `trashIco` component within a Vue template:

```html
<trashIco :color="customColor"></trashIco>
```

Where `customColor` is an optional prop that sets the fill color of the icon. If not provided, the color will be determined based on the current theme.

## Example

Here's an example of the component's template and script:

```html
<template>
    <svg class="transition-all duration-300" id="Capa_1" data-name="Capa 1" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="transition-all duration-300" d="M22.172 1.37501H16.2792L15.8176 0.571492C15.7198 0.399709 15.5692 0.255209 15.3827 0.154247C15.1961 
    0.0532863 14.9811 -0.000130108 14.7618 7.53359e-06H9.14884C8.93 -0.000728544 8.71536 0.0524887 8.5295 0.153562C8.34364 
    0.254636 8.19407 0.399477 8.09794 0.571492L7.63633 1.37501H1.74348C1.53509 1.37501 1.33524 1.44744 1.18789 1.57637C1.04054 
    1.7053 0.957764 1.88017 0.957764 2.06251L0.957764 3.43751C0.957764 3.61984 1.04054 3.79471 1.18789 3.92364C1.33524 4.05257 
    1.53509 4.12501 1.74348 4.12501H22.172C22.3804 4.12501 22.5803 4.05257 22.7276 3.92364C22.875 3.79471 22.9578 3.61984 
    22.9578 3.43751V2.06251C22.9578 1.88017 22.875 1.7053 22.7276 1.57637C22.5803 1.44744 22.3804 1.37501 22.172 1.37501ZM3.57026 
    20.0664C3.60774 20.59 3.87186 21.0815 4.30886 21.4407C4.74586 21.7999 5.3229 21.9999 5.9225 22H17.993C18.5926 21.9999 19.1697 
    21.7999 19.6067 21.4407C20.0437 21.0815 20.3078 20.59 20.3453 20.0664L21.3863 5.50001H2.52919L3.57026 20.0664Z" 
    :fill="fillColor"/>
    </svg>
</template>

<script setup>
import { computed } from 'vue';
import { useTheme } from '@/commons/composables/theme';

const { theme } = useTheme();

const props = defineProps({
  color: {
    type: String,
    optional: true,
  }
});

const getComputedStyleValue = (variable) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};

const fillColor = computed(() => {
  if (props.color) {
    return props.color;
  }

  const themeName = theme.value;
  let variableName = '';

  switch (themeName) {
    case 'MyFriend':
      variableName = '--color-myfriend-primary';
      break;
    case 'TheFit':
      variableName = '--color-thefit-primary';
      break;
    case 'Bonavida':
      variableName = '--color-bonavida-primary';
      break;
    default:
      variableName = '--color-thefit-primary';
  }

  return getComputedStyleValue(variableName);
});
</script>
```

## Dependencies

Ensure you have the necessary theme variables defined in your CSS to correctly apply the colors based on the current theme.

## Styling

The component does not include any specific styles scoped to it, relying on the computed fill color and smooth transitions for a polished appearance.