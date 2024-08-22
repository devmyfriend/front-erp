import { ref } from "vue";
import { useBusinessEntity as businessEntityStore } from "@/store/businessEntity/businessentity";
const store = businessEntityStore();

const businessEntityCollection = ref([]);

const loadBusinessEntity = async () => {
  await store.loadListaEmpresas();
  businessEntityCollection.value = store.getListaEmpresa;
};

export function useBusinessEntity() {
  return {
    businessEntityCollection,
    loadBusinessEntity,
  };
}
