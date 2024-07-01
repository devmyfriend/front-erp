<script setup>
import { ref, watch, defineProps, createApp, h } from "vue";
import Swal from "sweetalert2";
import { useRegimen } from "@/store/regimenCfdiStore";
import EditRegimenModal from "@/modules/regimenCfdi/modals/EditRegimenModal.vue";
import modalEliminar from "@/commons/ui/modals/deleteModal.vue";

const props = defineProps({
  regimenList: {
    type: Array,
    required: true,
  },
});
const emits = defineEmits(["eEditarRegimen", "eBorrarRegimen"]);

const store = useRegimen();
const RegimenList = ref(props.regimenList);


watch(
  () => props.regimenList,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      RegimenList.value = newValue;
    }
  }
);

const editarRegimen = (regimen) => {
  emits("eEditarRegimen", regimen);
  Swal.fire({
    title: "Editar Régimen Fiscal",
    html: '<div id="edit-modal"></div>',
    showConfirmButton: false,
    didOpen: () => {
      const app = createApp({
        render() {
          return h(EditRegimenModal, {
            regimen: { ...regimen },
            onConfirm: async (updatedRegimen) => {
              try {
                await store.updateRegimen(updatedRegimen);
                Swal.fire({
                  title: "Régimen actualizado",
                  text: "El régimen fiscal ha sido actualizado con éxito.",
                  icon: "success",
                });
              } catch (error) {
                Swal.fire({
                  title: "Error al actualizar el régimen",
                  text: error.message,
                  icon: "error",
                });
              }
              Swal.close();
            },
            onCancel: () => {
              Swal.close();
            },
          });
        },
      });
      app.mount("#edit-modal");
    },
  });
};

const registroParaBorrar = ref(null);

const borrarRegimen = (regimen) => {
  registroParaBorrar.value = regimen;
};

const handleEliminar = async (regimen) => {
  registroParaBorrar.value = null;

  if (regimen) {
    try {
      await store.deleteRegimen(regimen.ClaveRegimenFiscal);
      Swal.fire({
        title: "Régimen eliminado",
        text: "El régimen fiscal ha sido marcado como inactivo.",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error al eliminar el régimen",
        text: error.message,
        icon: "error",
      });
    }
  }
};

const handleCancelar = () => {
  registroParaBorrar.value = null;
};
</script>

<template>
  <div class="table-container">
    <table class="w-full table-fixed text-sm mb-4">
      <thead class="sticky top-0 text-white">
        <tr
          class="sticky top-0 bg-primaryHeaderTable h-primaryHeaderTableHeight rounded-primaryHeaderTableRadius"
        >
          <th
            class="border-b-secondaryTableWidth border-b-primaryUnderline first:rounded-l-primaryHeaderTableRadius"
          >
            Clave Régimen
          </th>
          <th class="border-b-secondaryTableWidth border-b-primaryUnderline">
            Descripción
          </th>
          <th class="border-b-secondaryTableWidth border-b-primaryUnderline">
            Persona Moral
          </th>
          <th class="border-b-secondaryTableWidth border-b-primaryUnderline">
            Persona Física
          </th>
          <th class="border-b-secondaryTableWidth border-b-primaryUnderline">
            Activo
          </th>
          <th
            class="border-b-secondaryTableWidth border-b-primaryUnderline last:rounded-r-primaryHeaderTableRadius"
          >
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="RegimenList.length > 0">
          <template v-for="(regimen, index) in RegimenList" :key="index">
            <tr
              class="text-primaryFontColor"
              :class="{
                'bg-primaryBodyTable': index % 2 === 1 && regimen.Activo,
                'bg-secondaryBodyTable': index % 2 === 0 && regimen.Activo,
                'bg-disableBodyTable': !regimen.Activo,
                'text-white': !regimen.Activo,
                'font-medium': !regimen.Activo,
              }"
            >
              <td
                class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate first:rounded-l-primaryHeaderTableRadius"
              >
                {{ regimen.ClaveRegimenFiscal }}
              </td>
              <td
                class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate"
              >
                {{ regimen.Descripcion }}
              </td>
              <td
                class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate"
              >
                {{ regimen.Moral ? "✔️" : "" }}
              </td>
              <td
                class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate"
              >
                {{ regimen.Fisica ? "✔️" : "" }}
              </td>
              <td
                class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate"
              >
                {{ regimen.Activo ? "✔️" : "" }}
              </td>
              <td
                class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 last:rounded-r-primaryHeaderTableRadius min-w-16 text-center"
              >
                <div class="h-full flex items-center justify-center gap-1">
                  <img
                    src="/svg/tableIcons/editIco.svg"
                    alt="Editar"
                    class="cursor-pointer w-4 lg:w-6"
                    @click="editarRegimen(regimen)"
                    v-if="regimen.Activo"
                  />
                  <img
                    src="/svg/tableIcons/trashIco.svg"
                    alt="Borrar"
                    class="cursor-pointer w-4 lg:w-6"
                    @click="borrarRegimen(regimen)"
                    v-if="regimen.Activo"
                  />
                </div>
              </td>
            </tr>
          </template>
        </template>
        <tr v-else>
          <td colspan="6" class="text-center py-4">Sin registros</td>
        </tr>
      </tbody>
    </table>
    <modalEliminar
      v-if="registroParaBorrar != null"
      :registro="registroParaBorrar"
      :tipoRegistro="'Régimen Fiscal'"
      :id="registroParaBorrar.ClaveRegimenFiscal"
      @eEliminar="handleEliminar"
      @eCancelar="handleCancelar"
    />
  </div>
</template>

<style scoped>
.table-container {
  max-height: 600px;
  overflow-y: auto;
}
</style>
