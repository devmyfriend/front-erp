<template>
  <div class="flex items-center h-inputHeight">
    <input
      class="text-primaryFontColor rounded-inputRadius border-inputBorder border-inputWidth p-paddingInput lg:w-96 md:w-60 sm:w-32 outline-none h-full text-base"
      type="text"
      v-model="txtBusqueda"
      @keyup.enter="searchZipCode"
      placeholder="Buscar código postal"
    />
    <searchIco class="cursor-pointer max-h-buscadorIconHeight ml-4" @click="searchZipCode" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useZipCode } from "@/store/zipCodeStore";
import Swal from "sweetalert2";
import searchIco from "@/commons/ui/icons/actionIcons/searchIco.vue";

const store = useZipCode();
const txtBusqueda = ref("");

const searchZipCode = async () => {
  const cp = txtBusqueda.value;
  if (cp) {
    const result = await store.searchZipCode(cp);
    if (result && result.length > 0) {
      const data = result[0];
      Swal.fire({
        title: "Código Postal Encontrado",
        html: `
            <div>
              <p><strong>País:</strong> ${data.pais}</p>
              <p><strong>Código Postal:</strong> ${data.codigo_postal}</p>
              <p><strong>Estado:</strong> ${data.estado}</p>
              <p><strong>Municipio:</strong> ${data.municipio}</p>
              <p><strong>Localidad:</strong> ${data.localidad}</p>
            </div>
          `,
        icon: "info",
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "No encontrado",
        text: "No hay códigos postales de esta zona",
      });
    }
  } else {
    await store.loadZipCode();
  }
};
</script>

<style scoped>
input::placeholder {
  color: theme("colors.disabled.DEFAULT");
}
</style>
