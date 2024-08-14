import { ref } from "vue";
import { useZipCode } from "@/store/zipCode/zipCodeStore";
import Swal from "sweetalert2";

const store = useZipCode();
const ZipCodeList = ref([]);

const waitSearch = async (cp) => {
  try {
    if (cp) {
      const found = await store.searchZipCode(cp);
      if (!found) {
        Swal.fire({
          icon: "info",
          title: "No encontrado",
          text: "No hay códigos postales de esta zona",
        });
      }
    } else {
      await loadData();
    }
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
    ZipCodeList.value = store.getZipCodes;
  }
};

export function useZipCodeList() {
  return {
    waitSearch,
    loadData,
    ZipCodeList,
  };
}
