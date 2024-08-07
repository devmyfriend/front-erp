import { defineStore } from "pinia";
import * as paymentServices from "@/services/paymentServices";

export const paymentStore = defineStore("Payment", {
  state: () => ({
    ListadoMetodosPago: [],
    ListadoFormasPago: [],
  }),
  getters: {
    getMetodosPago(state) {
      return state.ListadoMetodosPago;
    },
    getFormasPago(state) {
      return state.ListadoFormasPago;
    },
  },
  actions: {
    async cargarMetodosFormasPago() {
      const data = await paymentServices.cargarMetodosFormasPago();
      if (data) {
        const { metodos, formas } = data[0];
        this.ListadoMetodosPago = metodos;
        this.ListadoFormasPago = formas;
      }
    },
  },
});
