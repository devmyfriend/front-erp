# payment-methods-forms View

## Overview
The `payment-methods-forms` view is designed to display information about payment forms and payment methods. It contains two main sections: a table for payment forms and a table for payment methods.

## Lifecycle Hooks
- `onBeforeMount`: Used to set the title ("Formas y métodos de pago") and the view title ("Listado de Formas de Pago") before the component is mounted.

## Composition Functions
- `useLayout`: 
  - `setTitle()`: Sets the main title of the view.
  - `setViewTitle()`: Sets the subtitle of the view.

## Template Structure
- **Payment Forms Table**: 
  - Displayed within a scrollable `div` with specific styling.
  - The table is rendered by the `tablePaymentForms` component.

- **Payment Methods Table**:
  - Preceded by a `titleH2` component displaying the title "Listado de Métodos de pago".
  - The table is rendered by the `tablePaymentMethods` component.

## Example Usage
```vue
<template>
  <payment-methods-forms />
</template>
