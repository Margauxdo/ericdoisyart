<template>
  <div>
    <label for="category-select">Filtrer :</label>
    <select id="category-select" v-model="selectedCategory" @change="applyFilter">
      <option value="">Toutes les catégories d'œuvres</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, defineProps, emit } from "vue";

// Propriétés passées depuis le parent
defineProps({
  categories: Array,
});

// État local pour la catégorie sélectionnée
const selectedCategory = ref("");

// Méthode pour émettre l'événement de changement de filtre
const applyFilter = () => {
  emit("filter-changed", selectedCategory.value);
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

select {
  margin-bottom: 10px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
</style>
