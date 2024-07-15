<script setup>
import { useProductos } from '@/store/productsStore'
import { onMounted, ref, watch } from 'vue';
import btnSave from '@/commons/ui/btn-save/btn-save.vue';
import Swal from 'sweetalert2';
import { useRoute, useRouter } from 'vue-router';
import modalClaveProducto from '@/commons/ui/modals/productKeyModal.vue';
import { useTheme } from '@/commons/composables/useTheme.js';
const { theme } = useTheme();
const store = useProductos();
const route = useRoute()
const imagenPrueba = ref('https://images3.alphacoders.com/133/1332803.png');

const props = defineProps({
    producto: {
        type: Object,
        resquired: false
    }
});

const elemento = ref('Producto');
const registro = ref({
    NombreTipoProducto: 'Todos',
    CodigoProducto: '',
    NombreProducto: '',
    DescripcionProducto: '',
    Serie: false,
    Puntos: 0,
    lineaProducto: '',
    familiaProducto: '',
    subfamiliaProducto: '',
    ClaveProductoServicio: '12123',
    ClaveUnidadSAT: '',
    ImpuestoCompuesto: ''
});

const ClaveProductoServicio = ref('10123');

const verDatosAnidados = ref(false);

const ListadoTiposProducto = ref([]); // No trabajado
const ListadoLineasProducto = ref([]); // No trabajado
const ListadoFamiliasProducto = ref([]); // No trabajado
const ListadoSubfamiliasProducto = ref([]); // No trabajado
const ListadoClavesProducto = ref([]);

const esperarImagen = (archivo) => {
    imagenPrueba.value = archivo;
}
const GuardarRegistro = () => {
    console.log('Guardando...');
}
const selecionarClaveUnidad = (r) => {
    registro.value.ClaveProductoServicio = r.ClaveProductoServicio;
    modal.value.ClaveProductoServicio = false;
    console.log('El valor obtenido: ' + JSON.stringify(r.ClaveProductoServicio) + ' y el valor asignado local es: ' + registro.value.ClaveProductoServicio);
}
const cerrarModal = () => {
    modal.value.ClaveProductoServicio = false;
    registro.value.ClaveProductoServicio = '';
}
const modal = ref({
    ClaveProductoServicio: false
});

const abrirModal = (opt) => {
    switch (opt) {
        case 1:
            modal.value.lineaProducto = true;
            break;
        case 2:
            modal.value.familiaProducto = true;
            break;
        case 3:
            modal.value.subfamiliaProd = true;
            break;
        case 4:
            modal.value.ClaveProductoServicio = true;
            break;
        case 5:
            modal.value.ClaveUnidadSAT = true;
            break;
        case 6:
            modal.value.ImpuestoCompuesto = true;
            break;
        default:
            console.log('Opción no válida');
            break;
    }

}

onMounted(() => {
    cargarDatos();
});

const cargarDatos = () => {
    store.cargarTiposProducto().then(() => {
        ListadoTiposProducto.value = store.getTiposProducto;
    });
    store.cargarClavesProductos(1).then(() => {
        ListadoClavesProducto.value = store.getClavesProductos;
    });
}

watch(() => props.producto, (newValue) => {
    if (newValue != undefined) {
        registro.value = newValue;
    }
});
const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

const test2 = () => {
    Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
    });
}
</script>

