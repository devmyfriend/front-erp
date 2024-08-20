import { apiSAT } from "@/apis/SAT";

export const loadTax = async () => {
  return await apiSAT.get("/v1/impuestos");
}

export const createTaxes = async (tax) => {
  return await apiSAT.post("/v1/impuestos", tax);
}

export const updateTax = async (tax) => {
  return await apiSAT.put("/v1/impuestos", tax);
}

export const deleteTax = async (taxID) => {
  return await apiSAT.delete(`/v1/impuestos/${taxID}`);
}