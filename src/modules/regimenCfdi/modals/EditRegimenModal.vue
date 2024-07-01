<template>
  <div style="display: flex; flex-direction: column; gap: 1rem; text-align: left;">
    <div>
      <label for="clave" style="font-weight: bold; display: block;">Clave</label>
      <input id="clave" v-model="regimen.ClaveRegimenFiscal" readonly class="swal2-input">
    </div>
    
    <div>
      <label for="descripcion" style="font-weight: bold; display: block;">Descripción</label>
      <input id="descripcion" v-model="regimen.Descripcion" class="swal2-input">
    </div>

    <regimen-checklist
      :fisica="regimen.Fisica"
      :moral="regimen.Moral"
      @update:fisica="updateFisica"
      @update:moral="updateMoral"
    />

    <div style="display: flex; justify-content: space-between; margin-top: 1rem;">
      <button @click="confirm" class="swal2-confirm swal2-styled">Actualizar</button>
      <button @click="cancel" class="swal2-cancel swal2-styled">Cancelar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import regimenChecklist from "@/commons/ui/regimen-checklist/regimen-checklist.vue";

const props = defineProps({
  regimen: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['confirm', 'cancel']);

const regimen = ref({ ...props.regimen });

watch(() => props.regimen, (newVal) => {
  regimen.value = { ...newVal };
}, { immediate: true });

const updateFisica = (value) => {
  regimen.value.Fisica = value;
};

const updateMoral = (value) => {
  regimen.value.Moral = value;
};

const confirm = () => {
  emit('confirm', regimen.value);
};

const cancel = () => {
  emit('cancel');
};
</script>

<style scoped>
input.swal2-input {
  display: block;
  width: 80%;
  margin-bottom: 10px;
}
button {
  margin-right: 10px;
}
</style>
