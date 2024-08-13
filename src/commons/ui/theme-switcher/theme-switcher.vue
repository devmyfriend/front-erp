<script setup>
import { useTheme } from '@/commons/composables/theme';
import { ref, onBeforeMount, watch } from 'vue';
import dropdownIco from '../icons/actionIcons/dropdownIco.vue';

const { theme, setTheme } = useTheme();
const temaActual = ref('');
const mostrarDropdown = ref(false);

function cambiarTema() {
    setTheme(temaActual.value);
    cerrarDropdown();
}

function abrirDropdown() {
    mostrarDropdown.value = !mostrarDropdown.value;
}

function cerrarDropdown() {
    mostrarDropdown.value = false;
}

onBeforeMount(() => {
    temaActual.value = theme.value;
    setTheme(temaActual.value);
});

watch(() => theme.value, (newValue) => {
    temaActual.value = newValue;
});
</script>

<template>
    
    <h1 class="font-bold p-0 text-start uppercase text-white leading-[4vh] w-max mr-4 lg:text-[2rem] title cursor-pointer" @click="abrirDropdown">
        {{ theme }}
    </h1>

    <select name="themeSwitcher"
        class="themeSwitcher hidden md:block px-4 min-h-6 h-2/3 max-h-8 py-0.5 
        cursor-pointer text-[0.8rem] shrink w-28 sm:w-auto" 
        v-model="temaActual"
        @change="cambiarTema">
        <option value="MyFriend">MyFriend</option>
        <option value="TheFit">The Fit Gym / The Fit Bar</option>
        <option value="Bonavida">Bonavida</option>
    </select>
    <div class="relative inline-block">
        <dropdownIco class="dropdownIco cursor-pointer block md:hidden max-h-3 hover:max-h-[14px] transition-all duration-200" @click="abrirDropdown"></dropdownIco>
        <div v-if="mostrarDropdown" class="dropdown-menu">
            <option @click="() => { temaActual = 'MyFriend'; cambiarTema(); }">MyFriend</option>
            <option @click="() => { temaActual = 'TheFit'; cambiarTema(); }">The Fit Gym / The Fit Bar</option>
            <option @click="() => { temaActual = 'Bonavida'; cambiarTema(); }">Bonavida</option>
        </div>
    </div>
</template>

<style scoped>
.relative {
    position: relative;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}
.dropdown-menu option {
    display: block;
    padding: 10px;
    cursor: pointer;
    white-space: nowrap;
}
.dropdown-menu option:hover {
    background: #f0f0f0;
}
.themeSwitcher {
    filter: drop-shadow(4px 2px 4px rgba(0, 0, 0, 0.4));
}
.dropdownIco{
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.4));
}
.title {
    filter: drop-shadow(3px 1px 6px rgba(0, 0, 0, 0.4)); 
}
</style>
