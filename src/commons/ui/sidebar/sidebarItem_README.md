
# sidebarItem

This component represents a single item within the `sidebar`, creating a navigable link that includes an icon and a title. It's designed to be reusable and configurable.

## Props

- **srcProp**: `String` (default: '#') - The source path for the icon.
- **toProp**: `String` (default: '#') - The router link destination.
- **title**: `String` (default: 'Title') - The text description for the sidebar item.

## Usage

```html
<sidebar-item :srcProp="iconPath" :toProp="routeName" :title="itemName"></sidebar-item>
```

## Styling

This component is styled to match the aesthetic of the sidebar, with emphasis on functionality and readability.
