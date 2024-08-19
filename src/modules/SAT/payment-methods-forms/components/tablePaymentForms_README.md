# tablePaymentForms Component

## Overview
The `tablePaymentForms` component is used to display a table of payment forms within the application. This component dynamically loads and displays the payment forms based on the current theme and their active status.

## Props
The component does not accept any props.

## Emits
The component does not emit any events.

## Lifecycle Hooks
- `onMounted`: Loads the payment forms when the component is mounted.

## Composition Functions
- `usePaymentMethodsForms`: Manages the loading and retrieval of payment methods and forms.
  - `paymentFormsCollection`: An array of payment forms.
  - `paymentMethodsCollection`: An array of payment methods (not used in this component).
  - `loadMethodsFormsPayments()`: A function to load the payment methods and forms from the store.
  
- `useTheme`: Provides access to the current theme, allowing the component to apply theme-specific styles.

## Template Structure
The template contains:
- A table with four columns: `Clave`, `Nombre`, `Bancarizado`, and `Status`.
- Each row displays a payment form, and the row's style changes based on the payment form's active status (`Activo` or `Inactivo`).

## Dynamic Classes
- The table headers' background colors are dynamically set based on the current theme.
- The text and background color of each row also depend on the active status of the payment form and the current theme.

## Example Usage
```vue
<tablePaymentForms />
