import { ref } from "vue";
import { useProductos } from "@/store/product/productsStore";
const store = useProductos();

const unitKeysCollection = ref([]);
const unitKeysInfo = ref({});
const productsLineCollection = ref([]);

const loadUnitKeys = async (pagina) => {
  await store.loadUnitKeys(pagina);
  unitKeysCollection.value = store.getUnitKeys.items;
  unitKeysInfo.value = store.getUnitKeys.info; 
}

export function useUnitKeys() {
  return {
    unitKeysCollection,
    unitKeysInfo,
    loadUnitKeys,
  }
}
