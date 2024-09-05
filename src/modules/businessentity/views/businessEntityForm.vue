<script setup>
import { onBeforeMount , inject, reactive} from 'vue';



import { useTheme } from '@/commons/composables/theme';
import { useLayout } from '@/commons/composables/useLayout';
import btnSave from '@/commons/ui/btn-save/btn-save.vue';
/*
import addPlus from '@/commons/ui/icons/actionIcons/add-plus.vue'; 
import viewBranch from '@/commons/ui/icons/actionIcons/branchIco.vue'; 
*/


import frmGeneralData from '@/modules/businessEntity/components/frmGeneralData.vue';
import frmConcat from '@/modules/businessEntity/components/frmContact.vue'
import frmBranchs from '@/modules/businessEntity/components/frmBranchs.vue'

/*configuracion del tema*/

const { theme } = useTheme();
const { setTitle, setViewTitle } = useLayout();

/*fin de configuracion de tema*/

onBeforeMount(()=>{
    setTitle('Empresas');
    setViewTitle('Formulario de empresas');
})

//datos de empresa

const businessentity = reactive({
    EntidadNegocioId:   1,
    EsPropietaria:      true,
    NombreOficial:      '',
    RFC:                '',
    NombreComercial:    '',
    ClavePais:          'MEX',
    TaxId:              '',
    ClaveRegimenFiscal: '',
    PersonaFisica:      true,
    PersonaMoral:       false,
    Borrado:            false,
    logo:               '',
    Calle:              '',
    NumeroExt:          '',
    NumeroInt:          '',
    CodigoPostal:       '',
    Estado:             '',
    Municipio:          '',
    Localidad:          '',
    Colonia:            '',
    Pais:               ''
})

//datos del contacto de la empresa

const contactobusinessentity = reactive({
    EmpresaId:       0,
    Nombres:         '',
    ApellidoPaterno: '',
    ApellidoMaterno: '',
    Departamento:    '',
    Puesto:          '',
    CreadoPor:       0
})

// datos para teléfono para empresas.

const phonebueninessentity = reactive({
    EntidadNegocioId: 0,
    Email:            '',
    CreadorPor:       0
})

// datos de email para empresas

const emailbusinessentityt = reactive({
    EntidadNegocioId: 0,
    Email:            '',
    CreadorPor:       0
})

/* control para suscursales*/

const thereIsBranch = (businessentityid)=>{

    if( businessentityid>0 ){
        return true;
    }
    return false;
}

// funciones

const handleClick=()=>{
    console.log(businessentity)
}
</script>

<template>
    <div class="flex w-full max-h-full h-full overflow-y-scroll gap-4 flex-wrap lg:flex-nowrap">
    <!-- Formualrio de datos de la empresa -->
                <div class="flex flex-col lg:w-[50%] h-[100%] p-4 rounded-xl border frame w-full" :class="`border-${theme}-primary`">
                    <frmGeneralData :data="businessentity"></frmGeneralData>
                    <!-- comentar <div v-if="thereIsBranch(10)" class="flex flex-col w-full py-1 items-center">
                        <titleH2>Sucursales</titleH2>
                        <div class="flex w-full space-x-2 items-center">
                            <addPlus class="w-[1.5rem] h-[1.5rem]" /> <span class="text-[1rem]">Agregar Sucursales</span>
                            <viewBranch class="w-[1.5rem] h-[1.5rem]" /> <span class="text-[1rem]">Ver Sucursales</span>
                        </div>
                    </div> commentar  -->
                    <div class="flex mt-6 w-full justify-center">
                        <btnSave @click="handleClick">Guardar</btnSave>
                    </div>
                </div>
    <!-- Fin del formulario de datos de la empresa -->
    <!-- Contactos y sucursales -->
    <!-- Contacto -->
                <div v-if="!thereIsBranch(0)" class="flex flex-col lg:w-[50%] max-h-full overflow-y-scroll p-4 rounded-xl border w-full" :class="`border-${theme}-primary`">
                    <frmConcat></frmConcat>
                </div>
    <!-- Fin Contacto -->
    <!-- Sucursales -->
                <!-- <div v-if="thereIsBranch(0)" class="flex flex-col pl-2 pr-4 w-[50%]">
                    <frmBranchs></frmBranchs>
                </div> -->
    <!-- Fin de Sucursales -->
    <!-- Fin de Contactos y Sucursales -->
    </div>
</template>

<style scoped>
    .frame{
        overflow: auto;
    }
</style>