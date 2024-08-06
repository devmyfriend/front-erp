
# useTheme Composable

The `theme` composable is a simple wrapper that instantiates and returns the `useThemes` composable. It provides a convenient way to access the theme instance.

## Features

- **Theme Instance**: Provides an instance of the `useThemes` composable for managing and switching themes.

## Usage

Here's how to use the `useTheme` composable within a Vue component:

```javascript
import { useTheme } from '@/commons/composables/theme';

const { theme, imageTheme, setTheme, setFavicon, favicon } = useTheme();
```

## Properties

### theme

- **Type**: Ref<String>
- **Description**: The current theme. Inherited from the `useThemes` composable.

### imageTheme

- **Type**: Ref<String>
- **Description**: The path to the current theme's image. Inherited from the `useThemes` composable.

### favicon

- **Type**: Ref<String>
- **Description**: The path to the current theme's favicon. Inherited from the `useThemes` composable.

## Methods

### setTheme

Sets the current theme and updates related properties.

```javascript
setTheme(newTheme: String): void
```

- **newTheme**: The new theme to set. Options include `'MyFriend'`, `'TheFit'`, and `'Bonavida'`.

### setFavicon

Sets the favicon for the current theme.

```javascript
setFavicon(iconPath: String): void
```

- **iconPath**: The path to the new favicon.

## Example

Here's an example of how to use the `useTheme` composable within a component:

```javascript
import { useTheme } from '@/commons/composables/theme';

const { theme, imageTheme, setTheme, setFavicon, favicon } = useTheme();

// Set a new theme
setTheme('TheFit');

// Update the favicon
setFavicon('/favicon/thefitgym.ico');
```

## Implementation

Here's the full implementation of the `useTheme` composable:

```javascript
import { useThemes as originalUseTheme } from './useTheme';

const themeInstance = originalUseTheme();

export function useTheme() {
  return themeInstance;
}
```

## Dependencies

This composable depends on the `useThemes` composable for its functionality.
