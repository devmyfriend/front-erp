// importaciones de vue
import { reactive } from "vue";

// importaciones de libreria
import { defineStore } from "pinia";

// importaciones de servicios
import { getAddress } from "@/service/address/zip";

export const useAddress = defineStore('address',()=>{

    // states
    const Address = reactive({
        Calle:       '',
        NumeroExt:   '',
        NumeroInt:   '',
        CodigoPostal:'',
        Estado:      '',
        Municipio:   '',
        Localidad:   '',
        Colonia:     '',
        Pais:        ''

    });


    // actions
    async function findAddressByZip( zip ){
        const { data } = await getAddress(zip);
        Address.CodigoPostal = data[0].codigo_postal;
        Address.Estado = data[0].estado;
        Address.Municipio = data[0].municipio;
        Address.Localidad = data[0].localidad;
        Address.Pais = data[0].pais;
        
    }

    
    return{
        // states
        Address,

        //actions
        findAddressByZip,
    }
})