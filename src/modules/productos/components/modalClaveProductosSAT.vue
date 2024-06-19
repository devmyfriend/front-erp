<template>
    <div>
      <!-- Botón para abrir el modal -->
      <button @click="showModal = true" class="px-4 py-2 bg-blue-500 text-white rounded-md">Abrir Modal</button>
  
      <!-- Modal Background -->
      <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <!-- Modal Content -->
        <div class="relative p-5 border w-96 shadow-lg rounded-md bg-white">
          <div class="mt-3 text-center">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Título del Modal</h3>
            <div class="mt-2 px-7 py-3">
              <p class="text-sm text-gray-500">Contenido del modal. Aquí puedes poner cualquier información relevante.</p>
            </div>
            <div class="items-center px-4 py-3">
              <button @click="showModal = false" class="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const showModal = ref(false)
  </script>
  