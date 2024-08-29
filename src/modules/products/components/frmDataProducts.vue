<script setup>
import { onMounted, ref, watch } from 'vue';
import btnSave from '@/commons/ui/btn-save/btn-save.vue';
import generalModal from '@/commons/ui/modals/generalModal.vue';
import tableProductsKeys from '@/modules/products/components/tableProductsKeys.vue';
import tableUnitKeys from '@/modules/products/components/tableUnitKeys.vue';
import { useTheme } from '@/commons/composables/theme';
import Swal from 'sweetalert2';
const { theme } = useTheme();

const props = defineProps({
    datos: {
        type: Object,
        required: true
    },
});

const showModal = ref(false);
const modalMode = ref(0);
const codigoProducto = ref('');

const obtenerRegistro = (registro) => {
    switch (modalMode.value) {
        case 4:
            props.datos.claveProductoServicio = registro.ClaveProductoServicio;
            break;

        case 5:
            props.datos.claveUnidad = registro.ClaveUnidadSat;            
            break;
    
        default:
            Swal.fire({
                title: 'Error',
                text: 'No se ha seleccionado un modo de modal',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            break;
    }
    modalMode.value = 0;
}

onMounted(() => {
    codigoProducto.value = props.datos.codigoProducto;
});

watch(() => modalMode.value, (value) => {
    if (value != 0) {
        showModal.value = true;
    }else if(value == 0){
        showModal.value = false;
    }
});
</script>

<template>
    <div class="flex px-4 py-6 rounded-xl border-2 overflow-y-scroll flex-wrap gap-4 w-full 2xl:w-4/6"
        :class="`bg-${theme}-container border-${theme}-primary`">
        <div class="flex w-full gap-4 flex-wrap lg:flex-nowrap">

            <div class="flex w-full gap-2">
                <label class="text-white" for="CodigoProducto"> Codigo Producto: </label>
                <input type="text" id="CodigoProducto" v-model="datos.codigoProducto" :disabled="datos.codigoProducto" :class="datos.codigoProducto?`bg-${theme}-disabled`:''" >
            </div>

            <div class="flex w-full gap-2">
                <label class="text-white" for="TipoProducto"> Tipo de Producto: </label>
                <select id="TipoProducto" v-model="datos.tipoProducto">
                    <option value="1">Producto 1</option>
                    <option value="2">Producto 2</option>
                    <option value="3">Producto 3</option>
                </select>
            </div>
        </div>

        <div class="flex w-full gap-2">
            <label class="text-white" for="NombreProducto"> Nombre Producto: </label>
            <input type="text" id="NombreProducto" v-model="datos.nombreProducto">
        </div>

        <div class="flex w-full gap-2">
            <label class="text-white" for="DescripcionProducto"> Descripcion Producto: </label>
            <textarea name="DescripcionProducto" id="DescripcionProducto" v-model="datos.descripcionProducto"
                class="flex-grow min-w-60 rounded-inputRadius h-44 p-2 resize-none"> </textarea>
        </div>

        <div class="flex w-full gap-2">
            <label class="text-white" for="Puntos"> Puntos: </label>
            <input type="number" id="Puntos" v-model="datos.puntos">
        </div>

        <div class="flex w-full gap-2">
            <label class="text-white" for="Numero de Serie"> Número de serie: </label>
            <input type="text" id="Numero de Serie" v-model="datos.serie">
        </div>

        <!-- ----------------------------------------------------------- Botones ----------------------------------------------------------- -->

        <div class="flex w-full gap-2">
            <label class="text-white" for="Linea"> Linea: </label>
            <input type="text" :class="`bg-${theme}-disabled text-${theme}-primary font-semibold`" id="Linea" disabled v-model="datos.linea"> </input>
            <button class="btn-action" :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`" @click="modalMode = 1">
                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z"
                        fill="#fff" />
                </svg>
            </button>
        </div>

        <div class="flex w-full gap-2">
            <label class="text-white" for="Familia"> Familia: </label>
            <input type="text" :class="`bg-${theme}-disabled text-${theme}-primary font-semibold`" id="Familia" disabled v-model="datos.familia"> </input>
            <button class="btn-action" :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`" @click="modalMode = 2">
                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z"
                        fill="#fff" />
                </svg>
            </button>
        </div>

        <div class="flex w-full gap-2">
            <label class="text-white" for="Subfamilia"> Subfamilia: </label>
            <input type="text" :class="`bg-${theme}-disabled text-${theme}-primary font-semibold`" id="Subfamilia" disabled v-model="datos.subfamilia">
            </input>
            <button class="btn-action" :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`" @click="modalMode = 3">
                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z"
                        fill="#fff" />
                </svg>
            </button>
        </div>
        <div class="flex w-full gap-2">
            <label class="text-white" for="Clave Producto"> C. Producto SAT: </label>
            <input type="text" :class="`bg-${theme}-disabled text-${theme}-primary font-semibold`" id="Clave Producto" disabled
                v-model="datos.claveProductoServicio"> </input>
            <button class="btn-action" :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`" @click="modalMode = 4">
                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z"
                        fill="#fff" />
                </svg>
            </button>
        </div>
        <div class="flex w-full gap-2">
            <label class="text-white" for="Clave Unidad"> C. Unidad SAT: </label>
            <input type="text" :class="`bg-${theme}-disabled text-${theme}-primary font-semibold`" id="Clave Unidad" disabled v-model="datos.claveUnidad">
            </input>
            <button class="btn-action" :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`" @click="modalMode = 5">
                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z"
                        fill="#fff" />
                </svg>
            </button>
        </div>
        <div class="flex w-full gap-2">
            <label class="text-white" for="Clave Impuesto Compuesto"> C. Impuesto Compuesto: </label>
            <input type="text" :class="`bg-${theme}-disabled text-${theme}-primary font-semibold`" id="Clave Impuesto Compuesto" disabled
                v-model="datos.claveImpuestoCompuesto"> </input>
            <button class="btn-action" :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`" @click="modalMode = 6">
                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z"
                        fill="#fff" />
                </svg>
            </button>
        </div>

        <!-- ----------------------------------------------------------- Botones ----------------------------------------------------------- -->

        <div class="flex w-full justify-center">
            <btnSave class="w-full" />
        </div>

        <!-- ----------------------------------------------------------- Modales ----------------------------------------------------------- -->

        <generalModal v-if="showModal" @eCancel="showModal = 0" :buttonsMode="2" >
            <template v-slot:header>
                Selecciona un registro
            </template>
            <template v-slot:content>
                <tableProductsKeys v-if="modalMode === 4" :clickeable="true" @eSelect="obtenerRegistro" />
                <tableUnitKeys v-if="modalMode === 5" :clickeable="true" @eSelect="obtenerRegistro" />
            </template>
        </generalModal>

        <!-- ----------------------------------------------------------- Modales ----------------------------------------------------------- -->

    </div>
</template>

<style scoped>
input,
select {
  @apply flex-grow h-inputHeight rounded-inputRadius p-paddingInput text-base;
}

label {
  @apply text-[15px] font-bold flex items-center w-20 md:min-w-48 max-w-28 md:max-w-max overflow-hidden text-ellipsis;
}

.btn-action {
  @apply w-10 md:w-14 lg:w-16 h-inputHeight rounded-lg flex items-center justify-center transition-all duration-300;
}
</style>