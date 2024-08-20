import { apiBusinessEntity } from "@/apis/businessentity";

export const loadZipCode = async () => {
  return await apiBusinessEntity.get("/catalogo/cp");
}

export const findZipCode = async (cp) => {
  return await apiBusinessEntity.post("/catalogo/cp/buscar", { cp });
}