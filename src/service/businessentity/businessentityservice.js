import { apiBusinessEntity } from "@/apis/businessentiy";


export const addBusinessEntity = async ( data )=>{
    return await apiBusinessEntity.post('/empresa/crear', data );
}

export const getBusinessEntityList = async ( data )=>{
    return await apiBusinessEntity.get('/empresa')
}

export const getBusinessEntityById = async ( data )=>{
    return await apiBusinessEntity.get(`/empresa/${data}`)
}

export const getBusinessEntityContact = async ( data )=>{
    return await apiBusinessEntity.get(`/empresa/detalle/${data}`)
}

export const searchBusinessEntityByName = async ( data )=>{
    return await apiBusinessEntity.get(`/empresa/nombre/${data}`)
}

export const updateBusinessEntity = async( data )=>{
    return await apiBusinessEntity.patch('/empresa/editar/', data);
}


export const deleteBusinessEntity = async( data ) =>{
    return await apiBusinessEntity.delete('/empresa/desactivar/', data);
}
