import { apiSAT } from "@/apis/SAT";

export const loadCoins = async () => {
  return await apiSAT.get("/v1/catalogo/metodos/moneda");
}

export const findCoins = async (coinID) => {
  return await apiSAT.get(`/v1/catalogo/metodos/moneda/buscar${coinID}`);
}

export const createCoin = async (coin) => {
  return await apiSAT.post("/v1/moneda", coin);
}

export const updateCoin = async (coin) => {
  return await apiSAT.patch("/v1/moneda", coin);
}

export const deleteCoin = async (coinID) => {
  return await apiSAT.delete(`/v1/moneda`, { data: { ClaveMoneda: coinID } });
}