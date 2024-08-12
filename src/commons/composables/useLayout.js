import { ref } from "vue";

const title = ref("Dashboard mini");
const view = ref("Dashboard");

function setViewTitle(newTitle) {
  view.value = newTitle;
}

function setTitle(newTitle) {
  title.value = newTitle;
}

export function useLayout() {
  return {
    title,
    view,
    setTitle,
    setViewTitle,
  };
}
