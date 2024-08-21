import { apiSAT } from "@/apis/SAT";

export const loadTaxes = async () => {
  return await apiSAT.get("/impuestos");
}

export const createTaxes = async (tax) => {
  return await apiSAT.post("/impuestos", tax);
}

export const updateTax = async (tax) => {
  return await apiSAT.put("/impuestos", tax);
}

export const deleteTax = async (taxID) => {
  return await apiSAT.delete(`/impuestos/${taxID}`);
}