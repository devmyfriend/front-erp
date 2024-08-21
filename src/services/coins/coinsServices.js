import { apiSAT } from "@/apis/SAT";

export const loadCoins = async () => {
  return await apiSAT.get("/catalogo/metodos/moneda");
}

export const findCoins = async (coinID) => {
  return await apiSAT.get(`/catalogo/metodos/moneda/buscar/${coinID}`);
}

export const createCoin = async (coin) => {
  return await apiSAT.post("/catalogo/metodos/moneda", coin);
}

export const updateCoin = async (coin) => {
  return await apiSAT.patch("/catalogo/metodos/moneda", coin);
}

export const deleteCoin = async (coinID) => {
  return await apiSAT.delete("/catalogo/metodos/moneda", { data: { ClaveMoneda: coinID } });
}