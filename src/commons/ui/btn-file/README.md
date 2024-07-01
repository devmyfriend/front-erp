
# btn-file

The `btn-file` component is designed to allow users to select and upload an image file. Once a file is selected, the component emits the file's URL so it can be handled by other parts of the application.

## Features

- **File Selection**: Clicking the button triggers a hidden file input to open the file selector.
- **Image Preview**: Upon file selection, a preview URL of the image is generated and emitted.

## Events

### eGuardar

This event is emitted when an image is selected. It sends the image URL as a payload.

## Usage

Here's how to use the `btn-file` component within a Vue template:

```html
<btn-file @eGuardar="handleImageSave"></btn-file>
```

Where `handleImageSave` is a method in your Vue component that handles the URL received from the `btn-file` component.

## Props

This component does not accept any props.

## Styling

The component uses TailwindCSS for styling. The button is designed to be visually cohesive with the rest of your application's design system.

- **Dimensions**: Button size is set to 56x10 pixels.
- **Colors**: Uses primary button colors for background and secondary colors for text.
- **Interactivity**: Includes hover effect changes and transition animations.

## Example

Here's an example of how the button appears:

```html
<button>
    <svg><!-- SVG content --></svg>
    Agregar Imagen
</button>
```

## Dependencies

Ensure you have TailwindCSS configured in your project to correctly apply the styles.
