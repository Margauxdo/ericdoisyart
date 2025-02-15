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

    <!-- Encadré affichant la sélection en cours -->
        <div class="selected-display">
          <p v-if="selectedStyle || selectedSupport">
            <strong>Filtre actif :</strong>
            {{ selectedStyle ? selectedStyle : "Aucun style" }} -
            {{ selectedSupport ? selectedSupport : "Aucun support" }}
          </p>
        </div>

    <div class="select-container">
      <div class="select-label">Choisir un style</div>
      <select v-model="selectedStyle" @change="updateFilter">
        <option value="" disabled selected>Style</option>
        <option v-for="style in styleOptions" :key="style" :value="style">{{ style }}</option>
      </select>
    </div>

    <div class="select-container">
      <div class="select-label">Choisir un support</div>
      <select v-model="selectedSupport" @change="updateFilter">
        <option value="" disabled selected>Support</option>
        <option v-for="support in supportOptions" :key="support" :value="support">{{ support }}</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.filter-container {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.select-container {
  position: relative;
  display: flex;
  align-items: center;
}

.select-label {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background: white;
  padding: 2px 8px;
  font-size: 14px;
  font-weight: bold;
  color: #555;
  pointer-events: none;
  border-radius: 5px;
}

select {
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  appearance: none;
  width: 180px;
  padding-left: 50px;
  background-color: white;
}

select::after {
  content: "▼";
  position: absolute;
  right: 10px;
  font-size: 12px;
  pointer-events: none;
}
.selected-display{
    display: flex;
    position: fixed;
    margin-top:30px;

}

@media (max-width: 768px) {
  .filter-container {
    flex-direction: column;
    align-items: center;
  }

  .select-container {
    width: 100%;
    max-width: 300px;
  }

  .selected-display {
    order: 1;
    font-size: 14px;
    padding: 8px;
    margin-top: 10px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .filter-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .select-container {
    width: 45%;
    max-width: 250px;
  }

  .selected-display {
    order: 1;
    font-size: 16px;
    text-align: center;
    padding: 10px;
    margin-top: 15px;
  }
}
/* 📱 Téléphone (moins de 480px) */
@media (max-width: 480px) {
  .filter-container {
    flex-direction: column;
    align-items: center;
  }

  .select-container {
    width: 100%;
    max-width: 280px;
  }

  .selected-display {
    order: 1;
    font-size: 14px;
    padding: 8px;
    margin-top: 115px;
    text-align: center;
    width: 100%;
    max-width: 280px;
  }
}





</style>
