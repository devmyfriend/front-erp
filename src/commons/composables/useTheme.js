import { ref, computed } from "vue";

const theme = ref(localStorage.getItem("theme") || "");

function setTheme(newTheme) {
  theme.value = newTheme;
  localStorage.setItem("theme", newTheme);
  document.documentElement.className = "";
  if (newTheme === "myfriend") {
    document.documentElement.classList.add("myfriend");
  } else if (newTheme === "thefit") {
    document.documentElement.classList.add("thefit");
  } else if (newTheme === "bonavida") {
    document.documentElement.classList.add("bonavida");
  }
}

const themeClass = computed(() => {
  return theme.value;
});

export function useTheme() {
  return {
    theme: themeClass,
    setTheme,
  };
}
