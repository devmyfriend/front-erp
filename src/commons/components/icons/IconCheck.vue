<script setup>
import { computed } from 'vue';
import { useTheme } from '@/commons/composables/theme';

const { theme } = useTheme();

const props = defineProps({
  color: {
    type: String,
    optional: true,
  }
});

const getComputedStyleValue = (variable) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};

const fillColor = computed(() => {
  if (props.color) {
    return props.color;
  }

  const themeName = theme.value;
  let variableName = '';

  switch (themeName) {
    case 'MyFriend':
      variableName = '--color-myfriend-primary';
      break;
    case 'TheFit':
      variableName = '--color-thefit-primary';
      break;
    case 'Bonavida':
      variableName = '--color-bonavida-primary';
      break;
    default:
      variableName = '--color-thefit-primary';
  }

  return getComputedStyleValue(variableName);
});
</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" :stroke="fillColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
</template>