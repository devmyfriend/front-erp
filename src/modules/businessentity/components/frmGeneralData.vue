<script setup>
    // importaciones de vue
    import { ref, onMounted, watch, computed } from 'vue';

    // importaciones de store
    import { useBusinessEntity } from '@/stores/businessentity/businessentity.js';
    // importacion de componentes
    import titleH1 from '@/commons/ui/title-h1/title-h1.vue';


    const isPhysical = ref(true)
    const isMoral = ref(false)
    const Regimenes = ref([])

    const store = useBusinessEntity();
    
    onMounted(async()=>{
        await store.storeCountry.getList();
        await store.storeRegimenFiscal.getList()
        Regimenes.value = store.storeRegimenFiscal.getListPhysicalPerson(true);
    })

    watch(()=>store.entity.ClavePais,()=>{
        store.storeCountry.selectCountry(store.entity.ClavePais);
    })

    watch(isPhysical,()=>{
        if(isPhysical){
            Regimenes.value = store.storeRegimenFiscal.getListPhysicalPerson(isPhysical.value);
        }else{
            Regimenes.value = store.storeRegimenFiscal.getListMoralPerson(isMoral.value);
        }
    })

    watch(()=>store.storeAddress.Address.CodigoPostal,()=>{
        if(store.storeAddress.Address.CodigoPostal.length === 5 && store.storeCountry.Country.ClavePais==='MEX'){
            store.storeAddress.findAddressByZip( store.storeAddress.Address.CodigoPostal )
        }
    })




    const selectPerson = ( value )=>{
        isPhysical.value = value;
        isMoral.value = !isPhysical;
    }


</script>

