<script setup>
    import titleH1 from '@/commons/ui/title-h1/title-h1.vue';
</script>

<template>
    <div class="flex flex-col w-[40.93rem] px-6 pt-6 pb-0  bg-zinc-500">
        <div class="flex items-start w-full">
            <titleH1>Datos Generales</titleH1>
        </div>
        <div class="flex items-start">
            <form @submint.prevent>
                <!-- datos de la empresa -->
                <!-- id y logo -->
                <fieldset class="flex flex-row items-center mt-2 mb-2">
                    <div class="flex mr-2">
                        <label 
                            class="mr-2 pt-2 pb-2 md:hidden" 
                            for="BusinessEntityId"
                        >
                            Id
                        </label>
                        <input 
                            class="w-36 md:w-full bg-success" 
                            name="BusinessEntityId" 
                            role="Id" 
                            readonly 
                            type="text" 
                            placeholder="Id de la empresa" 
                        />
                    </div>
                    <!-- <div class="flex">
                        <label
                            class="mr-2 pt-2 pb-2" 
                            for="Logo"
                        >
                            Logotipo
                        </label>
                        <input
                            class=" rounded-md p-2 w-36"
                            name="Logo" 
                            role="Logotipo" 
                            type="file">
                    </div> -->
                </fieldset>
                <!-- rfc y razón social -->
                <fieldset class="flex flex-row w-full">
                    <div class="flex flex-col w-full">
                        <label
                            class=" flex flex-row w-full mr-2 pt-2 pb-2 md:hidden" 
                            for="OfficialNumber"
                        >
                            R.F.C.
                        </label>
                        <input
                            class=" flex flex-row rounded-md p-2 w-36 md:w-full" 
                            name="OfficialNumber" 
                            role="RFC" 
                            type="text" 
                            placeholder="R. F.C."
                        />
                    </div>
                    <div class="flex w-full mx-2">
                        <label 
                            class="mr-2 pt-2 pb-2 md:hidden"
                            for="OfficialName"
                        >
                            Razón Social
                        </label>
                        <input
                            class=" rounded-md p-2 md:w-full "
                            name="OfficialName" 
                            role="OfficialName" 
                            type="text"
                            placeholder="Razón Social"
                        />
                    </div>
                </fieldset>
                <!-- Pais -->
                <Fieldset class="flex flex-row">
                    <div class="flex">
                        <label for="Contry">País</label>
                    </div>
                    <div class="flex">
                        <select name="Contry" >
                            <option value=""></option>
                        </select>
                    </div>
                </Fieldset>
                <!-- persona fisica y moral  -->
                <Fieldset class="flex flex-row">
                    <div class="flex">
                        <label for="Fisica">Persona Fisica</label>
                        <input name="Fisica" role="PhysicalPerson" readonly type="radio">
                    </div>
                    <div class="flex">
                        <label for="Moral">Persona Moral</label>
                        <input name="Moral" role="MoralPerson" readonly type="radio" >
                    </div>
                </Fieldset>
                <!-- Régimen fiscal -->
                <Fieldset class="flex flex-row">
                    <div class="flex">
                        <label for="TaxRegime">Régimen</label>
                        <select name="TaxRegime">
                            <option value=""></option>
                        </select>
                    </div>
                </Fieldset>
                <!-- nombre comercial -->
                <Fieldset class="flex flex-row">
                    <div class="flex">
                        <label for="TradeName">Nombre Comercial</label>
                        <input name="TradeName" role="TradeName" readonly type="text" placeholder="Nombre Comercial
                        ">
                    </div>
                </Fieldset>
            </form>
        </div>
    </div>
</template>