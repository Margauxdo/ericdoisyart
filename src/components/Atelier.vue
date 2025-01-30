<script setup >
import GallerieAtelier from "@/components/GallerieAtelier.vue"
</script>

<template>
  <main>
    <div class="atelier">
    <h2>Mon atelier</h2>

    <div class="contain-atelier">
    <div class="text-atelier">

    <p>Mon atelier se situe dans une ancienne école d’art qui a été transformée en lieu de partage et de création (ferme urbaine, association d’insertion, espace de coworking, ateliers d’artistes et d’artisans d’art,…..).<br>
       Ce lieu d’échanges à une âme, est-ce dû aux centaines, milliers d’élèves qui sont passés par là et ont laissé leurs empreintes dans ces murs…..<br>
       C’est un vrai lieu de travail, d’inspiration et de bien être pour moi et je vous y accueille sur demande avec un grand plaisir.</p>
    </div>
        <div class="gallery-atelier">
            <GallerieAtelier/>
        </div>

    </div>

    </div>
  </main>
</template>

<style scoped>


.contain-atelier{
    max-width:1500px;
    margin:auto;
     padding-bottom: 100px;
}
.atelier h2{
  max-width: 1500px;
  width: 100%;
  margin: auto;
  padding-bottom: 20px;
  padding-top: 20px;
  border-left: ridge;

}

</style>
