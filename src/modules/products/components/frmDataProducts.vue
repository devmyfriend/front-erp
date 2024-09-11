<script setup>
import { onMounted, ref, watch, defineAsyncComponent, computed } from 'vue';
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
} from '@headlessui/vue';

const GeneralModal = defineAsyncComponent(() => import('@/commons/ui/modals/generalModal.vue'));
const TableProductsKeys = defineAsyncComponent(() => import('@/modules/products/components/tableProductsKeys.vue'));
const TableUnitKeys = defineAsyncComponent(() => import('@/modules/products/components/tableUnitKeys.vue'));
const UnitKeyFinder = defineAsyncComponent(() => import('@/modules/products/components/unitKeyFinder.vue'));

import titleH3 from '@/commons/ui/title-h3/title-h3.vue';
import IconCheck from '@/commons/components/icons/IconCheck.vue'
import Swal from 'sweetalert2';
import btnSave from '@/commons/ui/btn-save/btn-save.vue';
import btnButton from '@/commons/ui/btn-button/btn-button.vue';
import { useTheme } from '@/commons/composables/theme';
import { useProducts } from '@/modules/products/composables/useProducts';
import { useProductFamilies } from '@/modules/families/composables/useProductFamilies';
import { useProductSubfamilies } from '@/modules/subfamilies/composables/useProductSubfamilies';
import { useProductLines } from '@/modules/lines/composables/useProductLines';
import { useProductsKeys } from '@/modules/products/composables/useProductsKeys';
import { useUnitKeys } from '@/modules/products/composables/useUnitKeys';

const { theme } = useTheme();
const { productFamiliesCollection, loadProductFamilies, registroModal: familyRecord, esperarModal: createFamilyModal } = useProductFamilies();
const { productSubfamiliesCollection, loadProductSubfamilies, registroModal: subfamilyRecord, esperarModal: createSubfamilyModal } = useProductSubfamilies();
const { productLinesCollection, loadProductLines, registroModal: lineRecord, esperarModal: createLineModal } = useProductLines();
const { productsKeysCollection, loadProductsKeys } = useProductsKeys();
const { unitKeysCollection, loadUnitKeys } = useUnitKeys();
const { productsTypeCollection, loadProducts, productCode } = useProducts();

const newRecord = ref({});
const viewMode = ref(0);
const showModal = ref(false);
const query = ref('');
const modalMode = ref(0);
const showConversion = ref(false);

const filteredFamilies = computed(() => {
  if (!query.value) {
    return productFamiliesCollection.value;
  }
  
  return productFamiliesCollection.value.filter(familia =>
    familia.NombreFamilia.toLowerCase().includes(query.value.toLowerCase())
  );
});

const filteredSubfamilies = computed(() => {
  if (!query.value) {
    return productSubfamiliesCollection.value;
  }
  
  return productSubfamiliesCollection.value.filter(subfamilia =>
  subfamilia.NombreSubFamilia.toLowerCase().includes(query.value.toLowerCase())
  );
});

const filteredLines = computed(() => {
  if (!query.value) {
    return productLinesCollection.value;
  }
  
  return productLinesCollection.value.filter(linea =>
  linea.NombreLinea.toLowerCase().includes(query.value.toLowerCase())
  );
});

const filteredProductKeys = computed(() => {
  if (!query.value) {
    return productsKeysCollection.value;
  }
  
  return productsKeysCollection.value.filter(productKey =>
  productKey.Descripcion.toLowerCase().includes(query.value.toLowerCase())
  );
});

const filteredUnitKeys = computed(() => {
  if (!query.value) {
    return unitKeysCollection.value;
  }
  
  return unitKeysCollection.value.filter(unitKey =>
  unitKey.NombreUnidadSat.toLowerCase().includes(query.value.toLowerCase())
  );
});


