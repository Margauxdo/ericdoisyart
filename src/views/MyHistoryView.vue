<script setup>

import Parcours from "@/components/Parcours.vue"

</script>

<template>
  <div class="history">
    <h1>Mon histoire</h1>

    <div id="mon-parcours" class="parcours-eric">

    <Parcours/>
    </div>

    <div id="mon-atelier" class="atelier-eric">
        </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
