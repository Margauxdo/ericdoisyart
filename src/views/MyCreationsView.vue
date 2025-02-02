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

    <button @click="showFilterMenu = !showFilterMenu" class="filter-button">Filtrer</button>
    <FiltreOeuvres v-if="showFilterMenu" @updateFilter="updateFilter" />

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
  margin: 20px;
  padding: 20px;
  background-color: #c48c00;
  color: white;
  border: none;
  cursor: pointer;
  float: right;
  font-size:16px;
  font-weight:bold;
  text-transform:uppercase;
  border-radius:5px;
  box-shadow: 1px 4px 4px #c4c4c4;


}


.filter-container{
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    float: right;
    top: 100px;
    position: relative;
    left: 130px;

}
.select{
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #014961;
}
</style>
