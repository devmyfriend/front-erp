import { ref } from "vue";
import { useProductos } from "@/store/product/productsStore";
import Swal from "sweetalert2";
const store = useProductos();

const productSubfamiliesCollection = ref([]);
const productFamily = ref(0);

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

const setProductFamily = async (id) => {
  productFamily.value = id;
};

export function useProductSubfamilies() {
  return {
    productSubfamiliesCollection,
    loadProductSubfamilies,
    findProductSubfamiliesByName,
    findProductSubfamiliesByFamilyId,
    setProductFamily,
    productFamily,
  };
}
