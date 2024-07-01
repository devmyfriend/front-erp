import { ref } from "vue";
import { useRegimen } from "@/store/regimenCfdiStore";
import Swal from "sweetalert2";

const store = useRegimen();
const RegimenList = ref([]);

const loadData = async () => {
  try {
    await store.loadRegimen();
    RegimenList.value = store.getRegimen;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No se pudieron cargar los datos.",
    });
  }
};

const waitSearch = async (regimenClave) => {
  try {
    if (regimenClave) {
      store.filterRegimen(regimenClave);
      RegimenList.value = store.getRegimen;
    } else {
      await loadData();
    }
  } catch (error) {
    console.error(error);
  }
};

export function useRegimenList() {
  return {
    loadData,
    waitSearch,
    RegimenList,
  };
}
