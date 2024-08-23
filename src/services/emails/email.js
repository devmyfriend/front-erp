import { apiBusinessEntity } from "@/apis/businessentity";

export const addEmailBusinessEntity = async ( data )=>{
    return await apiBusinessEntity.post('/empresa/emails/crear',data)
}

export const getEmailBusinessEntityList = async ( data )=>{
    return await apiBusinessEntity.get(`http://lachosoft.cloud:4000/api/v1/empresa/emails/${ data }`);
}

export const  updateEmailBusinessEntity = async ( data )=>{
    return await apiBusinessEntity.patch('/empresa/emails/editar',data)
}

export const deleteEmailBusinessEntity = async ( data )=>{
    return await apiBusinessEntity.delete('/empresa/emails/desactivar',data)
}