<template>
        <form @submit.prevent="modo === 0 ? test2() : test2()" class="w-full xl:w-[64%] min-h-max max-h-full mb-8 xl:mb-0 rounded-2xl overflow-y-scroll" :class="`bg-subcontainer-${theme}`">
            <div class="m-4 gap-y-4 flex flex-col">

            <div class="mt-4 gap-y-4 flex flex-col">
                <div class="min-w-full flex-wrap flex"> <!-- Tipo -->
                    <label class="max-w-48 min-w-48 text-[1rem] items-center flex" for="tipoProducto"> Tipo de producto: </label>
                    <select v-model="registro.NombreTipoProducto" id="tipoProducto">
                        <option v-for="Tipo in ListadoTiposProducto" :value="Tipo.NombreTipoProducto"> {{ Tipo.NombreTipoProducto }} </option>
                    </select>
                </div>
                <div class="min-w-full flex-wrap flex"> <!-- Clave -->
                    <label class="max-w-48 min-w-48 text-[1rem] items-center flex" for="CodigoProducto"> Código del producto: </label>
                    <input type="text" v-model="registro.CodigoProducto" id="CodigoProducto">
                </div>
                <div class="min-w-full flex-wrap flex"> <!-- Nombre -->
                    <label class="max-w-48 min-w-48 text-[1rem] items-center flex" for="NombreProducto"> Nombre del producto: </label>
                    <input type="text" v-model="registro.NombreProducto" id="NombreProducto">
                </div>
                <div class="flex flex-wrap descr"> <!-- Descripción -->
                    <label class="max-w-48 min-w-48 text-[1rem]" for="DescripcionProducto"> Descripción del producto: </label>
                    <textarea v-model="registro.DescripcionProducto" id="DescripcionProducto"></textarea>
                </div>
                <div class="min-w-full flex-wrap max-w-full flex gap-4"> <!-- No.Serie y Puntos -->
                    <div class="flex grow flex-wrap">
                        <label class="max-w-48 min-w-48 shrink-0 text-[1rem] items-center flex"> Puntos: </label>
                        <input type="number" min="0" v-model="registro.Puntos" id="Puntos" class="grow">
                    </div>
                    <div class="flex">
                        <label class="max-w-48 min-w-48 md:max-w-none md:min-w-1 text-[1rem] items-center flex md:mr-4" for="noSeries"> Número de serie: </label>
                        <input type="checkbox" v-model="registro.Serie" id="noSeries" :checked="registro.Serie">
                    </div>
                </div>
            </div>

            <div class="gap-y-4 flex flex-col">
                <div class="min-w-full flex-wrap flex"> <!-- Línea -->
                    <label class="max-w-48 min-w-48 text-[1rem] items-center flex" for="lineaProducto"> Línea: </label>
                    <select v-model="registro.lineaProducto" id="lineaProducto">
                        <option v-for="Linea in ListadoLineasProducto" :value="Linea.NombreLineaProducto"> {{ Linea.NombreLineaProducto }} </option>
                    </select>
                    <button type="button" @click="abrirModal(1)" class="basis-16 min-h-7 bg-primaryBtnColor border-inputWidth rounded-lg px-6 ml-2 transition-all duration-300" :class="`bg-primaryButton-${theme} hover:bg-primaryButton-${theme}-hover`">
                        <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z" fill="#fff"/>
                        </svg>
                    </button>
                </div>
                <div class="min-w-full flex-wrap flex"> <!-- Familia -->
                    <label class="max-w-48 min-w-48 text-[1rem] items-center flex" for="familiaProducto"> Familia: </label>
                    <select v-model="registro.familiaProducto" id="familiaProducto">
                        <option v-for="Familia in ListadoFamiliasProducto" :value="Familia.NombreFamiliaProducto"> {{ Familia.NombreFamiliaProducto }} </option>
                    </select>
                    <button type="button" @click="abrirModal(2)" class="bg-primaryBtnColor border-inputWidth rounded-lg px-6 ml-2 transition-all duration-300 basis-16 min-h-7" :class="`bg-primaryButton-${theme} hover:bg-primaryButton-${theme}-hover`">
                        <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z" fill="#fff"/>
                        </svg>
                    </button>
                </div>
                <div class="min-w-full flex-wrap flex"> <!-- Subfamilia -->
                    <label class="max-w-48 min-w-48 text-[1rem] items-center flex" for="subfamiliaProducto"> Subfamilia: </label>
                    <select v-model="registro.subfamiliaProducto" id="subfamiliaProducto">
                        <option v-for="Subfamilia in ListadoSubfamiliasProducto" :value="Subfamilia.NombreSubfamiliaProducto"> {{ Subfamilia.NombreSubfamiliaProducto }} </option>
                    </select>
                    <button type="button" @click="abrirModal(3)" class="bg-primaryBtnColor border-inputWidth rounded-lg px-6 ml-2 transition-all duration-300 basis-16 min-h-7" :class="`bg-primaryButton-${theme} hover:bg-primaryButton-${theme}-hover`">
                        <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z" fill="#fff"/>
                        </svg>
                    </button>
                </div>
                <div class="min-w-full flex-wrap flex"> <!-- C. Producto SAT -->
                    <label class="max-w-48 min-w-48 text-[1rem] items-center flex" for="ClaveProductoServicio"> C. Producto SAT: </label>
                    <input v-model="registro.ClaveProductoServicio" id="ClaveProductoServicio" disabled />
                    <button type="button" @click="abrirModal(4)" class="bg-primaryBtnColor border-inputWidth rounded-lg px-6 ml-2 transition-all duration-300 basis-16 min-h-7" :class="`bg-primaryButton-${theme} hover:bg-primaryButton-${theme}-hover`">
                        <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z" fill="#fff"/>
                        </svg>
                    </button>
                </div>
                <div class="min-w-full flex-wrap flex"> <!-- C. Unidad SAT -->
                    <label class="max-w-48 min-w-48 text-[1rem] items-center flex" for="ClaveUnidadSAT"> C. Unidad SAT: </label>
                    <select v-model="registro.ClaveUnidadSAT" id="ClaveUnidadSAT">
                        <option v-for="ClaveUnidad in ListadoSubfamiliasProducto" :value="ClaveUnidad.NombreSubfamiliaProducto"> {{ ClaveUnidad.NombreSubfamiliaProducto }} </option>
                    </select>
                    <button type="button" @click="abrirModal(5)" class="bg-primaryBtnColor border-inputWidth rounded-lg px-6 ml-2 transition-all duration-300 basis-16 min-h-7" :class="`bg-primaryButton-${theme} hover:bg-primaryButton-${theme}-hover`">
                        <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z" fill="#fff"/>
                        </svg>
                    </button>
                </div>
                <div class="min-w-full flex-wrap flex"> <!-- Impuesto Compuesto -->
                    <label class="max-w-48 min-w-48 text-[1rem] items-center flex" for="ImpuestoCompuesto"> C. Impuesto Compuesto: </label>
                    <select v-model="registro.ImpuestoCompuesto" id="ImpuestoCompuesto">
                        <option v-for="ImpCompuesto in ListadoSubfamiliasProducto" :value="ImpCompuesto.NombreSubfamiliaProducto"> {{ ImpCompuesto.NombreSubfamiliaProducto }} </option>
                    </select>
                    <button type="button" @click="abrirModal(6)" class="bg-primaryBtnColor border-inputWidth rounded-lg px-6 ml-2 transition-all duration-300 basis-16 min-h-7" :class="`bg-primaryButton-${theme} hover:bg-primaryButton-${theme}-hover`">
                        <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z" fill="#fff"/>
                        </svg>
                    </button>
                </div>
            </div>

            <btnSave class="mt-4 mb-2" />
            </div>
        </form>
         <modalClaveProducto v-if="modal.ClaveProductoServicio === true" :registros="ListadoClavesProducto" @eSeleccionar="selecionarClaveUnidad" @eCancelar="cerrarModal" />
</template>

<style scoped>
.completa{
    width: 100%;
    max-width: 100%;
    min-width: 100%;
}

input,
select,
textarea {
    flex: 1 0 12rem;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    outline: none;
}
input[type="checkbox"] {
    flex: 1 0 auto;
}

.descr {
    display: flex;
    flex-direction: row;
}

textarea {
    resize: none;
    flex-grow: 1;
    height: 5rem;
}

.clickeable{
    cursor: pointer;
    transition: all 0.3s;
}
.clickeable:hover{
    color: #353535;
}
</style>