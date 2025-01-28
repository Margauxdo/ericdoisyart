<script setup>
import { ref, computed } from "vue";
import Filtre from "@/components/Filtre.vue";

// Données des créations
const creations = ref([
  { id: 1, name: "Peinture A", category: "Abstrait" },
  { id: 2, name: "Sculpture B", category: "Moderne" },
  { id: 3, name: "Peinture C", category: "Abstrait" },
  { id: 4, name: "Sculpture D", category: "Figuratif" },
]);

// Liste unique des catégories
const categories = computed(() =>
  Array.from(new Set(creations.value.map((item) => item.category)))
);

// Catégorie sélectionnée
const selectedCategory = ref("");

// Créations filtrées
const filteredCreations = computed(() =>
  selectedCategory.value
    ? creations.value.filter(
        (creation) => creation.category === selectedCategory.value
      )
    : creations.value
);

// Méthode pour gérer le changement de filtre
const handleFilterChange = (category) => {
  selectedCategory.value = category;
};
</script>

<template>
  <div class="creations">
    <h1>Mes créations</h1>
    <main>
      <!-- Composant Filtre -->
      <Filtre :categories="categories" @filter-changed="handleFilterChange" />

      <!-- Liste des créations filtrées -->
      <ul>
        <li v-for="creation in filteredCreations" :key="creation.id">
          {{ creation.name }} ({{ creation.category }})
        </li>
      </ul>
    </main>
  </div>
</template>

<style scoped>
.creations {
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 5px 0;
  font-size: 18px;
}
</style>
