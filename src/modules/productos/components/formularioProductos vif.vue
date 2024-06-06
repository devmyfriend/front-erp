<script setup>

</script>

<template>
    <form @submit.prevent="esperarFormulario" class="min-w-full max-w-full bg-blue-700 mb-4">
        <section class="min-w-[55%] max-w-[55%] bg-green-500 min-h-40 max-h-full" :class="{completa: true}">
            <h3 class="text-xl uppercase bg-yellow-300 px-4 pt-2"> Datos generales </h3>
            <div class="m-4 gap-y-4 flex flex-col">











            <div class="min-w-full flex-wrap flex"> <!-- Tipo -->
                <label for="tipoProducto"> Tipo de producto: </label>
                <select v-model="tipoProducto" id="tipoProducto">
                    <option value="Todos"> Todos </option>
                    <option v-for="Tipo in ListadoTiposProducto" :value="Tipo.NombreTipoProducto"> {{ Tipo.NombreTipoProducto }} </option>
                </select>
            </div>
            <div class="min-w-full flex-wrap flex"> <!-- Clave -->
                <label for="claveProducto"> Clave del producto: </label>
                <input type="text" v-model="claveProducto" id="claveProducto">
            </div>
            <div class="min-w-full flex-wrap flex"> <!-- Nombre -->
                <label for="nombreProducto"> Nombre del producto: </label>
                <input type="text" v-model="nombreProducto" id="nombreProducto">
            </div>
            <div class="flex flex-wrap descr"> <!-- Descripción -->
                <label for="descripcionProducto"> Descripción del producto: </label>
                <textarea v-model="descripcionProducto" id="descripcionProducto"></textarea>
            </div>
            <div class="min-w-full flex-wrap max-w-full flex gap-4"> <!-- No.Serie y Puntos -->
                <div class="flex">
                    <label for="noSeries"> Número de serie: </label>
                    <input type="checkbox" v-model="noSerie" id="noSeries" :checked="noSerie">
                </div>
                <div class="flex grow flex-wrap">
                    <label for="puntos" class="max-w-16 min-w-16 shrink-0"> Puntos: </label>
                    <input type="number" v-model="puntos" id="puntos" class="grow">
                </div>
            </div>
            <div class="min-w-full flex-wrap flex"> <!-- Línea -->
                <label for="lineaProducto"> Línea: </label>
                <select v-model="lineaProducto" id="lineaProducto">
                    <option v-for="Linea in ListadoLineasProducto" :value="Linea.NombreLineaProducto"> {{ Linea.NombreLineaProducto }} </option>
                </select>
            </div>
            <div class="min-w-full flex-wrap flex"> <!-- Familia -->
                <label for="familiaProducto"> Familia: </label>
                <select v-model="familiaProducto" id="familiaProducto">
                    <option v-for="Familia in ListadoFamiliasProducto" :value="Familia.NombreFamiliaProducto"> {{ Familia.NombreFamiliaProducto }} </option>
                </select>
            </div>
            <div class="min-w-full flex-wrap flex"> <!-- Subfamilia -->
                <label for="subfamiliaProducto"> Subfamilia: </label>
                <select v-model="subfamiliaProducto" id="subfamiliaProducto">
                    <option v-for="Subfamilia in ListadoSubfamiliasProducto" :value="Subfamilia.NombreSubfamiliaProducto"> {{ Subfamilia.NombreSubfamiliaProducto }} </option>
                </select>
            </div>
            <div class="min-w-full flex-wrap flex"> <!-- C. Producto SAT -->
                <label for="ClaveProductoSAT"> C. Producto SAT: </label>
                <select v-model="ClaveProductoSAT" id="ClaveProductoSAT">
                    <option v-for="ClaveProd in ListadoSubfamiliasProducto" :value="ClaveProd.NombreSubfamiliaProducto"> {{ ClaveProd.NombreSubfamiliaProducto }} </option>
                </select>
            </div>
            <div class="min-w-full flex-wrap flex"> <!-- C. Unidad SAT -->
                <label for="ClaveUnidadSAT"> C. Unidad SAT: </label>
                <select v-model="ClaveUnidadSAT" id="ClaveUnidadSAT">
                    <option v-for="ClaveUnidad in ListadoSubfamiliasProducto" :value="ClaveUnidad.NombreSubfamiliaProducto"> {{ ClaveUnidad.NombreSubfamiliaProducto }} </option>
                </select>
            </div>
            <div class="min-w-full flex-wrap flex"> <!-- Impuesto Compuesto -->
                <label for="ImpuestoCompuesto"> C. Impuesto Compuesto: </label>
                <select v-model="ImpuestoCompuesto" id="ImpuestoCompuesto">
                    <option v-for="ImpCompuesto in ListadoSubfamiliasProducto" :value="ImpCompuesto.NombreSubfamiliaProducto"> {{ ImpCompuesto.NombreSubfamiliaProducto }} </option>
                </select>
            </div>


            <button type="submit"> Guardar Producto </button>














            </div>
        </section>
        <section class="min-w-[40%] max-w-[40%] bg-red-600 min-h-min" v-if="false">
            <h3 class="text-xl uppercase bg-yellow-300 px-4 pt-2"> Imagen del Producto </h3>
            <div class="m-4">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In aliquam qui beatae quisquam doloremque,
                    harum laborum rem? Molestias ad officia sunt nesciunt suscipit, eum id voluptatem excepturi facere
                    mollitia et.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In aliquam qui beatae quisquam doloremque,
                    harum laborum rem? Molestias ad officia sunt nesciunt suscipit, eum id voluptatem excepturi facere
                    mollitia et.
                </p>
            </div>
        </section>
    </form>
</template>

<style scoped>
.completa{
    width: 100%;
    max-width: 100%;
    min-width: 100%;
}
form {
    display: flex;
    justify-content: space-between;
    color: theme('colors.primaryFontColor');
    align-items: flex-start;
}

label {
    font-size: 1.2rem;
    margin-right: 1rem;
    max-width: 12rem;
    min-width: 12rem;
    flex-shrink: 1;
}

input,
select,
textarea {
    flex-grow: 1;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    outline: none;
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

button {
    grid-column: span 2;
    background-color: lightseagreen;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    flex-grow: 1;
}







input[type="checkbox"] {
    appearance: none;
    border: 1px solid #d9d9d9;
    outline: none;
    cursor: pointer;
    width: 1.75rem;
    height: 1.5rem;
    margin: auto 0;
    border-radius: 0.5rem;
    background-color: white;
    position: relative; 
}
input[type="checkbox"]::before {
    display: block;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1rem;
    height: 1rem;
    border: none;
    border-radius: 0.3125rem;
    background-color: white;
}
input[type="checkbox"]:checked::before {
    content: '✔';
    color: #999999;
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.5rem;
}






</style>