<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
*{
  scrollbar-width: none;
  -ms-overflow-style: none;
}

input, select, textarea{
  color: theme('colors.primaryFontColor');
}
select{
  background-color: theme('colors.container.DEFAULT');
}

::-webkit-scrollbar {
  display: none;
}
::-moz-progress-bar {
  display: none;
}

input[type="checkbox"] {
  appearance: none;
  border: 1px solid #d9d9d9;
  outline: none;
  cursor: pointer;
  width: 10.75rem;
  height: 10.5rem;
  border-radius: 0.5rem;
  background-color: white;
  height: 2rem;
  width: 2rem;
}
input[type="checkbox"]::before {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.3125rem;
}
input[type="checkbox"]:checked::before {
  content: '✓';
  font-size: 2rem;
  line-height: 1.1125rem;
}

</style>

