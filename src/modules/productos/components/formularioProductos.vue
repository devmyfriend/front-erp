<script setup>
import { computed, ref } from 'vue';
import btnSave from '@/commons/ui/btn-save/btn-save.vue';
import btnFile from '@/commons/ui/btn-file/btn-file.vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()

const imagenPrueba = ref('https://images3.alphacoders.com/133/1332803.png');

const elemento = ref('Producto');
const registro = ref({
    tipoProducto: route.params.tipo ? route.params.tipo : 'Todos',
    claveProducto: route.params.id ? route.params.id : '',
    nombreProducto: '',
    descripcionProducto: '',
    noSerie: false,
    puntos: 0,
    lineaProducto: '',
    familiaProducto: '',
    subfamiliaProducto: '',
    ClaveProductoSAT: '',
    ClaveUnidadSAT: '',
    ImpuestoCompuesto: ''
});
const verDatosAnidados = ref(false);

const ListadoTiposProducto = ref([]); // No trabajado
const ListadoLineasProducto = ref([]); // No trabajado
const ListadoFamiliasProducto = ref([]); // No trabajado
const ListadoSubfamiliasProducto = ref([]); // No trabajado

const esperarImagen = (archivo) => {
    imagenPrueba.value = archivo;
}
const GuardarRegistro = () => {
    console.log('Guardando...');
}
const ActualizarRegistro = () => {
    console.log('Actualizando...');
}

const DatosGenerales = computed(() => {
    if ( registro.value.tipoProducto === '' || registro.value.claveProducto === '' || registro.value.nombreProducto === '' || registro.value.descripcionProducto === '' )
    {
        return false;
    } else {
        return true;
    }
});

const DatosAnidados = computed(() => {
    if ( registro.value.lineaProducto === '' || registro.value.familiaProducto === '' || registro.value.subfamiliaProducto === '' || registro.value.ClaveProductoSAT === '' || registro.value.ClaveUnidadSAT === '' || registro.value.ImpuestoCompuesto === '' )
    {
        return false;
    } else {
        return true;
    }
});

const cambiarFrm = () => {
    if (DatosGenerales.value)
    {
        verDatosAnidados.value = !verDatosAnidados.value;
    }
}
</script>

