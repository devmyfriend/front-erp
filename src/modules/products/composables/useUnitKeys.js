import { ref } from "vue";
import { useProductos } from "@/store/product/productsStore";
const store = useProductos();

const unitKeysCollection = ref([]);
const unitKeysInfo = ref({});
const productsLineCollection = ref([]);

const loadUnitKeys = async (pagina) => {
  const response = await store.loadUnitKeys(pagina);
  if (response) {
    unitKeysCollection.value = store.getUnitKeys.items;
    unitKeysInfo.value = store.getUnitKeys.info;
    return true;
  } else {
    return false;
  }
}

export function useUnitKeys() {
  return {
    unitKeysCollection,
    unitKeysInfo,
    loadUnitKeys,
  }
}
