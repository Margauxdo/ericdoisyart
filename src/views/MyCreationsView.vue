<script setup>
import { ref } from "vue";
import Neoexpressionisme from "@/components/Neoexpressionisme.vue";
import Figuratif from "@/components/Figuratif.vue";

const styleOptions = ref(["Figuratif", "Néo-expressionnisme"]);
const supportOptions = ref(["Bois", "Carton", "Acier", "Bois de palette", "Toile", "Toile de jute"]);

const selectedStyle = ref(null);
const selectedSupport = ref(null);

const updateFilter = (filter) => {
  selectedStyle.value = filter.style;
  selectedSupport.value = filter.support;
};
</script>

<template>
  <div class="oeuvres">
    <h1>Mes créations</h1>
    <FiltreOeuvres @updateFilter="updateFilter" />

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
</style>

