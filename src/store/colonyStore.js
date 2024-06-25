import { defineStore } from "pinia";
import { loadColonies, searchColonies } from "@/services/colonyService";

export const useColony = defineStore("Colony", {
  state: () => ({
    ColoniesList: [],
    Colony: {},
  }),
  getters: {
    getColonies(state) {
      return state.ColoniesList;
    },
  },
  actions: {
    async loadColonies() {
      const data = await loadColonies();
      if (data) {
        this.ColoniesList = data;
      }
    },
    async searchColonies(colonyName, postalCode) {
      const data = await searchColonies(colonyName, postalCode);
      if (data) {
        return data;
      }
      return false;
    },
  },
});
