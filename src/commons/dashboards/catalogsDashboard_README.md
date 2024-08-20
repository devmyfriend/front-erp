
# `catalogsDashboard.vue` View

The `catalogsDashboard.vue` view serves as a dashboard for various catalogs in the system. It provides navigation links to different catalog-related pages such as Coins, Payment Methods, Receipts, Countries, and Taxes.

## Components and Composables Used

- **`useTheme`**: Provides the current theme settings, which are used to style the dashboard and its items.
- **`useLayout`**: Manages the layout settings, specifically the title and subtitle of the page.

## Setup Script

- **`onMounted`**: The `setTitle` and `setViewTitle` methods from `useLayout` are called during the `onMounted` lifecycle hook to set the title and subtitle of the dashboard.

- **State and Methods**:
  - **`setTitle`**: Sets the main title of the dashboard to "Catálogos".
  - **`setViewTitle`**: Sets the subtitle of the dashboard to "Dashboard de Catálogos".
  - **`theme`**: The theme used to style the components in the view.

## Template Structure

- **Main Container**:
  - The main container is a `div` element styled to be responsive and visually appealing, with a background color based on the current theme.

- **Catalog Links**:
  - Inside the main container, there is a list of `router-link` components that navigate to different catalog pages. Each link is styled with the theme's primary color and has hover effects.

## Example Usage

```vue
<template>
    <div class="text-white flex flex-col gap-4 px-4 py-6 items-center justify-between
    rounded-2xl border border-black min-w-max max-w-full overflow-scroll"
        :class="`bg-${theme}-container`">

        <div class="flex flex-col w-full max-w-[80%] overflow-scroll gap-4 py-2 lg:max-w-full lg:items-start lg:max-h-full flex-nowrap lg:flex-wrap">
            <router-link :to="{ name: 'coins' }" class="dashboardItems"
                :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"> Monedas </router-link>
            <router-link :to="{ name: 'payment' }" class="dashboardItems"
                :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"> Formas/Métodos de Pago </router-link>
            <router-link :to="{ name: 'receipts' }" class="dashboardItems"
                :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"> Comprobantes </router-link>
            <router-link :to="{ name: 'countries' }" class="dashboardItems"
                :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"> Países </router-link>
            <router-link :to="{ name: 'taxesSAT' }" class="dashboardItems"
                :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"> Impuestos </router-link>
        </div>

    </div>
</template>
```

## Styling

- **`dashboardItems`**:
  - A utility class that applies consistent styling to all the catalog links. It includes padding, rounded corners, a bold font, and responsive width settings. Additionally, it applies hover effects such as background color changes and shadow enhancements.

## Summary

This view provides a centralized dashboard for navigating through various catalog-related pages. It leverages Vue Router for navigation and uses theming to ensure consistent and dynamic styling across different elements of the UI.
