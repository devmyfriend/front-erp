import { apiSAT } from "@/apis/SAT";

export const loadMethodsFormsPayments = async () => {
  return await apiSAT.get("/catalogo/metodos/pago");
}
