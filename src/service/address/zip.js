import { apiBusinessEntity } from "@/apis/businessentiy";

export const getAddress = async (zip)=>{
    const data = {
        cp: zip
    }
    return await apiBusinessEntity.post('/catalogo/cp/buscar', data)
}
