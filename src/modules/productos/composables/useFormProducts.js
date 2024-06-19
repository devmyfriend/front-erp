// src/modules/productos/composables/useFormProducts.js

import { ref, onMounted, onBeforeMount } from 'vue';
import { useProductos } from '@/store/index';
import { useVentanas } from '@/modules/productos/composables/useVentanas.js';

export function useFormProducts(props) {
    const store = useProductos();
    const { setTitle, setBtActivo, getCodigoProducto } = useVentanas();

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
                console.log('[FRM]: El producto cargado es: ' + JSON.stringify(producto.value));
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
