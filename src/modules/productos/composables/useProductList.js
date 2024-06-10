import { ref } from 'vue';

const title = ref('Productos');

function setTitle(newTitle) {
  console.log('setting title to ' + newTitle);
  title.value = newTitle;
}

function getTitle(){
  return title.value;
}

export function useProductList() {
  return {
    title,
    setTitle,
    getTitle
  };
}
