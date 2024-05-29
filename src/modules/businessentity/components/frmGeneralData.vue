<script setup>
    import titleH1 from '@/commons/ui/title-h1/title-h1.vue';
    import btnSave from '@/commons/ui/btn-save/btn-save.vue';
    import btnCancel from '@/commons/ui/btn-cancel/btn-cancel.vue';
</script>

<template>
    <div class="flex flex-col w-[40.93rem] px-6 pt-6 pb-0  bg-zinc-500">
        <div class="flex w-[100%]">
            <titleH1>Datos Generales</titleH1>
        </div>
        <div class="">
            <form @submint.prevent>
                <!-- datos de la empresa -->
                <!-- id y logo -->
                <fieldset class="flex flex-row items-center w-full mt-2 mb-2">
                    <div class="flex mr-2">
                        <input 
                            class="w-36" 
                            name="BusinessEntityId" 
                            role="Id" 
                            readonly 
                            type="text" 
                            placeholder="Id de la empresa" 
                        />
                    </div>
                </fieldset>
                <!-- rfc y razón social -->
                <fieldset class="flex flex-row w-full mt-2 mb-2">
                    <div class="flex">
                        <input
                            class=" flex flex-row w-36" 
                            name="OfficialNumber" 
                            role="RFC" 
                            type="text" 
                            placeholder="R. F.C."
                        />
                    </div>
                    <div class="flex w-full mx-2">
                        <input
                            class=" rounded-md p-2 w-full "
                            name="OfficialName" 
                            role="OfficialName" 
                            type="text"
                            placeholder="Razón Social"
                        />
                    </div>
                </fieldset>
                <!-- Pais -->
                <Fieldset class="flex flex-row items-center justify-center w-full mt-2 mb-2">
                    <div class="flex mr-2">
                        <label for="Contry">País</label>
                    </div>
                    <div class="flex w-full">
                        <select class="w-full" name="Contry" >
                            <option value="">-- SELECCIONA UN PAIS --</option>
                        </select>
                    </div>
                </Fieldset>
                <!-- persona fisica y moral  -->
                <Fieldset class="flex flex-row w-full mt-2 mb-2">
                    <div class="flex mr-2">
                        <label class="mr-2" for="Fisica">Persona Fisica</label>
                        <input name="Fisica" role="PhysicalPerson" readonly type="radio">
                    </div>
                    <div class="flex">
                        <label class="mr-2" for="Moral">Persona Moral</label>
                        <input name="Moral" role="MoralPerson" readonly type="radio" >
                    </div>
                </Fieldset>
                <!-- Régimen fiscal -->
                <Fieldset class="flex flex-row items-center justify-center w-full">
                    <div class="flex mr-2">
                        <label class="mr-2" for="TaxRegime">Régimen</label>
                    </div>
                    <div class="flex w-full">
                        <select class="w-full" name="TaxRegime">
                            <option value="">-- REGIMEN --</option>
                        </select>
                    </div>
                </Fieldset>
                <!-- nombre comercial -->
                <Fieldset class="flex flex-row mt-2 mb-2">
                    <div class="flex w-full">
                        <input class="w-full" name="TradeName" role="TradeName" readonly type="text" placeholder="Nombre Comercial">
                    </div>
                </Fieldset>
                <hr>
                <div class="flex w-[100%] mt-2">
                    <titleH1>Datos Generales</titleH1>
                </div>
                <!-- calle numero ext numero int -->
                <fieldset class="flex flex-row w-full mt-2 mb-2">
                    <div class="flex">
                        <input class="flex w-[19.125rem] mr-2" type="text" name="Street" role="Street" placeholder="Calle" id="">
                        <input class="flex w-36 mr-2" type="text" name="NumberExt" role="NumberExt" placeholder="No. Exterior" id="">
                        <input class="flex w-36 mr-2" type="text" name="NumberInt" role="NumberInt" placeholder="No. Interior" id="">
                    </div>
                </fieldset>
                <!-- codigo postal y estado -->
                <fieldset class="flex flex-row w-full mt-2 mb-2">
                    <div class="flex">
                        <input class="w-36" type="text" name="Zip" role="Zip" placeholder="Código Postal" id="">
                    </div>
                    <div class="flex">
                        <label class="flex p-2" for="State">Estado</label>
                        <input class=" w-[25.125rem]" type="text" name="State" role="State" placeholder="Estado" id="">
                    </div>
                </fieldset>
                <!-- municipio -->
                <fieldset class="flex flex-row mt-2 mb-2">
                    <div class="flex">
                        <label class="flex mr-8" for="Municipality">Deleg./Municipio</label>
                        <input class="w-[28.525rem]" type="text" name="Municipality" placeholder="Municipio" id="">
                    </div>
                </fieldset>
                <!-- ciudad -->
                <fieldset class="flex flex-row mt-2 mb-2">
                    <div class="flex w-full">
                        <div class="flex w-28">
                            <label class="mr-4" for="City">Ciudad</label>
                        </div>
                        <div class="flex">
                            <input class="w-[28.525rem] ml-10" type="text" name="City" role="City" placeholder="Ciudad" id="">
                        </div>
                    </div>
                </fieldset>
                <!-- coloniua -->
                <fieldset class="flex flex-row mt-2 mb-2">
                    <div class="flex">
                        <div class="flex w-28">
                            <label class="mr-8" for="Cologne">Colonia</label>
                        </div>
                        <div class="flex">
                            <input class="w-[28.525rem] ml-10" type="text" name="Cologne" placeholder="Colonia" id="">
                        </div>
                    </div>
                </fieldset>
                <div class="flex flex-row p-4 justify-center space-x-6 w-full">
                    <btnSave>Grabar</btnSave>
                    <btnCancel>Cancelar</btnCancel>         
                </div>
            </form>
        </div>
    </div>
</template>