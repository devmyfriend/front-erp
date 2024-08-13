<script setup>
import { onMounted, ref } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import themeSwitcher from '@/commons/ui/theme-switcher/theme-switcher.vue';
import modalBuscador from '@/commons/components/modals/modalBuscador.vue';
const { theme } = useTheme();

/* TEST */
import coinFinder from '@/modules/SAT/coins/components/coinFinder.vue';
import tableCoins from '@/modules/SAT/coins/components/tableCoins.vue';
import { useCoins } from '@/modules/SAT/coins/composables/useCoins.js';
const {
    esperarBusqueda,
} = useCoins();

const showModal = ref(false);
const registro = ref({});

const abrirModal = async () => {
    showModal.value = true;
};

const esperarSelect = (moneda) => {
    console.log('[Padre] La moneda es: ', JSON.stringify(moneda));
    registro.value = moneda;
    showModal.value = false;
};

/* TEST */

const modulos = ref([
    { nombre: 'Login', ruta: '/login' },
    { nombre: 'Productos', ruta: '/productos' },
    { nombre: 'Monedas', ruta: { name: 'coins' } },
    { nombre: 'Metodos y formas de pago', ruta: { name: 'payment' } },
    { nombre: 'Tipo de comprobantes', ruta: { name: 'receipts' } },
    { nombre: 'Paises', ruta: { name: 'countries' } },
    { nombre: 'Impuestos SAT', ruta: { name: 'taxesSAT' } },
    { nombre: 'Horacio', ruta: '/helloword' },
    { nombre: 'Codigos Postales - SAT', ruta: { name: 'zipcode' } },
    { nombre: '(Productos)', ruta: { name: 'products' } },
    { nombre: '(Productos Listado)', ruta: { name: 'productsList' } },
    { nombre: '(Productos Formulario)', ruta: { name: 'productsForm' } },
]);
</script>

<template>
    <main class="bg-container flex flex-col items-center justify-center h-screen px-4 max-w-full">
        <modalBuscador v-if="showModal" @eCancel="showModal = false">
            <template #buscador>
                <div class="h-12 max-h-48 w-full flex justify-start items-center">
                    <coinFinder :color="`#9ca3af`" @eBusqueda="esperarBusqueda" />
                </div>
            </template>
            <template #tabla>
                <div class="h-96 w-full overflow-auto border-4 rounded-b-2xl" :class="`border-${theme}-headers`">
                    <tableCoins :clickeable="true" @eSelect="esperarSelect"/>
                </div>
            </template>
            <p class="pl-1 italic opacity-50 underline font-semibold text-gray-600 text-base w-full text-left bg-white"> Selecciona un registro, por favor.</p>
        </modalBuscador>

        <div
            class="bg-sidebar rounded-2xl w-3/4 max-h-44 py-6 flex place-content-center text-center gap-4 flex-wrap flex-col mt-6 h-[40%] xl:h-max px-4 md:px-6 ">
            <h1 class="text-white font-semibold text-[2rem] flex-grow max-h-12" @click="abrirModal"> Menú temporal {{ registro.Descripcion }}</h1>
            <div class="w-64 max-w-64 max-h-12 h-12 flex justify-center items-center">
                <themeSwitcher/>
            </div>
        </div>
        <section class="flex flex-grow min-h-44 p-6 w-full justify-center">
            <div class="flex flex-grow p-4 rounded-2xl flex-col gap-4 overflow-y-scroll items-center xl:h-min"
                :class="`bg-${theme}-container border-${theme}-primary border-4`">
                <router-link :to="modulo.ruta" v-for="modulo in modulos" :key="modulo.nombre"
                    :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`" class="flex items-center px-6 transition-all duration-300
                        border-4 border-solid justify-center
                        text-2xl font-semibold rounded-2xl text-white no-underline
                        w-full min-h-[2.5rem] max-w-[35rem]">
                    {{ modulo.nombre }}
                </router-link>
            </div>
        </section>
    </main>
</template>

<style scoped></style>