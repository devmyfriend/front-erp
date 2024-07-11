<script setup>
    import { computed, onMounted, onUpdated, ref, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import { windowLayoutStore } from '@/store/windowLayoutStore';
    import { useTheme } from '@/commons/composables/useTheme.js';
    import closeIco from '@/commons/ui/icons/actionIcons/closeIco.vue';
    const { theme } = useTheme();
    const route = useRoute();
    const windowStore = windowLayoutStore();

    const btActivo = ref( windowStore.getBtActivo );

    const props = defineProps({
        tipoProducto: {
            type: String,
            default: 'Todos'
        },
        codigoProducto: {
            type: String,
            default: ''
        },
        nombreTipo: {
            type: String,
            default: ''
        }
    });

    const tipoProducto = computed(() => {
        return props.tipoProducto || 'Todos';
    });

    const codigoProducto = computed(() => {
        return props.codigoProducto || '';
    });

    onMounted(() => {
        btActivo.value = windowStore.getBtActivo;
    });
    watch(() => route.name, () => {
        setTimeout(() => {
            btActivo.value = windowStore.getBtActivo;
            console.log('[watch] btActivo:', btActivo.value);
        }, 150);
    });
</script>

<template>
    <div class="flex justify-between" :class="`bg-container-${theme}`">
        <div class="flex flex-row justify-start text-xl min-h-[1.5rem] max-w-[80vw] min-w-[80vw] overflow-x-scroll text-white">
            <router-link 
            :class="{
                [`bg-window-${theme}`]: btActivo !== 1,
                [`bg-transparent border-b-0`]: btActivo === 1,
            }"

                :to="{ name: 'productos', params: { tipo: tipoProducto } }" draggable="false"
                class="whitespace-nowrap bg-disable text-white hover:border-b-0 hover:bg-transparent transition-colors duration-300 flex items-center justify-center min-w-max text-center text-base py-1 pl-8 pr-6 border-inputWidth border-inputBorder rounded-tl-[2rem]">
                Listado
            </router-link>

            <router-link 
            :class="{
                [`bg-window-${theme}`]: btActivo !== 2,
                [`bg-transparent border-b-0`]: btActivo === 2,
            }"
            :to="{ name: 'formProducts', params: { tipo: tipoProducto, id: codigoProducto } }"
                v-if="codigoProducto !== ''" draggable="false"
                class="whitespace-nowrap bg-disable text-white hover:border-b-0 hover:bg-transparent transition-colors duration-300 flex items-center justify-center min-w-max text-center text-base py-1 px-6 border-inputWidth border-inputBorder">
                Formulario
            </router-link>

            <router-link 
            :class="{
                [`bg-window-${theme}`]: btActivo !== 2,
                [`bg-transparent border-b-0`]: btActivo === 2,
            }"
            :to="{ name: 'formProducts', params: { tipo: tipoProducto } }" draggable="false"
                class="whitespace-nowrap bg-disable text-white hover:border-b-0 hover:bg-transparent transition-colors duration-300 flex items-center justify-center min-w-max text-center text-base py-1 px-6 border-inputWidth border-inputBorder"
                v-else>
                Formulario
            </router-link>

            <router-link 
            :class="{
                [`bg-window-${theme}`]: btActivo !== 3,
                [`bg-transparent border-b-0`]: btActivo === 3,
            }"
            :to="{ name: 'formProducts', params: { tipo: tipoProducto, id: codigoProducto } }"
                draggable="false"
                class="whitespace-nowrap bg-disable text-white hover:border-b-0 hover:bg-transparent transition-colors duration-300 flex items-center justify-center min-w-max text-center text-base py-1 px-6 border-inputWidth border-inputBorder">
                Productos por Almacén
            </router-link>

            <router-link 
            :class="{
                [`bg-window-${theme}`]: btActivo !== 4,
                [`bg-transparent border-b-0`]: btActivo === 4,
            }"
            :to="{ name: 'formProducts', params: { id: codigoProducto } }" draggable="false"
                class="whitespace-nowrap bg-disable text-white hover:border-b-0 hover:bg-transparent transition-colors duration-300 flex items-center justify-center min-w-max text-center text-base py-1 px-6 border-inputWidth border-inputBorder">
                Agregar Productos
            </router-link>

            <router-link 
            :class="{
                [`bg-window-${theme}`]: btActivo !== 5,
                [`bg-transparent border-b-0`]: btActivo === 5,
            }"
            :to="{ name: 'formProducts', params: { id: codigoProducto } }" draggable="false"
                class="whitespace-nowrap bg-disable text-white hover:border-b-0 hover:bg-transparent transition-colors duration-300 flex items-center justify-center min-w-max text-center text-base py-1 px-6 border-inputWidth border-inputBorder">
                Políticas
            </router-link>

            <router-link
            :class="{
                [`bg-window-${theme}`]: btActivo !== 6,
                [`bg-transparent border-b-0`]: btActivo === 6,
            }"
            :to="{ name: 'formProducts', params: { tipo: tipoProducto, id: codigoProducto } }"
                draggable="false"
                class="whitespace-nowrap bg-disable text-white hover:border-b-0 hover:bg-transparent transition-colors duration-300 flex items-center justify-center min-w-max text-center text-base py-1 px-6 border-inputWidth border-inputBorder">
                Cantidad por Almacén
            </router-link>

            <router-link
            :class="{
                [`bg-window-${theme}`]: btActivo !== 7,
                [`bg-transparent border-b-0`]: btActivo === 7,
            }"
            :to="{ name: 'formProducts', params: { tipo: tipoProducto, id: codigoProducto } }"
                draggable="false"
                class="whitespace-nowrap bg-disable text-white hover:border-b-0 hover:bg-transparent transition-colors duration-300 flex items-center justify-center min-w-max text-center text-base py-1 px-6 border-inputWidth border-inputBorder">
                Proveedores
            </router-link>
        </div>

        <div class="flex xl:min-w-40 xl:max-w-40 md:max-w-12 max-w-7 shrink-0">
            <router-link
                class="flex items-center xl:px-6 px-1 xl:justify-end xl:pr-8 justify-start m-0 w-60 no-underline bg-transparent border-none"
                :to="{ name: 'productos', params: { tipo: tipoProducto } }">
                <closeIco class="w-6 h-6 cursor-pointer"/>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
    .ventanas {
        display: grid;
        grid-template-columns: auto 6rem;
    }

    .rutas a {
        padding: 0.25rem 1rem;
        min-width: max-content;
    }

    .rutas a:first-child {
        border-left: none;
        border-bottom-left-radius: 0rem;
        padding-left: 2rem;
    }

    .rutas a:last-child {
        border-right: 1px solid #000;
        border-bottom-right-radius: 0rem;

    }

    .btActivado {
        color: #fff;
        font-weight: bold;
        border: none;
        border-top: 1px solid #000;
        height: 100%;
    }
</style>