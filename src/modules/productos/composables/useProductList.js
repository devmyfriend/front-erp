import { ref } from "vue";

const title = ref("Productos");
const btActivo = ref(0);

function setTitle(newTitle) {
  title.value = newTitle;
}

function getTitle() {
  return title.value;
}

function setBtActivo(newBtActivo) {
  btActivo.value = newBtActivo;
}

function getBtActivo() {
  return btActivo.value;
}

export function useProductList() {
  return {
    title,
    setTitle,
    getTitle,
    setBtActivo,
    getBtActivo,
  };
}
