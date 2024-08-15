import { ref } from "vue";
import { countryStore } from "@/store/country/countryStore";
const store = countryStore();

const countriesCollection = ref([]);

const loadCountries = async () => {
  await store.loadCountries();
  countriesCollection.value = store.getCountries;
};

export function useCountries() {
  return {
    countriesCollection,
    loadCountries,
  };
}
