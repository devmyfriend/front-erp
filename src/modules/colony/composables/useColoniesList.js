import { ref } from "vue";
import { useColony } from "@/store/colonyStore";
import Swal from "sweetalert2";

const store = useColony();
const ColoniesList = ref([]);

const waitSearch = async (colonyName, postalCode) => {
  try {
    if (colonyName && postalCode) {
      const found = await store.searchColonies(colonyName, postalCode);
      if (!found) {
        Swal.fire({
          icon: "info",
          title: "No encontrado",
          text: "No hay colonias con ese nombre y código postal",
        });
      } else {
        ColoniesList.value = found;
      }
    } else {
      await loadData();
    }
  } catch (error) {
    console.error(error);
  }
};

const loadData = async () => {
  await store.loadColonies();
  if (store.getColonies.length === 0) {
    Swal.fire({
      icon: "info",
      title: "Sin registros",
      text: "No existen registros",
    });
  } else {
    ColoniesList.value = store.getColonies;
  }
};

export function useColoniesList() {
  return {
    waitSearch,
    loadData,
    ColoniesList,
  };
}