<template>
    <div class="flex flex-col w-[40.93rem] px-6 pb-0">
        <div class="flex w-[100%]">
            <titleH1>Datos Generales</titleH1>
        </div>
        <div class="">
            <form @submit.prevent>
                <!-- datos de la empresa -->
                <!-- id y logo -->
                <fieldset class="flex flex-row items-center w-full mt-2 mb-2">
                    <div class="flex mr-2">
                        <input 
                            class="w-36" 
                            name="BusinessEntityId" 
                            role="Id" 
                            type="text"
                            readonly
                            placeholder="Id de la empresa"
                            v-model="store.entity.EntidadNegocioId"
                        />
                    </div>
                </fieldset>
                <!-- rfc y razón social -->
                <fieldset class="flex flex-row w-full mt-2 mb-2">
                    <div class="flex">
                        <input
                            class="flex flex-row w-36" 
                            name="OfficialNumber" 
                            role="RFC" 
                            type="text" 
                            placeholder="R. F.C."
                            v-model="store.entity.RFC"
                        />
                    </div>
                    <div class="flex w-full mx-2">
                        <input
                            class=" rounded-md p-2 w-full "
                            name="OfficialName" 
                            role="OfficialName" 
                            type="text"
                            placeholder="Razón Social"
                            v-model="store.entity.NombreOficial"
                        />
                    </div>
                </fieldset>
                <!-- Pais -->
                <fieldset class="flex flex-row items-center justify-center w-full mt-2 mb-2">
                    <div class="flex mr-2">
                        <label for="Contry">País</label>
                    </div>
                    <div class="flex w-full">
                        <select 
                            class="w-full" 
                            name="Contry"
                            v-model="store.entity.ClavePais" 
                        >
                            <option value="MEX" selected>México</option>
                            <option v-for="country in store.storeCountry.ListCountry" :key="country.ClavePais" :value="country.ClavePais">{{ country.Descripcion }}</option>
                        </select>
                    </div>
                </fieldset>
                <!-- persona fisica y moral; taxid  -->
                <fieldset class="flex flex-row w-full mt-2 mb-2 space-x-2">
                    <div class="flex mr-2">
                        <label class="mr-2" for="Fisica">Persona Fisica</label>
                        <input 
                            name="TypePerson" 
                            role="TypePerson"  
                            type="radio"
                            @click="selectPerson(true)"
                            :value="store.entity.PersonaFisica"
                            checked 
                        />
                    </div>
                    <div class="flex">
                        <label class="mr-2" for="Moral">Persona Moral</label>
                        <input 
                            name="TypePerson" 
                            role="TypePerson"  
                            type="radio"
                            @click="selectPerson(false)"
                            :value="store.entity.PersonaMoral"
                            
                        />
                    </div>
                    <div v-if="store.storeCountry.Country.ClavePais !== 'MEX'" class="flex">
                        <input 
                            class="w-36" 
                            name="TaxId" 
                            role="TaxID"  
                            type="text"  
                            placeholder="No. de Registro"
                            v-model="store.entity.TaxId"
                        />
                    </div>
                </fieldset>
                <!-- Régimen fiscal -->
                <fieldset class="flex flex-row items-center justify-center w-full">
                    <div class="flex mr-2">
                        <label class="mr-2" for="TaxRegime">Régimen</label>
                    </div>
                    <div class="flex w-full">
                        <select 
                            class="w-full" 
                            name="TaxRegime"
                            v-model="store.entity.ClaveRegimenFiscal"
                        >
                            <option value=""></option>
                            <option v-for="regimen in Regimenes" :key="regimen.ClaveRegimenFiscal" :value="regimen.ClaveRegimenFiscal">{{ regimen.Descripcion }}</option>
                        </select>
                    </div>
                </fieldset>
                <!-- nombre comercial -->
                <fieldset class="flex flex-row mt-2 mb-2">
                    <div class="flex w-full">
                        <input 
                            class="w-full" 
                            name="TradeName" 
                            role="TradeName"  
                            type="text" 
                            placeholder="Nombre Comercial"
                            v-model="store.entity.NombreComercial"
                        />
                    </div>
                </fieldset>
                <hr>
                <!-- Domicilio de la empresa -->
                <div class="flex w-[100%] mt-2">
                    <titleH1>Domicilio</titleH1>
                </div>
                <!-- calle numero ext numero int -->
                <fieldset class="flex flex-row w-full mt-2 mb-2">
                    <div class="flex">
                        <input 
                            class="flex w-[19.125rem] mr-2" 
                            type="text" 
                            name="Street" 
                            role="Street" 
                            placeholder="Calle" 
                            id=""
                            v-model="store.storeAddress.Address.Calle"
                        />
                        <input 
                            class="flex w-36 mr-2" 
                            type="text" 
                            name="NumberExt" 
                            role="NumberExt" 
                            placeholder="No. Exterior" 
                            id=""
                            v-model="store.storeAddress.Address.NumeroExt"
                        />
                        <input 
                            class="flex w-36 mr-2" 
                            type="text" 
                            name="NumberInt" 
                            role="NumberInt" 
                            placeholder="No. Interior" 
                            id=""
                            v-model="store.storeAddress.Address.NumeroInt"
                        />
                    </div>
                </fieldset>
                <!-- codigo postal y estado -->
                <fieldset class="flex flex-row items-center w-full mt-2 mb-2">
                    <div class="flex">
                        <input 
                            class="w-36" 
                            type="text" 
                            name="Zip" 
                            role="Zip" 
                            placeholder="Código Postal" 
                            id=""
                            v-model="store.storeAddress.Address.CodigoPostal"
                        />
                    </div>
                    <div class="flex items-center">
                        <label class="flex p-2" for="State">Estado</label>
                        <input 
                            class=" w-[25.125rem]" 
                            type="text" 
                            name="State" 
                            role="State" 
                            placeholder="Estado" 
                            id=""
                            v-model="store.storeAddress.Address.Estado"
                        />
                    </div>
                </fieldset>
                <!-- municipio -->
                <fieldset class="flex flex-row mt-2 mb-2">
                    <div class="flex">
                        <label class="flex mr-8" for="Municipality">Deleg./Municipio</label>
                        <input 
                            class="w-[28.525rem]" 
                            type="text" 
                            name="Municipality" 
                            placeholder="Municipio" 
                            id=""
                            v-model="store.storeAddress.Address.Municipio" 
                        />
                    </div>
                </fieldset>
                <!-- ciudad -->
                <fieldset class="flex flex-row mt-2 mb-2">
                    <div class="flex w-full">
                        <div class="flex w-28">
                            <label class="mr-4" for="City">Ciudad</label>
                        </div>
                        <div class="flex">
                            <input 
                                class="w-[28.525rem] ml-10" 
                                type="text" 
                                name="City" 
                                role="City" 
                                placeholder="Ciudad" 
                                id="" 
                                v-model="store.storeAddress.Address.Localidad"
                            />
                        </div>
                    </div>
                </fieldset>
                <!-- coloniua -->
                <fieldset class="flex flex-row mt-2">
                    <div class="flex">
                        <div class="flex w-28">
                            <label class="mr-8" for="Cologne">Colonia</label>
                        </div>
                        <div class="flex">
                            <input 
                                class="w-[28.525rem] ml-10" 
                                type="text" 
                                name="Cologne" 
                                placeholder="Colonia" 
                                id=""
                                v-model="store.storeAddress.Colonia"
                            />
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</template>