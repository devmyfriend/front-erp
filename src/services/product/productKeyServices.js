import { apiSAT } from "@/apis/SAT";

export const loadProductsKeys = async (palabra) => {
  if (palabra === undefined) {
    palabra = 'a';
  }
  return await apiSAT.get('/productos/servicio/palabra/' + palabra);
};
