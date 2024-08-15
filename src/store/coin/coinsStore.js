import { defineStore } from "pinia";
import * as coinsServices from "@/services/coins/coinsServices";

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
      const data = await coinsServices.loadCoins();
      if (data) {
        this.coinsCollection = data;
      }
    },
    async findCoins(moneda) {
      const data = await coinsServices.findCoins(moneda);
      if (data) {
        if (data.length > 0) {
          this.coinsCollection = data;
          return true;
        } else {
          return false;
        }
      }
    },

    async createCoin(moneda) {
      const data = await coinsServices.createCoin(moneda);
      if (data) {
        this.loadCoins();
        return true;
      } else {
        return false;
      }
    },
    async updateCoin(moneda) {
      const data = await coinsServices.updateCoin(moneda);
      if (data) {
        this.loadCoins();
        return true;
      } else {
        return false;
      }
    },
    async deleteCoin(moneda) {
      const data = await coinsServices.deleteCoin(moneda);
      if (data) {
        this.loadCoins();
        return true;
      } else {
        return false;
      }
    },
  },
});