const obtenerRegistro = (registro) => {
    switch (modalMode.value) {
        case 4:
            newRecord.value.claveProductoServicio = productsKeysCollection.value.find((key) => key.ClaveProductoServicio === registro.ClaveProductoServicio);
            break;

        case 5:
            newRecord.value.claveUnidad = unitKeysCollection.value.find((key) => key.ClaveUnidadSat === registro.ClaveUnidadSat);
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
};

const handleCancel = () => {
    modalMode.value = 0;
    showModal.value = false;
    showConversion.value = false;
    familyRecord.value = {};
    subfamilyRecord.value = {};
    lineRecord.value = {};
};

const handleModal = async () => {
    const response = modalMode.value === 1 ? await createFamilyModal(familyRecord.value) :
        modalMode.value === 2 ? await createSubfamilyModal(subfamilyRecord.value) :
            modalMode.value === 3 ? await createLineModal(lineRecord.value) : null;

    switch (modalMode.value) {
        case 1:
            if (response) {
                await loadProductFamilies();
                newRecord.value.familia = productFamiliesCollection.value.find((familia) => familia.FamiliaId === response);
            }
            break;
        case 2:
            if (response) {
                await loadProductSubfamilies();
                newRecord.value.subfamilia = productSubfamiliesCollection.value.find((subfamilia) => subfamilia.SubFamiliaId === response);
            }
            break;
        case 3:
            if (response) {
                await loadProductLines();
                newRecord.value.linea = productLinesCollection.value.find((linea) => linea.LineaId === response);
            }
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
    handleCancel();
};

onMounted(() => {
    if (productCode.value !== null) {
        /* abc Buscar los datos el producto */
        viewMode.value = 1;
        newRecord.value.codigoProducto = productCode.value;
    } else {
        /* abc Nuevo producto */
        viewMode.value = 0;
    }

    loadProducts();
    loadProductFamilies();
    loadProductSubfamilies();
    loadProductLines();
    loadProductsKeys();
    loadUnitKeys();
});

watch(() => modalMode.value, (value) => {
    if (value != 0) {
        showModal.value = true;
    } else if (value == 0) {
        showModal.value = false;
    }
    familyRecord.value = {};
    subfamilyRecord.value = {};
    lineRecord.value = {};
});
</script>

<template>
    <div class="flex px-4 pt-4 pb-2 rounded-xl border-2 overflow-y-scroll flex-wrap gap-2 w-full 2xl:w-4/6"
        :class="`bg-${theme}-container border-${theme}-primary`">
        <div class="flex w-full gap-4 flex-wrap lg:flex-nowrap items-center">

            <div class="lineaFrm">
                <label class="text-white" for="CodigoProducto"> Codigo Producto:</label>
                <input type="text" id="CodigoProducto" v-model="newRecord.codigoProducto" :disabled="viewMode === 1"
                    :class="viewMode === 1 ? `bg-${theme}-disabled` : ''">
            </div>

            <div class="lineaFrm">
                <label class="text-white lg:!min-w-max lg:max-w-max" for="TipoProducto"> Tipo de Producto: </label>
                <select id="TipoProducto" v-model="newRecord.tipoProducto">
                    <option value="" disabled selected>Selecciona un tipo de producto</option>
                    <option v-for="typeProd in productsTypeCollection" :value="typeProd.TipoProductoId"> {{
                        typeProd.NombreTipoProducto }}</option>
                </select>
            </div>
        </div>

        <div class="lineaFrm">
            <label class="text-white" for="NombreProducto"> Nombre Producto: </label>
            <input type="text" id="NombreProducto" v-model="newRecord.nombreProducto" maxlength="50">
        </div>

        <div class="lineaFrm">
            <label class="text-white" for="DescripcionProducto"> Descripcion Producto: </label>
            <textarea name="DescripcionProducto" id="DescripcionProducto" maxlength="255" v-model="newRecord.descripcionProducto"
                class="flex-grow min-w-60 rounded-inputRadius h-44 p-2 resize-none"> </textarea>
        </div>

        <div class="lineaFrm flex-wrap items-center lg:flex-nowrap !gap-4">
            <div class="flex gap-2 w-full lg:w-2/4">
                <label class="text-white max-w-min" for="Puntos"> Puntos: </label>
                <input type="number" id="Puntos" min="0" max="999" v-model="newRecord.puntos">
            </div>
            <div class="flex gap-2 w-full lg:w-2/4">
                <label class="text-white lg:!min-w-max lg:max-w-max" for="Numero de Serie"> No. de serie: </label>
                <input type="text" id="Numero de Serie" v-model="newRecord.serie">
            </div>
        </div>


        <!-- ----------------------------------------------------------- Botones ----------------------------------------------------------- -->

        <div class="lineaFrm">
            <label class="text-white" for="Familia"> Familia: </label>
            <div class="flex flex-col flex-grow">
                <Combobox v-model="newRecord.familia" as="div" class="relative">
                    <ComboboxInput @input="query = $event.target.value" :displayValue="(familia) => familia.NombreFamilia"
                        class="flex-grow px-4 w-full" placeholder="Selecciona una familia"/>
                    <ComboboxOptions
                        class="absolute z-40 w-full max-h-44 overflow-y-scroll bg-white border border-gray-300 shadow-lg">
                        <ComboboxOption v-for="familia in filteredFamilies" :key="familia.FamiliaId" :value="familia" :disabled="!familia.Activo"
                            class="flex px-4 justify-between items-center ui-active:text-white ui-not-active:bg-white ui-not-active:text-black ui-not-active:cursor-not-allowed"
                            :class="`ui-active:bg-${theme}-secondary ${!familia.Activo ? `ui-not-active:bg-${theme}-disabled` : ''}`">
                                {{ familia.FamiliaId }} | {{ familia.NombreFamilia }}
                            <IconCheck class="hidden ui-selected:block h-4" :color="`black`" />
                        </ComboboxOption>
                    </ComboboxOptions>
                </Combobox>
            </div>
            <button class="btn-action" :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"
                @click="modalMode = 1">
                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z"
                        fill="#fff" />
                </svg>
            </button>
        </div>

        <div class="lineaFrm">
            <label class="text-white" for="Subfamilia"> Subfamilia: </label>
            <div class="flex flex-col flex-grow">                
                <Combobox v-model="newRecord.subfamilia" as="div" class="relative">
                    <ComboboxInput @input="query = $event.target.value" :displayValue="(subfamilia) => subfamilia.NombreSubFamilia"
                        class="flex-grow px-4 w-full" placeholder="Selecciona una subfamilia"/>
                    <ComboboxOptions
                        class="absolute z-40 w-full max-h-44 overflow-y-scroll bg-white border border-gray-300 shadow-lg">
                        <ComboboxOption v-for="subfamilia in filteredSubfamilies" :key="subfamilia.SubFamiliaId" :value="subfamilia" :disabled="!subfamilia.Activo"
                            class="flex px-4 justify-between items-center ui-active:text-white ui-not-active:bg-white ui-not-active:text-black ui-not-active:cursor-not-allowed"
                            :class="`ui-active:bg-${theme}-secondary ${!subfamilia.Activo ? `ui-not-active:bg-${theme}-disabled` : ''}`">
                                {{ subfamilia.SubFamiliaId }} | {{ subfamilia.NombreSubFamilia }}
                            <IconCheck class="hidden ui-selected:block h-4" :color="`black`" />
                        </ComboboxOption>
                    </ComboboxOptions>
                </Combobox>
            </div>

            <button class="btn-action" :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"
                @click="modalMode = 2">
                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z"
                        fill="#fff" />
                </svg>
            </button>
        </div>

        <div class="lineaFrm">
            <label class="text-white" for="Linea"> Linea: </label>
            <div class="flex flex-col flex-grow">
                <Combobox v-model="newRecord.linea" as="div" class="relative">
                    <ComboboxInput @input="query = $event.target.value" :displayValue="(linea) => linea.NombreLinea"
                        class="flex-grow px-4 w-full" placeholder="Selecciona una linea"/>
                    <ComboboxOptions
                        class="absolute z-40 w-full max-h-44 overflow-y-scroll bg-white border border-gray-300 shadow-lg">
                        <ComboboxOption v-for="linea in filteredLines" :key="linea.LineaId" :value="linea" :disabled="linea.Borrado"
                            class="flex px-4 justify-between items-center ui-active:text-white ui-not-active:bg-white ui-not-active:text-black ui-not-active:cursor-not-allowed"
                            :class="`ui-active:bg-${theme}-secondary ${linea.Borrado ? `ui-not-active:bg-${theme}-disabled` : ''}`">
                                {{ linea.LineaId }} | {{ linea.NombreLinea }}
                            <IconCheck class="hidden ui-selected:block h-4" :color="`black`" />
                        </ComboboxOption>
                    </ComboboxOptions>
                </Combobox>
            </div>
            <button class="btn-action" :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"
                @click="modalMode = 3">
                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z"
                        fill="#fff" />
                </svg>
            </button>
        </div>

        <div class="lineaFrm">
            <label class="text-white" for="Clave Producto"> C. Producto SAT: </label>
            <div class="flex flex-col flex-grow">
                <Combobox v-model="newRecord.claveProductoServicio" as="div" class="relative">
                    <ComboboxInput @input="query = $event.target.value" :displayValue="(claveProductoServicio) => claveProductoServicio.Descripcion"
                        class="flex-grow px-4 w-full" placeholder="Selecciona una clave de producto/servicio"/>
                    <ComboboxOptions
                        class="absolute z-40 w-full max-h-44 overflow-y-scroll bg-white border border-gray-300 shadow-lg">
                        <ComboboxOption v-for="claveProductoServicio in filteredProductKeys" :key="claveProductoServicio.ClaveProductoServicio" :value="claveProductoServicio" :disabled="!claveProductoServicio.Activo"
                            class="flex px-4 justify-between items-center ui-active:text-white ui-not-active:bg-white ui-not-active:text-black ui-not-active:cursor-not-allowed"
                            :class="`ui-active:bg-${theme}-secondary ${!claveProductoServicio.Activo ? `ui-not-active:bg-${theme}-disabled` : ''}`">
                                {{ claveProductoServicio.ClaveProductoServicio }} | {{ claveProductoServicio.Descripcion }}
                            <IconCheck class="hidden ui-selected:block h-4" :color="`black`" />
                        </ComboboxOption>
                    </ComboboxOptions>
                </Combobox>
            </div>
            <button class="btn-action" :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"
                @click="modalMode = 4">
                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z"
                        fill="#fff" />
                </svg>
            </button>
        </div>
        
        <div class="lineaFrm">
            <label class="text-white" for="Clave Unidad"> C. Unidad SAT: </label>
            <div class="flex flex-col flex-grow">
                <Combobox v-model="newRecord.claveUnidad" as="div" class="relative">
                    <ComboboxInput @input="query = $event.target.value" :displayValue="(claveUnidad) => claveUnidad.NombreUnidadSat"
                        class="flex-grow px-4 w-full" placeholder="Selecciona una clave unidad"/>
                        <ComboboxOptions
                            class="absolute z-40 w-full max-h-44 overflow-y-scroll bg-white border border-gray-300 shadow-lg">
                            <ComboboxOption v-for="claveUnidad in filteredUnitKeys" :key="claveUnidad.ClaveUnidadSat" :value="claveUnidad" :disabled="!claveUnidad.Activo"
                                class="flex px-4 justify-between items-center ui-active:text-white ui-not-active:bg-white ui-not-active:text-black ui-not-active:cursor-not-allowed"
                                :class="`ui-active:bg-${theme}-secondary ${!claveUnidad.Activo ? `ui-not-active:bg-${theme}-disabled` : ''}`">
                                    {{ claveUnidad.ClaveUnidadSat }} | {{ claveUnidad.NombreUnidadSat }}
                                <IconCheck class="hidden ui-selected:block h-4" :color="`black`" />
                            </ComboboxOption>
                        </ComboboxOptions>
                </Combobox>
            </div>
            <button class="btn-action" :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"
                @click="modalMode = 5">
                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z"
                        fill="#fff" />
                </svg>
            </button>
        </div>

        <div class="lineaFrm">
            <label class="text-white" for="Clave Impuesto Compuesto"> C. Impuesto Compuesto: </label>

            <!--            TEST            -->

            <div class="flex flex-col flex-grow">
                <input type="text" class="w-full flex-grow" disabled>
                <!-- <Combobox v-model="selectedPerson" as="div" class="relative">
                    <ComboboxInput @change="query = $event.target.value" :displayValue="(person) => person.name"
                        class="flex-grow px-4 w-full" />
                    <ComboboxOptions
                        class="absolute z-40 w-full max-h-44 overflow-y-scroll bg-white border border-gray-300 shadow-lg">
                        <ComboboxOption v-for="person in filteredPeople" :key="person.id" :value="person"
                            :disabled="!person.activo"
                            class="flex px-4 justify-between items-center ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
                            :class="`ui-active:bg-MyFriend-secondary ${!person.activo ? `ui-not-active:bg-${theme}-disabled` : ''}`">
                            {{ person.name }}
                            <IconCheck class="hidden ui-selected:block h-4" :color="`black`" />
                        </ComboboxOption>
                    </ComboboxOptions>
                </Combobox> -->
            </div>

            <!--            TEST            -->
            <button class="btn-action" :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"
                @click="modalMode = 6">
                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.7008 19.0204L17.4165 14.7368C17.2231 14.5435 16.961 14.4361 16.686 14.4361H15.9855C17.1716 12.9194 17.8763 11.0118 17.8763 8.93663C17.8763 4 13.8756 0 8.93815 0C4.00068 0 0 4 0 8.93663C0 13.8733 4.00068 17.8733 8.93815 17.8733C11.0137 17.8733 12.9216 17.1686 14.4386 15.9828V16.6831C14.4386 16.9581 14.546 17.2202 14.7394 17.4135L19.0237 21.6971C19.4276 22.101 20.0808 22.101 20.4804 21.6971L21.6965 20.4812C22.1004 20.0773 22.1004 19.4243 21.7008 19.0204ZM8.93815 14.4361C5.90004 14.4361 3.43775 11.9785 3.43775 8.93663C3.43775 5.89903 5.89574 3.43716 8.93815 3.43716C11.9763 3.43716 14.4386 5.89474 14.4386 8.93663C14.4386 11.9742 11.9806 14.4361 8.93815 14.4361Z"
                        fill="#fff" />
                </svg>
            </button>
        </div>

        <!-- ----------------------------------------------------------- Botones ----------------------------------------------------------- -->

        <div class="flex w-full justify-center">
            <btnSave class="w-full" @click="console.log('JAJAJAJ \n ' + JSON.stringify(newRecord))" />
        </div>
        <!-- ----------------------------------------------------------- Modales ----------------------------------------------------------- -->

        <generalModal v-if="showModal && modalMode === 1" @eCancel="handleCancel" @eConfirm="handleModal">
            <template v-slot:header>
                Crear una familia
            </template>
            <template v-slot:content>
                <div class="flex-grow">
                    <div class="flex flex-grow gap-4 items-center px-1">
                        <label for="NombreFamilia" class="font-semibold"> Nombre Familia: </label>
                        <input type="text" id="NombreFamilia" v-model="familyRecord.NombreFamilia" class="inpModal" />
                    </div>
                </div>
            </template>
        </generalModal>

        <generalModal v-if="showModal && modalMode === 2" @eCancel="handleCancel" @eConfirm="handleModal">
            <template v-slot:header>
                Crear una subfamilia
            </template>
            <template v-slot:content>
                <div class="flex flex-grow gap-4 items-center px-1">
                    <label for="NombreSubfamilia" class="font-semibold"> Nombre Subfamilia: </label>
                    <input type="text" id="NombreSubfamilia" v-model="subfamilyRecord.NombreSubFamilia"
                        class="inpModal" />
                    <label for="FamiliaId" class="font-semibold"> Familia: </label>
                    <select name="FamiliaId" id="FamiliaId" class="inpModal" v-model="subfamilyRecord.FamiliaId">
                        <option value="0" selected disabled>Selecciona una familia</option>
                        <option v-for="family in productFamiliesCollection" :key="family.FamiliaId"
                            :value="family.FamiliaId">{{ family.FamiliaId }} | {{ family.NombreFamilia }} </option>
                    </select>
                </div>
            </template>
        </generalModal>

        <generalModal v-if="showModal && modalMode === 3" @eCancel="handleCancel" @eConfirm="handleModal">
            <template v-slot:header>
                Crear una linea
            </template>
            <template v-slot:content>
                <div class="flex flex-grow gap-4 items-center px-1">
                    <label for="NombreLinea" class="font-semibold"> Nombre Linea: </label>
                    <input type="text" id="NombreLinea" v-model="lineRecord.NombreLinea" class="inpModal" />
                    <label for="SubFamiliaId" class="font-semibold"> Subfamilia: </label>
                    <select name="SubFamiliaId" id="SubFamiliaId" class="inpModal" v-model="lineRecord.SubFamiliaId">
                        <option value="0" selected disabled>Selecciona una subfamilia</option>
                        <option v-for="subfamily in productSubfamiliesCollection" :key="subfamily.SubFamiliaId"
                            :value="subfamily.SubFamiliaId">{{ subfamily.SubFamiliaId }} | {{ subfamily.NombreSubFamilia
                            }} </option>
                    </select>
                </div>
            </template>
        </generalModal>



        <!-- TEST -->

        <generalModal v-if="showModal && modalMode === 4" @eCancel="handleCancel" :buttonsMode="2">
            <template v-slot:header>
                Seleccionar {{ modalMode === 1 ? 'una línea' : modalMode === 2 ?
                    'una familia' : modalMode === 3 ? 'una subfamilia' : modalMode === 4 ?
                        'una clave de producto' : modalMode === 5 ? 'una clave de unidad' :
                            modalMode === 6 ? 'un de impuesto compuesto' : '' }}
            </template>
            <template v-slot:content>
                <tableProductsKeys :clickeable="true" @eSelect="obtenerRegistro" />
            </template>
        </generalModal>

        <generalModal v-if="showModal && modalMode === 5" @eCancel="handleCancel" :buttonsMode="2">
            <template v-slot:header>
                Seleccionar {{ modalMode === 1 ? 'una línea' : modalMode === 2 ?
                    'una familia' : modalMode === 3 ? 'una subfamilia' : modalMode === 4 ?
                        'una clave de producto' : modalMode === 5 ? 'una clave de unidad' :
                            modalMode === 6 ? 'un de impuesto compuesto' : '' }}
            </template>
            <template v-slot:content>
                <div class="flex-grow">
                    <div class="w-full h-full flex flex-col max-h-full" v-if="(modalMode === 5 && !showConversion)">
                        <div class="flex-grow min-h-[35px] mb-6 flex justify-between">
                            <unitKeyFinder :color="'#353535'" />
                            <btnButton :buttonText="'Conversiones'" :iconSave="true"
                                @click="showConversion = !showConversion" />
                        </div>
                        <div
                            class="w-full items-center flex flex-col flex-grow overflow-y-scroll text-base rounded-3xl ">
                            <tableUnitKeys :clickeable="true" @eSelect="obtenerRegistro" />
                        </div>
                    </div>

                    <div class="w-full h-full flex flex-col max-h-full" v-if="(modalMode === 5 && showConversion)">
                        <div class="flex-grow min-h-[35px] mb-6 flex justify-between">
                            <btnButton :buttonText="'Conversiones'" :iconSave="true"
                                @click="showConversion = !showConversion" />
                        </div>
                        <div class="flex flex-grow gap-4 items-center px-1">
                            <titleH3 :class="`text-${theme}-text flex justify-center`"> Conversiones </titleH3>
                        </div>
                    </div>
                </div>
            </template>
        </generalModal>

        <generalModal v-if="showModal && modalMode === 6" @eCancel="handleCancel" :buttonsMode="2">
            <template v-slot:header>
                Crear {{ modalMode === 1 ? 'una línea' : modalMode === 2 ?
                    'una familia' : modalMode === 3 ? 'una subfamilia' : modalMode === 4 ?
                        'una clave de producto' : modalMode === 5 ? 'una clave de unidad' :
                            modalMode === 6 ? 'un de impuesto compuesto' : '' }}
            </template>
            <template v-slot:content>
                <div class="flex-grow">
                    <p class="text-center">{{ modalMode }}</p>
                </div>
            </template>
        </generalModal>

        <!-- TEST -->
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

.lineaFrm {
    @apply flex w-full gap-2;
}
</style>