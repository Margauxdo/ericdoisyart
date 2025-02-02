<template>
  <div class="figuratif-container">
    <h2>Figuratif</h2>
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
    { title: "Debby H.", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, feutre", dimension: " 61/25 ", support: "Acier", image: "/src/assets/figuratif/acier/debby.jpeg" },
    { title: "Plage", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, feutre", dimension: " 61/25 ", support: "Acier", image: "/src/assets/figuratif/acier/plage.JPG" },
    { title: "Deshabille", technique: "Techniques mixtes: pastels à l'huile, acrylique, collage, bombe aérosol", dimension: " 71/60 ", support: "Bois avec cadre", image: "/src/assets/figuratif/bois/deshabille.JPG" },
    { title: "Art Culture", technique: "collage, pastels à l'huile, bombe aérosol avec technqiues du pochoir", dimension: " 65/100 ", support: "Toile de jute", image: "/src/assets/figuratif/toile_jute/Artculture.jpg" },
    { title: "Code barre", technique: "collage, pastels à l'huile, bombe aérosol et acrylique", dimension: " 67/110 ", support: "Toile de jute", image: "/src/assets/figuratif/toile_jute/codebarre.jpg" },
    { title: "John Lydon", technique: "collage, pastels à l'huile, bombe aérosol et acrylique", dimension: " 65/105 ", support: "Toile de jute", image: "/src/assets/figuratif/toile_jute/johnlydon.jpg" },
    { title: "Peter Tosh", technique: "collage, pastels à l'huile, bombe aérosol et acrylique", dimension: " 65/100 ", support: "Toile de jute", image: "/src/assets/figuratif/toile_jute/petertosh.jpg" },
    { title: "Pop", technique: "collage, pastels à l'huile, bombe aérosol ", dimension: " 65/105 ", support: "Toile de jute", image: "/src/assets/figuratif/toile_jute/pop .jpg" },
    { title: "Sex Pistols", technique: "collage, pastels à l'huile, bombe aérosol et acrylique ", dimension: " 65/100 ", support: "Toile de jute", image: "/src/assets/figuratif/toile_jute/sexpistols.jpg" },
    { title: "Body", technique: "Techniques mixtes : bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique ", dimension: " 110/47 ", support: "Bois de palette", image: "/src/assets/figuratif/bois_palette/body.JPEG" },
    { title: "Cuba", technique: "bombe aérosol, pastels à l'huile, acrylique, collage ", dimension: " 80/120 ", support: "Bois de palette", image: "/src/assets/figuratif/bois_palette/cuba.jpg" },
    { title: "Debby", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage ", dimension: " 120/74 ", support: "Bois de palette", image: "/src/assets/figuratif/bois_palette/debby.JPG" },
    { title: "La nuque", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique", dimension: " 120/74 ", support: "Bois de palette", image: "/src/assets/figuratif/bois_palette/lanuque.JPEG" },
    { title: "Non", technique: "Techniques mixtes: spray avec techniques du pochoir, pastels à l'huile, acrylique, collage/déchirage/grattage", dimension: " 53/58 ", support: "Bois de palette", image: "/src/assets/figuratif/bois_palette/non.jpeg" },
    { title: "Vinyle", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, peinture à la craie, feutre", dimension: " 120/77 ", support: "Bois de palette", image: "/src/assets/figuratif/bois_palette/vinyle.JPEG" },
    { title: "Fourrure", technique: "Techniques mixtes:  pastels à l'huile, acrylique, collage, bombe aérosol", dimension: " 80/60 ", support: "Carton", image: "/src/assets/figuratif/carton/fourrure.JPG" },
    { title: "Le train", technique: "Techniques mixtes:  pastels à l'huile, acrylique, collage, bombe aérosol", dimension: " 80/60 ", support: "Carton", image: "/src/assets/figuratif/carton/letrain.JPEG" },
    { title: "La Haut", technique: "Techniques mixtes:  pastels à l'huile, acrylique, collage, bombe aérosol, feutre", dimension: " 65/55 ", support: "Carton avec cadre en bois", image: "/src/assets/figuratif/carton/lahaut.JPEG" },
    { title: "Couple", technique: "Techniques mixtes:  pastels à l'huile, acrylique, bombe aérosol avec techniques du pochoir", dimension: " 57/57 ", support: "Carton ", image: "/src/assets/figuratif/carton/couple.JPG" },
    { title: "Smile", technique: "Techniques mixtes:  pastels à l'huile, acrylique, bombe aérosol avec techniques du pochoir", dimension: " 80/60 ", support: "Carton ", image: "/src/assets/figuratif/carton/smile.JPEG" },
    { title: "Punk couple", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, feutre", dimension: " 80/60 ", support: "Carton ", image: "/src/assets/figuratif/carton/punkcouple.JPEG" },
    { title: "Amende", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, collage, pastels à l'huile, acrylique", dimension: " 70/100 ", support: "Carton ", image: "/src/assets/figuratif/carton/amende.JPEG" },
    { title: "Kurt and ...", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, blanc de meudon, pastels à l'huile, acrylique", dimension: " 80/60 ", support: "Carton avec cadre noir en bois", image: "/src/assets/figuratif/carton/kurtand.JPEG" },
    { title: "Base ball", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, collage, pastels à l'huile, acrylique", dimension: " 60/60 ", support: "Carton ", image: "/src/assets/figuratif/carton/baseball.JPEG" },
    { title: "Bjork", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, collage, pastels à l'huile, acrylique", dimension: " 80/60 ", support: "Carton ", image: "/src/assets/figuratif/carton/bjork.JPEG" },
    { title: "Angus", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, collage, pastels à l'huile, acrylique", dimension: " 80/60 ", support: "Carton ", image: "/src/assets/figuratif/carton/angus.JPEG" },
    { title: "Sex Pistols", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, collage, pastels à l'huile, acrylique, feutre", dimension: " 80/60 ", support: "Carton ", image: "/src/assets/figuratif/carton/sexpistols.jpg" },
    { title: "Dentelle", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, collage, pastels à l'huile, acrylique", dimension: " 80/60 ", support: "Carton ", image: "/src/assets/figuratif/carton/dentelle.jpg" },
    { title: "Body Painting", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, pastels à l'huile", dimension: " 80/60 ", support: "Carton ", image: "/src/assets/figuratif/carton/bodypainting.jpg" },
    { title: "I like trash", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, pastels à l'huile, aquarelle et feutre", dimension: " 120/80 ", support: "Carton ", image: "/src/assets/figuratif/carton/iliketrash.jpeg" },
    { title: "Back and clop", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, pastels à l'huile, collage, acrylique", dimension: " 80/60 ", support: "Carton ", image: "/src/assets/figuratif/carton/backandclop.jpg" },
    { title: "La fenêtre", technique: "bombe aérosol, pastels à l'huile, acrylique", dimension: " 46/105 ", support: "Carton ", image: "/src/assets/figuratif/carton/lafenetre.jpg" },
    { title: "Le pied", technique: "bombe aérosol, pastels à l'huile, acrylique", dimension: " 80/60 ", support: "Carton ", image: "/src/assets/figuratif/carton/lepied.jpg" },
    { title: "Nu", technique: "bombe aérosol, pastels à l'huile, collage", dimension: " 150/40 ", support: "Carton ", image: "/src/assets/figuratif/carton/nu.jpg" },
    { title: "Patricia Arquette", technique: "bombe aérosol, pastels à l'huile, collage", dimension: " 110/74 ", support: "Carton ", image: "/src/assets/figuratif/carton/patriciaarquette.jpg" },
    { title: "Peter Tosh", technique: "bombe aérosol, pastels à l'huile", dimension: " 85/60 ", support: "Carton ", image: "/src/assets/figuratif/carton/petertosh.jpg" },
    { title: "Secrets", technique: "bombe aérosol, tatoo, acrylique", dimension: " 66/97 ", support: "Carton ", image: "/src/assets/figuratif/carton/secrets.jpg" },


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
      justify-content: center;
      align-content: center;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 100px;
      padding: 50px;
}

.artwork-container {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.artwork-image {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 12px;
}

.overlay {
  position: absolute;
  bottom: 0;
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
.overlay p{
 color:#c48c00;
 text-transform:uppercase;
 padding:20px;
 font-weight:bold;
}

.artwork-container:hover .overlay {
  opacity: 1;
}
</style>
