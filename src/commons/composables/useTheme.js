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
const navbarClass = computed(() => {
  if (!theme.value || theme.value === "") {
    return "bg-navbar";
  }
  return `bg-navbar-${theme.value}`;
});
const buttonClass = computed(() => {
  if (!theme.value || theme.value === "") {
    return "bg-primary";
  }
  return `bg-${theme.value}-400`;
});
const headerTableClass = computed(() => {
  if (!theme.value || theme.value === "") {
    return "bg-primaryHeaderTable";
  }
  return `bg-primaryHeaderTable-${theme.value}`;
});
const textClass = computed(() => {
  if (!theme.value || theme.value === "" || theme.value === "thefit") {
    return "text-primaryFontColor";
  }
  return "text-secondaryFontColor";
});

export function useTheme() {
  return {
    theme: themeClass,
    navbarClass /* Borrar */,
    textClass /* Borrar */,
    buttonClass, /* Borrar */
    headerTableClass, /* Borrar */
    setTheme,
  };
}
