import { ref } from "vue";
import { taxStore } from "@/store/tax/taxStore";
import Swal from "sweetalert2";
const store = taxStore();

const taxesCollection = ref([]);
const showModal = ref(false);
const modoFormulario = ref(0);
const modalData = ref(null);
const bodyFrm = ref({ ClaveImpuesto: "", Nombre: "" });

const loadTaxes = async () => {
  const response = await store.loadTaxes();
  if (response) {
    taxesCollection.value = store.getTaxes;
  } else {
    Swal.fire({
      title: "Error al cargar los impuestos",
      text: "No se encontraron impuestos registrados",
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
    });
  }
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
    store.createTaxes(bodyFrm.value).then((res) => {
      cargarDatos();
      if(res) {
        Swal.fire({
          title: "¡Registro exitoso!",
          text: "El impuesto se ha guardado correctamente",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: "Error al crear",
          text: "No se pudo guardar el impuesto",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      esperarCancelar();
    });
  } else if (modoFormulario.value === 1) {
    store.updateTax(datos).then((res) => {
      cargarDatos();
      if (res) {
        Swal.fire({
          title: "¡Actualización exitosa!",
          text: "El impuesto se ha actualizado correctamente",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: "Error al actualizar",
          text: "No se pudo actualizar el impuesto",
          icon: "error",
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
    ClaveImpuesto: "",
    Nombre: "",
  };
};

const borrarRegistro = () => {
  store.deleteTax(modalData.value).then((res) => {
    cargarDatos();
    if(res) {
      Swal.fire({
        title: "¡Eliminación exitosa!",
        text: "El impuesto se ha eliminado con éxito",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        title: "Error al eliminar",
        text: "No se pudo eliminar el impuesto",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
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
