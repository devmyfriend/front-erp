<template>
    <div class="ventanas w-full min-h-min max-h-max justify-between overflow-scroll rounded-t-[2rem]">
        <div class="rutas flex items-start h-full overflow-scroll w-full " :class="{ 'col-span-2': btActivo == 1 }">
            <router-link draggable="false"
                class="min-w-40 text-center m-0 px-6 border-inputWidth border-inputBorder bg-disable text-secondaryFontColor no-underline rounded-tl-[2rem]"
                :class="{ btActivo: btActivo === 1 }" :to="{ name: 'listadoProductos', params: { tipo: tipoProducto } }">
                Listado </router-link>

            <router-link v-if="codigoProducto !== ''" draggable="false" :class="{ btActivo: btActivo === 2 }"
                :to="{ name: 'formularioProductos', params: { tipo: tipoProducto, id: codigoProducto } }"
                class="min-w-40 text-center m-0 px-6 border-inputWidth border-inputBorder bg-disable text-secondaryFontColor no-underline">
                Formulario </router-link>
            <router-link v-else draggable="false" :class="{ btActivo: btActivo === 2 }"
                :to="{ name: 'formularioProductos', params: { tipo: tipoProducto } }"
                class="min-w-40 text-center m-0 px-6 border-inputWidth border-inputBorder bg-disable text-secondaryFontColor no-underline">
                Formulario </router-link>

            <router-link draggable="false" v-if="nombreTipo != 'Servicios' && tipoProducto != 'Todos'"
                :class="{ btActivo: btActivo === 3 }"
                :to="{ name: 'formularioProductos', params: { tipo: tipoProducto, id: codigoProducto } }"
                class="min-w-40 text-center m-0 px-6 border-inputWidth border-inputBorder bg-disable text-secondaryFontColor no-underline">
                Productos por Almacén </router-link>
            <router-link draggable="false" v-if="nombreTipo == 'Combos'" :class="{ btActivo: btActivo === 4 }"
                :to="{ name: 'formularioProductos', params: { id: codigoProducto } }"
                class="min-w-40 text-center m-0 px-6 border-inputWidth border-inputBorder bg-disable text-secondaryFontColor no-underline">
                Agregar Productos </router-link>
            <router-link draggable="false" v-if="nombreTipo == 'Suscripciones'" :class="{ btActivo: btActivo === 5 }"
                :to="{ name: 'formularioProductos', params: { id: codigoProducto } }"
                class="min-w-40 text-center m-0 px-6 border-inputWidth border-inputBorder bg-disable text-secondaryFontColor no-underline">
                Políticas </router-link>
            <router-link draggable="false" :class="{ btActivo: btActivo === 6 }"
                :to="{ name: 'formularioProductos', params: { tipo: tipoProducto, id: codigoProducto } }"
                class="min-w-40 text-center m-0 px-6 border-inputWidth border-inputBorder bg-disable text-secondaryFontColor no-underline">
                Cantidad por Almacén </router-link>
            <router-link draggable="false" :class="{ btActivo: btActivo === 7 }"
                :to="{ name: 'formularioProductos', params: { tipo: tipoProducto, id: codigoProducto } }"
                class="min-w-40 text-center m-0 px-6 border-inputWidth border-inputBorder bg-disable text-secondaryFontColor no-underline">
                Proveedores </router-link>
            <!--         <router-link :class="{btActivo: btActivo === 1}" :to=" { name: 'listadoProductos', params: { tipo: props.tipoProducto}}"> Listado </router-link>
        <router-link :class="{btActivo: btActivo === 2}" :to=" { name: 'formularioProducto', params: { tipo: props.tipoProducto, id: codigoProducto}}"> Formulario </router-link>
        <router-link v-if="nombreTipo != 'Servicios' && tipoProducto !='suscripcion'" :class="{btActivo: btActivo === 3}" :to=" { name: 'almacenProducto', params: { tipo: tipoProducto, id: codigoProducto } }"> Productos por Almacén </router-link>
        <router-link v-if="nombreTipo == 'Combos'" :class="{btActivo: btActivo === 4}" :to=" { name: 'detalleCombo', params: { id: codigoProducto } }"> Agregar Productos </router-link>
        <router-link v-if="nombreTipo == 'Suscripciones'" :class="{btActivo: btActivo === 5}" :to=" { name: 'politicasProducto', params: { id: codigoProducto } }"> Políticas </router-link>
        <router-link :class="{btActivo: btActivo === 6}" :to=" { name: 'cantidadAlmacen', params: { tipo: tipoProducto, id: codigoProducto } }"> Cantidad por Almacén </router-link>
        <router-link :class="{btActivo: btActivo === 7}" :to=" { name: 'proveedoresProducto', params: { tipo: tipoProducto, id: codigoProducto } }"> Proveedores </router-link> -->
        </div>
        <div class="flex content-center items-center bg-transparent border-none" v-if="btActivo != 1">
            <router-link
                class="flex items-center justify-center m-0 px-6 w-60 no-underline bg-transparent text-secondaryFontColor border-none"
                :class="{ btActivo: btActivo === 1 }" :to="{
                    name: 'listadoProductos',
                    params: { tipo: tipoProducto }
                }">
                <img class="w-6 h-6 cursor-pointer" src="/svg/icons/Close.svg" alt="Cerar Imagen">
            </router-link>
        </div>
    </div>
</template>

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
        default: 1
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

.btActivo {
    background-color: #fff;
    color: #000;
    font-weight: bold;
    border: none;
    border-top: 1px solid #000;
    height: 100%;
}
</style>