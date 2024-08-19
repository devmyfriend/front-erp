# Taxes View

## Components Used

- **titleH2.vue**:
  - Description: A styled `H2` component used to display section titles.

- **tableTaxes.vue**:
  - Description: The table component that displays a list of taxes. It has editable capabilities and triggers actions like edit and delete.

- **btnFormulario.vue**:
  - Description: A button component used to trigger the creation of a new tax entry.

- **deleteModal.vue**:
  - Description: A modal component used to confirm the deletion of a tax entry.

- **TaxesModal.vue**:
  - Description: A modal component used to create or edit tax entries.

## Composables Used

- **useLayout**:
  - Description: This composable manages the layout titles, specifically setting the main title and the view title for this view.
  - Methods:
    - `setTitle`: Sets the main title of the module.
    - `setViewTitle`: Sets the subtitle or view title.

- **useTaxes**:
  - Description: Manages the tax-related logic such as loading taxes, handling modal visibility, and form data management.
  - Methods:
    - `showModal`: Controls the visibility of the `TaxesModal`.
    - `modoFormulario`: Tracks whether the form is in creation mode (0) or edit mode (1).
    - `modalData`: Holds the data for the current tax being edited or deleted.
    - `bodyFrm`: Holds the form data for the tax being created or edited.
    - `esperarTabla`: Handles actions (edit or delete) triggered from the `tableTaxes`.
    - `esperarModal`: Handles the submission of the form in the `TaxesModal`.
    - `esperarCancelar`: Cancels any ongoing modal activity and resets the form.
    - `borrarRegistro`: Deletes a tax entry based on the selected data.

- **useTheme**:
  - Description: Provides the current theme for the application, which is used to dynamically apply styles.

## Lifecycle Hooks

- **onBeforeMount**:
  - Description: Sets the main title and view title when the component is about to mount.

## Events

- **@eNuevo** (`btnFormulario.vue`):
  - Description: Triggers the opening of the `TaxesModal` for creating a new tax entry.
  - Side Effect: Sets `showModal` to `true` and `modoFormulario` to `0`.

- **@eAccion** (`tableTaxes.vue`):
  - Description: Handles actions like edit or delete triggered from the `tableTaxes` component.

- **@eEliminar** (`deleteModal.vue`):
  - Description: Triggers the deletion of a tax entry.

- **@eCancelar** (`deleteModal.vue` & `TaxesModal.vue`):
  - Description: Cancels the modal operation, resetting any relevant data.

- **@eConfirm** (`TaxesModal.vue`):
  - Description: Confirms the action in the `TaxesModal`, either creating or editing a tax entry.

## Styles

- The view utilizes dynamic theming using the `useTheme` composable, applying styles according to the selected theme.
- Custom styles are added to buttons and table elements to ensure a consistent and responsive design.
