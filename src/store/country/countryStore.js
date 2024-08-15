import { defineStore } from "pinia";
import * as countryServices from "@/services/country/countryServices";

export const countryStore = defineStore("country", {
  state: () => ({
    countriesCollection: [],
  }),
  getters: {
    getCountries(state) {
      return state.countriesCollection;
    },
  },
  actions: {
    async loadCountries() {
      const data = await countryServices.loadCountries();
      if (data) {
        this.countriesCollection = data;
      }
    },
  },
});
