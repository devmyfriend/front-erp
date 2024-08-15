import { ref } from "vue";
import { paymentStore } from "@/store/payment/paymentStore";
const store = paymentStore();

const paymentMethodsCollection = ref([]);
const paymentFormsCollection = ref([]);

const loadMethodsFormsPayments = async () => {
  await store.loadMethodsFormsPayments();
  paymentMethodsCollection.value = store.getPaymentMethods;
  paymentFormsCollection.value = store.getPaymentForms;
};

export function usePaymentMethodsForms() {
  return {
    paymentMethodsCollection,
    paymentFormsCollection,
    loadMethodsFormsPayments,
  };
}
