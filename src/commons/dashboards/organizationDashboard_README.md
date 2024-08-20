# `organizationDashboard.vue` View

The `organizationDashboard.vue` view functions as a dashboard for the organization management module. It provides navigation links to different organization-related pages, such as the list of business entities and a form to add or edit business entities.

## Components and Composables Used

- **`useTheme`**: This composable provides the current theme settings, which are used to style the dashboard and its items consistently with the rest of the application.
- **`useLayout`**: This composable manages the layout settings, specifically the title and subtitle of the page.

## Setup Script

- **`onMounted`**: The `setTitle` and `setViewTitle` methods from `useLayout` are invoked during the `onMounted` lifecycle hook to set the title and subtitle of the dashboard.

- **State and Methods**:
  - **`setTitle`**: Sets the main title of the dashboard to "Organización".
  - **`setViewTitle`**: Sets the subtitle of the dashboard to "Dashboard de Organización".
  - **`theme`**: The theme used to style the components in the view, ensuring consistency across the UI.

## Template Structure

- **Main Container**:
  - The main container is a `div` element that is styled to be responsive and visually appealing, with a background color derived from the current theme settings. It is designed to be flexible and handle overflow content, making it suitable for different screen sizes.

- **Organization Links**:
  - Inside the main container, there is a list of `router-link` components that navigate to different organization-related pages. Each link is styled using the theme's primary color and features hover effects to enhance user interaction.

## Example Usage

```vue
<template>
    <div class="text-white flex flex-col gap-4 px-4 py-6 items-center justify-between
    rounded-2xl border border-black min-w-max max-w-full overflow-scroll"
        :class="`bg-${theme}-container`">

        <div class="flex flex-col w-full max-w-[80%] overflow-scroll gap-4 py-2 lg:max-w-full lg:items-start lg:max-h-full flex-nowrap lg:flex-wrap">
            <router-link :to="{ name: 'businessEntitiesList' }" class="dashboardItems"
                :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"> Empresas </router-link>
            <router-link :to="{ name: 'businessEntitiesForm' }" class="dashboardItems"
                :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"> Formulario de Empresas </router-link>
        </div>
    </div>
</template>
```

## Styling

- **dashboardItems**:
  - This utility class applies consistent styling to all the organization-related links. It includes padding, rounded corners, bold font, and responsive width settings. Hover effects are applied to enhance the user experience, such as background color changes and shadow enhancements.