import { ref } from "vue";
import { useProductos } from "@/store/product/productsStore";
import Swal from "sweetalert2";
const store = useProductos();

const productLinesCollection = ref([]);
const productSubfamily = ref(0);

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

const setProductSubfamily = async (id) => {
  productSubfamily.value = id;
};

export function useProductLines() {
  return {
    productLinesCollection,
    loadProductLines,
    findProductLinesByName,
    findProductLinesBySubfamilyId,
    setProductSubfamily,
    productSubfamily,
  };
}
