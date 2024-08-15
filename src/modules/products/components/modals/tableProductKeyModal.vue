<template>
  <table class="w-full border-inputWidth">
    <thead>
      <tr class="bg-primaryHeaderTable text-white">
        <th class="h-11 max-h-11 uppercase text-base"> Clave </th>
        <th class="h-11 max-h-11 uppercase text-base text-start"> Descripción </th>
        <th class="h-11 max-h-11 uppercase text-base"> Estado </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(cProducto) in listado" :key="cProducto.ClaveProductoServicio" @click="bajarProducto(cProducto)"
        class="bg-primaryBodyTable hover:bg-secondaryBodyTable hover:cursor-pointer text-black">
        <td class="h-11 max-h-11 text-base">{{ cProducto.ClaveProductoServicio }}</td>
        <td class="h-11 max-h-11 text-base text-start">{{ cProducto.Descripcion }}</td>
        <td class="h-11 max-h-11 text-base">{{ cProducto.Activo ? 'Activo' : 'Inactivo' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { cProductsStore } from '@/store/product/cProductsStore';
const store = cProductsStore();

const listado = ref([]);
const emit = defineEmits(['eBajarProducto']);
const props = defineProps({
  registro: {
    type: Object,
    required: false,
    default: () => ({})
  },
});

onMounted(() => {
  store.loadProductsKeys().then(() => {
    listado.value = store.getProductsKeys;
  });
});

const bajarProducto = (producto) => {
  console.log('Bajando productos: ' + JSON.stringify(producto));
  emit('eBajarProducto', producto)
};
</script>

<style scoped></style>