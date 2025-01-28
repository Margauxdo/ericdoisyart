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
    <Logo/>

      <Menu/>

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
/* Ajoutez ici vos styles */
body{
  background-color:#e9e9e9;

}
*{
border-box:box-sizing;
max-width:1880px;
width:100%;
}
nav ul {
  display: flex;
  list-style: none;
  padding: 0;
}
nav ul li {
  margin-right: 15px;
}
footer{
    padding-top: 100px;
}
h1{
  font-family: "wausau", sans-serif;
  font-weight: 400;
  font-style: normal;
      color:#c48c00;
      margin-left:150px;
      font-size:45px;

}
h2{
  font-size:25px;
}
h2, h3, h4{
  font-family: "madelinette-roman-vino", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin-left:150px;
   color:#017393;

}
p{
  font-family: "mokoko", serif;
  font-weight: 400;
  font-style: normal;
  color:#014b60;
  max-width:1880px;
}
a{
  font-family: "mokoko", serif;
  font-weight: 400;
  font-style: italic;
}
</style>
