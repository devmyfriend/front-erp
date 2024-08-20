import { apiSAT } from "@/apis/SAT";

export const loadMethodsFormsPayments = async () => {
  return await apiSAT.get("/v1/catalogo/metodos/pago");
}
