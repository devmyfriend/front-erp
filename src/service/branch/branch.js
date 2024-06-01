import { apiBusinessEntity } from "@/apis/businessentiy";


export const addBranch = async ( data )=>{
    return await apiBusinessEntity.post('/sucursal/crear', data );
}

export const getBranchByBusinesEntityId = async ( data )=>{
    return await apiBusinessEntity.get(`/sucursal/${ data }`);
}

export const updatedBranch = async ( data )=>{
    return await apiBusinessEntity.patch('/sucursal/editar', data);
}

export const deleteBranch = async ( data )=>{
    return await apiBusinessEntity.delete('/sucursal/eliminar', data );
}