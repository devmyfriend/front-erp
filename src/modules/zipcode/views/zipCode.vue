<script setup>
import { onMounted } from "vue";
import { useZipCodeList } from "@/modules/zipcode/composables/useListZipCode";
import tabla from "@/modules/zipcode/components/tableZipCode.vue";
import buscadorZipCode from "@/modules/zipcode/components/zipCodeFinder.vue";

const { loadData, ZipCodeList } = useZipCodeList();

onMounted(async () => {
  await loadData();
});
</script>

<template>
  <div class="w-full h-full max-h-full min-h-full p-4 bg-container">
    <h2 class="text-h2Size font-h2Weight text-primaryFontColor m-h2Margin">
      Códigos postales
    </h2>
    <main
      class="flex justify-between text-primaryFontColor items-start min-w-full max-w-full mb-2 xl:flex-nowrap flex-wrap"
    >
      <div class="overflow-x-auto relative w-full">
        <div class="frm flex justify-between mb-6">
          <buscadorZipCode />
        </div>
        <tabla :ZipCodeList="ZipCodeList" />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
