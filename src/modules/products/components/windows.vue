<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue';
import closeIco from '@/commons/ui/icons/actionIcons/closeIco.vue';
import { useTheme } from '@/commons/composables/theme';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const { theme } = useTheme();

const dropdownIco = defineAsyncComponent(() => import('@/commons/ui/icons/actionIcons/dropdownIco.vue'));
const IconCommunity = defineAsyncComponent(() => import('@/commons/components/icons/IconCommunity.vue'));
const IconDocumentation = defineAsyncComponent(() => import('@/commons/components/icons/IconDocumentation.vue'));
const IconEcosystem = defineAsyncComponent(() => import('@/commons/components/icons/IconEcosystem.vue'));
const IconSupport = defineAsyncComponent(() => import('@/commons/components/icons/IconSupport.vue'));
const IconTooling = defineAsyncComponent(() => import('@/commons/components/icons/IconTooling.vue'));

const tabs = ref([
    { Name: 'Ventanas', route: 'products'  ,Component: dropdownIco },
    { Name: 'Listado', route: 'productsList'  ,Component: IconCommunity },
    { Name: 'Formulario', route: 'productsForm'  ,Component: IconDocumentation },
]);

const btnActivo = ref(parseInt(localStorage.getItem('btnActivo')) || 1);

const changeView = (view, index) => {
    router.push({ name: view.route });
    btnActivo.value = index;
    localStorage.setItem('btnActivo', index);
    console.log('El boton activo es: ', btnActivo.value);
}
</script>

<template>
    <div class="flex-grow h-inputHeight flex flex-row justify-between" :class="`bg-${theme}-primary`">
        <div class="flex flex-row overflow-x-auto">
            <button v-for="(tab, index) in tabs" :key="index"
            class="cursor-pointer flex-shrink-0 text-white px-4 border text-xs md:text-base"
            :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover border-${theme}-primary-hover ${ btnActivo === index ? `bg-${theme}-primary-hover` : ''}`"
            @click="changeView(tab, index)" >
                {{ tab.Name }}
            </button>
        </div>
        <closeIco class="h-full mx-4"/>
    </div>
</template>

<style scoped>

</style>