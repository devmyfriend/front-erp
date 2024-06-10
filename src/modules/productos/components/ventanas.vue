<script setup>
import { computed } from 'vue';

const props = defineProps({
    tipoProducto: {
        type: String,
        default: 'Todos'
    },
    codigoProducto: {
        type: String,
        default: ''
    },
    btActivo: {
        type: Number,
        default: 0
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

const btActivo = computed(() => {
    return props.btActivo || 1;
});
</script>

<template>
    <div class="flex justify-between">
        <div class="flex flex-row justify-start text-xl min-h-[1.5rem] max-w-[80vw] min-w-[80vw] overflow-x-scroll">
            <!-- 4vh -->
            <router-link :class="{ btActivado: btActivo === 1 }"
                :to="{ name: 'productos123', params: { tipo: tipoProducto } }" draggable="false"
                class=" whitespace-nowrap bg-disable text-secondaryFontColor flex items-center justify-center min-w-max text-center text-base py-1 pl-8 pr-6 border-inputWidth border-inputBorder rounded-tl-[2rem]">
                Listado
            </router-link>

            <router-link :class="{ btActivado: btActivo === 2 }"
                :to="{ name: 'formProducts', params: { tipo: tipoProducto, id: codigoProducto } }"
                v-if="codigoProducto !== ''" draggable="false"
                class=" whitespace-nowrap bg-disable text-secondaryFontColor flex items-center justify-center min-w-max text-center text-base py-1 px-6 border-inputWidth border-inputBorder">
                Formulario
            </router-link>

            <router-link :class="{ btActivado: btActivo === 2 }"
                :to="{ name: 'formProducts', params: { tipo: tipoProducto } }" draggable="false"
                class=" whitespace-nowrap bg-disable text-secondaryFontColor flex items-center justify-center min-w-max text-center text-base py-1 px-6 border-inputWidth border-inputBorder"
                v-else>
                Formulario
            </router-link>

            <router-link :class="{ btActivado: btActivo === 3 }"
                :to="{ name: 'formProducts', params: { tipo: tipoProducto, id: codigoProducto } }" draggable="false"
                class=" whitespace-nowrap bg-disable text-secondaryFontColor flex items-center justify-center min-w-max text-center text-base py-1 px-6 border-inputWidth border-inputBorder">
                Productos por Almacén
            </router-link>

            <router-link :class="{ btActivado: btActivo === 4 }"
                :to="{ name: 'formProducts', params: { id: codigoProducto } }" draggable="false"
                class=" whitespace-nowrap bg-disable text-secondaryFontColor flex items-center justify-center min-w-max text-center text-base py-1 px-6 border-inputWidth border-inputBorder">
                Agregar Productos
            </router-link>

            <router-link :class="{btActivado: btActivo === 5 }"
                :to="{ name: 'formProducts', params: { id: codigoProducto } }" draggable="false"
                class=" whitespace-nowrap bg-disable text-secondaryFontColor flex items-center justify-center min-w-max text-center text-base py-1 px-6 border-inputWidth border-inputBorder">
                Políticas
            </router-link>

            <router-link :class="{btActivado: btActivo === 6 }"
                :to="{ name: 'formProducts', params: { tipo: tipoProducto, id: codigoProducto } }" draggable="false"
                class=" whitespace-nowrap bg-disable text-secondaryFontColor flex items-center justify-center min-w-max text-center text-base py-1 px-6 border-inputWidth border-inputBorder">
                Cantidad por Almacén
            </router-link>

            <router-link :class="{btActivado: btActivo === 7 }"
                :to="{ name: 'formProducts', params: { tipo: tipoProducto, id: codigoProducto } }" draggable="false"
                class=" whitespace-nowrap bg-disable text-secondaryFontColor flex items-center justify-center min-w-max text-center text-base py-1 px-6 border-inputWidth border-inputBorder">
                Proveedores
            </router-link>
        </div>

        <div class="flex min-w-40 max-w-40 shrink-0">
            <router-link
                class="flex items-center justify-center m-0 px-6 w-60 no-underline bg-transparent text-secondaryFontColor border-none"
                :to="{ name: 'productos123', params: { tipo: tipoProducto } }">
                <img class="w-6 h-6 cursor-pointer" src="/svg/icons/Close.svg" alt="Cerar Imagen">
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
    background-color: #fff;
    color: #000;
    font-weight: bold;
    border: none;
    border-top: 1px solid #000;
    height: 100%;
}
</style>