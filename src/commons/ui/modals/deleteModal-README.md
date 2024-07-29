
# deleteModal

The `deleteModal` component is a modal designed to confirm the deletion of a record. It uses SweetAlert2 for displaying the confirmation dialog with dynamic theme-based button colors.

## Features

- **Dynamic Button Colors**: Button colors are dynamically set based on the current theme.
- **SweetAlert2 Integration**: Uses SweetAlert2 for the confirmation dialog.
- **Event Emission**: Emits events for confirmation or cancellation of the deletion action.

## Events

### eEliminar

This event is emitted when the user confirms the deletion. It sends the record ID as a payload.

### eCancelar

This event is emitted when the user cancels the deletion. No payload is sent.

## Usage

Here's how to use the `deleteModal` component within a Vue template:

```html
<deleteModal :id="recordId" @eEliminar="handleDelete" @eCancelar="handleCancel"></deleteModal>
```

Where `handleDelete` and `handleCancel` are methods in the Vue component that handle the events emitted from the `deleteModal` component.

## Props

### id

- **Type**: String
- **Required**: true
- **Description**: The ID of the record to be deleted.

## Methods

### lanzarModal

This method triggers the SweetAlert2 modal to confirm the deletion. It is called automatically when the component is mounted.

### updateButtonColors

This method updates the button colors based on the current theme. It is called when the component is mounted.

## Example

Here's an example of the component's script:

```html
<script setup>
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';
import { useTheme } from '@/commons/composables/theme';

const { theme } = useTheme();

const confirmButtonColor = ref('');
const cancelButtonColor = ref('');

const emit = defineEmits(['eEliminar', 'eCancelar']);
const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const getComputedStyleValue = (variable) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};

const updateButtonColors = () => {
  const themeName = theme.value;

  const confirmVariableName = `--color-${themeName.toLowerCase()}-primary`;
  const cancelVariableName = `--color-${themeName.toLowerCase()}-secondary`;

  confirmButtonColor.value = getComputedStyleValue(confirmVariableName);
  cancelButtonColor.value = getComputedStyleValue(cancelVariableName);
};

const lanzarModal = () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: `Estás a punto de eliminar el registro con clave ${props.id}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: confirmButtonColor.value,
    cancelButtonColor: cancelButtonColor.value,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      emit('eEliminar', props.registro);
    } else {
      emit('eCancelar');
    }
  });
}

onMounted(() => {
  updateButtonColors();
  lanzarModal();
});
</script>
```

## Dependencies

Ensure you have SweetAlert2 installed and configured in the project to correctly display the confirmation dialog.

## Styling

The component does not include any specific styles, as it relies on SweetAlert2 for the modal appearance.
