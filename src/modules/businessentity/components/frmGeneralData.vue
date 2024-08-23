<script setup>
    // importaciones de vue
    import { ref, onBeforeMount, watch } from 'vue';

    //importaciones de librerias propias
    import { useBusinessEntity } from '@/store/businessEntity/businessentity';
    import { useRegimenFiscal } from '@/store/regimenfiscal/regimenfiscal';
    import { useCountry } from '@/store/country/country';
    import { useAddress } from '@/store/address/address';

    //importaciones de ui propias
    import titleH3 from '@/commons/ui/title-h3/title-h3.vue';


    //stores
    const storeBusinessEntity = useBusinessEntity()
    const storeRegimenFiscal = useRegimenFiscal()
    const storePaises = useCountry()
    const storeAddress = useAddress()

    // listas
    const RegimenesFiscales = ref([]);
    const Paises = ref([]);

    
    const loadDatos = ()=>{
        //regimenes
        storeRegimenFiscal.loadListaRegimenFiscal().then(()=>{
            RegimenesFiscales.value = storeRegimenFiscal.getListaPersonaFisica;
        });
        //paises
        storePaises.loadListaPais().then(()=>{
            Paises.value = storePaises.getListaPais;
        })
        
        
    }
    
    // variables de control.
    const isTaxId = ref(false)
    
    // definicion de props

    const props = defineProps({
        data:{
            type: Object
        }
    })

    //mounts
    onBeforeMount(()=>{
        loadDatos()
    })

    //watch
    watch(()=>props.data.CodigoPostal, async ()=>{
        if(props.data.CodigoPostal.length === 5 && props.data.ClavePais==='MEX'){
            await storeAddress.findAddressByZip( props.data.CodigoPostal);
            props.data.CodigoPostal = storeAddress.Address.CodigoPostal;
            props.data.Estado       = storeAddress.Address.Estado;
            props.data.Municipio    = storeAddress.Address.Municipio;
            props.data.Localidad    = storeAddress.Address.Localidad;
            props.data.Colonia      = storeAddress.Address.Colonia;
            props.data.Pais         = storeAddress.Address.Pais;

        }
    })

    watch(()=>props.data.PersonaFisica,()=>{
        if(props.data.PersonaFisica){
            console.log(storeRegimenFiscal.getListaPersonaFisica);
            RegimenesFiscales.value = storeRegimenFiscal.getListaPersonaFisica;
        }
    })

    watch(()=>props.data.PersonaMoral,()=>{
        if(props.data.PersonaMoral){
            console.log(storeRegimenFiscal.getListaPersonaMoral)
            RegimenesFiscales.value = storeRegimenFiscal.getListaPersonaMoral
        }
    })

    watch(()=>props.data.ClavePais,()=>{
        if(props.data.ClavePais != 'MEX')  isTaxId.value = true
        if(props.data.ClavePais === 'MEX') isTaxId.value = false
    })
    
    // funciones
    const selectTypePerson=( value )=>{
        props.data.PersonaFisica = value;
        props.data.PersonaMoral = !props.data.PersonaFisica

    }
</script>

