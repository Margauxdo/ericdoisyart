<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Menu from "@/components/Menu.vue"
import Logo from "@/components/Logo.vue"
import Footer from "@/components/Footer.vue"
</script>

<template>
  <div id="app">
  <!--Header : menu + logo -->
    <header>
<Logo/>    <Menu/>



    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
    <Footer/>
    </footer>
  </div>
</template>

<style>

body {
  max-width: 100%;
  overflow-x: hidden; /* Empêche le défilement horizontal */
  margin: 0;
  padding: 0;
}




nav ul {
  display: flex;
  list-style: none;
  padding: 0;
}
nav ul li {
  margin-right: 15px;
}

h1{
  font-family: "kiln-sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  color:#c48c00;
   font-size:45px;
  text-align:center;
    text-decoration: overline;
    text-decoration-line: overline;
    text-emphasis: circle;
    text-emphasis: filled;}
h2{
   font-family: "ff-market-web", sans-serif;
   font-weight: 300;
   font-style: normal;
  color:#017393;
  font-size:45px;
}
h3{
  font-family: "kiln-sans", sans-serif;
  font-weight: 300;
  font-style: light;
  color: #c48c00;
  max-width: 1200px;
  text-align: center;
  padding: 0px 0px 50px 0px;
  font-size: 35px;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: auto;
}

p{
  font-family: "freight-sans-pro", sans-serif;
  font-weight: 300;
  font-style: normal;
  color:#014b60;
  max-width:1880px;
  font-size:18px;}

</style>
