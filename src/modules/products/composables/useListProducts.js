import { ref } from "vue";
import { useProductos } from '@/store/productsStore'
import Swal from "sweetalert2";
const store = useProductos();
const confirmButtonColor = getComputedStyle(document.documentElement).getPropertyValue('--modal-confirm').trim();
const cancelButtonColor = getComputedStyle(document.documentElement).getPropertyValue('--modal-cancel').trim();

const tipoProducto = ref('Todos');
const ListadoProductos = ref([]);
const ListadoTiposProductos = ref([]);

const CodigoProducto = ref('');

const esperarBusqueda = (texto) => {
    if (texto === undefined) {
        if (tipoProducto.value == 'Todos') {
            cargarDatos();
        } else {
            store.cargarProductos().then(() => {
                ListadoProductos.value = store.getProductos.filter(producto => producto.NombreTipoProducto == tipoProducto.value);
                if (ListadoProductos.value.length == 0) {
                    Swal.fire({
                        icon: 'info',
                        title: 'No hay productos',
                        text: 'No hay productos de este tipo'
                    });
                    tipoProducto.value = 'Todos';
                }
            });
        }
    } else {
        ListadoProductos.value = store.getProductos;
    }
}
const cargarDatos = async () => {
    store.cargarProductos().then(() => {
        if (tipoProducto.value == 'Todos') {
            ListadoProductos.value = store.getProductos;
        } else {
            ListadoProductos.value = store.getProductos.filter(producto => producto.NombreTipoProducto == tipoProducto.value);
            if (ListadoProductos.value.length == 0) {
                Swal.fire({
                    icon: 'info',
                    title: 'No hay productos',
                    text: 'No hay productos de este tipo'
                });
                tipoProducto.value = 'Todos';
            }
        }
    });

    store.cargarTiposProducto().then(() => {
        ListadoTiposProductos.value = store.getTiposProducto;
    });
}
const editarProducto = (codigoProducto) => {
    CodigoProducto.value = codigoProducto;
    router.push({ name: 'formProducts', params: { tipo: tipoProducto, id: codigoProducto } });
}
const borrarProducto = (producto) => {

    const payload = {
        ProductoId: producto.ProductoId,
        BorradoPor: 2,
    }
    store.borrarProducto(payload).then((res) => {
        cargarDatos();
        if (res) {
            Swal.fire({
                icon: 'success',
                title: 'Producto eliminado',
                text: 'El producto ha sido eliminado correctamente'
            });
        }
    });
}

const borrarCodigoProducto = () => {
    setCodigoProducto('');
}

const setCodigoProducto = (codigoProducto) => {
    CodigoProducto.value = codigoProducto;
}

export function useListProducts() {
    return {
        tipoProducto,
        ListadoProductos,
        ListadoTiposProductos,
        CodigoProducto,
        esperarBusqueda,
        cargarDatos,
        editarProducto,
        borrarProducto,
        borrarCodigoProducto,
        setCodigoProducto
    };
}