<template>
    <div class="flex flex-col">
        <div class="flex w-[100%]">
            <titleH3>
                Datos Generales
            </titleH3>
            <div class="flex w-max pr-2 justify-end text-right">
                <input v-model="data.EntidadNegocioId" class="w-36" name="BusinessEntityId" role="Id" readonly placeholder="Id de la empresa" type="text">
            </div>
        </div>
        <div class="flex w-[100%]">
            <form class="w-[100%] flex flex-col gap-2" @submit.prevent>
                <!-- Datos de la empresa -->
                 <!-- id de la empresa -->
                                            <!-- <fieldset class="flex flex-row items-center w-full">
                                                
                                            </fieldset> -->
                <!-- RFC y Razon social -->
                <fieldset class="flex flex-row w-full" >
                    <div class="flex flex-col">
                        <label class="flex  text-[1rem]" for="OfficialNumber"> <strong class="text-red-700"> * </strong>&nbsp;R. F. C.</label>
                        <input v-model="data.RFC" class="flex flex-row w-36  border-gray-300  focus:outline-none" name="OfficalNumber" role="OfficialNumber" placeholder="R. F. C." type="text">
                    </div>
                    <div class="flex flex-col w-full mx-2">
                        <label class="flex  text-[1rem]" for="OfficialName"><strong class="text-red-700"> * </strong>&nbsp; Razón Social</label>
                        <input v-model="data.NombreOficial" class="w-full border border-gray-300 focus:outline-none" name="OfficialName" type="text">
                    </div>
                </fieldset>
                <!-- País -->
                 <fieldset class="flex flex-col justify-center w-full">
                    <div class="flex ">
                        <label class="flex  text-[1rem]" for="Country"><strong class="text-red-700"> * </strong>&nbsp; País</label>
                    </div>
                    <div class="flex w-full pr-2">
                        <select v-model="data.ClavePais" class="w-full" name="Country" id="Country">
                            <option value="MEX" selected>México</option>
                            <option  v-for="pais in Paises" :key="pais.ClavePais" value="pais.ClavePais">{{pais.Descripcion}}</option>
                        </select>
                    </div>
                 </fieldset>
                 <!-- persona fisica y moral; y taxid -->
                <fieldset class="flex flex-row w-full mt-2">
                    <div class="flex mr-2 items-center">
                        <label class="mr-2 text-[1rem]" for="Person">Persona Fisica</label>
                        <input name=Person role="Fisica" @click="selectTypePerson(true)" checked type="radio">
                    </div>
                    
                    <div class="flex items-center">
                        <label class="mr-2 text-[1rem]" for="Moral">Persona Moral</label>
                        <input name="Person" role="Moral" @click="selectTypePerson(false)" type="radio">
                    </div>

                    <div v-if="isTaxId" class="flex items-center">
                        <label class="mr-2 text-[1rem]" for="TaxId">No. Registro</label>
                        <input name="TaxId" role="TaxId" placeholder="No. Registro" type="text">
                    </div>
                </fieldset>
                <!-- Régimen fiscal -->
                <fieldset class="flex flex-col justify-center w-full">
                    <div class="flex ">
                        <label class=" text-[1rem]" for="Regimen"><strong class="text-red-700"> * </strong>&nbsp; Régimen Fiscal</label>
                    </div>
                    <div class="w-full pr-2">
                        <select class="w-full" name="Regimen" id="">
                            <option value=""></option>
                            <option v-for="regimen in RegimenesFiscales" :key="regimen.ClaveRegimenFiscal" value="regimen.ClaveRegimenFiscal"> {{regimen.Descripcion}}</option>

                        </select>
                    </div>
                </fieldset>
                <fieldset class="flex flex-col">
                <div class="flex ">
                    <label class="mr-2 text-[1rem]" for="TradeName">Nombre Comercial</label>
                </div>
                <div class="flex w-full pr-2">
                    <input v-model="data.NombreComercial" class="w-full" name="TradeName" role="TradeName" placeholder="Nombre del Negocio" type="text">
                </div>
                </fieldset>
                <!-- fin datos de la empresa -->
                <hr>
                <!-- Domicilio -->
                <div class="flex w-full mt-1">
                    <titleH3>Domicilio</titleH3>
                </div>
                <!-- calle, número interior y exterior -->
                <fieldset class="flex flex-row w-full space-x-4">
                    <div class="flex flex-col w-full">
                        <div class="flex ">
                            <label class=" text-[1rem]" for="Street">Calle</label>
                        </div>
                        <div class="flex w-full">
                            <input v-model="data.Calle" class="flex w-[100%] mr-2" name="Street" role="Street" placeholder="Calle" type="text">
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex ">
                            <label class=" text-[1rem]" for="NumberExt">Número Exterior</label>
                        </div>
                        <div class="flex">
                            <input v-model="data.NumeroExt" class="flex w-36 mr-2" type="text">
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex ">
                            <label class="  mr-2 text-[1rem]" for="NumberInt">Número Interior</label>
                        </div>
                        <div class="flex">
                            <input v-model="data.NumeroInt" class="flex- w-36 mr-2" type="text">
                        </div>
                    </div>
                </fieldset>
                <!-- Colonia  -->
                <fieldset class="flex flex-row w-full">
                    <div class="flex flex-col w-full">
                        <div class="flex ">
                            <label class=" text-[1rem]" for="Cologne">Colonia</label>
                        </div>
                        <div class="flex w-full pr-2">
                            <input  v-model="data.Colonia" class="w-[100%]" name="Cologne" role="Cologne" placeholder="Colonia" type="text">
                        </div>
                    </div>
                </fieldset>
                <!-- Código Postal y Estado -->
                <fieldset class="flex flex-row items-center w-full space-x-4">
                <div class="flex flex-col">
                    <div class="flex ">
                        <label class=" text-[1rem]" for="Zip"><strong class="text-red-700"> * </strong>&nbsp; Código Postal</label>
                    </div>
                    <div class="flex">
                        <input v-model="data.CodigoPostal" class="w-36" name="Zip" role="Zip" placeholder="Código Postal" type="text">
                    </div>
                </div>
                <div class="flex flex-col w-full pr-2">
                    <div class="flex ">
                        <label class=" text-[1rem]" for="State">Estado</label>
                    </div>
                    <div class="flex w-full">
                        <input v-model="data.Estado" class="w-[100%]" name="State" type="text">
                    </div>
                </div>
                </fieldset>
                <!-- Municipío y ciduad -->
                <fieldset class="flex flex-row space-x-4">
                    <div class="flex flex-col w-[50%]">
                        <div class="flex ">
                            <label class=" text-[1rem]" for="Municipaly">Deleg./Municipio</label>
                        </div>
                        <div class="flex w-full">
                            <input v-model="data.Municipio" class="w-[100%]" name="Municipaly" role="Municipaly" placeholder="Municipio" type="text">
                        </div>
                    </div>
                    <div class="flex flex-col w-[50%]">
                        <div class="flex ">
                            <label class=" text-[1rem]" for="City">Ciudad</label>
                        </div>
                        <div class="flex w-full pr-2">
                            <input v-model="data.Localidad" class="w-[100%]" name="City" role="City" placeholder="Ciudad" type="text">
                        </div>
                    </div>
                </fieldset>
            </form>

        </div>
    </div>
</template>

<style scoped>
    input,
    select,
    textarea {
        /*  flex: 1 0 12rem; */
        padding: 0.25rem 0.5rem;
        font-size: 1rem;
        border-radius: 0.25rem;
        outline: none;
    }
    input[type="radio"] {
        -ms-transform: scale(1.25);
        -webkit-transform: scale(1.25);
        flex: 1 0 auto;
        height: 1rem;
        margin: auto;
        transform: scale(1.25);
        width: 1rem;
    }
    input[type="checkbox"] {
        flex: 1 0 auto;
    }

    .descr {
        display: flex;
        flex-direction: row;
    }

    textarea {
        resize: none;
        flex-grow: 1;
        height: 5rem;
    }

    .clickeable{
        cursor: pointer;
        transition: all 0.3s;
    }
    .clickeable:hover{
        color: #353535;
    }

    label{
        margin-bottom: 4px;
    }
</style>