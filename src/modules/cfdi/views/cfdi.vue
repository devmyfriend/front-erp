<script setup>
import { onMounted } from "vue";
import { useCfdiList } from "@/modules/cfdi/composables/useCfdiList";
import tabla from "@/modules/cfdi/components/tableCfdi.vue";
import buscadorCfdi from "@/modules/cfdi/components/cfdiFinder.vue";
import paginator from "@/modules/cfdi/components/paginator.vue";

const { loadData, paginatedData, currentPage, totalPages, changePage } =
  useCfdiList();

onMounted(async () => {
  await loadData();
});
</script>

<template>
  <div class="w-full h-full max-h-full min-h-full p-4 bg-container">
    <h2 class="text-h2Size font-h2Weight text-primaryFontColor m-h2Margin">
      CFDi
    </h2>
    <main
      class="flex justify-between text-primaryFontColor items-start min-w-full max-w-full mb-2 xl:flex-nowrap flex-wrap"
    >
      <div class="overflow-x-auto relative w-full">
        <div class="frm flex justify-between mb-6">
          <buscadorCfdi />
        </div>
        <tabla :CfdiList="paginatedData" />
        <paginator
          :currentPage="currentPage"
          :totalPages="totalPages"
          @changePage="changePage"
        />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
