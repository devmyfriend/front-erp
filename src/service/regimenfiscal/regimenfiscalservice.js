import { apiBusinessEntity } from "@/apis/businessentiy";


export const getListRegimenes = async ()=>{
    return await apiBusinessEntity('/catalogo/sat/cfdi')
}