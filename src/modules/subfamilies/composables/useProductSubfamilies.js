import { ref, watch } from "vue";
import { useProductos } from "@/store/product/productsStore";
import Swal from "sweetalert2";
const store = useProductos();

const productSubfamiliesCollection = ref([]);
const productFamily = ref(0);

const showModal = ref(false);
const modoFormulario = ref(0); // 0 = Nuevo, 1 = Editar
const registroModal = ref({}); // Registro del modal general para nuevo y editar
const registroBorrar = ref(null); // Registro del modal para borrar

watch(showModal, () => {
  if (!showModal.value){
    modoFormulario.value = 0;
    registroModal.value = {};
  }
});

const loadProductSubfamilies = async () => {
  const response = await store.loadProductSubfamilies();
  if (response) {
    productSubfamiliesCollection.value = store.getProductSubfamilies;
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

const findProductSubfamiliesByName = async (name) => {
  const response = await store.findProductSubfamiliesByName(name, productFamily.value);
  if (response) {
    productSubfamiliesCollection.value = store.getProductSubfamilies;
    return true;
  } else {
    Swal.fire({
      title: "No hay familias de productos",
      text: "No se encontraron familias de productos con ese nombre",
      icon: "info",
      showConfirmButton: false,
      timer: 1500,
    });
    if (productFamily.value === 0) {
      loadProductSubfamilies();
    } else{
      findProductSubfamiliesByFamilyId(productFamily.value);
    }
    return false;
  }
};

const findProductSubfamiliesByFamilyId = async (id) => {
  if(id === 0){
    await loadProductSubfamilies();
    return true;
  } else{
    const response = await store.findProductSubfamiliesByFamilyId(id);
    if (response) {
      productSubfamiliesCollection.value = store.getProductSubfamilies;
      return true;
    } else {
      Swal.fire({
        title: "No hay subfamilias de productos",
        text: "No hay subfamilias de productos registradas en esta familia",
        icon: "info",
        showConfirmButton: false,
        timer: 1500,
      });
      productFamily.value = 0;
      loadProductSubfamilies();
      return false;
  }
  }
};

const esperarModal = () => {
  if (modoFormulario.value === 0) {
    registroModal.value.CreadoPor = "2";
    store.createProductSubfamily(registroModal.value).then((res) => {
      if (res) {
        Swal.fire({
          title: "¡Registro exitoso!",
          text: "La subfamilia de productos se ha guardado correctamente",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      } else{
        Swal.fire({
          title: "Error al crear",
          text: "No se pudo registrar la subfamilia de productos",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (productFamily.value === 0) {
        loadProductSubfamilies();
      } else{
        findProductSubfamiliesByFamilyId(productFamily.value);
      }
    });
  } else {
    registroModal.value.ActualizadoPor = "2";
    store.updateProductSubfamily(registroModal.value).then((res) => {
      if (res) {
        Swal.fire({
          title: "¡Actualización exitosa!",
          text: "La subfamilia de productos se ha actualizado correctamente",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: "Error al actualizar",
          text: "No se pudo actualizar la subfamilia de productos",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (productFamily.value === 0) {
        loadProductSubfamilies();
      } else{
        findProductSubfamiliesByFamilyId(productFamily.value);
      }
    });
  }
  showModal.value = false;
};

const esperarTabla = (data) => {
  const [subfamilia, accion] = data;
  if (accion ===  1) {
    registroModal.value = { ...subfamilia };
    modoFormulario.value = 1;
    showModal.value = true;
  } else if (accion === 2) {
    registroBorrar.value = {
      SubFamiliaId: subfamilia.SubFamiliaId,
      BorradoPor: "2",
    };
  }
};

const borrarRegistro = () => {
  store.deleteProductSubfamily(registroBorrar.value).then((res) => {
    loadProductSubfamilies();
    if (res) {
      Swal.fire({
        title: "¡Eliminación exitosa!",
        text: "La subfamilia de productos se ha eliminado correctamente",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        title: "Error al eliminar",
        text: "No se pudo eliminar la subfamilia de productos",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    registroBorrar.value = null;
  });
};

const setProductFamily = async (id) => {
  productFamily.value = id;
};

export function useProductSubfamilies() {
  return {
    productSubfamiliesCollection,
    productFamily,
    showModal,
    modoFormulario,
    registroModal,
    registroBorrar,
    loadProductSubfamilies,
    findProductSubfamiliesByName,
    findProductSubfamiliesByFamilyId,
    esperarModal,
    esperarTabla,
    borrarRegistro,
    setProductFamily
  };
}
