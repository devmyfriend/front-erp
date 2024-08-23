import { apiBusinessEntity } from "@/apis/businessentity";

export const getAddress = async (zip)=>{
    const data = {
        cp: zip
    }
    return await apiBusinessEntity.post('/catalogo/cp/buscar', data);
}