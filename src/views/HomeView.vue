<template>
  <main>
    <div class="carroussel">
      <CarrousselHome />
    </div>
    <div class="text">
      <h3 class="animated-text">
        "Artiste peintre plasticien , techniques mixtes
        (Néo-expressionisme, expressionnisme, art brut ...)
        "
      </h3>
    </div>
    <div class="expos">
      <h2> Mes expositions </h2>
      <div class="affiche">
        <ImageSliderExpos/>
      </div>
    </div>
    <div class="imgPeintre">
      <img src="/src/assets/peintre-2.jpg" @error="(event) => event.target.style.background = 'black'" />
    </div>
    <div v-if="modalImage" class="modal" @click="closeImage">
      <img :src="modalImage" class="modal-content" @error="(event) => event.target.style.background = 'black'" />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import CarrousselHome from "@/components/CarrousselHome.vue";
import ImageSliderExpos from "@/components/ImageSliderExpos.vue";



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
  //background: hsla(260, 11%, 85%, 1);
  background: #014961;
  padding-top: 30px;
  padding-bottom: 50px;
  clip-path: polygon(0 0, 100% 18%, 100% 100%, 0 86%);
}
.expos h2{
   color:#c48c00;
   font-family: "kiln-sans", sans-serif;
   margin-top:100px;
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

  animation: slideText 15s linear ;
}

@keyframes slideText {
  from {
    transform: translateX(50%);
  }
  to {
    transform: translateX(0%);
  }
}
.affiche {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 50px;
  max-width: 1200px;
  margin: auto;
  padding-bottom: 60px;
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
  overflow: hidden;
  position: relative;
  top: -120px;
}

.imgPeintre img {
  width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: unset;
      display: flex;
      position: relative;
      justify-content: static;
      align-content: space-around;
      z-index: -1000;
      //top: -500px;
}

@media (max-width: 1024px) {
  .animated-text{
      font-size: 25px;
      font-weight: 200;
      color: #c48c00;
      padding-top: 50px;
  }

}

@media (max-width: 768px) {
.imgPeintre img {
  height:500px;
}

}

@media (max-width: 480px) {
  .animated-text{
          font-size: 18px;
          font-weight: 100;
          padding-top: 40px;
          max-width: 400px;
  }
  .expos{
      background: #014961;
      padding-top: 30px;
      padding-bottom: 50px;
      clip-path: polygon(0 0, 100% 12%, 100% 100%, 0 86%);
  }
  .imgPeintre{
    top:-87px;
  }
  .imgPeintre img {
    height:200px;
  }

}
</style>
