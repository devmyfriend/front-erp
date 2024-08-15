
# MainLayout Component

The `MainLayout` component is a structural component that arranges the main sections of the application, including the sidebar, navbar, and the main content area. It utilizes several composables and sub-components to manage the layout and theming.

## Script Setup

```javascript
<script setup>
import sidebar from '@/commons/ui/sidebar/sidebar.vue';
import navbar from '../ui/navbar/navbar.vue';
import titleH1 from '../ui/title-h1/title-h1.vue';
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();
import { useLayout } from '@/commons/composables/useLayout.js';
const { title } = useLayout();
</script>
```

## Template

```html
<template>
    <div class="flex flex-row w-full h-full gap">
       <sidebar class=" h-full text-white 
        min-w-12 sm:min-w-12 md:min-w-14 lg:min-w-16 xl:min-w-16 2xl:min-w-[72px]
        max-w-12 sm:max-w-12 md:max-w-14 lg:max-w-16 xl:max-w-16 2xl:max-w-[72px]"
        :class="`bg-${theme}-sidebar`" />
        <div class="flex-grow flex flex-col flex-wrap">
            <navbar/>
            <div class="flex flex-col flex-grow max-h-[95%]">
                <div class="flex flex-col overflow-hidden h-full p-2 md:p-4">
                    <titleH1> {{ title }} </titleH1>
                    <div class="flex-grow overflow-hidden rounded-2xl">
                        <router-view/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
```

## Styles

```css
<style scoped>
</style>
```

## Description

The `MainLayout` component provides the primary layout structure for the application. It includes the following elements:

- **Sidebar**: A navigation sidebar component.
- **Navbar**: A top navigation bar component.
- **TitleH1**: A header component for displaying the main title of the module.
- **Router View**: The main content area where different views are rendered based on the current route.

### Props

This component does not accept any props.

### Slots

- **Default**: Used to render the `router-view` which displays the current view based on the route.
