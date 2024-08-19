# countries View

## Overview
The `countries` view in Vue displays a list of countries using the `tableCountry` component. This view sets up the page titles during the mounting process and renders the table component within a styled container.

## Lifecycle Hooks
- `onBeforeMount`: Executes before the component is mounted to set up the page titles using the `useLayout` composable.

## Template Structure
- **Container**:
  - A `div` element with specific styles for scrollable content.
  - Contains the `tableCountry` component which displays the list of countries.

```vue
<template>
    <div
        class="w-full mt-6 items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
        <tableCountry/>
    </div>
</template>
