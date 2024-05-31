import { onMounted, reactive, ref, useSSRContext } from 'vue'
import { defineStore } from 'pinia'

// importaciones de servicios

// importaciones de store
import { useAddress } from '../address/address';
import { useCountry } from '../country/country';
import { useRegimenFiscal } from '../regimenfiscal/regimenfiscal';

export const useBusinessEntity = defineStore('businessentity',()=>{

    const storeAddress = useAddress();
    const storeCountry = useCountry();
    const storeRegimenFiscal = useRegimenFiscal();

    const entity = reactive({
        EntidadNegocioId:   0,
        EsPropietaria:      true,
        NombreOficial:      '',
        RFC:                '',
        NombreComercial:    '',
        ClavePais:          '',
        TaxId:              '',
        ClaveRegimenFiscal: '',
        PersonaFisica:      false,
        PersonaMoral:       false,
        Borrado:            false,
        logo:               ''
        
    });

    return {
        // states
        entity,
       
        
        // store
        storeAddress,
        storeCountry,
        storeRegimenFiscal,

        // function
    }

})