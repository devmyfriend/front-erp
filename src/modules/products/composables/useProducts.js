import { ref } from "vue";
import { useProductos } from "@/store/product/productsStore";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useProductos();

const productsCollection = ref([]);
const productsTypeCollection = ref([]);

const productCode = ref("");
const productType = ref("Todos");

const handleFinder = (texto) => {
  if (texto === undefined) {
    loadProducts(productType.value);
  } else {
    store.findProducts(texto, productType.value).then((res) => {
      if (res) {
        productsCollection.value = store.getProducts;
      } else {
        Swal.fire({
          icon: "info",
          title: "No hay productos",
          text: "No se encontraron productos con esa descripción",
        });
        loadProducts(productType.value);
      }
    });
  }
};

const loadProducts = async (productT) => {
  store.loadProducts(productT).then((res) => {
    if (res) {
      productsCollection.value = store.getProducts;
    } else {
      Swal.fire({
        icon: "info",
        title: "No hay productos",
        text: "No se encontraron",
      });
      productType.value = "Todos";
      loadProducts();
    }
  });

  store.loadTypeProducts().then((res) => {
    if (res) {
      productsTypeCollection.value = store.getTypeProducts;
    } else {
      Swal.fire({
        icon: "info",
        title: "No hay tipos de productos",
        text: "No se encontraron tipos de productos",
      });
    }
  });
};

const editProduct = (productCode) => {
  productCode.value = productCode;
  router.push({
    name: "EditProduct",
    params: { codigoProducto: productCode.value },
  });
};

const deleteProduct = (productCode) => {
  const payload = {
    ProductoId: productCode.ProductoId,
    BorradoPor: 2,
  };
  store.deleteProduct(payload).then((res) => {
    loadProducts();
    if (res) {
      Swal.fire({
        icon: "success",
        title: "Producto eliminado",
        text: "El producto ha sido eliminado correctamente",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error al eliminar",
        text: "No se pudo eliminar el producto",
      });
    }
  });
};

const setProductCode = (productCode) => {
  productCode.value = productCode;
};

const setProductType = (newProductType) => {
  productType.value = newProductType;
  loadProducts(productType.value);
};

export const useProducts = () => {
  return {
    productsCollection,
    productsTypeCollection,
    productCode,
    productType,
    handleFinder,
    loadProducts,
    editProduct,
    deleteProduct,
    setProductCode,
    setProductType,
  };
};
