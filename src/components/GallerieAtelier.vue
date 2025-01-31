<script setup lang="ts">
import { ref } from 'vue';

const images = [
  { id: 1, src: '/src/assets/atelier/atelier1.jpg', alt: 'Image 1' },
  { id: 2, src: '/src/assets/atelier/atelier2.jpg', alt: 'Image 2' },
  { id: 3, src: '/src/assets/atelier/atelier3.jpg', alt: 'Image 3' },
  { id: 4, src: '/src/assets/atelier/atelier4.jpg', alt: 'Image 4' },
  { id: 5, src: '/src/assets/atelier/atelier5.jpg', alt: 'Image 5' },
  { id: 6, src: '/src/assets/atelier/atelier6.jpg', alt: 'Image 6' },
];

const selectedImage = ref<string | null>(null);

// Fonction pour ouvrir l'image en modal
const openModal = (src: string) => {
  selectedImage.value = src;
};

// Fonction pour fermer la modal
const closeModal = () => {
  selectedImage.value = null;
};
</script>

<template>
  <div class="gallery">
    <!-- Miniatures des images -->
    <div class="thumbnail" v-for="image in images" :key="image.id">
      <img :src="image.src" :alt="image.alt" @click="openModal(image.src)" />
    </div>

    <!-- Modal -->
    <div v-if="selectedImage" class="modal" @click="closeModal">
      <div class="modal-content">
        <img :src="selectedImage" alt="Image agrandie" />
        <button class="close-btn" @click="closeModal">×</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
      padding: 20px;
      max-width: 1800px;
      width: 100%;
      justify-content: center;
      align-content: center;

}

.thumbnail img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.thumbnail img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  color: black;
  font-size: 20px;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.close-btn:hover {
  background: #f44336;
  color: white;
}
</style>
