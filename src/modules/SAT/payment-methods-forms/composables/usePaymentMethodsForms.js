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
    return true;
  } else {
    Swal.fire({
      title: "Error al cargar los métodos de pago",
      text: "No se encontraron métodos de pago registrados",
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
    });
    return false;
  }
};

export function usePaymentMethodsForms() {
  return {
    paymentMethodsCollection,
    paymentFormsCollection,
    loadMethodsFormsPayments,
  };
}
