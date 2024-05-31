import { apiBusinessEntity } from "@/apis/businessentiy";

export const getListCountry = async ()=>{
    return await apiBusinessEntity('/pais/')
}

