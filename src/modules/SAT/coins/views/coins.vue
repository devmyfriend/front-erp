<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import tableCoins from '@/modules/SAT/coins/components/tableCoins.vue';
import coinFinder from '@/modules/SAT/coins/components/coinFinder.vue';
import btnSave from '@/commons/ui/btn-save/btn-save.vue';
import deleteModal from '@/commons/ui/modals/deleteModal.vue';
import btnFormulario from '@/commons/ui/btn-formulario/btn-formulario.vue';
import coinsModal from '@/commons/components/modals/coinsModal.vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import { useCoins } from '@/modules/SAT/coins/composables/useCoins.js';
import { useTheme } from '@/commons/composables/theme';

import { coinsStore } from '@/store/coinsStore';
const store = coinsStore();

const { theme } = useTheme();
const { cargarMonedas, buscarMonedas, ListadoMonedas } = useCoins();
const { setTitle } = useLayout();

const modoFormulario = ref(0);
const bodyFrm = ref({
    ClaveMoneda: null,
    Descripcion: null,
});
const modalData = ref(null);
const showModal = ref(false);

onBeforeMount(() => {
    setTitle('Monedas SAT');
});
onMounted(async () => {
    await cargarDatos();
});
const cargarDatos = async () => {
    await cargarMonedas();
    modoFormulario.value = 0;
    showModal.value = false;
    bodyFrm.value = {
        ClaveMoneda: null,
        Descripcion: null,
    };
};

const esperarTabla = (data) => {
    const [moneda, accion] = data;

    if (accion === 1) {
        subirDatos(moneda);
    } else if (accion === 2) {
        modalData.value = moneda.ClaveMoneda;
        console.log('Se va a borrar la moneda: ', moneda.ClaveMoneda);
    }
};

const esperarBusqueda = async (texto) => {
    if (texto) {
        await buscarMonedas(texto);
    } else {
        await cargarDatos();
    }
};

const subirDatos = (datos) => {
    bodyFrm.value = { ...datos };
    showModal.value = true;
    modoFormulario.value = 1;
}

const esperarModal = (datos) => { /* 1 Crear, 2 Editar*/
    if (modoFormulario.value === 0) {
        store.crearMoneda(bodyFrm.value).then(() => {
            cargarDatos();
        });
    } else if (modoFormulario.value === 1) {
        console.log('El modal pidió actualizar con los datos: ' + JSON.stringify(datos));
        store.actualizarMoneda(datos).then(() => {
            cargarDatos();
        });
    }

    /* showModal = false;
    modoFormulario = 0; */
};

const borrarRegistro = () => {
    store.eliminarMoneda(modalData.value).then(() => {
        cargarDatos();
        modalData.value = null;
    });
};

const esperarCancelar = () => {
    modalData.value = null;
    showModal.value = false;
    modoFormulario.value = 0
    bodyFrm.value = {
        ClaveMoneda: null,
        Descripcion: null,
    };
};
</script>

<template>
    <div class="w-full h-full p-4 flex justify-center items-center">
        <div class="w-full h-full flex flex-col">
            <titleH2> Listado de Monedas </titleH2>

            <div class="flex flex-row mb-6 h-inputHeight justify-between">
            <div class="flex flex-row mb-6 h-inputHeight gap-4">
                <coinFinder @eBusqueda="esperarBusqueda" />

<!--                 <form @submit.prevent="ConfirmarFormulario()" class="text-base flex flex-row items-center gap-4 h-full flex-wrap" v-if="modoFormulario !== 0">
                    <label class="text-base font-semibold" for="ClaveMoneda"> Clave Moneda </label>
                    <input type="text" placeholder="MXN" v-model="bodyFrm.ClaveMoneda" class="h-full" :disabled="modoFormulario == 2" >

                    <label class="text-base font-semibold" for="Descripcion"> Descripción </label>
                    <input type="text" placeholder="Peso Mexicano" v-model="bodyFrm.Descripcion" class="h-full">

                    <btnSave
                        class="px-4 py-2 rounded-md text-white h-full uppercase font-semibold flex items-center justify-center transition-all duration-300"
                        :class="`bg-${theme}-primary hover:bg-${theme}-secondary`"> Guardar </btnSave>
                </form> -->

            </div>
<!--             <btnFormulario @click="modoFormulario === 0 ? abrirModal(1) : abrirModal(0)"
            class="text-base px-4 py-2 text-white rounded-md h-full uppercase font-semibold flex items-center justify-center transition-all duration-300 max-w-24 md:max-w-32 xl:max-w-36"
            :class="`bg-${theme}-primary hover:bg-${theme}-secondary`" :modo="modoFormulario"/> -->
            <btnFormulario @eNuevo="showModal = true; modoFormulario = 0"
            class="text-base px-4 py-2 text-white rounded-md h-full uppercase font-semibold flex items-center justify-center transition-all duration-300 max-w-24 md:max-w-32 xl:max-w-36"
            :class="`bg-${theme}-primary hover:bg-${theme}-secondary`"/>
            </div>

            <div
                class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
                <tableCoins :ListadoMonedas="ListadoMonedas" :editable="true" @eAccion="esperarTabla" /> <!--  Monedas y 1 0 2 -->
                <deleteModal :id="modalData" v-if="modalData !== null" @eEliminar="borrarRegistro" @eCancelar="esperarCancelar"/>
            </div>
        </div>
    </div>

    <coinsModal :datos="bodyFrm" :mostrar="showModal" :modo="modoFormulario" @eConfirm="esperarModal" @eCancel="esperarCancelar" />

</template>

<style scoped></style>
