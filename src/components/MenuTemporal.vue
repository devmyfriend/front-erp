<script setup>
import { ref } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import themeSwitcher from '@/commons/ui/theme-switcher/theme-switcher.vue';
const { theme, setTheme } = useTheme();

const modulos = ref([
    { nombre: 'Login', ruta: '/login' },
    { nombre: 'Productos', ruta: '/productos' },
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
        <main class="bg-container flex flex-col items-center justify-center h-screen px-4 max-w-full">
            <div class="bg-sidebar rounded-2xl w-3/4 py-6 flex flex-row place-content-center text-center gap-4 flex-wrap md:flex-col mt-6 h-1/2 md:h-1/5 px-4 md:px-6 ">
                <h1 class="text-white font-semibold text-[2rem] flex-grow max-h-12"> Menú temporal</h1>
                <themeSwitcher class="w-3/4 max-h-12 md:w-1/4"/>
            </div>
            <section class="flex flex-grow min-h-44 p-6 w-full justify-center">
                <div class="flex flex-grow p-4 rounded-2xl flex-col gap-4 overflow-y-scroll items-center" :class="`bg-${theme}-container border-${theme}-primary`">
                    <router-link 
                        :to="modulo.ruta" 
                        v-for="modulo in modulos" :key="modulo.nombre"
                        :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"
                        class="flex items-center px-6 transition-all duration-300
                        border-4 border-solid justify-center
                        text-2xl font-semibold rounded-2xl text-white no-underline
                        w-full min-h-[2.5rem] max-w-[35rem]">
                            {{ modulo.nombre }}
                    </router-link>
                </div>
            </section>
        </main>
</template>

<style scoped>
</style>