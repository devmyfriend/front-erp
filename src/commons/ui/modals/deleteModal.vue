<script setup>
import { onMounted } from 'vue';
import Swal from 'sweetalert2';

const confirmButtonColor = getComputedStyle(document.documentElement).getPropertyValue('--modal-confirm').trim();
const cancelButtonColor = getComputedStyle(document.documentElement).getPropertyValue('--modal-cancel').trim();

const emit = defineEmits(['eEliminar', 'eCancelar']);
const props = defineProps({
    registro: {
        type: Object,
        required: true
    },
    tipoRegistro: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});

const lanzarModal = () => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: `Estás a punto de eliminar el ${props.tipoRegistro} ${props.id}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: confirmButtonColor,
        cancelButtonColor: cancelButtonColor,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            emit('eEliminar', props.registro);
        }else{
            emit('eCancelar');
        }
    });
}

onMounted(() => {
    lanzarModal();
});

</script>

<template>
</template>

<style scoped>

</style>