<template>
    <h1>Contact par email</h1>

  <div class="mail-page">
    <p>Envoyez-moi un email à
     <a href="mailto:ericdoisy@gmail.com">ericdoisy@gmail.com</a></p>
    <router-link to="/">Retour à l'accueil</router-link>
  </div>
</template>

<style scoped>
.mail-page {
  text-align: center;
  margin-top: 50px;
}
.mail-page a {
  color: #017393;
  text-decoration: none;
  font-weight: bold;
}
.mail-page a:hover {
  text-decoration: underline;
}
</style>
