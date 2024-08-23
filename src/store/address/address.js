import { defineStore } from "pinia";

import { getAddress } from "@/services/address/zip";

export const useAddress = defineStore('address',{
    state:()=>({
        Address:{
            Calle: '',
            NumeroExt:   '',
            NumeroInt:   '',
            CodigoPostal:'',
            Estado:      '',
            Municipio:   '',
            Localidad:   '',
            Colonia:     '',
            Pais:        ''
        }
    }),
    getters:{
        getAddress(state){
            return this.Address
        }
    },
    actions:{
        async findAddressByZip( zip ){
            const { data } = await getAddress(zip);
            this.Address.Estado       = data[0].estado;
            this.Address.Localidad    = data[0].localidad;
            this.Address.Municipio    = data[0].municipio;
            this.Address.CodigoPostal = data[0].codigo_postal
            
        }
    }
})