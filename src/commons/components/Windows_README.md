
# Windows Component

The `Windows` component manages a set of tabs or windows representing different sub-modules within a module. It utilizes the `useWindows` composable to handle the tabs collection and the active tab.

## Script Setup

```javascript
<script setup>
import closeIco from '@/commons/ui/icons/actionIcons/closeIco.vue';
import { useTheme } from '@/commons/composables/theme';
import { useRouter } from 'vue-router';
import { useWindows } from '@/commons/composables/useWindows';

const { tabsCollection, activeTab } = useWindows();
const router = useRouter();
const { theme } = useTheme();

const changeView = (view, index) => {
    router.push({ name: view.route });
    activeTab.value = index;
}
</script>
```

## Template

```html
<template>
    <div class="flex-grow h-[44px] flex flex-row justify-between" :class="`bg-${theme}-background`">
        <div class="flex flex-row overflow-hidden rounded-xl shadow-md shadow-[#212121] h-8" :class="`bg-${theme}-primary`">
            <button v-for="(tab, index) in tabsCollection" :key="index"
            class="cursor-pointer flex-shrink-0 text-white px-4 border text-xs md:text-base hover:px-6 transition-all duration-200"
            :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover border-${theme}-primary-hover ${ activeTab === index ? `bg-${theme}-primary-hover px-6` : ''}`"
            @click="changeView(tab, index)">
                {{ tab.name }}
            </button>
        </div>
        <closeIco class="h-full mx-2 cursor-pointer closeIco hover:w-7 transition-all duration-200" @click="changeView(tabsCollection[0], 0)"/>
    </div>
</template>
```

## Styles

```css
<style scoped>
.closeIco{
    filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.8));
}
</style>
```

## Description

The `Windows` component displays a row of tabs, each representing a sub-module. The tabs are styled dynamically based on the active tab and the theme. The component uses the following:

- **closeIco**: An icon component used to close the tabs view.
- **useTheme**: A composable to manage the application's theme.
- **useRouter**: Vue Router to handle navigation.
- **useWindows**: A custom composable to manage the tabs collection and active tab.

### Props

This component does not accept any props.

### Events

- `@click`: Triggered when a tab is clicked, changing the view to the selected tab.
- `@click (close icon)`: Triggered when the close icon is clicked, navigating to the first tab.

### Usage

```javascript
import Windows from '@/components/Windows.vue';

<template>
  <Windows />
</template>
```
