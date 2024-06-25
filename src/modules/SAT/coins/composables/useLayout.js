import { ref } from "vue";

const title = ref("Productos");

function setTitle(newTitle) {
  title.value = newTitle;
}

function getTitle() {
  return title.value;
}

export function useWindows() {
  return {
    title,
    setTitle,
    getTitle,
  };
}
