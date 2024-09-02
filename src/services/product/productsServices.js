import { apiProducts } from "@/apis/products";
import { apiSAT } from "@/apis/SAT";

export const loadProducts = async () => {
  return await apiProducts.get("/productos");
}

export const loadTypeProducts = async () => {
  return await apiProducts.get("/productos/tipo");
}

export const findProducts = async (nombre) => {
  return await apiProducts.get(`/productos/buscar/${nombre}`);
}

export const getProduct = async (clave) => {
  return await apiProducts.get(`/productos/detalle/${clave}`);
}

export const createProduct = async (producto) => {
  return await apiProducts.post("/productos", producto);
}

export const deleteProduct = async (payload) => {
  return await apiProducts.delete("/productos", { data: payload });
}

export const loadProductsKeys = async (pagina) => {
  return await apiProducts.get(`/productos/servicio/palabra/${pagina}`);
}

export const loadUnitKeys = async (pagina) => {
  return await apiSAT.get(`/unidades/${pagina}`);
}

export const findProductsKeys = async (palabra) => {
  return await apiProducts.get(`/productos/servicio/buscar/descripcion/${palabra}`);
}

export const findUnitKeysByName = async (name) => {
  return await apiSAT.get(`/unidades/buscar/nombre/${name}`);
}
export const findUnitKeysByKey = async (key) => {
  return await apiSAT.get(`/unidades/buscar/${key}`);
}
