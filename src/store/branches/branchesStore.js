import { defineStore } from "pinia";
import { findBranchesByBusinessEntityID } from "@/services/branches/branchesServices";
import { validateResponse } from "@/utils/validateResponse";

export const branchesStore = defineStore("branches", {
  state: () => ({
    branchesCollection: [],
  }),
  getters: {
    getBranches(state) {
      console.log('branchesCollection', JSON.stringify(this.branchesCollection));
      return state.branchesCollection;
    },
  },
  actions: {
    async findBranchesByBusinessEntityID(businessEntityID) {
      const response = await validateResponse(findBranchesByBusinessEntityID(businessEntityID));
      if (response.length === 0) {
        this.branchesCollection = [];
        return false;
      } else {
        this.branchesCollection = response;
        return true;
      }
    },
  },
});
