<script setup>
import { ref } from 'vue';
const modulos = ref([
    { nombre: 'Productos', ruta: '/productos' },
    { nombre: 'Login', ruta: '/login' },
    { nombre: 'Horacio', ruta: '/helloword' },
    { nombre: 'Test Layout Window', ruta: { name: 'test'}},
    { nombre: 'Test Layout Standard', ruta: { name: 'test2'}},
    { nombre: 'Productos - Layout Window', ruta: { name: 'productos123'}},
    { nombre: 'frmProductos - Layout Window', ruta: { name: 'formProducts'}},
]);
</script>

<template>
        <main class="Container bg-general">
            <h1 class="bg-sidebar rounded-2xl px-8 py-4 text-white font-semibold text-[2.5rem]"> Menú temporal</h1>

            <section class="Content flex flex-col bg-primary bg-opacity-90 min-w-[90vw] min-h-[70vh] mt-[3vh] rounded-2xl">
                <ul>
                    <li v-for="modulo in modulos" :key="modulo.nombre" class="min-w-[22vw] min-h-[2.5rem]">
                        <router-link :to="modulo.ruta" class="flex items-center bg-warning pl-10 text-2xl font-semibold rounded-2xl text-left min-w-full min-h-[2.5rem]">{{ modulo.nombre }}</router-link>
                    </li>
                </ul>
            </section>
        </main>
</template>

<style scoped>
    .Container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .Content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    ul {
        list-style: none;
    }

    li {
        margin: 1rem;
    }

    a {
        text-decoration: none;
        color: black;
    }
</style>