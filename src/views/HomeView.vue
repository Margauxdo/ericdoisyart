<script setup>
import { ref } from "vue";
import CarrousselHome from "@/components/CarrousselHome.vue";

const images = ref([
  "/src/assets/expo1.jpg",
  "/src/assets/expo2.jpg",
  "/src/assets/expo3.jpg",
]);

const modalImage = ref(null);

const openImage = (image) => {
  modalImage.value = image;
};

const closeImage = () => {
  modalImage.value = null;
};
</script>


<template>
  <main>
    <div class="carroussel">
      <CarrousselHome />
    </div>
    <div class="text">
    <h3>"Eric Doisy, peintre plasticien néo-expressionniste, mêle abstraction et techniques mixtes pour créer des œuvres uniques et vibrantes, entre émotion et audace."</h3>
    </div>
    <div class="expos">
    <h2> Mes expositions </h2>
    <div class="affiche">
            <div v-for="(image, index) in images" :key="index" class="image-container">
              <img :src="image" :alt="'Exposition ' + (index + 1)" @click="openImage(image)" />
            </div>
    </div>
    </div>
    <div class="imgPeintre">
      <img src="/src/assets/peintre.jpg">
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
.expos{
  background: hsla(260,11%,85%,1);
  padding-top: 30px;
  padding-bottom: 50px;
  clip-path: polygon(0% 0%, 100% 15%, 100% 100%, 0% 100%);
}


.carroussel {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

}


.affiche {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1500px;
  margin: auto;
  padding: 20px;
}
.image-container {
  position: relative;
  overflow: hidden;
  text-align: center;
  border-radius: 8px;
}
.image-grid {
  width: 100%;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.4s ease-in-out;
}
.image-grid:hover {
  transform: scale(1.1);
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.modal-content {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.imgPeintre {
  width: 100%;
  max-height: 300px;
  overflow: hidden;
}

.imgPeintre img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  display: block;
}

</style>
