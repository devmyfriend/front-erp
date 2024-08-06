
# useThemes Composable

The `useThemes` composable provides a way to manage and switch themes in a Vue.js application. It allows you to set the theme, update the favicon, and manage related theme properties.

## Features

- **Dynamic Theme Management**: Switch between different themes and update related properties such as images and favicons.
- **Persistent Theme**: Stores the selected theme in localStorage to persist across sessions.
- **Favicon Management**: Updates the favicon based on the selected theme.

## Usage

Here's how to use the `useThemes` composable within a Vue component:

```javascript
import { useThemes } from '@/commons/composables/theme';

const { theme, imageTheme, setTheme, setFavicon, favicon } = useThemes();
```

## Properties

### theme

- **Type**: Ref<String>
- **Description**: The current theme. Defaults to `'MyFriend'` if not set in localStorage.

### imageTheme

- **Type**: Ref<String>
- **Description**: The path to the current theme's image. Defaults to `'/svg/empresas/myfriend.svg'`.

### favicon

- **Type**: Ref<String>
- **Description**: The path to the current theme's favicon. Defaults to `'/favicon/myfriend.ico'`.

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

Here's an example of how to use the `useThemes` composable within a component:

```javascript
import { useThemes } from '@/commons/composables/theme';

const { theme, imageTheme, setTheme, setFavicon, favicon } = useThemes();

// Set a new theme
setTheme('TheFit');

// Update the favicon
setFavicon('/favicon/thefitgym.ico');
```

## Implementation

Here's the full implementation of the `useThemes` composable:

```javascript
import { ref } from "vue";

export function useThemes() {
  const theme = ref(localStorage.getItem('theme') || 'MyFriend');
  const imageTheme = ref(localStorage.getItem('ImageTheme') || '/svg/empresas/myfriend.svg');
  const favicon = ref(localStorage.getItem('favicon') || '/favicon/myfriend.ico');

  const setTheme = (newTheme) => {    
    theme.value = newTheme;
    localStorage.setItem('theme', newTheme);

    switch (newTheme) {
      case 'MyFriend':
        imageTheme.value =  '/svg/empresas/myfriend.svg';
        setFavicon('/favicon/myfriend.ico');
        break;
      case 'TheFit':
        imageTheme.value =  '/svg/empresas/fitgym.svg';
        setFavicon('/favicon/thefitgym.ico');
        break;
      case 'Bonavida':
        imageTheme.value =  '/svg/empresas/bonavida.svg';
        setFavicon('/favicon/bonavida.ico');
        break;
      default:
        imageTheme.value =  '/svg/empresas/myfriend.svg';
        setFavicon('/favicon/myfriend.ico');
    }
  };

  const setFavicon = (iconPath) => {
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = iconPath;
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = iconPath;
      document.head.appendChild(newFavicon);
    }
  };

  return {
    theme,
    imageTheme,
    setTheme,
    setFavicon,
    favicon
  };
}
```

## Dependencies

This composable does not have any external dependencies.
