import { apiBusinessEntity } from "@/apis/businessentity";

export const addPhoneBusinessEntity = async ( data )=>{
    return await apiBusinessEntity.post('/empresa/telefono/crear',data);
}

export const getPhoneBusinessEntityList = async ( data )=>{
    return await apiBusinessEntity.get(`/empresa/telefono/${data}`);
}

// export const getPhoneBusinessEntity = async ( data )=>{
//     return await apiBusinessEntity.post('',data);
// }

export const updatePhoneBusinessEntity = async ( data )=>{
    return await apiBusinessEntity.patch('/empresa/telefono/editar',data);
}

export const deletePhoneBusinessEntity = async ( data )=>{
    return await apiBusinessEntity.delete('/empresa/telefono/desactivar',data);
}