<template>
  <div class="neo-container">
    <h2>Néo-expressionisme</h2>
    <p v-if="selectedSupport">Support : {{ selectedSupport }}</p>

    <div class="gallery">
      <div v-for="(oeuvre, index) in filteredOeuvres" :key="index" class="artwork-container">
        <img :src="oeuvre.image" :alt="oeuvre.title" class="artwork-image" />
        <div class="overlay">
          <h3 class="title">{{ oeuvre.title }}</h3>
          <p class="technique">{{ oeuvre.technique }} - {{ oeuvre.support }}</p>
          <p class="dimension">{{ oeuvre.dimension }} - {{ oeuvre.support }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps(["selectedSupport"]);

const oeuvres = [
  { title: "My monster", technique: "Acrylique, pastels à l'huile", dimension: " 75/45 ", support: "Acier", image: "/src/assets/neo/acier/my_monster.jpg" },
  { title: "Blue", technique: "Techniques mixtes: stick à l’huile, pastel grasse, aquarelle, feutre", dimension: " 43/43 ", support: "Bois", image: "/src/assets/neo/bois/blue.jpeg" },
  { title: "El croco", technique: "Techniques mixtes: stick à l’huile, pastel grasse, acrylique, feutre", dimension: " 206/30 ", support: "Bois", image: "/src/assets/neo/bois/el_croco.jpg" },
  { title: "Fragile", technique: "Techniques mixtes: stick à l’huile, pastel grasse, feutre, collage ", dimension: " 21/24 ", support: "Bois", image: "/src/assets/neo/bois/fragile.JPEG" },
  { title: "Horns", technique: "Techniques mixtes: pastels à l’huile, acrylique, collage, huile", dimension: " 39/73 ", support: "Bois", image: "/src/assets/neo/bois/horns.JPG" },
  { title: "Julienne I", technique: "Techniques mixtes: stick à l’huile, pastel grasse, acrylique, feutre, bombe aérosol, collage.", dimension: " 111/70 ", support: "Bois avec cadre", image: "/src/assets/neo/bois/JulienneI.jpg" },
  { title: "L'oeil III", technique: "Techniques mixtes", dimension: " 60/44 ", support: "Bois", image: "/src/assets/neo/bois/LoeilIII.JPG" },
  { title: "L'oeil IV", technique: "Techniques mixtes: pastels à l’huile, acrylique, collage, huile", dimension: " 80/60 ", support: "Bois", image: "/src/assets/neo/bois/LoeilIV.JPG" },
  { title: "L'oeil IX", technique: "Techniques mixtes: pastels à l’huile, acrylique, collage, huile", dimension: " 43/44 ", support: "Bois", image: "/src/assets/neo/bois/LoeilIX.JPG" },
  { title: "L'oeil VII", technique: "Techniques mixtes: pastels à l’huile, acrylique, collage, huile", dimension: " 43/43 ", support: "Bois", image: "/src/assets/neo/bois/LoeilVII.JPG" },
  { title: "L'oeil VIII", technique: "Techniques mixtes: pastels à l’huile, acrylique, collage, huile", dimension: " 80/60 ", support: "Bois", image: "/src/assets/neo/bois/LoeilVIII.JPEG" },
  { title: "La flamme", technique: "Techniques mixtes: stick à l’huile,pastel grasse, acrylique, feutre.", dimension: " 73/36 ", support: "Bois", image: "/src/assets/neo/bois/laflamme.JPG" },
  { title: "Le trait", technique: "Feutre à l’huile", dimension: " 21/30 ", support: "Bois", image: "/src/assets/neo/bois/letrait.JPEG" },
  { title: "Terre", technique: "Techniques mixtes: stick à l’huile, pastel grasse, acrylique, feutre, bombe aérosol, collage", dimension: " 50/40 ", support: "Bois avec cadre", image: "/src/assets/neo/bois/terre.jpg" },
  { title: "Indi", technique: "Techniques mixtes: stick à l’huile, pastel grasse, acrylique,feutre, bombe aérosol, collage", dimension: " 81/60 ", support: "Toile", image: "/src/assets/neo/toile/indi.JPG" },
  { title: "Julienne II", technique: "Techniques mixtes: stick à l’huile, pastel grasse, acrylique, feutre, bombe aérosol, collage", dimension: " 60/60 ", support: "Toile", image: "/src/assets/neo/toile/julienneII.JPG" },
  { title: "Julienne III", technique: "Techniques mixtes: stick à l’huile, pastel grasse, acrylique, feutre, bombe aérosol, collage.", dimension: " 80/60 ", support: "Toile", image: "/src/assets/neo/toile/julienneIII.JPG" },
  { title: "L'oeil V", technique: "Techniques mixtes: pastels à l’huile, acrylique, collage, huile", dimension: " 80/60 ", support: "Toile", image: "/src/assets/neo/toile/loeilV.JPG" },
  { title: "L'oeil VI", technique: "Techniques mixtes: pastels à l’huile, acrylique, collage, huile", dimension: " 80/100 ", support: "Toile", image: "/src/assets/neo/toile/loeilVI.JPEG" },
  { title: "L'oeil X", technique: "Techniques mixtes: pastels à l’huile, acrylique, collage, huile", dimension: " 115/75 ", support: "Toile", image: "/src/assets/neo/toile/loeilX.JPEG" },
  { title: "Look", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l’huile, acrylique,collage", dimension: " 80/60 ", support: "Toile", image: "/src/assets/neo/toile/look.jpeg" },
  { title: "Return", technique: "Techniques mixtes: stick à l’huile, pastel grasse, acrylique, feutre, bombe aérosol, collage", dimension: " 60/40 ", support: "Toile", image: "/src/assets/neo/toile/return.jpg" },
  { title: "Salut ça va!", technique: "Techniques mixtes – pastel grasse, huile, acrylique, collage, feutre et bombe aérosol", dimension: " 80/80 ", support: "Toile", image: "/src/assets/neo/toile/salutcava.JPEG" },
  { title: "We can do it", technique: "Techniques mixtes: stick à l’huile, pastel grasse, acrylique, feutre, bombe aérosol, collage", dimension: " 100/100 ", support: "Toile", image: "/src/assets/neo/toile/wecandoit.JPEG" },
  { title: "Why", technique: "mixtes: bombe aérosol avec techniques du pochoir, pastels à l’huile, acrylique, collage", dimension: " 80/60 ", support: "Toile", image: "/src/assets/neo/toile/why.jpeg" },



];

const filteredOeuvres = computed(() => {
  return props.selectedSupport
    ? oeuvres.filter(oeuvre => oeuvre.support === props.selectedSupport)
    : oeuvres;
});
</script>

<style scoped>
.gallery {
  max-width: 1500px;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 20px;
  justify-content: center;
  align-content: center;
}

.artwork-container {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.artwork-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease-in-out;
}

.artwork-container:hover .artwork-image {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.artwork-container:hover .overlay {
  opacity: 1;
}

.overlay h3 {
  font-size: 22px;
  margin-bottom: 5px;
}

.overlay p {
  color: #c48c00;
  text-transform: uppercase;
  padding: 5px;
  font-weight: bold;
}

@media screen and (max-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    padding: 15px;
  }
}

@media screen and (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 10px;
  }
}

@media screen and (max-width: 480px) {
  .gallery {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 10px;
  }

  .artwork-image {
    width: 100%;
  }
}
</style>
