
# useLayout Composable

The `useLayout` composable provides a way to manage the title of the layout in a Vue.js application. It allows you to set and get the title, which can be reactive and updated based on the current context.

## Features

- **Reactive Title Management**: Provides a reactive title that can be updated and accessed throughout the application.
- **Simple API**: Includes methods to set and get the title.

## Usage

Here's how to use the `useLayout` composable within a Vue component:

```javascript
import { useLayout } from '@/commons/composables/useLayout';

const { title, setTitle, getTitle } = useLayout();
```

## Properties

### title

- **Type**: Ref<String>
- **Description**: The current title. Defaults to `'Módulo'`.

## Methods

### setTitle

Sets the title to a new value.

```javascript
setTitle(newTitle: String): void
```

- **newTitle**: The new title to set.

### getTitle

Returns the current title.

```javascript
getTitle(): String
```

## Example

Here's an example of how to use the `useLayout` composable within a component:

```javascript
import { useLayout } from '@/commons/composables/useLayout';

const { title, setTitle, getTitle } = useLayout();

// Set a new title
setTitle('New Module Title');

// Get the current title
const currentTitle = getTitle();
```

## Implementation

Here's the full implementation of the `useLayout` composable:

```javascript
import { ref } from "vue";

const title = ref("Módulo");

function setTitle(newTitle) {
  title.value = newTitle;
}

function getTitle() {
  return title.value;
}

export function useLayout() {
  return {
    title,
    setTitle,
    getTitle,
  };
}
```

## Dependencies

This composable does not have any external dependencies.
