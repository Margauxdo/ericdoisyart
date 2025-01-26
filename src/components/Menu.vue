<template>
  <nav>
          <ul>
            <li><router-link to="/histoire">Mon histoire</router-link>
              <ul class="submenu">
                 <li><router-link to="/mon-parcours">Mon parcours</router-link></li>
                 <li><router-link to="/mon-atelier">Mon atelier</router-link></li>
              </ul>
            </li>
            <li>
               <a href="https://linktr.ee/ericdoisy" target="_blank" rel="noopener noreferrer">Hub</a>
            </li>
            <li><router-link to="/creations">Mes créations</router-link>
               <ul class="submenu">
                  <li><router-link to="/neo-expressionnisme">Néo-expressionnisme</router-link></li>
                  <li><router-link to="/figuratif">Figuratif</router-link></li>
               </ul>
            </li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
  </nav>
</template>

<script setup>
</script>

<style scoped>
nav{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    border-bottom:0.2px solid #017393;

    }
nav a{
    text-decoration: none;
    font-size: 25px;
    text-transform: uppercase;
    color:#017393;
}
nav a:hover{
  border-top: 0.2px solid #933701;
  color: #933701;
}
/* Sous-menu */
nav li {
  position: relative;
}

.submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(255, 255, 255, 0.95); /* Fond semi-transparent */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ombre pour un effet de profondeur */
  border: 0.2px solid #017393;
  border-radius: 8px; /* Coins arrondis */
  list-style: none;
  padding: 10px 0;
  margin: 0;
  z-index: 10;
}

li:hover .submenu {
  display: block; /* Afficher le sous-menu au survol */
}

.submenu li {
  padding: 8px 15px;
  white-space: nowrap; /* Évite les retours à la ligne */
}

.submenu li a {
  font-size: 18px; /* Taille plus petite pour le sous-menu */
  color: #017393;
  text-transform: none; /* Pas de majuscules dans le sous-menu */
  text-decoration: none;
}

.submenu li a:hover {
  color: #933701;
  background-color: rgba(147, 55, 1, 0.1); /* Fond coloré au survol */
  border-radius: 4px;
}
</style>
