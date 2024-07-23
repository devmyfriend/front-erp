<script setup>
  import { useTheme } from '@/commons/composables/theme';
  import sidebar from '@/commons/ui/sidebar/sidebar.vue';
  import { onBeforeMount, ref, watch } from 'vue';

  const { theme, setTheme } = useTheme();
  const temaActual = ref(''); 

  function cambiarTema() {
      setTheme(temaActual.value);
  }

  onBeforeMount (() => {
    setTheme('MyFriend');
    temaActual.value = 'MyFriend';
  });
  watch(() => theme.value, (newValue) => {
        temaActual.value = newValue;
  });
</script>

<template>
    <div class="containerMy grid h-screen min-h-screen max-h-screen w-screen">
        <div class="navbarMy px-4 py-2 text-center flex justify-between items-center h-[6vh] max-h-[6vh] w-[96vw] max-w-[96vw] box-border col-span-2"
            :class="`bg-${theme}-navbar`"
        >
            <div class="flex flex-row gap-4">
            <h1 class="navbarTitle text-[4vh] leading-[4vh] font-bold p-0 text-start m-0 uppercase" :class="'text-white'"> {{ theme }}</h1>
            <select class="px-4" v-model="temaActual" @change="cambiarTema">
                <option value="MyFriend">MyFriend </option>
                <option value="TheFit">The Fit Gym / The Fit Bar</option>
                <option value="Bonavida">Bonavida</option>
            </select>
            </div>
            <img src="/svg/generalIcons/userIco.svg" alt="Usuario" class="navbarUserImg h-full max-h-full">
        </div>

        <div class="
        sidebarMy min-w-[4vw] w-[4vw] max-h-screen overflow-hidden 
        flex flex-col" 
        :class="`bg-${theme}-sidebar text-${theme}-subtext`">
            <sidebar />
        </div>
        <div class="contentMy p-4 flex-auto flex flex-col max-h-[94vh] w-[96vw] max-w-[96vw] bg-white">
            <router-view/>
        </div>
    </div>
</template>

<style scoped>
  @import url('@/commons/styles/styleLayout.css');
</style>
