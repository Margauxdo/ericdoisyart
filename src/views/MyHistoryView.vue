<script setup>
import { ref, onMounted } from "vue";
import Parcours from "@/components/Parcours.vue";
import Atelier from "@/components/Atelier.vue";

const isVisible = ref({ parcours: false, atelier: false });

const handleScroll = () => {
  const parcours = document.getElementById("mon-parcours");
  const atelier = document.getElementById("mon-atelier");

  if (parcours) {
    const parcoursRect = parcours.getBoundingClientRect();
    if (parcoursRect.top < window.innerHeight * 0.8) {
      isVisible.value.parcours = true;
    }
  }

  if (atelier) {
    const atelierRect = atelier.getBoundingClientRect();
    if (atelierRect.top < window.innerHeight * 0.8) {
      isVisible.value.atelier = true;
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
</script>

<template>
  <div class="history">
    <h1>Mon histoire</h1>

    <div id="mon-parcours" :class="['parcours-eric', { 'fade-in': isVisible.parcours }]">
      <Parcours />
    </div>
    <div class="separ"></div>

    <div id="mon-atelier" :class="['atelier-eric', { 'fade-in': isVisible.atelier }]">
      <Atelier />
    </div>
  </div>
</template>

<style scoped>
.history {
  text-align: center;
  padding: 50px 20px;
}



.parcours-eric, .atelier-eric {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>s
