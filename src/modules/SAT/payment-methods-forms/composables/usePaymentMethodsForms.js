import { ref } from "vue";
import { paymentStore } from "@/store/payment/paymentStore";
const store = paymentStore();

const ListadoMetodosPago = ref([]);
const ListadoFormasPago = ref([]);

const cargarMetodosFormasPago = async () => {
  await store.cargarMetodosFormasPago();
  ListadoMetodosPago.value = store.getMetodosPago;
  ListadoFormasPago.value = store.getFormasPago;
};

export function usePaymentMethodsForms() {
  return {
    ListadoMetodosPago,
    ListadoFormasPago,
    cargarMetodosFormasPago,
  };
}
