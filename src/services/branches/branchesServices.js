import { apiBusinessEntity } from "@/apis/businessentity";

export const findBranchesByBusinessEntityID = async (businessEntityID)=>{
    return await apiBusinessEntity.get(`/sucursal/${businessEntityID}`);
}