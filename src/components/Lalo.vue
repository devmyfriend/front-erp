<template>
    <div class="flex flex-col justify-center items-center w-[50%] h-96" :class="['bg-'+currentEmpresa + '-100']">
      <h1 class="mb-4 border-inputWidth p-4" :class="['bg-'+currentEmpresa+'-400']">Bienvenido a {{ currentEmpresa }}</h1>
      <button class="mb-4 min-w-44 border-inputWidth p-1 rounded-3xl" @click="cambiarEmpresa('myfriend')">MyFriend</button>
      <button class="mb-4 min-w-44 border-inputWidth p-1 rounded-3xl" @click="cambiarEmpresa('thefit')">The Fit</button>
      <button class="mb-4 min-w-44 border-inputWidth p-1 rounded-3xl" @click="cambiarEmpresa('bonavida')">Bonavida</button>
    </div>

    <button @click="lanzarModal()" class="bg-myfriend-modals-save px-4 py-2 rounded-2xl text-2xl"> Modal </button>
    <!-- <div class="bg-myfriend-100 bg-myfriend-200 bg-myfriend-300 bg-myfriend-400 
    bg-thefit-100 bg-thefit-200 bg-thefit-300 bg-thefit-400 
    bg-bonavida-100 bg-bonavida-200 bg-bonavida-300 bg-bonavida-400">
    </div> -->
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Swal from 'sweetalert2';
  
  const alerta = Swal.mixin({
    customClass: {
      confirmButton: 'bg-thefit-modals-save min-w-24 border-inputWidth p-1 rounded-xl text-white',
      cancelButton: 'bg-thefit-modals-cancel min-w-24 border-inputWidth p-1 rounded-xl text-white',
    },
    buttonsStyling: false,
    showCancelButton: true,
  });

  const currentEmpresa = ref('myfriend');
  
  function cambiarEmpresa(empresa) {
    currentEmpresa.value = empresa;
  }

  const lanzarModal = () => {
    alerta.fire({
        title: '¿Estás seguro?',
        text: 'No podrás revertir esto',        
    });
  }
  </script>
  
  <style scoped></style>
  