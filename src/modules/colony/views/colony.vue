<script setup>
import { onMounted } from "vue";
import tabla from "@/modules/colony/components/tableColonies.vue";
import buscadorColonies from "@/modules/colony/components/coloniesFinder.vue";
import { useColoniesList } from "@/modules/colony/composables/useColoniesList";

const { loadData, ColoniesList } = useColoniesList();

onMounted(async () => {
  await loadData();
});
</script>

<template>
  <div class="w-full h-full max-h-full min-h-full p-4 bg-container">
    <h2 class="text-h2Size font-h2Weight text-primaryFontColor m-h2Margin">
      Colonias
    </h2>
    <main
      class="flex justify-between text-primaryFontColor items-start min-w-full max-w-full mb-2 xl:flex-nowrap flex-wrap"
    >
      <div class="overflow-x-auto relative w-full">
        <div class="frm flex justify-between mb-6">
          <buscadorColonies />
        </div>
        <tabla :ColoniesList="ColoniesList" />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
