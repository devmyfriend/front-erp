<template>
  <div class="flex items-center h-inputHeight">
    <input
      class="text-primaryFontColor rounded-inputRadius border-inputBorder border-inputWidth p-paddingInput lg:w-96 md:w-60 sm:w-32 outline-none h-full text-base"
      type="text"
      v-model="txtBusqueda"
      @keyup.enter="buscar(txtBusqueda)"
      placeholder="Buscar régimen"
    />
    <img
      src="/svg/generalIcons/searchIco.svg"
      alt="Icono de buscador"
      class="cursor-pointer h-buscadorIconHeight ml-4"
      @click="buscar(txtBusqueda)"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";
import { useRegimen } from "@/store/regimenCfdiStore";

const emit = defineEmits(["eBusqueda"]);
const store = useRegimen();

const txtBusqueda = ref("");

function buscar(texto) {
  if (texto.length === 0) {
    Swal.fire({
      title: "Error",
      text: "Por favor ingrese una clave de régimen para buscar.",
      icon: "error",
    });
    emit("eBusqueda");
    return;
  }
  store.filterRegimen(texto);
  const filteredList = store.getRegimen;
  if (filteredList.length > 0) {
    emit("eBusqueda", texto);
  } else {
    Swal.fire({
      title: "No se encontraron resultados",
      icon: "info",
      confirmButtonText: "Aceptar",
    });
    emit("eBusqueda");
  }
}
</script>

<style scoped>
input::placeholder {
  color: theme("colors.disableBodyTable");
}
</style>
