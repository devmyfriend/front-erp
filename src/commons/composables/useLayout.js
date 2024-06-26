import { ref } from "vue";

const title = ref("Módulo");

function setTitle(newTitle) {
  title.value = newTitle;
}

function getTitle() {
  return title.value;
}

export function useLayout() {
  return {
    title,
    setTitle,
    getTitle,
  };
}
