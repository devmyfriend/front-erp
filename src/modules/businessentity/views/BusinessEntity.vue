<script setup>
// importaciones de vue
import { reactive } from 'vue';
// importaciones de store
import { useBusinessEntity } from '@/stores/businessentity/businessentity.js';
// importaciones de componentes
  import frmGeneralData from '@/modules/businessentity/components/frmGeneralData.vue';
  import btnSave from '@/commons/ui/btn-save/btn-save.vue';
  import btnCancel from '@/commons/ui/btn-cancel/btn-cancel.vue';
  import titleH1 from '@/commons/ui/title-h1/title-h1.vue';
  import addPlus from '@/commons/ui/icons/add-plus.vue';
  import Sucursal from '@/commons/ui/icons/sucursal.vue';

const store = useBusinessEntity();


</script>

<template>
  <div class="flex flex-col justify-center">
    <div class="flex flex-row ml-6">
      <titleH1 class=" font-bold">Empresas</titleH1>
    </div>
    <div class="flex flex-row  w-[81.96rem] h-[39.875rem]  bg-zinc-500" >
    <div class="flex flex-col">
      <frmGeneralData />
      <div class="flex flex-col m-6 p-2 border-[1px] border-white">
        <titleH1>Sucursales</titleH1>
        <div class="flex pt-4 pb-1">
          <addPlus></addPlus> <p class="mx-2">Agregar Sucuesales</p> <Sucursal></Sucursal> <p class="mx-2">Ver Sucursal</p>
        </div>
      </div>
      <div class="flex p*1 justify-center space-x-6">
        <btnSave>Grabar</btnSave>
        <btnCancel>Cancelar</btnCancel>         
      </div>
    </div>
    <div class="flex flex-col w-full">
      <div class="flex w-[100%]">
        <titleH1>Contacto</titleH1>
      </div>
    </div>
  </div>
  </div>
  
</template>
@/stores/businessentity/businessentity.js