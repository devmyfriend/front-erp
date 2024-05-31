import { apiBusinessEntity } from "@/apis/businessentiy";


export const addBusinessEntity = async ( data )=>{
    return await apiBusinessEntity.post('/empresa/crear', data );
}

export const updateBusinessEntity = async( data )=>{
    return await apiBusinessEntity.patch('/empresa/editar/', data);
}


export const deleteBusinessEntity = async( data) =>{
    return await apiBusinessEntity.delete('/empresa/desactivar/', data);
}
