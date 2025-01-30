<template>
  <div class="carousel-container">
    <swiper
      :slides-per-view="1"
      :loop="true"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      :speed="1000"
      class="mySwiper"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <div class="slide-content">
          <img :src="image" :alt="'Image ' + (index + 1)" class="carousel-image" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const images = ref([
      "/src/assets/photo1C.jpeg",
      "/src/assets/photo2C.jpeg",
      "/src/assets/photo3C.jpeg",
      "/src/assets/photo4C.jpeg",
    ]);

    return { images };
  },
};
</script>

<style scoped>
/* 🌟 Conteneur du carrousel en quinconce */
.carousel-container {
  width: 100%;
  height: 80vh;
  margin-top: 40px; /* Décalage pour placer en quinconce */
  overflow: hidden;
  position: relative;
  transform: rotate(-2deg); /* Légère rotation pour l'effet quinconce */
}

/* 🌟 Slide en pleine largeur */
.slide-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 🌟 Animation fluide des images */
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 1s ease-in-out;
}

/* 🌟 Pagination moderne (points centrés) */
:deep(.swiper-pagination) {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

:deep(.swiper-pagination-bullet) {
  background-color: rgba(255, 255, 255, 0.7);
  width: 12px;
  height: 12px;
  opacity: 0.7;
  transition: all 0.3s ease-in-out;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #c48c00;
  width: 16px;
  height: 16px;
  opacity: 1;
}

/* 🌟 Boutons de navigation */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: white !important;
  background: rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 50%;
}

:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
  background: rgba(0, 0, 0, 0.7);
}
</style>
