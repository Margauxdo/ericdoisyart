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
      "/src/assets/photo1C.jpeg",
      "/src/assets/photo4C.jpeg",
      "/src/assets/photo3C.jpg",
      "/src/assets/photo2C.jpeg",
    ]);

    return { images, Pagination, Autoplay };
  },
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  margin-top: 0px;
  overflow: hidden;
  position: relative;
  clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 0% 95%);
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
  height: 700px;
  object-fit: cover;
  object-position: center;
  transition: transform 1s ease-in-out;
  filter: brightness(0.5);
}

:deep(.swiper-pagination) {
  position: absolute;
  bottom: 80px;
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
</style>
