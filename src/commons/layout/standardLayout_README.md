
# standardLayout Component

The `standardLayout` component is a basic layout component that provides a container with a subtitle managed by the `useLayout` composable. It also uses the `useTheme` composable to apply theming.

## Script Setup

```javascript
<script setup>
import { useLayout } from '@/commons/composables/useLayout.js';
import { useTheme } from '@/commons/composables/theme';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
const { theme } = useTheme();
const { view } = useLayout();
</script>
```

## Template

```html
<template>
    <div class="w-full h-full flex flex-col items-center" :class="`bg-${theme}-background`">
        <titleH2 class="sticky top-0 p-4 pb-0" :class="`bg-${theme}-background`"> {{ view }} </titleH2>
        <div class="overflow-scroll p-4 pt-0 flex flex-col w-full h-full">
            <div class="flex flex-col flex-grow overflow-y-scroll">
                <router-view />
            </div>
        </div>
    </div>
</template>
```

## Description

The `standardLayout` component provides a basic layout structure for the application. It includes the following elements:

- **TitleH2**: A header component for displaying the view title, which is managed by the `useLayout` composable.
- **Router View**: The main content area where different views are rendered based on the current route.

### Props

This component does not accept any props.

### Slots

- **Default**: Used to render the `router-view` which displays the current view based on the route.
