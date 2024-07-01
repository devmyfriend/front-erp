<script setup>
import { ref, onMounted } from "vue";
import { useRegimenList } from "@/modules/regimenCfdi/composables/useRegimenCfdiList";
import TableRegimen from "@/modules/regimenCfdi/components/tableRegimenCfdi.vue";
import SearchRegimen from "@/modules/regimenCfdi/components/regimenCfdiFinder.vue";
import CreateRegimen from "@/modules/regimenCfdi/components/createRegimenOption.vue";
import AddRegimen from "@/commons/ui/btn-agregar/btn-agregar.vue";
import Cancel from "@/commons/ui/btn-cancelar/btn-cancelar.vue";

const { loadData, waitSearch, RegimenList } = useRegimenList();
const showCreateRegimen = ref(false);

const toggleCreateRegimen = () => {
  showCreateRegimen.value = !showCreateRegimen.value;
};

const handleRegimenCreated = () => {
  loadData();
  showCreateRegimen.value = false;
};

const handleBusqueda = (texto) => {
  waitSearch(texto);
};

onMounted(async () => {
  await loadData();
});
</script>

<template>
  <div class="w-full h-full max-h-full min-h-full p-4 bg-container">
    <h2 class="text-h2Size font-h2Weight text-primaryFontColor m-h2Margin">
      Régimen Fiscal
    </h2>
    <main
      class="flex justify-between text-primaryFontColor items-start min-w-full max-w-full mb-2 xl:flex-nowrap flex-wrap"
    >
      <div class="overflow-x-auto relative w-full">
        <div class="frm flex justify-between mb-6">
          <SearchRegimen @eBusqueda="handleBusqueda" />
          <div>
            <AddRegimen v-if="!showCreateRegimen" @click="toggleCreateRegimen" />
            <Cancel v-else @cancelar="toggleCreateRegimen" />
          </div>
        </div>
        <div v-if="showCreateRegimen" class="create-regimen-container">
          <CreateRegimen @regimenCreated="handleRegimenCreated" @cancel="toggleCreateRegimen" />
        </div>
        <TableRegimen :regimenList="RegimenList" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.create-regimen-container {
  margin-top: 0;
}
</style>