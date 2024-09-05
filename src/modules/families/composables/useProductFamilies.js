import { ref } from "vue";
import { useProductos } from "@/store/product/productsStore";
import Swal from "sweetalert2";
const store = useProductos();

const productFamiliesCollection = ref([]);

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

export function useProductFamilies() {
  return {
    productFamiliesCollection,
    loadProductFamilies,
    findProductFamiliesByName,
  };
}
