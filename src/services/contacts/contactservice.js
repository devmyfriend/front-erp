import { apiBusinessEntity } from "@/apis/businessentity";


export const addContact = async ( data )=>{
    return await apiBusinessEntity.post('/empresa/contacto/crear', data );
}

export const getContactList = async ( businessentityid )=>{
    return await apiBusinessEntity.get(`/empresa/contactos/${businessentityid}`)
}

export const searchContact = async ( data )=>{
    return await apiBusinessEntity.post(`/empresa/contacto/nombre`, data )
}

export const updateContact = async( data )=>{
    return await apiBusinessEntity.patch('/empresa/contacto/editar', data);
}
