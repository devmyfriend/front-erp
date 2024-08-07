<!-- <template>
</template>
  
<script setup>
  import { ref, watch } from 'vue';
  import Swal from 'sweetalert2';
  import tablaClavesProductos from '@/modules/products/components/modals/tablaClavesProductos.vue';
  const emit = defineEmits(['eEstadoModal']);
  
  const props = defineProps({
    registro: {
      type: String,
      required: false,
      default: '' 
    },
    mostrar: {
      type: Boolean,
      required: true
    }
  });


  
  watch(() => props.mostrar, (newVal) => {
    if (newVal) {
      Swal.fire({
        title: 'Registro: ',
        html: `<tablaClavesProductos :registro='registro' />` ,
        confirmButtonText: 'Ok'
      }).then(() => {
        emit('eEstadoModal', false);
      });
    }
  });
</script>
 -->

<template>
</template>

<script setup>
import { ref, watch } from 'vue';
import Swal from 'sweetalert2';
import { createApp, h } from 'vue';
import tablaClavesProductos from '@/modules/products/components/modals/tablaClavesProductos.vue';

const emit = defineEmits(['eEstadoModal']);

const props = defineProps({
  registro: {
    type: Object,
    required: false,
    default: () => ({})
  },
  mostrar: {
    type: Boolean,
    required: true
  }
});

const showModal = () => {
  const wrapper = document.createElement('div');
  Swal.fire({
    title: 'Registro:',
    html: wrapper,
    confirmButtonText: 'Ok',
    didOpen: () => {
      createApp({
        render() {
          return h(tablaClavesProductos, { registro: props.registro });
        }
      }).mount(wrapper);
    }
  }).then(() => {
    emit('eEstadoModal', false);
  });
};

watch(() => props.mostrar, (newVal) => {
  if (newVal) {
    showModal();
  }
});
</script>
