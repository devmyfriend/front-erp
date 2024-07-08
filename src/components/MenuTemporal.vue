<script setup>
import { ref } from 'vue';
const modulos = ref([
    { nombre: 'Login', ruta: '/login' },
    { nombre: 'Productos', ruta: '/productos' },
    { nombre: 'frmProductos - Layout Window', ruta: { name: 'formProducts'}},
    { nombre: 'Monedas', ruta: { name: 'coins' } },
    { nombre: 'Metodos y formas de pago', ruta:  { name: 'payment'}},
    { nombre: 'Tipo de comprobantes', ruta: { name: 'receipts'}},
    { nombre: 'Paises', ruta: { name: 'countries'}},
    { nombre: 'Impuestos SAT', ruta: { name: 'taxesSAT'}},

    { nombre: 'Horacio', ruta: '/helloword' },
    { nombre: 'Codigos Postales - SAT', ruta: { name: 'zipcode'}},
    { nombre: 'Test Lalo', ruta: { name: 'Lalo'}},
]);
</script>

<template>
        <main class="bg-container flex flex-col items-center justify-center h-screen">
            <h1 class="bg-sidebar rounded-2xl px-8 py-4 text-white font-semibold text-[2.5rem]"> Menú temporal</h1>

            <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-sidebar bg-opacity-90 min-w-[90vw] min-h-[70vh] mt-[3vh] rounded-2xl p-4">
            <router-link 
                :to="modulo.ruta" 
                v-for="modulo in modulos" :key="modulo.nombre"
                class="flex items-center bg-warning hover:bg-[#FFC107] px-6 transition-all duration-300
                border-4 border-red-700 border-solid justify-center
                text-2xl font-semibold rounded-2xl text-black no-underline
                min-w-[25rem] max-w-96 min-h-[2.5rem]">
                    {{ modulo.nombre }}
            </router-link>
</section>

        </main>
</template>

<style scoped>
</style>