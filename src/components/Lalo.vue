<template>
  <div :class="navbarClass + ' min-h-screen'">
    <div class="flex flex-col justify-center items-center w-[50%] h-96">
      <h1 :class="textClass">Este texto debería tener un color según el tema seleccionado</h1>
      <button @click="test()" :class="buttonClass + ' px-4 py-2 rounded-2xl text-2xl'">Test button color</button>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from '@/commons/composables/useTheme';

const { navbarClass, textClass, buttonClass, setTheme } = useTheme();

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
