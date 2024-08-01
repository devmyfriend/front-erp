import { ref } from 'vue';
import { taxStore } from '@/store/taxStore';
const store = taxStore();

const ListadoImpuestos = ref([]);
const showModal = ref(false);
const modoFormulario = ref(0);
const modalData = ref(null);
const bodyFrm = ref({ ClaveImpuesto: '', Nombre: '' });

const cargarImpuestos = async () => {
    await store.cargarImpuestos();
    ListadoImpuestos.value = store.getImpuestos;
};

const cargarDatos = async () => {
    await cargarImpuestos();
};

const esperarTabla = (data) => {
    const [impuesto, accion] = data;
    if (accion === 1) {
        subirDatos(impuesto);
    } else if (accion === 2) {
        modalData.value = impuesto.ClaveImpuesto;
    }
};

const subirDatos = (datos) => {
    bodyFrm.value = { ...datos };
    showModal.value = true;
    modoFormulario.value = 1;
};

const esperarModal = (datos) => {
    if (modoFormulario.value === 0) {
        store.crearImpuesto(bodyFrm.value).then(() => {
            cargarDatos();
            esperarCancelar();
        });
    } else if (modoFormulario.value === 1) {
        store.actualizarImpuesto(datos).then(() => {
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
        ClaveImpuesto: '',
        Nombre: '',
    };
};

const borrarRegistro = () => {
    store.eliminarImpuesto(modalData.value).then(() => {
        cargarDatos();
        esperarCancelar();
    });
};

export function useTaxes() {
    return {
        ListadoImpuestos,
        showModal,
        modoFormulario,
        modalData,
        bodyFrm,
        cargarImpuestos,
        cargarDatos,
        esperarTabla,
        subirDatos,
        esperarModal,
        esperarCancelar,
        borrarRegistro,
    };
}
