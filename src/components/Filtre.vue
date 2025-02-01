<script setup>
import { ref, defineEmits } from "vue";

const styleOptions = ref(["Figuratif", "Néo-expressionnisme"]);
const supportOptions = ref(["Bois", "Carton", "Acier", "Bois de palette", "Toile", "Toile de jute"]);

const selectedStyle = ref(null);
const selectedSupport = ref(null);

const emit = defineEmits(["updateFilter"]);

const updateFilter = () => {
  emit("updateFilter", { style: selectedStyle.value, support: selectedSupport.value });
};
</script>

<template>
  <div class="filter-container">
    <select v-model="selectedStyle" @change="updateFilter">
      <option value="" disabled selected>Choisir un style</option>
      <option v-for="style in styleOptions" :key="style" :value="style">{{ style }}</option>
    </select>

    <select v-model="selectedSupport" @change="updateFilter">
      <option value="" disabled selected>Choisir un support</option>
      <option v-for="support in supportOptions" :key="support" :value="support">{{ support }}</option>
    </select>
  </div>
</template>

<style scoped>
.filter-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
select {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
