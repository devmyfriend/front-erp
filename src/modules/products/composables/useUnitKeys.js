import { ref } from "vue";
import { useProductos } from "@/store/product/productsStore";
import Swal from "sweetalert2";
const store = useProductos();

const unitKeysCollection = ref([]);
const unitKeysInfo = ref({});
const productsLineCollection = ref([]);

const loadUnitKeys = async (pagina) => {
  const response = await store.loadUnitKeys(pagina);
  if (response) {
    unitKeysCollection.value = store.getUnitKeys;
  } else {
    Swal.fire({
      title: "Error al cargar las claves de unidades",
      text: "No hay clave de unidades registradas",
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
const findUnitKeysByName = async (name) => {
  const response = await store.findUnitKeysByName(name);
  if (response) {
    unitKeysCollection.value = store.getUnitKeys;
  } else {
    Swal.fire({
      title: "No hay clave de unidades",
      text: "No se encontraron clave de unidades con ese nombre",
      icon: "info",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
const findUnitKeysByKey = async (key) => {
  const response = await store.findUnitKeysByKey(key);
  if (response) {
    unitKeysCollection.value = store.getUnitKeys;
  } else {
    Swal.fire({
      title: "No hay clave de unidades",
      text: "No se encontraron clave de unidades con esa clave",
      icon: "info",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

export function useUnitKeys() {
  return {
    unitKeysCollection,
    unitKeysInfo,
    loadUnitKeys,
    findUnitKeysByName,
    findUnitKeysByKey,
  }
}
