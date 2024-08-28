import { defineStore } from "pinia";
import * as paymentServices from "@/services/payment/paymentServices";
import { validateResponse } from "@/utils/validateResponse";

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
    async loadMethodsFormsPayments(){
      const response = await validateResponse(paymentServices.loadMethodsFormsPayments());
      if (response.length === 0) {
        this.paymentMethodsCollection = [];
        this.paymentFormsCollection = [];
        return false;
      } else {
        this.paymentMethodsCollection = response[0].metodos;
        this.paymentFormsCollection = response[0].formas;
        return true;
      }
    }
  },
});
