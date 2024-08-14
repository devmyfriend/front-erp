import { defineStore } from "pinia";
import * as coinsServices from "@/services/coins/coinsServices";

export const coinsStore = defineStore("Coins", {
  state: () => ({
    ListadoMonedas: [],
  }),
  getters: {
    getMonedas(state) {
      return state.ListadoMonedas;
    },
  },
  actions: {
    async loadCoins() {
      const data = await coinsServices.loadCoins();
      if (data) {
        this.ListadoMonedas = data;
      }
    },
    async findCoins(moneda) {
      const data = await coinsServices.findCoins(moneda);
      if (data) {
        if (data.length > 0) {
          this.ListadoMonedas = data;
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
    async updateCoins(moneda) {
      const data = await coinsServices.updateCoins(moneda);
      if (data) {
        this.loadCoins();
        return true;
      } else {
        return false;
      }
    },
    async deleteCoins(moneda) {
      const data = await coinsServices.deleteCoins(moneda);
      if (data) {
        this.loadCoins();
        return true;
      } else {
        return false;
      }
    },
  },
});
