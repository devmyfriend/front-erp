
# Window Layout

The `Window Layout` component is a sublayout designed to provide a dynamic structure for navigating between different parts of a module. It includes a styled title and a dynamic window content area that adapts to the current theme.

## Features

- **Dynamic Title**: The title updates based on the provided content.
- **Dynamic Window Content**: Allows dynamic navigation between different parts of a module.
- **Responsive Design**: Adjusts layout elements based on screen size for an optimal user experience.
- **Dynamic Theme**: Applies styles dynamically based on the current theme.

## Example

Here's an example of the component's template and script:

```html
<script setup>
import { ref, provide } from 'vue';
import titleH1 from '@/commons/ui/title-h1/title-h1.vue';
import { useTheme } from '@/commons/composables/theme'
const { theme } = useTheme();

const titleContent = ref('');
const windowsContent = ref(null);

provide('setTitleContent', (content) => {
  titleContent.value = content;
});
provide('setWindowContent', (content) => {
  windowsContent.value = content;
});
</script>

<template>
    <div class="text-[2rem] w-full h-full overflow-hidden">
        <titleH1 class="h-[4.75%] mb-[1.25%]">
            <slot name="title-content">
                <div v-html="titleContent"></div>
            </slot>
        </titleH1>
        <div class="w-full h-[93%] rounded-[2rem] overflow-hidden" :class="`bg-${theme}-container`" >
            <component :is="windowsContent" class="sticky top-0" :class="`bg-${theme}-background`" />
            <router-view />
        </div>
    </div>
</template>

<style scoped></style>
```

## Methods

### setTitleContent

This method sets the content of the title.

### setWindowContent

This method sets the content of the dynamic window.

## Dependencies

Ensure you have the following components and composables defined and imported correctly:

- **titleH1**: The styled H1 component.
- **useTheme**: The theme composable for managing themes.

## Styling

The component relies on external styles and uses dynamic classes based on the current theme for consistent styling.

- **Container**: The main container adjusts to the screen size and maintains a responsive layout.
- **Title**: The title adjusts its size and appearance based on the theme.
- **Window Content Area**: The dynamic window content area adjusts its appearance based on the provided content and theme.
