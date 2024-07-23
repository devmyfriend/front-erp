<template>
  <div :class="`min-h-screen bg-${theme}-headers text-${theme}-subtext`">
    <div class="flex flex-col justify-center items-center w-[50%] h-96">
      <h1 :class="`text-${theme}-text`">Este texto debería tener un color según el tema seleccionado</h1>
      <button @click="test()" :class="`px-4 py-2 rounded-2xl text-2xl bg-${theme}-primary text-${theme}-subtext`">Test button color</button>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from '@/commons/composables/theme';

const { setTheme, theme } = useTheme();

function test() {
  Swal.fire({
    title: '¡Funciona!',
    text: 'El color del botón es correcto según el tema seleccionado.',
    icon: 'success',
    confirmButtonText: '¡Entendido!'
  });
}
</script>

<style scoped>
</style>
