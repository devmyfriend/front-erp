<script setup>
import LayoutGeneral from '@/commons/layout/LayoutGeneral.vue';
</script>

<template>
    <LayoutGeneral>
      <template v-slot:Titulo>
        Productos
      </template>
      <template v-slot:Contenido>
        <h2> Listado de Productos </h2>
        <div class="frm">
            <div>
                <buscadorProductos @eBusqueda="esperarBusqueda" :tipoProducto="tipoProducto"/>
            </div>
            <div class="formulario">
                <label for="tipoProducto" class="labelTipo"> Tipo: </label>
                <select name="tipoProducto" id="tipoProducto" v-model="tipoProducto">
                    <option value="Todos">Todos</option>
                    <option v-for="Tipo in ListadoTiposProducto" :value="Tipo.NombreTipoProducto"> {{ Tipo.NombreTipoProducto }}</option>
                </select>
                <btNuevoProducto :tipoProducto="tipoProducto"/>
            </div>
        </div>
        
        <div class="tablaContainer animate__animated animate__fadeIn animate__fast" >
            <table>
                <thead>
                    <tr class="rounded-full">
                        <th class="rounded-full">Producto Id</th>
                        <th class="rounded-full col-start">Código de Producto</th>
                        <th class="rounded-full col-start">Nombre</th>
                        <th class="rounded-full">Tipo Producto</th>
                        <th class="rounded-full">Línea</th>
                        <th class="rounded-full">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(producto, index) in ListadoProductos" :key="index" :class="{td1: index % 2 == 0, td2: index % 2 != 0}">
                        <td :class="{ productoDeshabilitado: (producto.Borrado == 1) }" class="col-xs">
                            {{ producto.ProductoId }}
                        </td>
                        <td :class="{ productoDeshabilitado: (producto.Borrado == 1) }" class="col-s col-start">
                            {{ producto.CodigoProducto }}
                        </td>
                        <td :class="{ productoDeshabilitado: (producto.Borrado == 1) }" class="col-auto col-start">
                            {{ producto.NombreProducto }}
                        </td>
                        <td :class="{ productoDeshabilitado: (producto.Borrado == 1) }" class="col-xxs">
                            {{ producto.NombreTipoProducto }}
                        </td>
                        <td :class="{ productoDeshabilitado: (producto.Borrado == 1) }" class="col-s">
                            {{ producto.NombreLinea }}
                        </td>
                        <td class="col-xs" :class="{ productoDeshabilitado: (producto.Borrado == 1) }">
                            <img src="./svg/tableIcons/edit.svg" alt="Editar" class="btTabla" @click="editarProducto(producto)"> 
                            <img src="./svg/tableIcons/trash.svg" alt="Borrar" class="btTabla" @click="borrarProducto(tipoProducto, producto.ClaveProducto)" v-if="producto.Borrado == 0">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </template>
    </LayoutGeneral>
</template>

<style scoped>
</style>