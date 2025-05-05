<template>
  <div class="neo-container">
    <h2>Néo-expressionisme, expressionnisme, art brut ...</h2>
    <p v-if="selectedSupport">Support : {{ selectedSupport }}</p>

    <div class="gallery">
      <div v-for="(oeuvre, index) in filteredOeuvres" :key="index" class="artwork-container">
      <a href="#" @click.prevent="openImage(oeuvre.image)">
        <img :src="oeuvre.image" :alt="oeuvre.title" class="artwork-image" />
        </a>
        <div class="overlay">
          <h3 class="title">{{ oeuvre.title }}</h3>
          <p class="technique">{{ oeuvre.technique }} - {{ oeuvre.support }}</p>
          <p class="dimension">{{ oeuvre.dimension }} - {{ oeuvre.support }}</p>
          <router-link to="/contact" class="contact-button">Contacter l'artiste</router-link>

          <button class="view-button" @click="openFullScreen(oeuvre.image)">Voir en grand</button>
        </div>
      </div>
    </div>

    <!-- image plein ecran-->
        <div v-if="fullScreenImage" class="full-screen-view" @click="closeFullScreen">
              <img :src="fullScreenImage" class="full-screen-image" />
            </div>

  </div>
</template>

<script setup>
import { defineProps, computed, ref } from "vue";

const props = defineProps(["selectedSupport"]);
const fullScreenImage = ref(null);


