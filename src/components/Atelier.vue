<script setup>
import GallerieAtelier from "@/components/GallerieAtelier.vue";
</script>

<template>
  <main>
    <div class="atelier">
      <h2>Mon atelier</h2>

      <div class="contain-atelier">
        <div class="text-atelier">
          <p>
            Mon atelier se situe dans une ancienne école d’art qui a été transformée en lieu de partage et de création
            (ferme urbaine, association d’insertion, espace de coworking, ateliers d’artistes et d’artisans d’art,…..).<br />
            Ce lieu d’échanges a une âme, est-ce dû aux centaines, milliers d’élèves qui sont passés par là et ont laissé
            leurs empreintes dans ces murs…..<br />
            C’est un vrai lieu de travail, d’inspiration et de bien-être pour moi et je vous y accueille sur demande avec grand plaisir.
          </p>
        </div>
        <div class="gallery-atelier">
          <GallerieAtelier />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

.contain-atelier {
  max-width: 1500px;
  margin: auto;
  padding-bottom: 100px;
}

.atelier h2 {
  max-width: 1500px;
  width: 100%;
  margin: auto;
  padding-bottom: 20px;
  padding-top: 20px;
  border-left: ridge;
}


/* 🔹 Tablette horizontale (1024px) */
@media screen and (max-width: 1024px) {
  .contain-atelier {
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 50px 20px;
  }

  .text-atelier,
  .gallery-atelier {
    max-width: 90%;
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  .contain-atelier {
    max-width: 700px;
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }

  .text-atelier,
  .gallery-atelier {
    max-width: 95%;
    padding: 15px;
  }

  .atelier h2 {
    text-align: center;
  }
}

@media screen and (max-width: 480px) {
  .contain-atelier {
    max-width: 100%;
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  .text-atelier,
  .gallery-atelier {
    max-width: 95%;
    padding: 10px;
  }

  .atelier h2 {
    font-size: 22px;
    text-align: center;
    padding: 15px 0;
  }
}
</style>

