
# receiptTypesModal

The `receiptTypesModal` component is a modal designed for creating or editing receipt types. It allows users to input a receipt type code and description, and it emits events for confirmation or cancellation of the action.

## Features

- **Modal Display**: The modal is displayed centered on the screen with a semi-transparent background.
- **Form Input**: Users can input a receipt type code and description.
- **Keyboard Support**: The modal can be closed using the `Escape` key.

## Events

### eConfirm

This event is emitted when the user confirms the action. It sends the receipt type data as a payload.

### eCancel

This event is emitted when the modal is closed without confirming. No payload is sent.

## Usage

Here's how to use the `receiptTypesModal` component within a Vue template:

```html
<receiptTypesModal :datos="receiptData" :mostrar="isModalVisible" :modo="mode" @eConfirm="handleConfirm" @eCancel="handleCancel"></receiptTypesModal>
```

Where `handleConfirm` and `handleCancel` are methods in the Vue component that handle the emitted events from the `receiptTypesModal` component.

## Props

### datos

- **Type**: Object
- **Default**: { ClaveTipoDeComprobante: '', Descripcion: '' }
- **Description**: The data object for the receipt type being created or edited.

### mostrar

- **Type**: Boolean
- **Default**: false
- **Description**: Controls the visibility of the modal.

### modo

- **Type**: Number
- **Default**: 0
- **Description**: Determines the mode of the modal (0 for creating, 1 for editing).

## Styling

The component uses TailwindCSS for styling. The modal is designed to be visually cohesive with the rest of the application's design system.

- **Background**: Uses a semi-transparent background for the overlay and a white background for the modal content.
- **Borders**: The inputs and buttons have rounded borders with transition effects.
- **Colors**: Utilizes dynamic classes based on the current theme for consistency.

## Example

Here's an example of the modal's template:

```html
<template>
  <div v-if="mostrar" class="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-10" @keydown.escape="closeModal">
    <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
      <div class="px-4 py-5 sm:px-6">
        <div class="w-full flex flex-row justify-between items-center">
          <titleH2 class="mb-0" :class="`text-${theme}-text`"> {{ modo === 0 ? 'Nuevo' : 'Editar' }} tipo de comprobante </titleH2>
          <div class="h-8 w-5 flex justify-end items-center cursor-pointer">
            <p @click="closeModal" class="text-xl font-bold hover:text-2xl text-gray-600 hover:text-black transition-all duration-200"> X </p>
          </div>
        </div>
        <div class="flex flex-col justify-center items-start mt-8">
          <label for="Clave" class="text-sm font-bold text-gray-700 relative px-1">Clave Tipo de Comprobante:</label>
          <input :disabled="modo === 1" name="Clave" v-model="datos.ClaveTipoDeComprobante" type="text" placeholder="T" class="mt-1 block w-full text-sm border-2 border-gray-400 transition-all duration-300 focus:border-gray-800 box-border p-2 outline-none" :class="{ [`bg-${theme}-disabled`]: modo === 1, 'bg-white': modo !== 1 }">
        </div>
        <div class="flex flex-col justify-center items-start mt-6">
          <label class="text-sm font-bold text-gray-700 relative px-1">Descripción:</label>
          <input v-model="datos.Descripcion" type="text" placeholder="Traslado" class="mt-1 block w-full text-sm border-2 border-gray-400 transition-all duration-300 focus:border-gray-800 box-border p-2 outline-none">
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse mb-2">
        <button @click="closeModal" class="w-full justify-center transition-all duration-300 rounded-md px-4 py-2 md:text-base font-medium text-white border-2 sm:ml-3 sm:w-auto text-sm" :class="`bg-${theme}-secondary hover:bg-${theme}-secondary-hover`">Cancelar</button>
        <button @click="confirmAction" class="mt-3 w-full justify-center transition-all duration-300 rounded-md px-4 py-2 md:text-base font-medium text-white border-2 sm:mt-0 sm:ml-3 sm:w-auto text-sm" :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`">Confirmar</button>
      </div>
    </div>
  </div>
</template>
```

## Dependencies

Ensure you have TailwindCSS configured in the project to correctly apply the styles.
