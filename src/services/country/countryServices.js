import { apiSAT } from "@/apis/SAT";

export const loadCountries = async () => {
  return await apiSAT.get("/v1/pais");
}