<script setup lang="ts">
</script>

<template>
  <main>
    <div class="parcours">
      <h2>Mon parcours</h2>

      <div class="contain-parcours">
        <div class="citation">
          <p>
            "C'est ma curiosité, mon envie d'évoluer, et mon travail qui me conduit vers la recherche expressive et les compositions graphiques."
          </p>
        </div>

        <div class="containPortrait">
          <div class="portrait">
            <img src="/src/assets/portrait-ericdoisy.jpg" alt="portrait" />
          </div>
          <div class="presentation">
            <p>
              S’inspirant de l’univers vintage et du street art dans ses débuts (travail du pochoir),
              Eric combine les supports classiques et les techniques propres au street art telles
              que la bombe aérosol, le pochoir, la peinture acrylique et les collages.
              Depuis peu, son art évolue vers l’expressionnisme, l’art brut, naïf, singulier,.... ce
              qui lui permet d’avoir une liberté plastique sans limite.
              Ces nouvelles réalisations sont une évolution vers une spontanéité picturale vers la
              couleur, le trait...
              Éric Doisy est un artiste contemporain français dont le style se situe entre
              l’abstraction et la figuration libre, avec une forte empreinte de l’art brut et de
              l’expressionnisme. Son travail est souvent caractérisé par :
              <ul>
              <li><p>Des formes primitives et spontanées, parfois proches du graffiti ou de l’art enfantin.</p></li>
              <li><p>Une gestuelle très libre, presque automatique, avec un attrait pour l’instantané et l’émotion brute.</p></li>
              <li><p>Des couleurs vives et contrastées, souvent posées en à-plats ou en traits nerveux.</p></li>
              <li><p>Un univers peuplé de figures stylisées, de symboles, parfois avec des lettres ou mots isolés.</p></li>
              <li><p>Une texture importante, souvent obtenue par des superpositions de matières ou une application directe, intuitive.</p></li>
              </ul>

            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* 🌟 Version Desktop (Ton CSS est conservé) */
.parcours {
  padding: 20px;
}

h2 {
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
  //flex: 0 0 60%;
  text-align: justify;
  line-height: 1.6;
  font-size: 16px;
  margin-left: 50px;
  margin-top: 100px;
}

.presentation p {
  margin: 0;
}


/* 🔹 Tablette horizontale (1024px) */
@media screen and (max-width: 1024px) {
  .contain-parcours {
    max-width: 900px;
  }

  .containPortrait {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
  }

  .portrait {
    flex: none;
    max-width: 60%;
  }

  .portrait img {
    border-radius: 500px 500px 0px 0px;

  }

  .presentation {
    flex: none;
    max-width: 80%;
    margin: 0;
  }
}

@media screen and (max-width: 768px) {
  .contain-parcours {
    max-width: 700px;
    padding: 40px 20px;
  }

  .containPortrait {

    align-items: center;
    gap: 20px;
  }

  .portrait {
    max-width: 80%;
  }

  .portrait img {
    width: 100%;
    border-radius: 5px 5px 500px 500px;

  }

  .presentation {
    max-width: 90%;
    text-align: center;
  }
}

@media screen and (max-width: 480px) {
  .contain-parcours {
    max-width: 100%;
    padding: 20px;
  }

  .portrait {
    max-width: 90%;
  }

  .presentation {
    max-width: 95%;
  }

  .atelier h2 {
    font-size: 22px;
    text-align: center;
    padding: 15px 0;
  }
}
</style>
