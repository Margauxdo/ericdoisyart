<template>
  <div class="figuratif-container">
    <h2>Figuratif</h2>
    <p v-if="selectedSupport">Support : {{ selectedSupport }}</p>

    <div class="gallery">
      <div v-for="(oeuvre, index) in filteredOeuvres" :key="index" class="artwork-container">
        <img :src="oeuvre.image" :alt="oeuvre.title" class="artwork-image" />
        <div class="overlay">
          <h3 class="title">{{ oeuvre.title }}</h3>
          <p class="technique">{{ oeuvre.technique }} - {{ oeuvre.support }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps(["selectedSupport"]);

const oeuvres = [
  { title: "Portrait en clair-obscur", technique: "Huile", support: "Bois", image: "/src/assets/fig1.jpg" },
  { title: "Scène de rue", technique: "Aquarelle", support: "Carton", image: "/src/assets/fig2.jpg" },
  { title: "Étude de personnage", technique: "Crayon", support: "Toile", image: "/src/assets/fig3.jpg" }
];

const filteredOeuvres = computed(() => {
  return props.selectedSupport
    ? oeuvres.filter(oeuvre => oeuvre.support === props.selectedSupport)
    : oeuvres;
});
</script>

<style scoped>
.gallery {
  max-width: 1500px;
      width: 100%;
      margin: auto;
      justify-content: center;
      align-content: center;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 100px;
      padding: 50px;
}

.artwork-container {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.artwork-image {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 12px;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.overlay p{
 color:#c48c00;
 text-transform:uppercase;
 padding:20px;
 font-weight:bold;
}

.artwork-container:hover .overlay {
  opacity: 1;
}
</style>
