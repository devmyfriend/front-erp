import { ref } from "vue";

const title = ref("Productos");
const btActivo = ref(0);
const codigoProducto = ref('');

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

function setCodigoProducto(newCodigoProducto) {
  codigoProducto.value = newCodigoProducto;
}
function getCodigoProducto() {
  return codigoProducto.value;
}

export function useWindows() {
  return {
    title,
    setTitle,
    getTitle,
    setBtActivo,
    getBtActivo,
    setCodigoProducto,
    getCodigoProducto
  };
}
