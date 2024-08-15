
# useWindows

The `useWindows` composable manages the state and behavior of tabs or windows in a module. It handles the collection of tabs and the currently active tab, making use of Vue's reactivity.

## Variables

### 1. `tabsCollection`

- **Type:** `ref([])`
- **Description:** An array of objects representing each tab or window. Each object contains:
  - `name`: The text displayed on the tab.
  - `route`: The name of the Vue Router route the tab navigates to.

### 2. `activeTab`

- **Type:** `ref(0)`
- **Description:** A number representing the currently active tab. Used to style the selected tab.

## Functions

### 1. `setTabsCollection`

Sets the collection of tabs.

```javascript
const setTabsCollection = (newTabsCollection) => {
  tabsCollection.value = newTabsCollection;
};
```

### 2. `setActiveTab`

Sets the currently active tab.

```javascript
const setActiveTab = (newActiveTab) => {
  activeTab.value = newActiveTab;
};
```

## Usage

```javascript
import { useWindows } from '@/composables/useWindows';

const { tabsCollection, activeTab, setTabsCollection, setActiveTab } = useWindows();
```

This composable provides a way to manage a set of tabs and track the active tab in a Vue component.

## Example

```javascript
import { ref, onMounted } from 'vue';
import { useWindows } from '@/composables/useWindows';

const { tabsCollection, activeTab, setTabsCollection, setActiveTab } = useWindows();

onMounted(() => {
  setTabsCollection([
    { name: 'List', route: 'productsList' },
    { name: 'Form', route: 'productForm' },
    // Add more tabs as needed
  ]);
  setActiveTab(0);
});
```