<template>
    <main class="flex justify-between text-primaryFontColor items-start min-w-full max-w-full bg-transparent mb-2 xl:flex-nowrap flex-wrap">

        <form @submit.prevent="modo === 0 ? GuardarRegistro() : ActualizarRegistro()" class="w-full xl:w-[64%] bg-primaryFrmContainer min-h-[70vh] max-h-[70vh] rounded-2xl overflow-y-scroll">
            <h3 class="text-xl uppercase bg-secondaryFrmContainer h-9 flex items-center px-4 font-semibold justify-center"> Formulario </h3>
            <div class="m-4 gap-y-4 flex flex-col">

            <h4 class=" text-base font-bold mb-2" :class="{clickeable: DatosGenerales}" @click="cambiarFrm"> Datos generales</h4>
            <div class="gap-y-4 flex flex-col" v-if="!verDatosAnidados">
                <div class="min-w-full flex-wrap flex"> <!-- Tipo -->
                    <label for="tipoProducto"> Tipo de producto: </label>
                    <select v-model="registro.tipoProducto" id="tipoProducto">
                        <option value="Todos"> Todos </option>
                        <option v-for="Tipo in ListadoTiposProducto" :value="Tipo.NombreTipoProducto"> {{ Tipo.NombreTipoProducto }} </option>
                    </select>
                </div>
                <div class="min-w-full flex-wrap flex"> <!-- Clave -->
                    <label for="claveProducto"> Clave del producto: </label>
                    <input type="text" v-model="registro.claveProducto" id="claveProducto">
                </div>
                <div class="min-w-full flex-wrap flex"> <!-- Nombre -->
                    <label for="nombreProducto"> Nombre del producto: </label>
                    <input type="text" v-model="registro.nombreProducto" id="nombreProducto">
                </div>
                <div class="flex flex-wrap descr"> <!-- Descripción -->
                    <label for="descripcionProducto"> Descripción del producto: </label>
                    <textarea v-model="registro.descripcionProducto" id="descripcionProducto"></textarea>
                </div>
                <div class="min-w-full flex-wrap max-w-full flex gap-4"> <!-- No.Serie y Puntos -->
                    <div class="flex">
                        <label for="noSeries"> Número de serie: </label>
                        <input type="checkbox" v-model="registro.noSerie" id="noSeries" :checked="registro.noSerie">
                    </div>
                    <div class="flex grow flex-wrap">
                        <label for="puntos" class="max-w-16 min-w-16 shrink-0"> Puntos: </label>
                        <input type="number" v-model="registro.puntos" id="puntos" class="grow">
                    </div>
                </div>
            </div>

            <h4 class=" text-base font-bold mb-2" :class="{clickeable: DatosGenerales}" @click="cambiarFrm"> Datos anidados </h4>
            <div class="gap-y-4 flex flex-col" v-if="verDatosAnidados">
                <div class="min-w-full flex-wrap flex"> <!-- Línea -->
                    <label for="lineaProducto"> Línea: </label>
                    <select v-model="registro.lineaProducto" id="lineaProducto">
                        <option v-for="Linea in ListadoLineasProducto" :value="Linea.NombreLineaProducto"> {{ Linea.NombreLineaProducto }} </option>
                    </select>
                </div>
                <div class="min-w-full flex-wrap flex"> <!-- Familia -->
                    <label for="familiaProducto"> Familia: </label>
                    <select v-model="registro.familiaProducto" id="familiaProducto">
                        <option v-for="Familia in ListadoFamiliasProducto" :value="Familia.NombreFamiliaProducto"> {{ Familia.NombreFamiliaProducto }} </option>
                    </select>
                </div>
                <div class="min-w-full flex-wrap flex"> <!-- Subfamilia -->
                    <label for="subfamiliaProducto"> Subfamilia: </label>
                    <select v-model="registro.subfamiliaProducto" id="subfamiliaProducto">
                        <option v-for="Subfamilia in ListadoSubfamiliasProducto" :value="Subfamilia.NombreSubfamiliaProducto"> {{ Subfamilia.NombreSubfamiliaProducto }} </option>
                    </select>
                </div>
                <div class="min-w-full flex-wrap flex"> <!-- C. Producto SAT -->
                    <label for="ClaveProductoSAT"> C. Producto SAT: </label>
                    <select v-model="registro.ClaveProductoSAT" id="ClaveProductoSAT">
                        <option v-for="ClaveProd in ListadoSubfamiliasProducto" :value="ClaveProd.NombreSubfamiliaProducto"> {{ ClaveProd.NombreSubfamiliaProducto }} </option>
                    </select>
                </div>
                <div class="min-w-full flex-wrap flex"> <!-- C. Unidad SAT -->
                    <label for="ClaveUnidadSAT"> C. Unidad SAT: </label>
                    <select v-model="registro.ClaveUnidadSAT" id="ClaveUnidadSAT">
                        <option v-for="ClaveUnidad in ListadoSubfamiliasProducto" :value="ClaveUnidad.NombreSubfamiliaProducto"> {{ ClaveUnidad.NombreSubfamiliaProducto }} </option>
                    </select>
                </div>
                <div class="min-w-full flex-wrap flex"> <!-- Impuesto Compuesto -->
                    <label for="ImpuestoCompuesto"> C. Impuesto Compuesto: </label>
                    <select v-model="registro.ImpuestoCompuesto" id="ImpuestoCompuesto">
                        <option v-for="ImpCompuesto in ListadoSubfamiliasProducto" :value="ImpCompuesto.NombreSubfamiliaProducto"> {{ ImpCompuesto.NombreSubfamiliaProducto }} </option>
                    </select>
                </div>
            </div>

            <btnSave :modo="modo" :elemento="elemento"/>
            </div>
        </form>

        <section class="min-w-full max-w-full mt-8 xl:mt-0 xl:min-w-[35%] xl:max-w-[35%] bg-primaryFrmContainer min-h-min rounded-2xl overflow-hidden">
            <h3 class="text-xl uppercase bg-secondaryFrmContainer h-9 flex items-center px-4 font-semibold justify-center"> Imagen del Producto </h3>
            <div class="imgContainer flex flex-col items-center justify-center p-4  min-w-full max-w-full">
                <img :src="imagenPrueba" alt="Imagen del Producto" class="max-h-[50vh] min-h-[50vh] bg-transparent overflow-scroll">
            </div>
            <btnFile @eGuardar="esperarImagen"/>
        </section>
    </main>
</template>

<style scoped>
.completa{
    width: 100%;
    max-width: 100%;
    min-width: 100%;
}

label {
    font-size: 1rem;
    margin-right: 1rem;
    max-width: 14rem;
    min-width: 14rem;
}

input,
select,
textarea {
    flex-grow: 1;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    outline: none;
    background-color: #fff;
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

form{
  scrollbar-width: thin;
}



/* -------------------------------------------------- */
.clickeable{
    cursor: pointer;
    transition: all 0.3s;
}
.clickeable:hover{
    color: #353535;
}
</style>