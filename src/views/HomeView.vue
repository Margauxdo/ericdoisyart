<template>
  <main>
    <div class="carroussel">
      <CarrousselHome />
    </div>
    <div class="text">
      <h3 class="animated-text">
        "Eric Doisy, peintre plasticien néo-expressionniste, mêle abstraction et
        techniques mixtes pour créer des œuvres uniques et vibrantes, entre
        émotion et audace."
      </h3>
    </div>
    <div class="expos">
      <h2> Mes expositions </h2>
      <div class="affiche">
        <div v-for="(image, index) in images" :key="index" class="image-container">
          <img :src="image" :alt="'Exposition ' + (index + 1)" class="image-grid" @click="openImage(image)" @error="(event) => event.target.style.background = 'black'" />
        </div>
      </div>
    </div>
    <div class="imgPeintre">
      <img src="/src/assets/peintre.jpg" @error="(event) => event.target.style.background = 'black'" />
    </div>
    <div v-if="modalImage" class="modal" @click="closeImage">
      <img :src="modalImage" class="modal-content" @error="(event) => event.target.style.background = 'black'" />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import CarrousselHome from "@/components/CarrousselHome.vue";

const images = ref([
  "/src/assets/img-noexpos.png",
  "/src/assets/img-noexpos2.png",
  //"/src/assets/img-nosexpos3.png",
  "/src/assets/event/publication_siteweb_mars_2025.png"
]);

const modalImage = ref(null);

const openImage = (image) => {
  modalImage.value = image;
};

const closeImage = () => {
  modalImage.value = null;
};
</script>

<style scoped>
main {
  margin-top: 0px;
  text-align: center;
  position: relative;
}

.expos {
  background: hsla(260, 11%, 85%, 1);
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

.animated-text {
  display: inline-block;
  font-size: 1.6rem;
  font-weight: bold;
    color:#c48c00;

  animation: slideText 15s linear infinite;
}

@keyframes slideText {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

.affiche {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 50px;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  transition: transform 0.3s ease-in-out;
}

.image-grid {
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  box-shadow: 1px 4px 4px #000;
}

.image-container:hover {
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
  border-radius: 12px;
  animation: fadeIn 10s ease-in-out;
}

@keyframes fadeIn {
  from {
    transform: scale(0.5);
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
  height: 500px;
  object-fit: cover;
  object-position: center;
  display: flex;
  position: static;
  justify-content: center;
  align-content: space-around;
}
</style>
