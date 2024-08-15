
# useLayout

The `useLayout` composable manages the state and behavior of titles in a module. It handles the main title and the subtitle (view title), making use of Vue's reactivity.

## Variables

### 1. `title`

- **Type:** `ref("Dashboard mini")`
- **Description:** The main title of the module. Example: "Productos", "Monedas", "Impuestos", etc.

### 2. `view`

- **Type:** `ref("Dashboard")`
- **Description:** The subtitle or view title of the module. Example: "Listado de Monedas", "Listado de Productos", "Formulario de Impuestos", "Listado de Precios", etc.

## Functions

### 1. `setViewTitle`

Sets the view title.

```javascript
function setViewTitle(newTitle) {
  view.value = newTitle;
}
```

### 2. `setTitle`

Sets the main title.

```javascript
function setTitle(newTitle) {
  title.value = newTitle;
}
```

## Usage

```javascript
import { useLayout } from '@/composables/useLayout';

const { title, view, setTitle, setViewTitle } = useLayout();
```

This composable provides a way to manage the main title and the view title in a Vue component.

## Example

```javascript
import { ref, onMounted } from 'vue';
import { useLayout } from '@/composables/useLayout';

const { title, view, setTitle, setViewTitle } = useLayout();

onMounted(() => {
  setTitle('Products');
  setViewTitle('Product List');
});
```
