<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div id="app">
  <!--Header : menu + logo -->
    <header>
    <div class="logo">
      <img src="/src/assets/logo.png" alt="logo du site">
    </div>

      <nav>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/histoire">Mon histoire</router-link></li>
          <li><router-link to="/hub">Hub</router-link></li>
          <li><router-link to="/creations">Mes créations</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
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
