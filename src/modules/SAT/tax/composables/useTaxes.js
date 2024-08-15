import { ref } from "vue";
import { taxStore } from "@/store/tax/taxStore";
const store = taxStore();

const taxesCollection = ref([]);
const showModal = ref(false);
const modoFormulario = ref(0);
const modalData = ref(null);
const bodyFrm = ref({ ClaveImpuesto: "", Nombre: "" });

const loadTaxes = async () => {
  await store.loadTaxes();
  taxesCollection.value = store.getTaxes;
};

const cargarDatos = async () => {
  await loadTaxes();
};

const esperarTabla = (data) => {
  const [impuesto, accion] = data;
  if (accion === 1) {
    subirDatos(impuesto);
  } else if (accion === 2) {
    modalData.value = impuesto.ClaveImpuesto;
  }
};

const subirDatos = (datos) => {
  bodyFrm.value = { ...datos };
  showModal.value = true;
  modoFormulario.value = 1;
};

const esperarModal = (datos) => {
  if (modoFormulario.value === 0) {
    store.createTaxes(bodyFrm.value).then(() => {
      cargarDatos();
      esperarCancelar();
    });
  } else if (modoFormulario.value === 1) {
    store.updateTax(datos).then(() => {
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
    ClaveImpuesto: "",
    Nombre: "",
  };
};

const borrarRegistro = () => {
  store.deleteTax(modalData.value).then(() => {
    cargarDatos();
    esperarCancelar();
  });
};

export function useTaxes() {
  return {
    taxesCollection,
    showModal,
    modoFormulario,
    modalData,
    bodyFrm,
    loadTaxes,
    cargarDatos,
    esperarTabla,
    subirDatos,
    esperarModal,
    esperarCancelar,
    borrarRegistro,
  };
}
