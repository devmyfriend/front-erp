<script setup>
    import { onBeforeUnmount, onMounted, onUnmounted, onUpdated, ref } from 'vue';
    import Swal from 'sweetalert2';
    const emit = defineEmits(['eSeleccionar', 'eCancelar']);
    const props = defineProps({
        registros: {
            type: Array,
            required: true
        },
    });
    
    const showTable = () => {
        Swal.fire({
        title: `Selecciona una Clave Unidad`,
        html: `
        <table class="w-full table-fixed">
            <thead class="sticky top-0 bg-primaryHeaderTable text-white">
            <tr class="sticky top-0 bg-primaryHeaderTable h-primaryHeaderTableHeight rounded-primaryHeaderTableRadius">
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline first:rounded-l-primaryHeaderTableRadius last:rounded-r-primaryHeaderTableRadius">ID</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline first:rounded-l-primaryHeaderTableRadius last:rounded-r-primaryHeaderTableRadius">Nombre</th>
            </tr>
            </thead>
            <tbody>
            ${props.registros.map((row, index) => `
                <tr data-index="${index}" class="hover:bg-red-100 cursor-pointer" id="trSection">
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 first:rounded-l-primaryHeaderTableRadius last:rounded-r-primaryHeaderTableRadius text-center truncate" >${row.ClaveProductoServicio}</td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 first:rounded-l-primaryHeaderTableRadius last:rounded-r-primaryHeaderTableRadius text-center truncate" >${row.Descripcion}</td>
                </tr>
            `).join('')}
            </tbody>
        </table>

        <button 
        id="cancelButton" class="bg-modalCancel text-[1rem]
        p-[0.625rem] rounded-[0.25em] text-white mt-8 
        hover:bg-sidebar transition-all duration-300">
            CANCELAR
        </button>
        `,
        lang: 'es',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        didOpen: () => {
        document.querySelectorAll('#dataTable tbody tr').forEach(row => {
            row.addEventListener('click', () => {
            const index = row.getAttribute('data-index');
            const selectedData = props.registros[index];
            console.log('[Modal] Registro seleccionado: ', JSON.stringify(selectedData.ClaveProductoServicio));
            Swal.close();
            emit('eSeleccionar', selectedData);
            });
        });

        document.getElementById('cancelButton').addEventListener('click', () => {
            emit('eCancelar');
        });

        document.getElementById('trSection').addEventListener('click', () => {
            console.log('Click en trSection');
        });

        }
    });
    };

    onMounted(() => {
        showTable();
    });

    const cerrarModal = () => {
        console.log('[Cerrando]');
        emit('eCancelar');
        Swal.close();
    };

    onUnmounted(() => {
        cerrarModal();
    });
</script>

<template>
</template>

<style>
    .table {
        width: 100%;
        border-collapse: collapse;
    }
    .table th, .table td {
        border: 1px solid #ddd;
        padding: 8px;
    }
    .table th {
        background-color: #f2f2f2;
    }
</style>
    