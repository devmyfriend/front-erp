
# useThemes

The `useThemes` composable manages the theme and related properties in the application. It handles the current theme, the theme icon, and the favicon, making use of Vue's reactivity and the browser's local storage.

## Variables

### 1. `theme`

- **Type:** `ref("MyFriend")`
- **Description:** The current theme or company interacting with the application. Possible values include "TheFit" (shared by TheFitGym and TheFitBar), "Bonavida", and "MyFriend".

### 2. `imageTheme`

- **Type:** `ref("/svg/empresas/myfriend.svg")`
- **Description:** The icon of the current company.

### 3. `favicon`

- **Type:** `ref("/favicon/myfriend.ico")`
- **Description:** The favicon of the current company.

## Functions

### 1. `setTheme`

Sets the current theme and updates the corresponding image theme and favicon.

```javascript
const setTheme = (newTheme) => {
  theme.value = newTheme;
  localStorage.setItem("theme", newTheme);

  switch (newTheme) {
    case "MyFriend":
      imageTheme.value = "/svg/empresas/myfriend.svg";
      setFavicon("/favicon/myfriend.ico");
      break;
    case "TheFit":
      imageTheme.value = "/svg/empresas/fitgym.svg";
      setFavicon("/favicon/thefitgym.ico");
      break;
    case "Bonavida":
      imageTheme.value = "/svg/empresas/bonavida.svg";
      setFavicon("/favicon/bonavida.ico");
      break;
    default:
      imageTheme.value = "/svg/empresas/myfriend.svg";
      setFavicon("/favicon/myfriend.ico");
  }
};
```

### 2. `setFavicon`

Sets the favicon of the application.

```javascript
const setFavicon = (iconPath) => {
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    favicon.href = iconPath;
  } else {
    const newFavicon = document.createElement("link");
    newFavicon.rel = "icon";
    newFavicon.href = iconPath;
    document.head.appendChild(newFavicon);
  }
};
```

## Usage

```javascript
import { useThemes } from '@/composables/useThemes';

const { theme, imageTheme, setTheme, setFavicon, favicon } = useThemes();
```

This composable provides a way to manage the theme, theme icon, and favicon in a Vue component.

## Example

```javascript
import { onMounted } from 'vue';
import { useThemes } from '@/composables/useThemes';

const { theme, imageTheme, setTheme, setFavicon, favicon } = useThemes();

onMounted(() => {
  setTheme('TheFit');
});
```
