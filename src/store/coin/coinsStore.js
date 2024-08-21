import { defineStore } from "pinia";
import * as coinsServices from "@/services/coins/coinsServices";
import { validateResponse } from "@/utils/validateResponse";
import Swal from "sweetalert2";

export const coinsStore = defineStore("Coins", {
  state: () => ({
    coinsCollection: [],
  }),
  getters: {
    getCoins(state) {
      return state.coinsCollection;
    },
  },
  actions: {
    async loadCoins() {
      const response = await validateResponse(coinsServices.loadCoins());
      if (response.length === 0) {
        this.coinsCollection = [];
      } else {
        this.coinsCollection = response;
      }
    },
    async findCoins(moneda) {
      const response = await validateResponse(coinsServices.findCoins(moneda));
      if (response.length === 0) {
        this.coinsCollection = [];
        return false;
      } else {
        this.coinsCollection = response;
        return true;
      }
    },
    async createCoin(moneda) {
      const response = await validateResponse(coinsServices.createCoin(moneda));
      if (response.success) {
        this.loadCoins();
        return true;
      } else {
        return false;
      }
    },
    async updateCoin(moneda) {
      const response = await validateResponse(coinsServices.updateCoin(moneda));
      if (response.success) {
        this.loadCoins();
        return true;
      } else {
        return false;
      }
    },
    async deleteCoin(moneda) {
      const response = await validateResponse(coinsServices.deleteCoin(moneda));
      if (response.success) {
        this.loadCoins();
        return true;
      } else {
        return false;
      }
    },
  },
});
