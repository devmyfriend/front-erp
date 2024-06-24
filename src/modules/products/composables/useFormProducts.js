// src/modules/products/composables/useFormProducts.js

import { ref, onMounted, onBeforeMount } from 'vue';
import { useProductos } from '@/store/products';
import { useWindows } from '@/modules/products/composables/useWindows.js';

export function useFormProducts(props) {
    const store = useProductos();
    const { setTitle, setBtActivo, getCodigoProducto } = useWindows();

    const tipoProducto = ref(props.tipoProducto);
    const ListadoTiposProducto = ref([]);
    const codigoProducto = ref('');
    const producto = ref({});

    onBeforeMount(() => {
        setTitle('Formulario de Productos');
        setBtActivo(2);
    });

    onMounted(() => {
        codigoProducto.value = getCodigoProducto();
        if (codigoProducto.value != '') {
            store.obtenerProducto(codigoProducto.value).then(() => {
                producto.value = store.getProducto;
            });
        }
    });

    return {
        tipoProducto,
        ListadoTiposProducto,
        codigoProducto,
        producto,
    };
}
