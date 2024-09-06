import { ref, watch } from "vue";
import { useProductos } from "@/store/product/productsStore";
import Swal from "sweetalert2";
const store = useProductos();

const productLinesCollection = ref([]);
const productSubfamily = ref(0);

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

const loadProductLines = async () => {
  const response = await store.loadProductLines();
  if (response) {
    productLinesCollection.value = store.getProductLines;
  } else {
    Swal.fire({
      title: "Error al cargar las líneas de productos",
      text: "No hay líneas de productos registradas",
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

const findProductLinesByName = async (name) => {
  const response = await store.findProductLinesByName(name, productSubfamily.value);
  if (response) {
    productLinesCollection.value = store.getProductLines;
    return true;
  } else {
    Swal.fire({
      title: "No hay líneas de productos",
      text: "No se encontraron líneas de productos con ese nombre",
      icon: "info",
      showConfirmButton: false,
      timer: 1500,
    });
    if (productSubfamily.value === 0) {
      loadProductLines();
    } else{
      findProductLinesBySubfamilyId(productSubfamily.value);
    }
    return false;
  }
};

const findProductLinesBySubfamilyId = async (id) => {
  if(id === 0){
    await loadProductLines();
    return true;
  } else{
    const response = await store.findProductLinesBySubfamilyId(id);
    if (response) {
      productLinesCollection.value = store.getProductLines;
      return true;
    } else {
      Swal.fire({
        title: "No hay líneas de productos",
        text: "No hay líneas de productos registradas en esta subfamilia",
        icon: "info",
        showConfirmButton: false,
        timer: 1500,
      });
      productSubfamily.value = 0;
      loadProductLines();
      return false;
  }
  }
};

const esperarModal = () => {
  if (modoFormulario.value === 0) {
    registroModal.value.CreadoPor = "2";
    store.createProductLine(registroModal.value).then((res) => {
      if (res) {
        Swal.fire({
          title: "Línea de productos creada",
          text: "La línea de productos se ha creado correctamente",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      } else{
        Swal.fire({
          title: "Error al crear la línea de productos",
          text: "La línea de productos no se ha podido crear",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if(productSubfamily.value === 0){
        loadProductLines();
      } else {
        findProductLinesBySubfamilyId(productSubfamily.value);
      }
    });
  } else {
    registroModal.value.ActualizadoPor = "2";
    store.updateProductLine(registroModal.value).then((res) => {
      if (res) {
        Swal.fire({
          title: "Línea de productos actualizada",
          text: "La línea de productos se ha actualizado correctamente",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      } else{
        Swal.fire({
          title: "Error al actualizar la línea de productos",
          text: "La línea de productos no se ha podido actualizar",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });

        if(productSubfamily.value === 0){
          loadProductLines();
        } else {
          findProductLinesBySubfamilyId(productSubfamily.value);
        }
      }
    });
  }
  showModal.value = false;
}

const esperarTabla = (data) => {
  const [linea, accion] = data;
  if (accion === 1) {
    registroModal.value = { ...linea };
    modoFormulario.value = 1;
    showModal.value = true;
  } else if (accion = 2) {
    registroBorrar.value = {
      LiniaId: linea.LiniaId,
      BorradoPor: "2",
    };

  }
};

const borrarRegistro = () => {
  store.deleteProductLine(registroBorrar.value).then((res) => {
    loadProductLines();
    if (res) {
      Swal.fire({
        title: "Línea de productos eliminada",
        text: "La línea de productos se ha eliminado correctamente",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        title: "Error al eliminar la línea de productos",
        text: "La línea de productos no se ha podido eliminar",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    registroBorrar.value = null;
  });
}

const setProductSubfamily = async (id) => {
  productSubfamily.value = id;
};

export function useProductLines() {
  return {
    productLinesCollection,
    productSubfamily,
    loadProductLines,
    findProductLinesByName,
    findProductLinesBySubfamilyId,
    esperarModal,
    esperarTabla,
    borrarRegistro,
    setProductSubfamily,
    showModal,
    modoFormulario,
    registroModal,
    registroBorrar,
  };
}
