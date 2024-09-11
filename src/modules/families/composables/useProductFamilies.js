import { ref, watch } from "vue";
import { useProductos } from "@/store/product/productsStore";
import Swal from "sweetalert2";
const store = useProductos();

const productFamiliesCollection = ref([]);
const showModal = ref(false);
const modoFormulario = ref(0); // 0 = Nuevo, 1 = Editar
const registroModal = ref({}); // Registro del modal general para nuevo y editar
const registroBorrar = ref(null); // Registro del modal para borrar

watch(showModal, () => {
  if (!showModal.value) {
    modoFormulario.value = 0;
    registroModal.value = {};
  }
});

const loadProductFamilies = async () => {
  const response = await store.loadProductFamilies();
  if (response) {
    productFamiliesCollection.value = store.getProductFamilies;
  } else {
    Swal.fire({
      title: "Error al cargar las familias de productos",
      text: "No hay familias de productos registradas",
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

const findProductFamiliesByName = async (name) => {
  const response = await store.findProductFamiliesByName(name);
  if (response) {
    productFamiliesCollection.value = store.getProductFamilies;
    return true;
  } else {
    Swal.fire({
      title: "No hay familias de productos",
      text: "No se encontraron familias de productos con ese nombre",
      icon: "info",
      showConfirmButton: false,
      timer: 1500,
    });
    loadProductFamilies();
    return false;
  }
};

const esperarModal = async () => {
  showModal.value = false;
  if (modoFormulario.value === 0) {
    registroModal.value.CreadoPor = "2";

    const res = await store.createProductFamily(registroModal.value);

    if (res) {
      Swal.fire({
        title: "¡Registro exitoso!",
        text: "La familia de productos se ha guardado correctamente",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      loadProductFamilies();
      return res.FamiliaId;
    } else {
      Swal.fire({
        title: "Error al crear",
        text: "No se pudo registrar la familia de productos",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
      loadProductFamilies();
      return false;
    }
  } else {
    registroModal.value.ActualizadoPor = "2";

    const res = await store.updateProductFamily(registroModal.value);

    if (res) {
      Swal.fire({
        title: "¡Actualización exitosa!",
        text: "La familia de productos se ha actualizado con éxito",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      loadProductFamilies();
      return res;
    } else {
      Swal.fire({
        title: "Error al actualizar",
        text: "No se pudo actualizar la familia de productos",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
      loadProductFamilies();
      return false;
    }
  }
};

const esperarTabla = (data) => {
  const [familia, accion] = data;
  if (accion === 1) {
    registroModal.value = { ...familia };
    showModal.value = true;
    modoFormulario.value = 1;
  } else if (accion === 2) {
    registroBorrar.value = {
      FamiliaId: familia.FamiliaId,
      BorradoPor: "2",
    };
  }
};

const borrarRegistro = () => {
  store.deleteProductFamily(registroBorrar.value).then((res) => {
    loadProductFamilies();
    if (res) {
      Swal.fire({
        title: "¡Eliminación exitosa!",
        text: "La familia de productos se ha eliminado con éxito",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        title: "Error al eliminar",
        text: "No se pudo eliminar la familia de productos",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    registroBorrar.value = null;
  });
};

export function useProductFamilies() {
  return {
    productFamiliesCollection,
    showModal,
    modoFormulario,
    registroModal,
    registroBorrar,
    loadProductFamilies,
    findProductFamiliesByName,
    esperarModal,
    esperarTabla,
    borrarRegistro,
  };
}
