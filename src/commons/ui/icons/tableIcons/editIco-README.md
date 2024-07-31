
# editIco

The `editIco` component is an icon designed to visually represent an edit action. It adjusts its color dynamically based on the provided prop or the current theme.

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

Here's how to use the `editIco` component within a Vue template:

```html
<editIco :color="customColor"></editIco>
```

Where `customColor` is an optional prop that sets the fill color of the icon. If not provided, the color will be determined based on the current theme.

## Example

Here's an example of the component's template and script:

```html
<template>
  <svg
    class="transition-all duration-300"
    id="Capa_1"
    data-name="Capa 1"
    width="23"
    height="22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="transition-all duration-300"
      d="M15.9525 3.24673L19.3977 6.77085C19.5428 6.91932 19.5428 7.16155 19.3977 7.31002L11.056 15.8429L7.51155 16.2454C7.03794 16.3001 6.6369 15.8898 6.69037 15.4054L7.08377 11.7796L15.4254 3.24673C15.5706 3.09826 15.8074 3.09826 15.9525 3.24673ZM22.14 2.35202L20.2761 0.445399C19.6956 -0.148466 18.7522 -0.148466 18.1678 0.445399L16.8157 1.82848C16.6706 1.97695 16.6706 2.21918 16.8157 2.36765L20.2609 5.89178C20.406 6.04024 20.6428 6.04024 20.7879 5.89178L22.14 4.50869C22.7206 3.91092 22.7206 2.94589 22.14 2.35202ZM15.2421 13.5222V17.4995H3.01988V4.99707H11.797C11.9192 4.99707 12.0338 4.94628 12.1216 4.86032L13.6494 3.29752C13.9397 3.00059 13.7334 2.49658 13.3247 2.49658H2.40877C1.39662 2.49658 0.575439 3.33659 0.575439 4.37195V18.1246C0.575439 19.16 1.39662 20 2.40877 20H15.8532C16.8654 20 17.6865 19.16 17.6865 18.1246V11.9594C17.6865 11.5413 17.1938 11.3342 16.9036 11.6273L15.3758 13.1901C15.2918 13.2799 15.2421 13.3971 15.2421 13.5222Z"
      :fill="fillColor"
    />
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
      variableName = '--color-thefit-primary'; // Default value
  }

  return getComputedStyleValue(variableName);
});
</script>
```

## Dependencies

Ensure you have the necessary theme variables defined in your CSS to correctly apply the colors based on the current theme.

## Styling

The component does not include any specific styles scoped to it, relying on the computed fill color and smooth transitions for a polished appearance.