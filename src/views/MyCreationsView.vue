<script setup>
import { ref } from "vue";
import Neoexpressionisme from "@/components/Neoexpressionisme.vue";
import Figuratif from "@/components/Figuratif.vue";
import FiltreOeuvres from "@/components/Filtre.vue";

const styleOptions = ref(["Figuratif", "Néo-expressionnisme"]);
const supportOptions = ref(["Bois", "Carton", "Acier", "Bois de palette", "Toile", "Toile de jute"]);

const selectedStyle = ref(null);
const selectedSupport = ref(null);
const showFilterMenu = ref(false);

const updateFilter = (filter) => {
  selectedStyle.value = filter.style;
  selectedSupport.value = filter.support;
};
</script>

<template>
  <div class="oeuvres">
    <h1>Mes créations</h1>

    <!-- Bouton filtre -->
    <button @click="showFilterMenu = !showFilterMenu" class="filter-button">Filtrer</button>
    <FiltreOeuvres v-if="showFilterMenu" @updateFilter="updateFilter" />

    <!-- Conteneur des œuvres -->
    <div v-if="selectedStyle === 'Néo-expressionnisme' || !selectedStyle" id="neo-expressionnisme" class="neo-expressionnisme">
      <Neoexpressionisme :selectedSupport="selectedSupport" />
    </div>

    <div v-if="selectedStyle === 'Figuratif' || !selectedStyle" id="figuratif" class="figuratif">
      <Figuratif :selectedSupport="selectedSupport" />
    </div>
  </div>
</template>

<style scoped>
.oeuvres {
  text-align: center;
  padding: 20px;
}

.filter-button {
  position: absolute;
  top: 320px;
  right: 250px;
  padding: 20px;
  background-color: #c48c00;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  box-shadow: 1px 4px 4px #c4c4c4;
}

.filter-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  position: absolute;
  top: 420px;
  right: 150px;
}

.select {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #014961;
}

@media screen and (max-width: 1024px) {
  .filter-button {
    top: 280px;
    right: 100px;
    padding: 15px;
    font-size: 14px;
  }

  .filter-container {
    top: 350px;
    right: 80px;
  }
}

@media screen and (max-width: 768px) {
  .filter-button {
    top: 220px;
    right: 50px;
    padding: 12px;
    font-size: 14px;
  }

  .filter-container {
    top: 300px;
    right: 40px;
  }
}

@media screen and (max-width: 480px) {
  .filter-button {
    position: relative;
    top: 10px;
    right: 0;
    width: 100%;
    padding: 15px;
    font-size: 14px;
    text-align: center;
  }

  .filter-container {
    position: relative;
    top: 20px;
    right: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }


  .neo-expressionnisme img,
  .figuratif img {
    width: 100%;
    height: auto;
  }
}
</style>
