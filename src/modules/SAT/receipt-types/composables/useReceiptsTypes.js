import { ref } from "vue";
import { receiptStore } from "@/store/receipt/receiptStore";
const store = receiptStore();

const receiptsCollection = ref([]);
const showModal = ref(false);
const modoFormulario = ref(0);
const modalData = ref(null);
const bodyFrm = ref({ ClaveTipoDeComprobante: "", Descripcion: "" });

const loadReceipts = async () => {
  await store.loadReceipts();
  receiptsCollection.value = store.getReceipts;
};

const cargarDatos = async () => {
  await loadReceipts();
};

const esperarTabla = (data) => {
  const [comprobante, accion] = data;
  if (accion === 1) {
    subirDatos(comprobante);
  } else if (accion === 2) {
    modalData.value = comprobante.ClaveTipoDeComprobante;
  }
};

const subirDatos = (datos) => {
  bodyFrm.value = { ...datos };
  showModal.value = true;
  modoFormulario.value = 1;
};

const esperarModal = (datos) => {
  if (modoFormulario.value === 0) {
    store.createReceipt(bodyFrm.value).then(() => {
      cargarDatos();
      esperarCancelar();
    });
  } else if (modoFormulario.value === 1) {
    store.updateReceipt(datos).then(() => {
      cargarDatos();
      esperarCancelar();
    });
  }
};

const esperarCancelar = () => {
  modalData.value = null;
  showModal.value = false;
  modoFormulario.value = 0;
  bodyFrm.value = {
    ClaveTipoDeComprobante: "",
    Descripcion: "",
  };
};

const borrarRegistro = () => {
  store.deleteReceipt(modalData.value).then(() => {
    cargarDatos();
    esperarCancelar();
  });
};

export function useReceiptsTypes() {
  return {
    receiptsCollection,
    loadReceipts,
    showModal,
    modoFormulario,
    modalData,
    bodyFrm,
    cargarDatos,
    esperarTabla,
    subirDatos,
    esperarModal,
    esperarCancelar,
    borrarRegistro,
  };
}
