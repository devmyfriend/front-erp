
# btn-save

This `btn-save` component is designed as a submission button that dynamically switches its text between "Guardar" and "Actualizar" based on the provided prop value. It allows easy submission of forms with contextual button text depending on the mode.

## Props

- **modo**: `Number` (default: 0) - Determines the button text. `0` for "Guardar", other values for "Actualizar".
- **elemento**: `String` (default: '') - Specifies the element type to append to the button text.

## Usage

Include the component in the Vue template like this:

```html
<btn-save :modo="0" elemento="elementName"></btn-save>
```

## Styling

This component uses TailwindCSS for styling, ensuring it matches the design system of the application.
