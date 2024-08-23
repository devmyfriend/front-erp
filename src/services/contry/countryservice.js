import {apiBusinessEntity} from '@/apis/businessentity';

export const getListCountry = async ()=>{
    return await apiBusinessEntity('/pais/')
}

