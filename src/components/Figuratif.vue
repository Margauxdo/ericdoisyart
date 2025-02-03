<template>
  <div class="figuratif-container">
    <h2>Figuratif</h2>
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
          <a href="/contact" class="contact-button">Contacter l'artiste</a>


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
    { title: "Le cri", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 100/100 ", support: "Toile ", image: "/src/assets/figuratif/toile/lecri.JPG" },
    { title: "La fille aux cheveux longs", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, aquarelle, collage", dimension: " 80/80 ", support: "Toile ", image: "/src/assets/figuratif/toile/lafilleauxcheveuxlongs.JPG" },
    { title: "Chaise", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 80/60 ", support: "Toile avec encadrement noir ", image: "/src/assets/figuratif/toile/chaise.JPEG" },
    { title: "Beautiful back tatoo", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 80/60 ", support: "Toile avec encadrement noir ", image: "/src/assets/figuratif/toile/beautifulbacktatoo.JPEG" },
    { title: "No eyes", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 100/70 ", support: "Toile ", image: "/src/assets/figuratif/toile/noeyes.JPG" },
    { title: "Le bar", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 100/81 ", support: "Toile ", image: "/src/assets/figuratif/toile/lebar.jpg" },
    { title: "Strange", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 100/81 ", support: "Toile ", image: "/src/assets/figuratif/toile/strange.JPEG" },
    { title: "Docks", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 60/60 ", support: "Toile ", image: "/src/assets/figuratif/toile/docks.JPG" },
    { title: "Billy", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 60/40 ", support: "Toile ", image: "/src/assets/figuratif/toile/billy.JPG" },
    { title: "Suggerer", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 60/40 ", support: "Toile ", image: "/src/assets/figuratif/toile/suggerer.JPEG" },
    { title: "Le canapé", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 36/36 ", support: "Toile ", image: "/src/assets/figuratif/toile/lecanape.jpeg" },
    { title: "La fille et son chat", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 60/60 ", support: "Toile ", image: "/src/assets/figuratif/toile/lafilleetsonchat.jpeg" },
    { title: "My peas", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 30/40 ", support: "Toile ", image: "/src/assets/figuratif/toile/mypeas.JPEG" },
    { title: "Nude", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 100/81 ", support: "Toile ", image: "/src/assets/figuratif/toile/nude.JPEG" },
    { title: "Blondie", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 100/81 ", support: "Toile dans cadre aluminium noir", image: "/src/assets/figuratif/toile/blondie.JPEG" },
    { title: "Already seen", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 100/80 ", support: "Toile ", image: "/src/assets/figuratif/toile/alreadyseen.JPEG" },
    { title: "Papillon", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 100/100 ", support: "Toile ", image: "/src/assets/figuratif/toile/papillon.JPEG" },
    { title: "L'oiseau", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, peinture à la craie, feutre", dimension: " 100/81 ", support: "Toile ", image: "/src/assets/figuratif/toile/loiseau.jpeg" },
    { title: "Bonnet", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, blanc de meudon", dimension: " 100/80 ", support: "Toile dite 3D", image: "/src/assets/figuratif/toile/bonnet.JPEG" },
    { title: "You", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, blanc de meudon", dimension: " 80/60 ", support: "Toile ", image: "/src/assets/figuratif/toile/you.JPEG" },
    { title: "Underwear", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique", dimension: " 80/60 ", support: "Toile ", image: "/src/assets/figuratif/toile/underwear.JPEG" },
    { title: "Le piano", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, blanc de meudon", dimension: " 116/81 ", support: "Toile ", image: "/src/assets/figuratif/toile/lepiano.JPEG" },
    { title: "Pout", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, blanc de meudon", dimension: " 80/80 ", support: "Toile dites 3D", image: "/src/assets/figuratif/toile/pout.JPEG" },
    { title: "Joy", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, blanc de meudon", dimension: " 80/60 ", support: "Toile ", image: "/src/assets/figuratif/toile/joy.JPEG" },
    { title: "Tu viens", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, blanc de meudon", dimension: " 120/80 ", support: "Toile dite 3D ", image: "/src/assets/figuratif/toile/tuviens.JPEG" },
    { title: "Mon maillot", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, blanc de meudon", dimension: " 80/60 ", support: "Toile dite 3D ", image: "/src/assets/figuratif/toile/monmaillot.JPEG" },
    { title: "Woman light", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, blanc de meudon", dimension: " 115/75 ", support: "Toile dans caisse américaine blanche ", image: "/src/assets/figuratif/toile/womanlight.JPEG" },
    { title: "Cambre", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, collage", dimension: " 80/80 ", support: "Toile  ", image: "/src/assets/figuratif/toile/cambre.JPEG" },
    { title: "Flowers", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, collage, blanc de meudon", dimension: " 80/60 ", support: "Toile 3D ", image: "/src/assets/figuratif/toile/flowers.JPEG" },
    { title: "Disk", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, collage, brou de noix", dimension: " 120/80 ", support: "Toile ", image: "/src/assets/figuratif/toile/disk.jpeg" },
    { title: "Melancolique", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, collage, brou de noix", dimension: " 100/81 ", support: "Toile ", image: "/src/assets/figuratif/toile/melancolique.jpg" },
    { title: "Flamenco", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, collage, acrylique", dimension: " 100/81 ", support: "Toile ", image: "/src/assets/figuratif/toile/flamenco.jpg" },
    { title: "Courbure", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, collage, acrylique, aquarelle", dimension: " 100/81 ", support: "Toile ", image: "/src/assets/figuratif/toile/courbure.jpg" },
    { title: "1964", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, collage, acrylique, aquarelle", dimension: " 100/80 ", support: "Toile ", image: "/src/assets/figuratif/toile/1964.jpg" },
    { title: "Bad girls...", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, collage, brou de noix", dimension: " 80/60 ", support: "Toile ", image: "/src/assets/figuratif/toile/badgirls.jpg" },
    { title: "The back", technique: "Techniques mixtes: spray avec techniques du pochoir, pastels à l'huile, collage/déchirage/grattage, brou de noix, acrylique", dimension: " 80/60 ", support: "Toile ", image: "/src/assets/figuratif/toile/theback.jpeg" },
    { title: "Pause kfe", technique: "Techniques mixtes: spray avec techniques du pochoir, pastels à l'huile, collage/déchirage/grattage, acrylique", dimension: " 116/81 ", support: "Toile ", image: "/src/assets/figuratif/toile/pausekfe.jpeg" },
    { title: "Dance", technique: "Techniques mixtes: spray avec techniques du pochoir, pastels à l'huile, collage/déchirage/grattage, acrylique", dimension: " 116/81 ", support: "Toile ", image: "/src/assets/figuratif/toile/dance.jpeg" },
    { title: "Bandana", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels grasse, collage/déchirage, acrylique", dimension: " 116/81 ", support: "Toile ", image: "/src/assets/figuratif/toile/bandana.jpeg" },
    { title: "The rose", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile", dimension: " 116/81 ", support: "Toile ", image: "/src/assets/figuratif/toile/therose.jpg" },
    { title: "Mats", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile", dimension: " 116/81 ", support: "Toile ", image: "/src/assets/figuratif/toile/mats.jpg" },
    { title: "Belle", technique: "bombe aérosol , pastels à l'huile, collage, acrylique", dimension: " 120/80 ", support: "Toile dites 3D ", image: "/src/assets/figuratif/toile/belle.jpg" },
    { title: "Drag-queen", technique: "bombe aérosol , pastels à l'huile, collage, acrylique", dimension: " 116/81 ", support: "Toile ", image: "/src/assets/figuratif/toile/dragqueen.jpg" },
    { title: "Fatale", technique: "bombe aérosol , pastels à l'huile, collage, acrylique", dimension: " 80/120 ", support: "Toile dites 3D", image: "/src/assets/figuratif/toile/fatale.jpg" },
    { title: "Ganja", technique: "bombe aérosol , pastels à l'huile, collage", dimension: " 120/80 ", support: "Toile dites 3D", image: "/src/assets/figuratif/toile/ganja.jpg" },
    { title: "Kate Moss", technique: "bombe aérosol , pastels à l'huile, collage/déchirage, acrylique", dimension: " 116/81 ", support: "Toile ", image: "/src/assets/figuratif/toile/kateMoss.jpg" },
    { title: "Lucie", technique: "bombe aérosol , pastels à l'huile, collage", dimension: " 81/116 ", support: "Toile ", image: "/src/assets/figuratif/toile/lucie.jpg" },
    { title: "Roller", technique: "bombe aérosol , pastels à l'huile, collage/déchirage, acrylique", dimension: " 116/81 ", support: "Toile ", image: "/src/assets/figuratif/toile/roller.jpg" },
    { title: "Surprise", technique: "bombe aérosol , pastels à l'huile, collage", dimension: " 115/75 ", support: "Toile ", image: "/src/assets/figuratif/toile/surprise.jpg" },
    { title: "Tatoo", technique: "bombe aérosol , pastels à l'huile, collage", dimension: " 116/81 ", support: "Toile ", image: "/src/assets/figuratif/toile/tatoo.jpg" },


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
