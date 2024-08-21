import { apiSAT } from "@/apis/SAT";

export const loadCountries = async () => {
  return await apiSAT.get("/pais");
}