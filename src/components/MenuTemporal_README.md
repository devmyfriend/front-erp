
# MenuTemporal Component

The `MenuTemporal` component is a Vue.js component that serves as a temporary menu interface for navigating through various modules within an application. It displays a list of module links and includes a theme switcher to allow users to change the application's theme.

## Features

- **Module Navigation** The user it's allowed to select a module and then navigate to it.
- **Responsive Design**: Ensures proper display and navigation across different screen sizes.
- **Theme Switching**: Allows users to switch between predefined themes.
- **Integration with useTheme**: Utilizes the `useTheme` composable for theme management.

## Props

This component does not accept any props.

## Example

Here's an example of the component's template and script:

```html
<script setup>
import { ref } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import themeSwitcher from '@/commons/ui/theme-switcher/theme-switcher.vue';
const { theme } = useTheme();

const modulos = ref([
    { nombre: 'Login', ruta: '/login' },
    { nombre: 'Monedas', ruta: { name: 'coins' } },
]);
</script>

<template>
    <main class="bg-container flex flex-col items-center justify-center h-screen px-4 max-w-full">
        <div
            class="bg-sidebar rounded-2xl w-3/4 max-h-44 py-6 flex place-content-center text-center gap-4 flex-wrap flex-col mt-6 h-[40%] xl:h-max px-4 md:px-6 ">
            <h1 class="text-white font-semibold text-[2rem] flex-grow max-h-12"> Menú temporal </h1>
            <div class="w-64 max-w-64 max-h-12 h-12 flex justify-center items-center">
                <themeSwitcher/>
            </div>
        </div>
        <section class="flex flex-grow min-h-44 p-6 w-full justify-center">
            <div class="flex flex-grow p-4 rounded-2xl flex-col gap-4 overflow-y-scroll items-center"
                :class="`bg-${theme}-container border-${theme}-primary border-4`">
                <router-link :to="modulo.ruta" v-for="modulo in modulos" :key="modulo.nombre"
                    :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`" class="flex items-center px-6 transition-all duration-300
                        border-4 border-solid justify-center
                        text-2xl font-semibold rounded-2xl text-white no-underline
                        w-full min-h-[2.5rem] max-w-[35rem]">
                    {{ modulo.nombre }}
                </router-link>
            </div>
        </section>
    </main>
</template>

<style scoped></style>
```
## Methods

This component relies on Vue's `ref` for reactive state management. The following methods and features are implicit in its design:

### Dynamic Module List

- **Module Links**: The component dynamically generates links to different application modules based on the `modulos` array.

### Theme Switcher

- **Theme Integration**: The theme switcher component is used to change the application's theme, and the component's classes adapt to the selected theme.

## Dependencies

Ensure you have the following composables and components defined and imported correctly:

- **useTheme**: The theme composable for managing themes.
- **themeSwitcher**: The theme-switcher component used for changing the theme.

## Styling

The component uses scoped styling to fit within the application's design system. The main container is styled for responsiveness, and the dynamic theme classes allow the component to adapt its appearance based on the selected theme.

- **Container**: The main container is styled to be flexible and centered, ensuring the component looks good on various screen sizes.
- **Theme Classes**: The component's classes change dynamically based on the theme to ensure a consistent look and feel.