const oeuvres = [
   { title: "BB", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels à l'huile, collage", dimension: " 80/60 ", support: "Bois", image: "/BB.JPEG" },

  { title: "Blue", technique: "Techniques mixtes: stick à l’huile, pastel grasse, aquarelle, feutre", dimension: " 43/43 ", support: "Bois", image: "/blue.jpeg" },
  { title: "El croco", technique: "Techniques mixtes: stick à l’huile, pastel grasse, acrylique, feutre", dimension: " 206/30 ", support: "Bois", image: "/el_croco.jpg" },
  { title: "Fragile", technique: "Techniques mixtes: stick à l’huile, pastel grasse, feutre, collage ", dimension: " 21/24 ", support: "Bois", image: "/fragile.JPEG" },
  { title: "Horns", technique: "Techniques mixtes: pastels à l’huile, acrylique, collage, huile", dimension: " 39/73 ", support: "Bois", image: "/horns.JPG" },
  { title: "Diane", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 80/60 ", support: "Bois", image: "/diane.JPG" },

  { title: "Julienne I", technique: "Techniques mixtes: stick à l’huile, pastel grasse, acrylique, feutre, bombe aérosol, collage.", dimension: " 111/70 ", support: "Bois", image: "/JulienneI.jpg" },
  { title: "L'oeil III", technique: "Techniques mixtes", dimension: " 60/44 ", support: "Bois", image: "/LoeilIII.JPG" },
  { title: "L'oeil IV", technique: "Techniques mixtes: pastels à l’huile, acrylique, collage, huile", dimension: " 80/60 ", support: "Bois", image: "/LoeilIV.JPG" },
  { title: "L'oeil IX", technique: "Techniques mixtes: pastels à l’huile, acrylique, collage, huile", dimension: " 43/44 ", support: "Bois", image: "/LoeilIX.JPG" },
  { title: "L'oeil VII", technique: "Techniques mixtes: pastels à l’huile, acrylique, collage, huile", dimension: " 43/43 ", support: "Bois", image: "/LoeilVII.JPG" },
  { title: "L'oeil VIII", technique: "Techniques mixtes: pastels à l’huile, acrylique, collage, huile", dimension: " 80/60 ", support: "Bois", image: "/LoeilVIII.JPEG" },
  { title: "La flamme", technique: "Techniques mixtes: stick à l’huile,pastel grasse, acrylique, feutre.", dimension: " 73/36 ", support: "Bois", image: "/laflamme.JPG" },
  { title: "Le trait", technique: "Feutre à l’huile", dimension: " 21/30 ", support: "Bois", image: "/letrait.JPEG" },
  { title: "Terre", technique: "Techniques mixtes: stick à l’huile, pastel grasse, acrylique, feutre, bombe aérosol, collage", dimension: " 50/40 ", support: "Bois", image: "/terre.jpg" },
  { title: "Indi", technique: "Techniques mixtes: stick à l’huile, pastel grasse, acrylique,feutre, bombe aérosol, collage", dimension: " 81/60 ", support: "Toile", image: "/indi.JPG" },
  { title: "Julienne II", technique: "Techniques mixtes: stick à l’huile, pastel grasse, acrylique, feutre, bombe aérosol, collage", dimension: " 60/60 ", support: "Toile", image: "/julienneII.JPG" },
  { title: "Julienne III", technique: "Techniques mixtes: stick à l’huile, pastel grasse, acrylique, feutre, bombe aérosol, collage.", dimension: " 80/60 ", support: "Toile", image: "/julienneIII.JPG" },
  { title: "L'oeil V", technique: "Techniques mixtes: pastels à l’huile, acrylique, collage, huile", dimension: " 80/60 ", support: "Toile", image: "/loeilV.JPG" },
  { title: "L'oeil VI", technique: "Techniques mixtes: pastels à l’huile, acrylique, collage, huile", dimension: " 80/100 ", support: "Toile", image: "/loeilVI.JPEG" },
  { title: "L'oeil X", technique: "Techniques mixtes: pastels à l’huile, acrylique, collage, huile", dimension: " 115/75 ", support: "Toile", image: "/loeilX.JPEG" },
  { title: "Look", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l’huile, acrylique,collage", dimension: " 80/60 ", support: "Toile", image: "/look.jpeg" },
  { title: "Return", technique: "Techniques mixtes: stick à l’huile, pastel grasse, acrylique, feutre, bombe aérosol, collage", dimension: " 60/40 ", support: "Toile", image: "/return.jpg" },
  { title: "Salut ça va!", technique: "Techniques mixtes – pastel grasse, huile, acrylique, collage, feutre et bombe aérosol", dimension: " 80/80 ", support: "Toile", image: "/salutcava.JPEG" },
  { title: "We can do it", technique: "Techniques mixtes: stick à l’huile, pastel grasse, acrylique, feutre, bombe aérosol, collage", dimension: " 100/100 ", support: "Toile", image: "/wecandoit.JPEG" },
  { title: "Why", technique: "mixtes: bombe aérosol avec techniques du pochoir, pastels à l’huile, acrylique, collage", dimension: " 80/60 ", support: "Toile", image: "/why.jpeg" },
  { title: "My monster", technique: "Acrylique, pastels à l'huile", dimension: " 75/45 ", support: "Acier", image: "/my_monster.jpg" },
  { title: "New II", technique: "techniques mixtes: stick à l'huile, feutre à l'huile, acrylique", dimension: " 36/36", support: "Toile", image: "/newII.JPG" },
  { title: "New IV", technique: "techniques mixtes: stick à l'huile, feutre à l'huile, acrylique", dimension: " 36/36", support: "Toile", image: "/newIV.JPG" },

  { title: "New VI", technique: "techniques mixtes: stick à l'huile, feutre à l'huile, acrylique", dimension: " 36/36", support: "Toile", image: "/newVI.JPG" },
  { title: "New VII", technique: "techniques mixtes: stick à l'huile, feutre à l'huile, acrylique", dimension: " 36/36", support: "Toile", image: "/newVII.JPG" },
  { title: "Fashion", technique: "techniques mixtes: stick à l'huile, feutre à l'huile, acrylique", dimension: " 80/60", support: "Toile", image: "/fashion.JPEG" },
  { title: "Flower", technique: "techniques mixtes: stick à l'huile, feutre à l'huile, acrylique", dimension: " 91/52", support: "Toile", image: "/flower.JPG" },
  { title: "Liberation", technique: "techniques mixtes: stick à l'huile, feutre à l'huile, acrylique", dimension: " 120/80", support: "Toile", image: "/liberation.JPEG" },
  { title: "New I", technique: "Carton entoilé avec encadrement, techniques mixtes : stick à l'huile, acrylique, feutre à l'huile", dimension: " 36/36", support: "Toile", image: "/newI.JPEG" },
  { title: "New VIII", technique: "Carton entoilé avec encadrement, techniques mixtes : stick à l'huile, acrylique, feutre à l'huile", dimension: " 25/25", support: "Toile", image: "/newVIII.JPEG" },
  { title: "New IX", technique: "Carton entoilé avec encadrement, techniques mixtes : stick à l'huile, acrylique, feutre à l'huile", dimension: " 25/25", support: "Toile", image: "/newIX.JPEG" },
  { title: "New X", technique: "Carton entoilé avec encadrement, techniques mixtes : stick à l'huile, acrylique, feutre à l'huile", dimension: " 25/25", support: "Toile", image: "/newX.JPEG" },
 { title: "Desordre", technique: "Techniques mixtes: Stick à l'huile, acrylique, feutre à l'huile, collage", dimension: " 71/37", support: "Bois", image: "/desordre.JPG"},
  { title: "The first of 2025", technique: "Dans cadre en bois, Techniques mixtes: Stick à l'huile, feutre à l'huile", dimension: " 30/40", support: "Bois", image: "/thefirstof2025.JPG"},
  { title: "Doute", technique: " Techniques mixtes: Stick à l'huile, acrylique, feutre à l'huile", dimension: " 120/60", support: "Bois", image: "/doute.JPEG"},
  { title: "New III", technique: "Techniques mixtes: Stick à l'huile, acrylique, feutre à l'huile", dimension: " 60/60", support: "Bois", image: "/new3.JPG"},
  { title: "No se", technique: "Techniques mixtes: Stick à l'huile, acrylique, feutre à l'huile", dimension: " 80/120", support: "Bois", image: "/Nose.JPG"},

 { title: "L'Oeil I", technique: " Techniques mixtes: pastel grasse, feutre", dimension: " 80/60", support: "Bois", image: "/LoeilI.JPG"},
  { title: "L'Oeil II", technique: "Techniques mixtes: pastel grasse, feutre", dimension: " 80/60", support: "Bois", image: "/loeilII.JPG"},
  { title: "La fêlure", technique:  "Techniques mixtes: Stick à l'huile, acrylique, feutre à l'huile", dimension: " 88/39", support: "Bois", image: "/lafelure.jpg"},
  { title: "Francoise", technique: "Techniques mixtes: Stick à l'huile, acrylique, feutre à l'huile", dimension: " 77/39", support: "Bois", image: "/francoise.jpg"},
  { title: "Brut ou pas", technique: "Techniques mixtes: Stick à l'huile, acrylique, feutre à l'huile", dimension: " 33/74", support: "Bois", image: "/brutoupas.jpg"},
  { title: "Face", technique: "Techniques mixtes: Stick à l'huile, acrylique, feutre et bombes aérosol", dimension: " 60/60", support: "Toile", image: "/face.JPG"},
  { title: "Bonjour", technique: "Techniques mixtes: Stick à l'huile, acrylique, feutre et bombes aérosol", dimension: " 60/60", support: "Toile", image: "/bonjour.JPEG"},
  { title: "My cabot", technique: "Techniques mixtes: Stick à l'huile, acrylique, feutre ", dimension: " 40/40", support: "Carton", image: "/mycabot.JPEG"},
  { title: "Charlie", technique: "Techniques mixtes: Stick à l'huile, acrylique, feutre ", dimension: " 40/40", support: "Carton", image: "/charlie.JPEG"},
  { title: "James", technique: "Techniques mixtes: Stick à l'huile, acrylique, feutre acrylique et à l'huile", dimension: " 36/36", support: "Carton", image: "/james.JPEG"},
  { title: "Alienation", technique: "Techniques mixtes: Stick à l'huile, acrylique, feutre acrylique et à l'huile ", dimension: " 36/36", support: "Carton", image: "/alienation.JPEG"},
  { title: "Rantanplan", technique: "Techniques mixtes: Stick à l'huile, acrylique, feutre acrylique et à l'huile ", dimension: " 36/36", support: "Carton", image: "/rantanplan.JPEG"},
  { title: "Erase", technique: "Techniques mixtes: Stick à l'huile, acrylique, feutre acrylique et à l'huile ", dimension: " 36/36", support: "Carton", image: "/erase.JPEG"},
  { title: "Color", technique: "Techniques mixtes: Stick à l'huile, acrylique, feutre acrylique et à l'huile ", dimension: " 36/36", support: "Carton", image: "/color.JPEG"},
  { title: "My cat", technique: "Techniques mixtes: Stick à l'huile, acrylique, feutre, collage et bombe aérosol ", dimension: " 80/100 ", support: "Bois", image: "/mycat.JPEG"},
  { title: "Look", technique: "Techniques mixtes: pastel grasse et bombe aérosol ", dimension: " 40/50 ", support: "Toile", image: "/lookv1.JPG"},
  { title: "Le chaos", technique: "Techniques mixtes: stick à l'huile, feutre et acrylique ", dimension: " 25/25 ", support: "Carton", image: "/lechaos.JPEG"},
  { title: "My rabbit", technique: "Techniques mixtes: stick à l'huile, feutre et acrylique ", dimension: " 31/31 ", support: "Bois", image: "/myrabbit.JPEG"},
  { title: "JMR or not", technique: "Techniques mixtes: stick à l'huile, feutre et acrylique ", dimension: " 31/31 ", support: "Bois", image: "/JMBornot.JPEG"},
  { title: "Visage à vif", technique: "Techniques mixtes: stick à l'huile, feutre et acrylique ", dimension: " 58/122 ", support: "Bois", image: "/visageavif.JPEG"},
  { title: "Sous pression", technique: "Techniques mixtes: stick à l'huile, feutre et acrylique ", dimension: " 39/87 ", support: "Bois", image: "/souspression.JPEG"},

  { title: "Scared", technique: "Techniques mixtes: stick à l'huile, feutre et acrylique ", dimension: " 24/30 ", support: "Toile", image: "/sacred.JPEG"},
  { title: "Matière", technique: "Techniques mixtes: stick à l'huile, feutre, acrylique et collage", dimension: " 46/55 ", support: "Toile", image: "/matieres.JPEG"},
  { title: "Dualité", technique: "Techniques mixtes: stick à l'huile, feutre et acrylique ", dimension: " 25/25 ", support: "Toile", image: "/dualite.JPEG"},
  { title: "Masque intérieur", technique: "Techniques mixtes: stick à l'huile, feutre, acrylique et collage ", dimension: " 80/80 ", support: "Toile", image: "/masqueinterieur.JPEG"},
  { title: "Ne me regarde pas comme ça", technique: "Techniques mixtes: stick à l'huile, feutre, acrylique et collage ", dimension: " 60/80 ", support: "Toile", image: "/nemeregardepascommeca.JPEG"},
  { title: "Le poid du dedans", technique: "Techniques mixtes: stick à l'huile, feutre, acrylique et collage", dimension: " 81/100 ", support: "Toile", image: "/lepoiddudedans.JPEG"},
  { title: "Wired", technique: "Techniques mixtes: stick à l'huile, feutre et acrylique ", dimension: " 100/100 ", support: "Toile", image: "/wired.JPEG"},
  { title: "Héritage nerveux", technique: "Techniques mixtes: stick à l'huile, pastel gras, acrylique, feutre et collage", dimension: " 60/80 ", support: "Bois", image: "/heritagenerveux.JPEG"},
  { title: "L'autre moi", technique: "Techniques mixtes: stick à l'huile, acrylique, feutre et collage", dimension: " 116/81 ", support: "Toile", image: "/lautremoi.JPEG"}




];

const filteredOeuvres = computed(() => {
  return props.selectedSupport
    ? oeuvres.filter(oeuvre => oeuvre.support === props.selectedSupport)
    : oeuvres;
});

const openFullScreen = (imageSrc) => {
  fullScreenImage.value = imageSrc;
};

const closeFullScreen = () => {
  fullScreenImage.value = null;
};
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
  width:100%;
  height:500px;
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

.contact-button {
  margin-top: 10px;
  margin-bottom:20px;
  padding: 8px 15px;
  background: #c48c00;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  transition: background 0.3s ease;
}

.contact-button:hover {
  background: #a36f00;
}

.view-button {
  margin-top: 10px;
  margin-bottom:20px;
  padding: 8px 15px;
  background: #c48c00;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  border: none;
}

.view-button:hover {
  background: #a36f00;
}

.full-screen-view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.full-screen-image {
  max-width: 90%;
  max-height: 90%;
}

@media screen and (max-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    padding: 15px;
  }
  .overlay {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    .artwork-container{
    height:500px;
    }
    .view-button , .contact-button{
    margin-bottom:20px;
    }
}

@media screen and (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 10px;
  }
  .overlay {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
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
  .overlay {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    h2{
        margin-top: 100px;
    }
}
</style>
