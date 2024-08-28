import { ref } from "vue";
import { paymentStore } from "@/store/payment/paymentStore";
import Swal from "sweetalert2";
const store = paymentStore();

const paymentMethodsCollection = ref([]);
const paymentFormsCollection = ref([]);

const loadMethodsFormsPayments = async () => {
  const response = await store.loadMethodsFormsPayments();
  if (response) {
    paymentMethodsCollection.value = store.getPaymentMethods;
    paymentFormsCollection.value = store.getPaymentForms;
  } else {
    Swal.fire({
      title: "¡Error!",
      text: "No se encontraron registros",
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export function usePaymentMethodsForms() {
  return {
    paymentMethodsCollection,
    paymentFormsCollection,
    loadMethodsFormsPayments,
  };
}
