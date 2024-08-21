import { defineStore } from "pinia";
import * as countryServices from "@/services/country/countryServices";
import { validateResponse } from "@/utils/validateResponse";

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
      const response = await validateResponse(countryServices.loadCountries());
      if (response.length === 0) {
        this.countriesCollection = [];
      } else {
        this.countriesCollection = response;
      }
    },
  },
});
