import { apiSAT } from "@/apis/SAT";

export const loadUnitKeys = async (pagina) => {
  return await apiSAT.get(`/v1/unidades/${pagina}`);
}