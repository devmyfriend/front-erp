import { ref } from "vue";
import { countryStore } from "@/store/country/countryStore";
import Swal from "sweetalert2";
const store = countryStore();

const countriesCollection = ref([]);

const loadCountries = async () => {
  const response = await store.loadCountries();
  if (response) {
    countriesCollection.value = store.getCountries;
  } else {
    Swal.fire({
      title: "Error al cargar los países",
      text: "No se encontraron países registrados",
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export function useCountries() {
  return {
    countriesCollection,
    loadCountries,
  };
}
