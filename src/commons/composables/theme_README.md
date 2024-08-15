
# theme

The `theme` composable is a wrapper around the original `useThemes` composable. It provides a single instance of the `useThemes` composable to be used throughout the application.

## Implementation

```javascript
import { useThemes as originalUseTheme } from "@/commons/composables/useTheme";

const themeInstance = originalUseTheme();

export function useTheme() {
  return themeInstance;
}
```

## Description

The `useTheme` composable returns a single instance of the `useThemes` composable. This ensures that there is a consistent and shared state for the theme throughout the application.

## Usage

```javascript
import { useTheme } from '@/composables/useTheme';

const { theme, imageTheme, setTheme, setFavicon, favicon } = useTheme();
```

This composable provides a way to manage and access the theme, theme icon, and favicon consistently across different components in the application.

## Example

```javascript
import { onMounted } from 'vue';
import { useTheme } from '@/composables/useTheme';

const { theme, imageTheme, setTheme, setFavicon, favicon } = useTheme();

onMounted(() => {
  setTheme('Bonavida');
});
```
