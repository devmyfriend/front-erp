// importaciones de vue
import { onMounted, reactive, ref, useSSRContext } from 'vue'

// importaciones de liberrias
import { defineStore } from 'pinia'

// importaciones de servicios
import { addBusinessEntity, updateBusinessEntity } from '@/service/businessentity/businessentityservice';

// importaciones de store
import { useAddress } from '../address/address';
import { useCountry } from '../country/country';
import { useRegimenFiscal } from '../regimenfiscal/regimenfiscal';

//importacion de helpers
import { alert } from '@/commons/helpers/alerts';

export const useBusinessEntity = defineStore('businessentity',()=>{

    const storeAddress = useAddress();
    const storeCountry = useCountry();
    const storeRegimenFiscal = useRegimenFiscal();

    // states

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

    // actions

    async function create (){
        try{
            const data ={
                entidad: [
                    {
                        RFC: entity.RFC.toUpperCase(),
                        NombreComercial: entity.NombreComercial.toUpperCase() ,
                        ClavePais: entity.ClavePais.toUpperCase(),
                        ClaveRegimenFiscal: entity.ClaveRegimenFiscal.toUpperCase(),
                        PersonaFisica: entity.PersonaFisica,
                        PersonaMoral: entity.PersonaMoral,
                        NombreOficial: entity.NombreOficial.toUpperCase(),
                        logo: entity.logo,
                        TaxId: entity.TaxId
    
                    }
                ],
                CreadoPor: 5,
                domicilio: [
                    {
                        Calle: storeAddress.Address.Calle,
                        NumeroExt: storeAddress.Address.NumeroExt,
                        NumeroInt: storeAddress.Address.NumeroInt,
                        CodigoPostal: storeAddress.Address.CodigoPostal,
                        Estado: storeAddress.Address.Estado,
                        Municipio: storeAddress.Address.Municipio,
                        Localidad: storeAddress.Address.Localidad,
                        Colonia: storeAddress.Address.Colonia,
                        Pais: storeAddress.Address.Pais
                    }
                ]
            }
    
            const response = await addBusinessEntity( data );
            entity.EntidadNegocioId = response.data.EmpresaId
            alert(response)
        }catch( error ){
            alert(error.response.data)
        }
        

    }

    async function update(){
        try{
            const data ={
                entidad: [
                    {
                        RFC: entity.RFC.toUpperCase(),
                        NombreComercial: entity.NombreComercial.toUpperCase() ,
                        ClavePais: entity.ClavePais.toUpperCase(),
                        ClaveRegimenFiscal: entity.ClaveRegimenFiscal.toUpperCase(),
                        PersonaFisica: entity.PersonaFisica,
                        PersonaMoral: entity.PersonaMoral,
                        NombreOficial: entity.NombreOficial.toUpperCase(),
                        logo: entity.logo,
                        TaxId: entity.TaxId,
                        EntidadNegocioId: entity.EntidadNegocioId
    
                    }
                ],
                ActualizadoPor: 5,
                domicilio: [
                    {
                        Calle: storeAddress.Address.Calle,
                        NumeroExt: storeAddress.Address.NumeroExt,
                        NumeroInt: storeAddress.Address.NumeroInt,
                        CodigoPostal: storeAddress.Address.CodigoPostal,
                        Estado: storeAddress.Address.Estado,
                        Municipio: storeAddress.Address.Municipio,
                        Localidad: storeAddress.Address.Localidad,
                        Colonia: storeAddress.Address.Colonia,
                        Pais: storeAddress.Address.Pais
                    }
                ]
            }

            const response = await  updateBusinessEntity( data );
            alert( response )
        }catch( error ){
            alert(error.response.data)
        }
    }

    return {
        // states
        entity,
       
        
        // store
        storeAddress,
        storeCountry,
        storeRegimenFiscal,

        // function

        create,
        update
    }

})