<template>
  <div class="carousel-container">
    <swiper
      :modules="[Pagination, Autoplay]"
      :slides-per-view="1"
      :loop="true"
      :navigation="true"
      :pagination="false"
      :speed="1000"
      :direction="'horizontal'"
      class="mySwiper"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <div class="slide-content" :class="{ 'active-slide': hoveredIndex === index }"
             @mouseover="hoveredIndex = index"
             @mouseleave="hoveredIndex = null"
             @click="openImage(image)">
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

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const images = ref([
      "/publication_siteweb_mars_2025.png",
      "/img-noexpos.png",

    ]);
    const hoveredIndex = ref(null);

    const openImage = (image) => {
      window.open(image, '_blank');
    };

    return { images, hoveredIndex, openImage, Pagination, Autoplay };
  },
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 800px;
  margin: auto;
}

.mySwiper {
  position: relative;
}

.slide-content {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
}

.carousel-image {
  width: 100%;
  max-width: 400px;
  transition: transform 0.3s ease-in-out;
  height: auto;
  border-radius: 25%;
  box-shadow: 3px 3px 4px 1px #001d26;
}

.active-slide .carousel-image {
  transform: scale(1.2);
  z-index: 10;
}

.swiper-button-prev, .swiper-button-next {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c48c00;
}

@media (max-width: 1024px) {
  .carousel-container {
    max-width: 700px;
  }
  .carousel-image {
    max-width: 350px;
  }
}

@media (max-width: 768px) {
  .carousel-container {
    max-width: 600px;
  }
  .carousel-image {
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .carousel-container {
    max-width: 100%;
  }
  .carousel-image {
    max-width: 250px;
  }
  .swiper-button-prev, .swiper-button-next {
    width: 30px;
    height: 30px;
  }
}
</style>
