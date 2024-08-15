import { ref } from "vue";
import { useProductos } from "@/store/product/productsStore";
import Swal from "sweetalert2";
const store = useProductos();

const tipoProducto = ref("Todos");
const productsCollection = ref([]);
const productsTypeCollections = ref([]);

const CodigoProducto = ref("");

const esperarBusqueda = (texto) => {
  if (texto === undefined) {
    if (tipoProducto.value == "Todos") {
      cargarDatos();
    } else {
      store.loadProducts().then(() => {
        productsCollection.value = store.getProducts.filter(
          (producto) => producto.NombreTipoProducto == tipoProducto.value
        );
        if (productsCollection.value.length == 0) {
          Swal.fire({
            icon: "info",
            title: "No hay productos",
            text: "No hay productos de este tipo",
          });
          tipoProducto.value = "Todos";
        }
      });
    }
  } else {
    productsCollection.value = store.getProducts;
  }
};
const cargarDatos = async () => {
  store.loadProducts().then(() => {
    if (tipoProducto.value == "Todos") {
      productsCollection.value = store.getProducts;
    } else {
      productsCollection.value = store.getProducts.filter(
        (producto) => producto.NombreTipoProducto == tipoProducto.value
      );
      if (productsCollection.value.length == 0) {
        Swal.fire({
          icon: "info",
          title: "No hay productos",
          text: "No hay productos de este tipo",
        });
        tipoProducto.value = "Todos";
      }
    }
  });

  store.loadTypeProducts().then(() => {
    productsTypeCollections.value = store.getTypeProducts;
  });
};
const editarProducto = (codigoProducto) => {
  CodigoProducto.value = codigoProducto;
  router.push({
    name: "formProducts",
    params: { tipo: tipoProducto, id: codigoProducto },
  });
};
const deleteProduct = (producto) => {
  const payload = {
    ProductoId: producto.ProductoId,
    BorradoPor: 2,
  };
  store.deleteProduct(payload).then((res) => {
    cargarDatos();
    if (res) {
      Swal.fire({
        icon: "success",
        title: "Producto eliminado",
        text: "El producto ha sido eliminado correctamente",
      });
    }
  });
};

const borrarCodigoProducto = () => {
  setCodigoProducto("");
};

const setCodigoProducto = (codigoProducto) => {
  CodigoProducto.value = codigoProducto;
};

export function useListProducts() {
  return {
    tipoProducto,
    productsCollection,
    productsTypeCollections,
    CodigoProducto,
    esperarBusqueda,
    cargarDatos,
    editarProducto,
    deleteProduct,
    borrarCodigoProducto,
    setCodigoProducto,
  };
}
