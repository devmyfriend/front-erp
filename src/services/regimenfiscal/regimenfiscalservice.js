import { apiBusinessEntity } from "@/apis/businessentity";

export const getListRegimenes = async ()=>{
    return await apiBusinessEntity('/catalogo/sat/cfdi');
}