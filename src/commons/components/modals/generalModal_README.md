
# generalModal_README.md

## Overview

The `generalModal` component is a flexible and customizable modal designed for various use cases within the application. It provides multiple configurations for buttons and content display, allowing developers to easily integrate it into different scenarios.

## Props

### `datos`
- **Type:** `Object`
- **Description:** An object containing data that can be passed to the modal. This data is emitted back to the parent component when the confirm button is clicked.

### `buttonsMode`
- **Type:** `Number`
- **Default:** `1`
- **Description:** Determines the mode for the buttons displayed in the modal.
  - `1`: Displays both "Confirm" and "Cancel" buttons.
  - `2`: Displays only the "Cancel" button.
  - `0`: No buttons are displayed by default. The slot named `buttons` can be used to customize the button area.

## Slots

### `header`
- **Description:** Customizes the header section of the modal. By default, the header displays "¡Sin título!".

### `content`
- **Description:** Customizes the main content area of the modal. If no content is provided, the modal displays a placeholder message "¡Sin contenido!".

### `buttons`
- **Description:** Customizes the button area when `buttonsMode` is set to `0`. This slot allows the developer to define custom buttons or other elements.

## Events

### `eConfirm`
- **Description:** Emitted when the "Confirm" button is clicked. It passes the `datos` prop as the payload.

### `eCancel`
- **Description:** Emitted when the "Cancel" button or the close icon is clicked, or when the escape key is pressed.

## Usage

```vue
<generalModal v-if="showModal" :datos="selectedData" @eConfirm="handleConfirm" @eCancel="handleCancel">
    <template #header>
        Selección de moneda
    </template>
    <template #content>
        <div class="h-12 max-h-48 w-full flex justify-start items-center">
            <coinFinder :color="`#9ca3af`" @eBusqueda="handleSearch" />
        </div>
        <div class="h-96 w-full overflow-auto border-4 rounded-b-2xl" :class="`border-${theme}-headers`">
            <tableCoins :clickeable="true" @eSelect="handleSelect"/>
        </div>
        <p class="pl-1 italic opacity-50 underline font-semibold text-gray-600 text-base w-full text-left bg-white"> Selecciona un registro, por favor.</p>
    </template>
    <template #buttons>
        <button @click="customAction">Custom Button</button>
    </template>
</generalModal>
```

## Keyboard Interaction

The modal listens for the `Escape` key press to trigger the `eCancel` event and close the modal.
