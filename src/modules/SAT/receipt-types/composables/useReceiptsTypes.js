import { ref } from 'vue';
import { receiptStore } from '@/store/receiptStore';
const store = receiptStore();

const ListadoComprobantes = ref([]);
const showModal = ref(false);
const modoFormulario = ref(0);
const modalData = ref(null);
const bodyFrm = ref({ ClaveTipoDeComprobante: '', Descripcion: '' });

const cargarComprobantes = async () => {
    await store.cargarComprobantes();
    ListadoComprobantes.value = store.getComprobantes;
}

const cargarDatos = async () => {
    await cargarComprobantes();
};

const esperarTabla = (data) => {
    const [comprobante, accion] = data;
    if (accion === 1) {
        subirDatos(comprobante);
    } else if (accion === 2) {
        modalData.value = comprobante.ClaveTipoDeComprobante;
    }
};

const subirDatos = (datos) => {
    bodyFrm.value = { ...datos };
    showModal.value = true;
    modoFormulario.value = 1;
};

const esperarModal = (datos) => {
    if (modoFormulario.value === 0) {
        store.crearComprobante(bodyFrm.value).then(() => {
            cargarDatos();
            esperarCancelar();
        });
    } else if (modoFormulario.value === 1) {
        store.actualizarComprobante(datos).then(() => {
            cargarDatos();
            esperarCancelar();
        });
    }
};

const esperarCancelar = () => {
    modalData.value = null;
    showModal.value = false;
    modoFormulario.value = 0;
    bodyFrm.value = {
        ClaveTipoDeComprobante: '',
        Descripcion: '',
    };
};

const borrarRegistro = () => {
    store.eliminarComprobante(modalData.value).then(() => {
        cargarDatos();
        esperarCancelar();
    });
};

export function useReceiptsTypes() {
    return {
        ListadoComprobantes,
        cargarComprobantes,
        showModal,
        modoFormulario,
        modalData,
        bodyFrm,
        cargarDatos,
        esperarTabla,
        subirDatos,
        esperarModal,
        esperarCancelar,
        borrarRegistro,
    };
}
