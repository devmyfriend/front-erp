<script setup>
import { ref } from "vue";
import { useRegimen } from "@/store/regimenCfdiStore";
import regimenChecklist from "@/commons/ui/regimen-checklist/regimen-checklist.vue";
import Swal from "sweetalert2";
import Cancel from "@/commons/ui/btn-cancelar/btn-cancelar.vue";

const store = useRegimen();
const regimen = ref({
  ClaveRegimenFiscal: "",
  Descripcion: "",
  Fisica: false,
  Moral: false,
});

const emit = defineEmits(["regimenCreated", "cancel"]);

const createRegimen = async () => {
  try {
    await store.createRegimen(regimen.value);
    Swal.fire({
      title: "Régimen creado",
      text: "El nuevo régimen fiscal ha sido creado con éxito.",
      icon: "success",
    });
    emit("regimenCreated");
    regimen.value = {
      ClaveRegimenFiscal: "",
      Descripcion: "",
      Fisica: false,
      Moral: false,
    };
  } catch (error) {
    Swal.fire({
      title: "Error al crear el régimen",
      text: error.response && error.response.data ? JSON.stringify(error.response.data) : error.message,
      icon: "error",
    });
    console.error("Error al crear el régimen:", error);
  }
};
</script>

<template>
  <div class="create-regimen-option-container">
    <div class="form-container">
      <input
        v-model="regimen.ClaveRegimenFiscal"
        placeholder="Clave"
        class="input-field-clave"
      />
      <input
        v-model="regimen.Descripcion"
        placeholder="Descripción"
        class="input-field-descripcion"
      />
      <button @click="createRegimen" class="add-button">+</button>
      <div class="checkbox-group">
        <regimen-checklist
          v-model:fisica="regimen.Fisica"
          v-model:moral="regimen.Moral"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.create-regimen-option-container {
  display: flex;
  margin-bottom: 1rem;
  font-size: medium;
  flex-direction: column;
  border-radius: 5px;
}

.form-container {
  align-items: flex-start;
}

.input-field-descripcion {
  width: 60%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}
.input-field-clave {
  padding: 0.5rem 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.checkbox-group {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.add-button {
  padding: 0.4rem 1rem;
  color: white;
  background-color: #999;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  align-self: flex-end;
  margin: 1rem;
}

.add-button:hover {
  background-color: #f16136;
}
</style>