import { defineStore } from "pinia";
import * as paymentServices from "@/services/payment/paymentServices";

export const paymentStore = defineStore("Payment", {
  state: () => ({
    paymentMethodsCollection: [],
    paymentFormsCollection: [],
  }),
  getters: {
    getPaymentMethods(state) {
      return state.paymentMethodsCollection;
    },
    getPaymentForms(state) {
      return state.paymentFormsCollection;
    },
  },
  actions: {
    async loadMethodsFormsPayments() {
      const data = await paymentServices.loadMethodsFormsPayments();
      if (data) {
        const { metodos, formas } = data[0];
        this.paymentMethodsCollection = metodos;
        this.paymentFormsCollection = formas;
      }
    },
  },
});
