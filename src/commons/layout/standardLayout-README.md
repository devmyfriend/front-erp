
# Standard Layout

The `Standard Layout` component is a sublayout designed to provide a consistent structure for nested routes within the main layout. It includes a styled title and a content area that adapts to the current theme.

## Features

- **Dynamic Title**: The title updates based on the current route.
- **Responsive Design**: Adjusts layout elements based on screen size for an optimal user experience.
- **Dynamic Theme**: Applies styles dynamically based on the current theme.

## Example

Here's an example of the component's template and script:

```html
<script setup>
import { onMounted, onUpdated, ref, watch } from 'vue';
import titleH1 from '@/commons/ui/title-h1/title-h1.vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import { useRoute } from 'vue-router';
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();
const route = useRoute();

const { getTitle } = useLayout();
const titulo = ref('');

const updateTitle = () => {
    titulo.value = getTitle();
};

watch(() => route.name, () => {
    updateTitle();
}, { immediate: true });

onMounted(() => {
    updateTitle();
});

onUpdated(() => {
    updateTitle();
});
</script>

<template>
    <div class="text-[2rem] w-full h-full overflow-hidden">
        <titleH1 class="h-[4.75%]">
            <template v-slot>
                <slot name="Titulo">
                    {{ titulo }}
                </slot> 
            </template>
        </titleH1>
        <div class="w-[97%] md:w-[98%] lg:w-full shrink h-[93%] md:h-[93%] lg:h-[91%] xl:h-[92%] 2xl:h-[93%] rounded-[2rem] overflow-scroll" :class="`bg-${theme}-background`">
            <router-view/>
        </div>
     </div>
</template>

<style scoped>
</style>
```

## Methods

### updateTitle

This method updates the title based on the current route.

## Dependencies

Ensure you have the following components and composables defined and imported correctly:

- **titleH1**: The styled H1 component.
- **useLayout**: The layout composable for managing the title.
- **useTheme**: The theme composable for managing themes.

## Styling

The component relies on external styles and uses dynamic classes based on the current theme for consistent styling.

- **Container**: The main container adjusts to the screen size and maintains a responsive layout.
- **Title**: The title adjusts its size and appearance based on the theme.
- **Content Area**: The main content area adjusts its padding and height based on the screen size.
