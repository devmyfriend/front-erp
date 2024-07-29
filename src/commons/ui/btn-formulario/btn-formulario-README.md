
# btn-formulario

The `btn-formulario` component is a button designed to trigger the creation of a new form entry. Depending on the mode, it can either initiate a new form entry or cancel the current operation. 

## Features

- **Dynamic Mode**: The button text and icon change based on the mode (`0` for 'New' and `1` for 'Cancel').
- **Event Emission**: Emits an `eNuevo` event when clicked, which can be handled by parent components.
- **Styling**: Uses TailwindCSS for styling, with dynamic classes based on the current theme.

## Events

### eNuevo

This event is emitted when the button is clicked. It does not send any payload.

## Usage

Here's how to use the `btn-formulario` component within a Vue template:

```html
<btn-formulario :modo="mode" @eNuevo="handleNewEntry"></btn-formulario>
```

Where `handleNewEntry` is a method in the Vue component that handles the event emitted from the `btn-formulario` component.

## Props

### modo

- **Type**: Number
- **Default**: 0
- **Description**: Determines the mode of the button (0 for 'New', 1 for 'Cancel').

## Styling

The component uses TailwindCSS for styling. The button is designed to be visually cohesive with the rest of the application's design system.

- **Dimensions**: Button height is set to 10 pixels, with primary padding and rounded borders.
- **Colors**: Utilizes dynamic classes based on the current theme for primary and secondary background colors.
- **Interactivity**: Includes hover effect changes and transition animations.

## Example

Here's an example of the button's template:

```html
<template>
    <button @click="emit('eNuevo')"
    class="col-span-2 text-white flex p-primaryPaddingButton border-none gap-4 h-10 font-bold
    rounded-primaryButtonRadius justify-center items-center uppercase text-base grow transition-all duration-300"
    :class="`bg-${theme}-primary hover:bg-${theme}-secondary`">
        <svg v-if="modo === 0" class="hidden md:block" width="20" height="20" id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <path class="cls-1" d="M174.86,25.62v119.42c0,14.15-11.75,25.62-26.25,25.62H26.25c-14.5,0-26.25,11.47-26.25,25.62v107.42c0,14.15,11.75,25.62,26.25,25.62h122.36c14.5,0,26.25,11.47,26.25,25.62v119.42c0,14.15,11.75,25.62,26.25,25.62h110.06c14.5,0,26.25-11.47,26.25-25.62v-121.1c0-14.15,11.75-25.62,26.25-25.62h110.06c14.5,0,26.25-11.47,26.25-25.62v-104.61c0-14.15-11.75-25.62-26.25-25.62h-112.79c-14.5,0-26.25-11.47-26.25-25.62V25.62c0-14.15-11.75-25.62-26.25-25.62h-107.33c-14.5,0-26.25,11.47-26.25,25.62Z" fill="#fff"/>
        </svg>

        <svg v-else class="hidden md:block" width="24" height="20" id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 363.34 500">
            <path class="cls-1" d="M183.06,124.71c45.8,0,91.61.4,137.41-.25,13.6-.19,17.15,4.67,16.42,17.66-5.31,94.4-10.01,188.84-15.04,283.26-.63,11.87-1.7,23.74-3.12,35.54-2.73,22.69-16.98,35.85-39.87,36.88-63.93,2.88-127.87,2.98-191.8.04-26.31-1.21-41.72-16.05-43.33-41.86-2.69-43.12-5.12-86.27-7.27-129.42-3.09-61.93-5.27-123.92-9.18-185.79-.83-13.18,2.31-16.36,14.61-16.24,47.05.45,94.12.18,141.18.18Z" fill="#fff" />
            <path class="cls-1" d="M181.04,94.03c-52.07,0-104.15-.45-156.21.27-16.46.23-25.21-4.31-23.81-22.17.53-6.78-1.34-13.74-.98-20.56.63-12.14,5.6-19.46,19.8-19.27,25.05.32,50.12-1.25,75.18-1.24,10.37,0,17.99-1.31,21.32-13.1C120.04,4.84,129.9-.28,143.64.01c25.08.53,50.19.52,75.28,0,13.55-.28,23.54,4.19,27.66,17.47,3.37,10.85,10.03,13.77,20.97,13.66,25.68-.26,51.37,1.12,77.06,1.35,12.67.11,18.32,6.35,18.62,18.4.14,5.64.12,11.29.05,16.93-.28,22.88-3.45,26.16-26.03,26.19-52.07.07-104.14.02-156.21.02Z" fill="#fff" />
        </svg>
       
        {{ modo === 0 ? 'Nuevo' : 'Cancelar' }}
    </button>
</template>
```

## Dependencies

Ensure you have TailwindCSS configured in the project to correctly apply the styles.
