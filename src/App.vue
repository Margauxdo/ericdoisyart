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
nav ul {
  display: flex;
  list-style: none;
  padding: 0;
}
nav ul li {
  margin-right: 15px;
}
</style>
