<script setup>
import { RouterView } from 'vue-router'
import { useTheme } from '@/commons/composables/theme';
import { onMounted } from 'vue';
const { favicon, setFavicon } = useTheme();

onMounted(() => {
  setFavicon(favicon);
});

</script>

<template>
  <div class="h-screen max-h-full max-w-full 
    justify-between items-center 
    flex flex-row flex-wrap">
    <RouterView class="w-full h-full"/>
  </div>
</template>

<style>
/* Animaciones */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* Scroll invisible */
* {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

::-webkit-scrollbar {
  display: none;
}

::-moz-progress-bar {
  display: none;
}

/* Formato del checkbox */

input[type="checkbox"], input[type="radio"] {
  appearance: none;
  border: 1px solid #d9d9d9;
  outline: none;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: white;
  height: 1rem;
  width: 1rem;
}

input[type="checkbox"]::before, input[type="radio"]::before {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.3125rem;
}

input[type="checkbox"]:checked::before, input[type="radio"]:checked::before {
  content: '✓';
  font-size: 1rem;
  line-height: 0.25rem;
}

input,
select,
textarea {
  color: #000;
}

select {
  background-color: #fff;
}
</style>
