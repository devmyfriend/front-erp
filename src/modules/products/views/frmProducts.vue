<script setup>
import formulario from '@/modules/products/components/frmProducts.vue';
import formularioImagen from '@/modules/products/components/frmImage.vue';
import { useFormProducts } from '@/modules/products/composables/useFormProducts.js';

const props = defineProps({
    tipoProducto: {
        type: String,
        default: 'Todos'
    }
});

const { producto } = useFormProducts(props);
</script>

<template>
    <div class="w-full h-full max-h-full min-h-full p-4">
        <h2 class="text-h2Size font-h2Weight text-primaryFontColor m-h2Margin"> Formulario de Productos </h2>
        <main class="flex justify-between text-primaryFontColor items-start min-w-full max-w-full bg-transparent mb-2 xl:flex-nowrap flex-wrap">
            <formulario :producto="producto" />

            <section class="min-w-full max-w-full xl:min-w-[35%] xl:max-w-[35%] bg-primaryFrmContainer min-h-min rounded-2xl overflow-hidden mb-8 xl:mb-0">                
                <formularioImagen/>            
            </section>
        </main>
    </div>
</template>

<style scoped>

</style>
