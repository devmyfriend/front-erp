import { ref } from "vue";
import { cProductsStore } from "@/store/product/cProductsStore";
const store = cProductsStore();

const productsKeysCollection = ref([]);

const loadProductsKeys = async () => {
  await store.loadProductsKeys();
  productsKeysCollection.value = store.getProductsKeys;
}

export function useProductsKeys() {
  return {
    productsKeysCollection,
    loadProductsKeys,
  }
}
