import { apiSAT } from "@/apis/SAT";

export const loadReceipts = async () => {
  return await apiSAT.get("/comprobante");
}

export const createReceipt = async (receipt) => {
  return await apiSAT.post("/comprobante", receipt);
}

export const updateReceipt = async (receipt) => {
  return await apiSAT.patch("/comprobante", receipt);
}

export const deleteReceipt = async (receiptID) => {
  return await apiSAT.delete(`/comprobante/${receiptID}`);
}