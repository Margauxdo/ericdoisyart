<script setup lang="ts">
</script>

<template>
  <main>
    <div class="parcours">
    <h2>Mon parcours</h2>

    <div class="contain-parcours">
    <div class="citation">
    <p>"C'est ma curiosité, mon envie d'évoluer, et mon travail qui me conduit vers la recherche expressive et les compositions graphiques."
    </p>
    </div>
    <div class="containPortrait">
    <div class="portrait">
        <img src="/src/assets/portrait-ericdoisy.jpg" alt="portrait">
    </div>
    <div class="presentation">
    <p>M’inspirant de l’univers vintage et du street art, je combine les supports classiques et les
       techniques propres au street art telles que la bombe aérosol, le pochoir, la peinture
       acrylique et les collages.<br>
       Très orienté sur le sujet féminin, j’ essaye de capter un mouvement, un regard. En
       cherchant à créer des oeuvres dynamiques sur différents supports, dont tous pourraient
       s’apparenter à des murs. Sur chacune de mes oeuvres se cache une petite tête, c’est ma
       signature graphique.<br>
       Depuis peu, mon art évolue vers le cubisme, l’art naïf/brut, le néo-expressionnisme ce qui
       me permet d’avoir une liberté plastique sans limite.<br>
       Mes nouvelles réalisations sont une évolution vers une spontanéité picturale vers la
       couleur, le trait...<br>
       Mon art actuel est quelque chose de libre et expressif comme l’art brut / naïf pour cette
       liberté plastique sans limite et authentique.<br>
       J’ai débuté ma carrière en tant que commercial avant de me convertir en décorateur, où
       j’ai commencé à designer des lampes en carton, plexiglass, bois,.... Ma rencontre avec un
       graffeur a marqué un tournant décisif dans mon parcours.<br>
       Fasciné par les techniques du pochoir, je les ai d’abord appliquées à mes créations de
       lampes avant de les expérimenter sur des surfaces planes. J’ explore également le collage
       ainsi que d’autres techniques artistiques. Admiratif par l’oeuvre de JM Basquiat, j’ai
       ressenti une forte aspiration à intégrer ce « petit truc en plus » dans mon propre travail.<br>
       Cette introspection m’a mené à effacer progressivement mes pochoirs, cherchant à
       transcender la technique pour atteindre une expression plus libre et instinctive.<br>
       Mon processus créatif ne suit pas de séries prédéfinies; je retravaille souvent mes oeuvre
       antérieures tout en conservant des éléments de pochoir en filigrane.<br>
       Mon travail est marqué par une superposition et une profondeur, témoignages de mon
       approche instinctive du dessin.<br>
       Constamment en quête de nouveautés, je traverse un long processus de maturation et de
       décantation artistique.<br>
       L’oeil est un motif récurrent dans mon oeuvre, symbolisant le mouvement et le regard, qu’il
       soit introspectif ou tourné vers le monde. Ce motif pourrait être interprété comme un refle
       de moi même, une découverte qui se fait souvent a posteriori.<br>
       Je recherche à voir mes oeuvres vivre indépendamment de moi laissant libre cours à
       l’imagination du spectateur pour s’imprégner de mon travail. </p>
    </div>
    </div>
    </div>

    </div>
  </main>
</template>

<style scoped>
/* Global */
.parcours {
  padding: 20px;
}
h2{
  max-width: 1500px;
  width: 100%;
  margin: auto;
  padding-bottom: 20px;
  padding-top: 20px;
  border-left: ridge;

}

.citation p {
  text-align: center;
  text-transform: uppercase;
  color: #845f01;
  margin-bottom: 30px;
  font-weight: bold;
}

.contain-parcours {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  max-width: 1500px;
  margin: 0 auto;
  padding-bottom: 100px;
}


.containPortrait {
  display: flex;
  gap: 20px;
  width: 100%;
}

.portrait {
  flex: 0 0 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.portrait img {
  width: 100%;
  height: auto;
  border: 2px double #014b60;
  box-shadow: 5px 6px 6px rgb(0 0 0 / 35%);
  border-radius: 500px 0px 0px 500px;
}

/* Texte (60%) */
.presentation {
  flex: 0 0 60%;
  text-align: justify;
  line-height: 1.6;
  font-size: 16px;
  margin-left:50px;
  margin-top: 100px;
}

.presentation p {
  margin: 0;
}
</style>
