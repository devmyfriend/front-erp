import { ref } from "vue";
import { zipCodeStore } from "@/store/zipCode/zipCodeStore";
import Swal from "sweetalert2";

const store = zipCodeStore();
const zipCodesCollection = ref([]);

const waitSearch = async (cp) => {
  try {
      await loadData();
  } catch (error) {
    console.error(error);
  }
};

const loadData = async () => {
  await store.loadZipCode();
  if (store.getZipCodes.length === 0) {
    Swal.fire({
      icon: "info",
      title: "Sin registros",
      text: "No existen registros",
    });
  } else {
    zipCodesCollection.value = store.getZipCodes;
  }
};

export function usezipCodesCollection() {
  return {
    waitSearch,
    loadData,
    zipCodesCollection,
  };
}
