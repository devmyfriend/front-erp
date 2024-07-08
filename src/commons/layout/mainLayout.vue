<script setup>
  import { useTheme } from '@/commons/composables/useTheme';
  import sidebar from '@/commons/ui/sidebar/sidebar.vue';
  import { onBeforeMount, ref, watch } from 'vue';

  const { theme, setTheme } = useTheme();
  const temaActual = ref(theme.value); 

  function cambiarTema() {
      setTheme(temaActual.value);
  }

  onBeforeMount (() => {
    setTheme('myfriend');
  });
  watch(() => theme.value, (newValue) => {
        temaActual.value = newValue;
  });
</script>

<template>
    <!-- bg-general -->
    <div class="containerMy grid h-screen min-h-screen max-h-screen w-screen">   <!-- :class="[temaActual ? 'bg-general-100' : 'bg-general']" -->
        <div class="navbarMy bg-navbar px-4 py-2 text-center flex justify-between items-center h-[6vh] max-h-[6vh] w-[96vw] max-w-[96vw] box-border border-b-[2px] border-primary col-span-2"
            :class="[
            `bg-navbar-${temaActual}`,
            `border-primary-${temaActual}`
            ]"
        >
            <div class="flex flex-row gap-4">
            <h1 class="navbarTitle text-[4vh] leading-[4vh] font-bold p-0 text-start m-0" :class="temaActual === 'thefit' ? 'text-black' : 'text-white'">THE FIT GYM</h1>
            <select class="px-4" v-model="temaActual" @change="cambiarTema">
                <option value="myfriend">MyFriend</option>
                <option value="thefit">The Fit Gym / The Fit Bar</option>
                <option value="bonavida">Bonavida</option>
            </select>
            </div>
            <img src="/svg/generalIcons/userIco.svg" alt="Usuario" class="navbarUserImg h-full max-h-full">
        </div>

        <div class="
        sidebarMy min-w-[4vw] w-[4vw] max-h-screen overflow-hidden 
        flex flex-col text-secondaryFontColor" 
        :class="`bg-sidebar-${temaActual}`">
            <sidebar />
        </div>
        <div class="contentMy p-4 flex-auto flex flex-col max-h-[94vh] w-[96vw] max-w-[96vw]" :class="temaActual ? 'bg-general-100' : 'bg-general'">
            <router-view/>
        </div>
    </div>
</template>

<style scoped>
  @import url('@/commons/styles/styleLayout.css');
</style>
