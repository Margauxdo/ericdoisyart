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
import { defineProps, computed, ref} from "vue";



const props = defineProps(["selectedSupport"]);
const fullScreenImage = ref(null);

const oeuvres = [

    { title: "Miroir", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 80/60 ", support: "Bois", image: "/miroir2.JPEG" },
    { title: "Cindy", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 80/60 ", support: "Bois", image: "/cindy.JPEG" },
    { title: "It's not over", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 80/60 ", support: "Bois", image: "/itsnotover.JPEG" },
    { title: "Be on the move", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 80/60 ", support: "Bois", image: "/beonthemove.JPEG" },
    { title: "Hifi", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 120/60 ", support: "Bois", image: "/hifi.jpeg" },
    { title: "Bjork bis", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 80/60 ", support: "Bois", image: "/bjorkbis.JPEG" },
    { title: "Erotic 2", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 80/60 ", support: "Bois", image: "/erotic2.JPEG" },
    { title: "Nude", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 80/60 ", support: "Bois", image: "/nude2.JPEG" },
    { title: "Don't look at me", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 80/60 ", support: "Bois", image: "/dontlookatme.JPEG" },
    { title: "Montley", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 120/60 ", support: "Bois", image: "/montley.jpg" },
    { title: "Backless", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 120/60 ", support: "Bois", image: "/backless.jpg" },
    { title: "Ballerine", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 120/60 ", support: "Bois", image: "/ballerine.JPEG" },
    { title: "Couple", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 115/80 ", support: "Bois", image: "/couple2.JPEG" },
    { title: "Ramone", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 80/60 ", support: "Bois", image: "/ramone.JPEG" },
    { title: "Claudia S.", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 75/75 ", support: "Bois", image: "/claudias.jpeg" },
    { title: "Trait de lumière", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 63/122 ", support: "Bois", image: "/traitdelumiere.JPEG" },
    { title: "Debby H.", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, feutre", dimension: " 61/25 ", support: "Acier", image: "/debby.jpeg" },
    { title: "Plage", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, feutre", dimension: " 61/25 ", support: "Acier", image: "/plage.JPG" },
    { title: "Deshabille", technique: "Techniques mixtes: pastels à l'huile, acrylique, collage, bombe aérosol", dimension: " 71/60 ", support: "Bois", image: "/deshabille.JPG" },
    { title: "Art Culture", technique: "collage, pastels à l'huile, bombe aérosol avec technqiues du pochoir", dimension: " 65/100 ", support: "Toile de jute", image: "/Artculture.jpg" },
    { title: "Code barre", technique: "collage, pastels à l'huile, bombe aérosol et acrylique", dimension: " 67/110 ", support: "Toile de jute", image: "/codebarre.jpg" },
    { title: "John Lydon", technique: "collage, pastels à l'huile, bombe aérosol et acrylique", dimension: " 65/105 ", support: "Toile de jute", image: "/johnlydon.jpg" },
    { title: "Pop", technique: "collage, pastels à l'huile, bombe aérosol ", dimension: " 65/105 ", support: "Toile de jute", image: "/pop .jpg" },
    { title: "Body", technique: "Techniques mixtes : bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique ", dimension: " 110/47 ", support: "Bois de palette", image: "/body.JPEG" },
    { title: "Cuba", technique: "bombe aérosol, pastels à l'huile, acrylique, collage ", dimension: " 80/120 ", support: "Bois de palette", image: "/cuba.jpg" },
    { title: "Debby", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage ", dimension: " 120/74 ", support: "Bois de palette", image: "/debby.JPG" },
    { title: "La nuque", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique", dimension: " 120/74 ", support: "Bois de palette", image: "/lanuque.JPEG" },
    { title: "Non", technique: "Techniques mixtes: spray avec techniques du pochoir, pastels à l'huile, acrylique, collage/déchirage/grattage", dimension: " 53/58 ", support: "Bois de palette", image: "/non.jpeg" },
    { title: "Vinyle", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, peinture à la craie, feutre", dimension: " 120/77 ", support: "Bois de palette", image: "/vinyle.JPEG" },
    { title: "Le train", technique: "Techniques mixtes:  pastels à l'huile, acrylique, collage, bombe aérosol", dimension: " 80/60 ", support: "Carton", image: "/letrain.JPEG" },
    { title: "La Haut", technique: "Techniques mixtes:  pastels à l'huile, acrylique, collage, bombe aérosol, feutre", dimension: " 65/55 ", support: "Carton", image: "/lahaut.JPEG" },
    { title: "Couple", technique: "Techniques mixtes:  pastels à l'huile, acrylique, bombe aérosol avec techniques du pochoir", dimension: " 57/57 ", support: "Carton", image: "/couple.JPG" },
    { title: "Smile", technique: "Techniques mixtes:  pastels à l'huile, acrylique, bombe aérosol avec techniques du pochoir", dimension: " 80/60 ", support: "Carton", image: "/smile.JPEG" },
    { title: "Punk couple", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, feutre", dimension: " 80/60 ", support: "Carton", image: "/punkcouple.JPEG" },
    { title: "Amende", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, collage, pastels à l'huile, acrylique", dimension: " 70/100 ", support: "Carton", image: "/amende.JPEG" },
    { title: "Kurt and ...", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, blanc de meudon, pastels à l'huile, acrylique", dimension: " 80/60 ", support: "Carton", image: "/kurtand.JPEG" },
    { title: "Base ball", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, collage, pastels à l'huile, acrylique", dimension: " 60/60 ", support: "Carton", image: "/baseball.JPEG" },
    { title: "Bjork", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, collage, pastels à l'huile, acrylique", dimension: " 80/60 ", support: "Carton", image: "/bjork.JPEG" },
    { title: "Angus", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, collage, pastels à l'huile, acrylique", dimension: " 80/60 ", support: "Carton", image: "/angus.JPEG" },
    { title: "Sex Pistols", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, collage, pastels à l'huile, acrylique, feutre", dimension: " 80/60 ", support: "Carton", image: "/sexpistols.jpg" },
    { title: "Dentelle", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, collage, pastels à l'huile, acrylique", dimension: " 80/60 ", support: "Carton", image: "/dentelle.jpg" },
    { title: "Body Painting", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, pastels à l'huile", dimension: " 80/60 ", support: "Carton", image: "/bodypainting.jpg" },
    { title: "I like trash", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, pastels à l'huile, aquarelle et feutre", dimension: " 120/80 ", support: "Carton", image: "/iliketrash.jpeg" },
    { title: "Back and clop", technique: "Techniques mixtes:   bombe aérosol avec techniques du pochoir, pastels à l'huile, collage, acrylique", dimension: " 80/60 ", support: "Carton", image: "/backandclop.jpg" },
    { title: "La fenêtre", technique: "bombe aérosol, pastels à l'huile, acrylique", dimension: " 46/105 ", support: "Carton", image: "/lafenetre.jpg" },
    { title: "Nu", technique: "bombe aérosol, pastels à l'huile, collage", dimension: " 150/40 ", support: "Carton", image: "/nu.jpg" },
    { title: "Patricia Arquette", technique: "bombe aérosol, pastels à l'huile, collage", dimension: " 110/74 ", support: "Carton", image: "/patriciaarquette.jpg" },
    { title: "Peter Tosh", technique: "bombe aérosol, pastels à l'huile", dimension: " 85/60 ", support: "Carton", image: "/petertosh.jpg" },
    { title: "Secrets", technique: "bombe aérosol, tatoo, acrylique", dimension: " 66/97 ", support: "Carton", image: "/secrets.jpg" },
    { title: "Le cri", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 100/100 ", support: "Toile", image: "/lecri.JPG" },
    { title: "Chaise", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 80/60 ", support: "Toile", image: "/chaise.JPEG" },
    { title: "Beautiful back tatoo", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 80/60 ", support: "Toile", image: "/beautifulbacktatoo.JPEG" },
    { title: "Le bar", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 100/81 ", support: "Toile", image: "/lebar.jpg" },
    { title: "Strange", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 100/81 ", support: "Toile", image: "/strange.JPEG" },
    { title: "Billy", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 60/40 ", support: "Toile", image: "/billy.JPG" },
    { title: "Suggerer", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 60/40 ", support: "Toile", image: "/suggerer.JPEG" },
    { title: "Nude", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 100/81 ", support: "Toile", image: "/nude.JPEG" },
    { title: "Blondie", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 100/81 ", support: "Toile", image: "/blondie.JPEG" },
    { title: "Already seen", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage", dimension: " 100/80 ", support: "Toile", image: "/alreadyseen.JPEG" },
    { title: "L'oiseau", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, peinture à la craie, feutre", dimension: " 100/81 ", support: "Toile", image: "/loiseau.jpeg" },
    { title: "Bonnet", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, blanc de meudon", dimension: " 100/80 ", support: "Toile", image: "/bonnet.JPEG" },
    { title: "You", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, blanc de meudon", dimension: " 80/60 ", support: "Toile", image: "/you.JPEG" },
    { title: "Le piano", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, blanc de meudon", dimension: " 116/81 ", support: "Toile", image: "/lepiano.JPEG" },
    { title: "Pout", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, blanc de meudon", dimension: " 80/80 ", support: "Toile", image: "/pout.JPEG" },
    { title: "Joy", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, blanc de meudon", dimension: " 80/60 ", support: "Toile", image: "/joy.JPEG" },
    { title: "Tu viens", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, blanc de meudon", dimension: " 120/80 ", support: "Toile", image: "/tuviens.JPEG" },
    { title: "Woman light", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, acrylique, collage, blanc de meudon", dimension: " 115/75 ", support: "Toile", image: "/womanlight.JPEG" },
    { title: "Flowers", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, collage, blanc de meudon", dimension: " 80/60 ", support: "Toile", image: "/flowers.JPEG" },
    { title: "Disk", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, collage, brou de noix", dimension: " 120/80 ", support: "Toile", image: "/disk.jpeg" },
    { title: "Melancolique", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, collage, brou de noix", dimension: " 100/81 ", support: "Toile", image: "/melancolique.jpg" },
    { title: "1964", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, collage, acrylique, aquarelle", dimension: " 100/80 ", support: "Toile", image: "/1964.jpg" },
    { title: "Bad girls...", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile, collage, brou de noix", dimension: " 80/60 ", support: "Toile", image: "/badgirls.jpg" },
    { title: "The back", technique: "Techniques mixtes: spray avec techniques du pochoir, pastels à l'huile, collage/déchirage/grattage, brou de noix, acrylique", dimension: " 80/60 ", support: "Toile", image: "/theback.jpeg" },
    { title: "Pause kfe", technique: "Techniques mixtes: spray avec techniques du pochoir, pastels à l'huile, collage/déchirage/grattage, acrylique", dimension: " 116/81 ", support: "Toile", image: "/pausekfe.jpeg" },
    { title: "Bandana", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels grasse, collage/déchirage, acrylique", dimension: " 116/81 ", support: "Toile", image: "/bandana.jpeg" },
    { title: "The rose", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, pastels à l'huile", dimension: " 116/81 ", support: "Toile", image: "/therose.jpg" },
    { title: "Belle", technique: "bombe aérosol , pastels à l'huile, collage, acrylique", dimension: " 120/80 ", support: "Toile", image: "/belle.jpg" },
    { title: "Drag-queen", technique: "bombe aérosol , pastels à l'huile, collage, acrylique", dimension: " 116/81 ", support: "Toile", image: "/dragqueen.jpg" },
    { title: "Fatale", technique: "bombe aérosol , pastels à l'huile, collage, acrylique", dimension: " 80/120 ", support: "Toile", image: "/fatale.jpg" },
    { title: "Ganja", technique: "bombe aérosol , pastels à l'huile, collage", dimension: " 120/80 ", support: "Toile", image: "/ganja.jpg" },
    { title: "Kate Moss", technique: "bombe aérosol , pastels à l'huile, collage/déchirage, acrylique", dimension: " 116/81 ", support: "Toile", image: "/kateMoss.jpg" },
    { title: "Lucie", technique: "bombe aérosol , pastels à l'huile, collage", dimension: " 81/116 ", support: "Toile", image: "/lucie.jpg" },
    { title: "Roller", technique: "bombe aérosol , pastels à l'huile, collage/déchirage, acrylique", dimension: " 116/81 ", support: "Toile", image: "/roller.jpg" },
    { title: "Surprise", technique: "bombe aérosol , pastels à l'huile, collage", dimension: " 115/75 ", support: "Toile", image: "/surprise.jpg" },
    { title: "Tatoo", technique: "bombe aérosol , pastels à l'huile, collage", dimension: " 116/81 ", support: "Toile", image: "/tatoo.jpg" },
    { title: "Steeve and ...", technique: "bombe aérosol , pochoir, acrylique, feutre, pastels grasses, collage", dimension: " 160/60 ", support: "Toile", image: "/steeveand.JPEG" },
    { title: "Lovers rock", technique: "bombe aérosol , pastels grasses, feutre, acrylique, collage", dimension: " 50/50 ", support: "Toile", image: "/loversrock.JPG" },
    { title: "Charlotte G.", technique: "bombe aérosol , pastels grasses, acrylique, feutre, collage", dimension: " 100/81 ", support: "Toile", image: "/charlotteG.jpg" },
    { title: "Sexpistols", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir ", dimension: " 65/100 ", support: "Toile de jute", image: "/sexpistolsjute.jpg" },
    { title: "Peter Tosh", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir ", dimension: " 65/100 ", support: "Toile de jute", image: "/petertoshjute.jpg" },
    { title: "Debby", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir ", dimension: " 60/100 ", support: "Toile de jute", image: "/debbyjute.jpg" },
    { title: "Shut up", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 120/60 ", support: "Bois", image: "/shutup.jpg" },
    { title: "Broken", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 80/80 ", support: "Bois", image: "/broken.jpg" },
    { title: "Sensual II", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 61/89 ", support: "Bois", image: "/sensualII.jpg" },
    { title: "I see you", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 80/115 ", support: "Bois", image: "/Iseeyou.jpg" },
    { title: "Radiator", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 80/120 ", support: "Bois", image: "/radiator.jpg" },
    { title: "Bigoudis", technique: "techniques mixtes: collage, pastels grasses, bombe aérosol, pochoir, feutre, acrylique", dimension: " 120/60 ", support: "Bois", image: "/bigoudis.jpg" },
    { title: "Newstyle", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels à l'huile, collage", dimension: " 80/60 ", support: "Bois", image: "/newstyle.JPEG" },
    { title: "Dessous sexy", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels à l'huile, collage", dimension: " 80/60 ", support: "Bois", image: "/dessoussexy.jpeg" },
    { title: "Chignon", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels grasse, feutre", dimension: " 70/50 ", support: "Bois", image: "/chignon.JPG" },
    { title: "Marcheuse", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels à l'huile, collage", dimension: " 120/60 ", support: "Bois", image: "/marcheuse.JPG" },
    { title: "Ragging", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels à l'huile, collage", dimension: " 70/50 ", support: "Bois", image: "/ragging.JPG" },
    { title: "Vintage Music", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels à l'huile, collage", dimension: " 70/50 ", support: "Bois", image: "/vintagemusic.JPG" },
    { title: "Rayures", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels à l'huile, collage", dimension: " 70/50 ", support: "Bois", image: "/rayures.JPG" },
    { title: "Mental Load", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels à l'huile, collage", dimension: " 70/50 ", support: "Bois", image: "/mentalload.jpeg" },
    { title: "Velophone", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels à l'huile, collage", dimension: " 70/50 ", support: "Bois", image: "/velophone.jpeg" },
    { title: "Mirroir", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels à l'huile", dimension: " 120/60 ", support: "Bois", image: "/mirroir.jpeg" },
    { title: "Woman tatoo", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels à l'huile", dimension: " 36/78 ", support: "Bois", image: "/womantatoo.JPEG" },
    { title: "You", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels à l'huile, collage", dimension: " 100/70 ", support: "Bois", image: "/you2.JPEG" },
    { title: "No name", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels à l'huile, collage, feutre, brou de noix", dimension: " 100/80 ", support: "Bois", image: "/noname.JPEG" },
    { title: "So good", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels à l'huile, collage", dimension: " 120/80 ", support: "Bois", image: "/sogood.JPEG" },
    { title: "You are", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels à l'huile, blanc de meudon", dimension: " 80/100 ", support: "Bois", image: "/youare.JPEG" },
    { title: "Debout", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels à l'huile, collage, blanc de meudon", dimension: " 132/41 ", support: "Bois", image: "/debout.JPEG" },
    { title: "The ring", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, pastels à l'huile, collage, blanc de meudon", dimension: " 99/53 ", support: "Bois", image: "/thering.JPEG" },
    { title: "Look", technique: "Techniques mixtes: bombe aérosol avec techniques du pochoir, acrylique, feutre, collage", dimension: " 80/60 ", support: "Bois", image: "/look2.jpeg" }


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
  height:700px;
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


.view-button, .contact-button{
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

.view-button:hover, .contact-button:hover {
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
