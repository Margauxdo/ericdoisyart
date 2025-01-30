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
nav {
      height: 80px;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #017393;
      box-shadow: 0 5px 15px #545455;
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 20px;
      background: #014961;
      border-radius: 0px 0px 15px 15px;
}

nav li{
   text-align: center;
}
nav ul{
  margin: auto;
  align-content: center;
  justify-content: center;
      }
nav a{
    text-decoration: none;
    font-size: 25px;
    color:#d4d4d4;
    font-family: "kiln-sans", sans-serif;
    font-style: normal;

}
nav a:hover{
  text-decoration-line: overline;
  color: #c48c00;
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
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 0.2px solid #017393;
  border-radius: 8px;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  z-index: 10;
}

li:hover .submenu {
  display: block;
}

.submenu li {
  padding: 8px 15px;
  white-space: nowrap;
}

.submenu li a {
  font-size: 18px;
  color: #017393;
  text-transform: none;
  text-decoration: none;
}

.submenu li a:hover {
  color: #a94002;
  background-color: rgba(147, 55, 1, 0.1);
  border-radius: 4px;
  text-decoration-line: overline;
}
</style>
