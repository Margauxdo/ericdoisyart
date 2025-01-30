<template>
 <h1>Contact par téléphone</h1>
  <div class="phone-page">

    <p>Appelez-moi au <a href="tel:+33660576310">+33 6 60 57 63 10</a></p>
    <router-link to="/">Retour à l'accueil</router-link>
  </div>
</template>

<style scoped>
.phone-page {
  text-align: center;
  margin-top: 50px;
}
.phone-page a {
  color: #017393;
  text-decoration: none;
  font-weight: bold;
}
.phone-page a:hover {
  text-decoration: underline;
}
</style>
