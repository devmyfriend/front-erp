<script setup>
import { ref } from "vue";
import { useColony } from "@/store/colonyStore";
import Swal from "sweetalert2";

const store = useColony();
const colonyName = ref("");
const postalCode = ref("");

const searchColonies = async () => {
  const name = colonyName.value;
  const code = postalCode.value ? postalCode.value : null;

  // validar que los campos estén completos
  if (!name || !code) {
    Swal.fire({
      icon: "error",
      title: "Campos incompletos",
      text: "Por favor, complete ambos campos para realizar la búsqueda.",
    });
    return;
  }

  const result = await store.searchColonies(name, code);
  if (result && result.length > 0) {
    const data = result[0];
    Swal.fire({
      title: "Colonia Encontrada",
      html: `
          <div>
            <p><strong>Clave de la colonia:</strong> ${data.ClaveColonia}</p>
            <p><strong>Nombre de la colonia:</strong> ${data.Nombre}</p>
            <p><strong>Código Postal:</strong> ${data.CodigoPostal}</p>
          </div>
        `,
      icon: "info",
    });
  } else {
    Swal.fire({
      icon: "info",
      title: "No encontrado",
      text: "No hay colonias con ese nombre y/o código postal",
    });
  }
};
</script>

<template>
  <div class="flex items-center h-inputHeight">
    <input
      class="text-primaryFontColor rounded-inputRadius border-inputBorder border-inputWidth p-paddingInput lg:w-48 md:w-36 sm:w-24 outline-none h-full text-base"
      type="text"
      v-model="colonyName"
      placeholder="Nombre de la colonia"
    />
    <input
      class="text-primaryFontColor rounded-inputRadius border-inputBorder border-inputWidth p-paddingInput lg:w-48 md:w-36 sm:w-24 outline-none h-full text-base ml-2"
      type="text"
      v-model="postalCode"
      placeholder="Código postal"
    />
    <img
      src="/svg/generalIcons/searchIco.svg"
      alt="Icono de buscador de colonias"
      class="cursor-pointer h-buscadorIconHeight ml-4"
      @click="searchColonies"
    />
  </div>
</template>

<style scoped>
input::placeholder {
  color: theme("colors.disableBodyTable");
}
</style>
