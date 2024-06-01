<script setup>
// impotaciones de vue
import { ref, reactive } from 'vue';

// importaciones de componentes
import titleH1 from '@/commons/ui/title-h1/title-h1.vue';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import Email from '@/commons/ui/icons/email.vue';
import Phone from '@/commons/ui/icons/phone.vue';
import Back from '@/commons/ui/icons/back.vue';
import Close from '@/commons/ui/icons/close.vue';
import btnSave from '@/commons/ui/btn-save/btn-save.vue';
import btnCancel from '@/commons/ui/btn-cancel/btn-cancel.vue';

// states

const showPhone = ref(false)
const showEmail = ref(false)
const showAddress = ref(true)



// controles de componentes

const handleClickPhone = ( value )=>{
        showPhone.value = value;
        showEmail.value = !showPhone.value;
        showAddress.value = !showPhone.value;


}

const handleClickEmail = ( value )=>{
        showEmail.value = value;
        showPhone.value = !showEmail.value;
        showAddress.value = !showEmail.value;


}

const handleClickAddress = ( value )=>{
        showAddress.value = value;
        showEmail.value = !showAddress.value;
        showPhone.value = !showAddress.value;


}
</script>

<template>
    <div class="w-[100%] px-2">
        <!-- header -->
        <div class="flex flex-row items-center">
            <div class="flex items-start w-[50%]">
                <titleH1>Sucursal</titleH1>
            </div>
            <div class="flex items-end justify-end w-[50%]">
                <Close class=" bg-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-700 font-bold"></Close>
            </div>
        </div>
        <!-- formulario -->
        <div>
            <form class="space-y-1" @submit.prevent="">
                <!-- sucursal y responsable -->
                <fielset class="w-[100%]">
                    <div class="flex flex-col space-y-2">
                        <div class="flex flex-col w-[100%]">
                            <label class="flex" for="BranchName">Sucursal</label>
                            <input class="w-[37.8125rem]" type="text" name="BranchName" role="BranchName" placeholder="Nombre de la Sucursal" id="">
                        </div>
                        <div class="flex flex-col">
                            <label for="Responsible">Responsable</label>
                            <input class="w-[37.8125rem]" type="text" name="Responsible" role="Responsable" placeholder="Responsable" id="">
                        </div>
                    </div>
                </fielset>
                <!-- domicilio -->
                <!-- calle numero exterior y numero interior -->
                <div v-if="showAddress">
                    <fieldset class="w-[100%]">
                        <titleH2>Domicilio</titleH2>
                        <hr>
                        <div class="flex flex-row pt-2 space-x-2">
                            <div class="flex flex-col">
                                <label for="Street">Calle</label>
                                <input class=" w-[18.75rem]" type="text" name="Street" role="Street" placeholder="Calle" id="">
                            </div>
                            <div class="flex flex-col">
                                <label for="NumberExt">No. Ext.</label>
                                <input class=" w-[8.991rem]" type="text" name="NumberExt" role="NumberExt" placeholder="No. Exterior" id="">
                            </div>
                            <div class="flex flex-col">
                                <label for="NumberInt">No. Int.</label>
                                <input class=" w-[8.991rem]" type="text" name="NumberInt" placeholder="No. Interior" id="">
                            </div>
                        </div>
                    </fieldset class="w-[100%]">
                    <!-- colonia -->
                    <fieldset class="w-[100%]">
                        <div class="flex flex-col">
                        <label for="Cologne">Colonia</label>
                        <input class=" w-[37.8125rem]" type="text" name="Cologne" role="Cologne" placeholder="Colonia" id="">
                    </div>
                    </fieldset class="w-[100%]">
                    <!-- codigo postal y estado -->
                    <fieldset class="w-[100%]">
                        <div class="flex flex-row space-x-2">
                            <div class="flex flex-col mr-4">
                                <label for="Zip">Código Postal</label>
                                <input class=" w-[18.75rem]" type="text" name="Zip" role="Zip" placeholder="Código Postal" id="">
                            </div>
                            <div class="flex flex-col">
                                <label for="State">Estado</label>
                                <input class=" w-[17.45rem]" type="text" name="State" role="State" placeholder="Estado" id="">
                            </div>
                        </div>
                    </fieldset class="w-[100%]">
                    <!-- municipio y ciudad -->
                    <fieldset class="w-[100%]">
                        <div class="flex flex-row space-x-2">
                            <div class="flex flex-col mr-9" >
                                <label for="Municipio">Municipio</label>
                                <input class="w-[17.45rem]" type="text" name="Municipality" role="Municipality" placeholder="Municipio" id="">
                            </div>
                            <div class="flex flex-col">
                                <label for="City">Ciudad</label>
                                <input class="w-[17.45rem]" type="text" name="City" role="City" placeholder="Ciudad" id="">
                            </div>
                        </div>
                    </fieldset>
                </div>
                <!-- Emails -->
                <div v-if="showEmail">
                    Correos
                </div>
                <!-- Teléfonos -->
                <div v-if="showPhone">
                    Telefonos
                </div>
                <div class="flex items-end justify-end pt-4 space-x-4 pr-10">
                    <div v-if="!showEmail" class="flex">
                        <Email 
                            class=" text-cyan-800 hover:text-cyan-950 hover:cursor-pointer"
                            @click="handleClickEmail(true)"
                        >
                            Agregar Email
                        </Email>
                    </div>
                    <div v-if="!showPhone" class="flex">
                        <Phone 
                            class=" text-cyan-800 hover:text-cyan-950 hover:cursor-pointer"
                            @click="handleClickPhone(true)"
                        >
                            Teéfono
                        </Phone>
                    </div>
                    <div v-if="!showAddress" class="flex">
                        <Back 
                            class=" text-cyan-800 hover:text-cyan-950 hover:cursor-pointer"
                            @click="handleClickAddress(true)"
                        >
                            Regresar
                        </Back>
                    </div>
                </div>
                <div class="flex items-center justify-center pt-4 space-x-4 pr-10">
                    <btnSave>Grabar</btnSave>
                    <btnCancel>Cancelar</btnCancel>
                </div>
            </form>
        </div>
        
    </div>

</template>

