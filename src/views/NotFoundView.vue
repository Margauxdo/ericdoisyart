<template>
  <div class="not-found">
    <h1>Erreur 404</h1>
    <p>La page que vous recherchez n'existe pas.</p>

    <img src="/perso.png" alt="personnage">
    <router-link  class="button" to="/">Retour à l'accueil</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style>
.not-found {
  text-align: center;
  margin-top: 50px;
}
.button{
    background: #c48c00;
    padding: 20px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: auto;
    text-transform: uppercase;
    color: #014961;
    border-radius:15px;
    box-shadow: 1px 4px 4px #c4c4c4;
    text-decoration:none;
}
.button:hover{
  background:#014961;
  color:#c4c4c4;
}
</style>
