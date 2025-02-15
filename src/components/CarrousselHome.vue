<template>
  <div class="carousel-container">
    <swiper
      :modules="[Pagination, Autoplay]"
      :slides-per-view="1"
      :loop="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      :speed="1000"
      :direction="'horizontal'"
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
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const images = ref([
      "/photo1C.jpeg",
      "/photo4C.jpeg",
      "/photo3C.jpg",
      "/photo2C.jpeg",
    ]);

    return { images, Pagination, Autoplay };
  },
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  margin-top: -100px;
  overflow: hidden;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 83%, 0 100%);
}

.slide-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-image {
  width: 100%;
  height: 900px;
  object-fit: cover;
  object-position: center;
  transition: transform 1s ease-in-out;
  filter: brightness(0.5);
}

:deep(.swiper-pagination) {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
}

:deep(.swiper-pagination-bullet) {
  background-color:#c48c00;
  width: 14px;
  height: 12px;
  opacity: 0.7;
  transition: all 0.5s ease-in-out;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #c48c00;
  width: 18px;
  height: 16px;
  opacity: 1;
}


@media screen and (max-width: 1024px) {
  .carousel-container {
    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);
  }

  .carousel-image {
    height: 700px;
  }

  :deep(.swiper-pagination) {
    bottom: 80px;
  }
}

@media screen and (max-width: 768px) {
  .carousel-container {
    clip-path: polygon(0% 0%, 100% 0%, 100% 95%, 0% 100%);
  }

  .carousel-image {
    height: 550px;
  }

  :deep(.swiper-pagination) {
    bottom: 60px;
  }
}

@media screen and (max-width: 480px) {


  .carousel-image {
    height: 400px; /* Ajustement de la hauteur */
    filter: brightness(0.6);
  }

  :deep(.swiper-pagination) {
    bottom: 50px;
  }

  :deep(.swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
  }

  :deep(.swiper-pagination-bullet-active) {
    width: 14px;
    height: 14px;
  }
}

</style>
