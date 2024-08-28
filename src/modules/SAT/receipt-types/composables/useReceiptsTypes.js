import { ref } from "vue";
import { receiptStore } from "@/store/receipt/receiptStore";
import Swal from "sweetalert2";
const store = receiptStore();

const receiptsCollection = ref([]);
const showModal = ref(false);
const modoFormulario = ref(0);
const modalData = ref(null);
const bodyFrm = ref({ ClaveTipoDeComprobante: "", Descripcion: "" });

const loadReceipts = async () => {
  const response = await store.loadReceipts();
  if (response){
    receiptsCollection.value = store.getReceipts;
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
    store.createReceipt(bodyFrm.value).then((res) => {
      cargarDatos();
      if (res) {
        Swal.fire({
          icon: "success",
          title: "¡Registro exitoso!",
          text: "El registro se ha guardado correctamente.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "¡Error!",
          text: "No se pudo guardar el registro.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      esperarCancelar();
    });
  } else if (modoFormulario.value === 1) {
    store.updateReceipt(datos).then((res) => {
      cargarDatos();
      if (res){
        Swal.fire({
          title: "¡Actualización exitosa!",
          text: "El registro se ha actualizado con éxito.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "¡Error!",
          text: "No se pudo actualizar el registro.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
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
  store.deleteReceipt(modalData.value).then((res) => {
    cargarDatos();
    if (res){
      Swal.fire({
        title: "¡Eliminación exitosa!",
        text: "El registro se ha eliminado con éxito.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "No se pudo eliminar el registro.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
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
