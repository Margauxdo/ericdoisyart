<script setup>
import CarrousselHome from "@/components/CarrousselHome.vue";
</script>

<template>
  <main>
    <div class="carroussel">
      <CarrousselHome />
    </div>
  </main>
</template>

<style scoped>

main {
  margin-top: 0px;
  text-align: center;
  position:relative;
  bottom:50px;
}


.carroussel {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transform: rotate(2deg);
}
</style>
