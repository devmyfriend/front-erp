import { ref } from "vue";
import { coinsStore } from "@/store/coin/coinsStore";
import Swal from "sweetalert2";
const store = coinsStore();

const coinsCollection = ref([]);
const modalData = ref(null);
const showModal = ref(false);
const modoFormulario = ref(0);
const bodyFrm = ref({
  ClaveMoneda: null,
  Descripcion: null,
});

const findCoins = async (texto) => {
  const response = await store.findCoins(texto);
  if (response) {
    coinsCollection.value = store.getCoins;
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

const cargarDatos = async () => {
  const response = await store.loadCoins();
  if (response) {
    coinsCollection.value = store.getCoins;
  } else {
    Swal.fire({
      title: "¡Error!",
      text: "No se encontraron registros",
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
    });
  }

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
    await findCoins(texto);
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
    store.createCoin(bodyFrm.value).then((res) => {
      cargarDatos();
      if (res) {
        Swal.fire({
          title: "¡Registro exitoso!",
          text: "El registro se ha guardado correctamente",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: "¡Error!",
          text: "No se pudo guardar el registro",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  } else if (modoFormulario.value === 1) {
    store.updateCoin(datos).then((res) => {
      cargarDatos();
      if (res) {
        Swal.fire({
          title: "¡Actualización exitosa!",
          text: "El registro se ha actualizado con éxito",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: "¡Error!",
          text: "No se pudo actualizar el registro",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
};

const borrarRegistro = () => {
  store.deleteCoin(modalData.value).then((res) => {
    cargarDatos();
    if (res) {
      Swal.fire({
        title: "¡Eliminación exitosa!",
        text: "El registro se ha eliminado con éxito",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        title: "¡Error!",
        text: "No se pudo eliminar el registro",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
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
    coinsCollection,
    modalData,
    showModal,
    modoFormulario,
    bodyFrm,
    findCoins,
    cargarDatos,
    esperarTabla,
    esperarBusqueda,
    subirDatos,
    esperarModal,
    borrarRegistro,
    esperarCancelar,
  };
}
