import { apiSAT } from "@/apis/SAT";

export const loadReceipts = async () => {
  return await apiSAT.get("/v1/comprobante");
}

export const createReceipt = async (receipt) => {
  return await apiSAT.post("/v1/comprobante", receipt);
}

export const updateReceipt = async (receipt) => {
  return await apiSAT.patch("/v1/comprobante", receipt);
}

export const deleteReceipt = async (receiptID) => {
  return await apiSAT.delete(`/v1/comprobante/${receiptID}`);
}