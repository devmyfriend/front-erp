import { ref } from "vue";
import { coinsStore } from "@/store/coinsStore";
const store = coinsStore();

const ListadoMonedas = ref([]);
const modalData = ref(null);
const showModal = ref(false);
const modoFormulario = ref(0);
const bodyFrm = ref({
  ClaveMoneda: null,
  Descripcion: null,
});

const cargarMonedas = async () => {
  await store.cargarMonedas();
  ListadoMonedas.value = store.getMonedas;
};

const buscarMonedas = async (texto) => {
  await store.buscarMonedas(texto);
  ListadoMonedas.value = store.getMonedas;
};

const cargarDatos = async () => {
  await cargarMonedas();
  modoFormulario.value = 0;
  showModal.value = false;
  bodyFrm.value = {
    ClaveMoneda: null,
    Descripcion: null,
  };
};

const esperarTabla = (data) => {
  const [moneda, accion] = data;
  if (accion === 1) {
    subirDatos(moneda);
  } else if (accion === 2) {
    modalData.value = moneda.ClaveMoneda;
  }
};

const esperarBusqueda = async (texto) => {
  if (texto) {
    await buscarMonedas(texto);
  } else {
    await cargarDatos();
  }
};

const subirDatos = (datos) => {
  bodyFrm.value = { ...datos };
  showModal.value = true;
  modoFormulario.value = 1;
};

const esperarModal = (datos) => {
  if (modoFormulario.value === 0) {
    store.crearMoneda(bodyFrm.value).then(() => {
      cargarDatos();
    });
  } else if (modoFormulario.value === 1) {
    store.actualizarMoneda(datos).then(() => {
      cargarDatos();
    });
  }
};

const borrarRegistro = () => {
  store.eliminarMoneda(modalData.value).then(() => {
    cargarDatos();
    modalData.value = null;
  });
};

const esperarCancelar = () => {
  modalData.value = null;
  showModal.value = false;
  modoFormulario.value = 0;
  bodyFrm.value = {
    ClaveMoneda: null,
    Descripcion: null,
  };
};

export function useCoins() {
  return {
    ListadoMonedas,
    modalData,
    showModal,
    modoFormulario,
    bodyFrm,
    cargarMonedas,
    buscarMonedas,
    cargarDatos,
    esperarTabla,
    esperarBusqueda,
    subirDatos,
    esperarModal,
    borrarRegistro,
    esperarCancelar,
  };
}
