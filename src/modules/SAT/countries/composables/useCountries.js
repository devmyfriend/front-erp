import { ref } from "vue";
import { countryStore } from "@/store/country/countryStore";
const store = countryStore();

const ListadoPaises = ref([]);

const cargarPaises = async () => {
  await store.cargarPaises();
  ListadoPaises.value = store.getPaises;
};

export function useCountries() {
  return {
    ListadoPaises,
    cargarPaises,
  };
}
