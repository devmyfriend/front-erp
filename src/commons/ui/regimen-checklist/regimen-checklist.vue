<template>
  <div class="checkbox-group">
    
    <label>
      <input type="checkbox" :checked="moral" @change="$emit('update:moral', $event.target.checked)" />
      Persona Moral
    </label>
    <label>
      <input type="checkbox" :checked="fisica" @change="$emit('update:fisica', $event.target.checked)" />
      Persona Física
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  fisica: Boolean,
  moral: Boolean
});
</script>

<style scoped>
.checkbox-group {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
}

.checkbox-group label {
  display: flex;
  align-items: center;
}

.checkbox-group input {
  margin-right: 0.5rem;
}
</style>
