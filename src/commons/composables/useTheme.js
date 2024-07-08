import { ref, computed } from "vue";

const theme = ref(localStorage.getItem("theme") || "myfriend");
const imagen = ref('/svg/empresas/myfriend.svg');

const setTheme = (newTheme) => {
  theme.value = newTheme;
  localStorage.setItem("theme", newTheme);

  switch (newTheme) {
    case 'myfriend':
      imagen.value =  '/svg/empresas/myfriend.svg';
      break;
    case 'thefit':
      imagen.value =  '/svg/empresas/fitgym.svg';
      break;
    case 'bonavida':
      imagen.value =  '/svg/empresas/bonavida.svg';
      break;
    default:
      imagen.value =  '/svg/empresas/myfriend.svg';
  }
}

const themeClass = computed(() => {
  return theme.value;
});

const themeImage = computed(() => {
  return imagen.value;
});
export function useTheme() {
  return {
    theme: themeClass,
    themeImage: themeImage,
    setTheme,
  };
}
