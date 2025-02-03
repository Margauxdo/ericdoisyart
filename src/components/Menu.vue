<template>
  <nav :class="{ active: showMenu }">
    <!-- Bouton burger toujours visible -->
    <div class="burger" @click.stop="toggleMenu">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- Menu principal -->
    <ul :class="{ 'menu-open': showMenu }" @click.self="closeMenu">
      <li @click="toggleSubMenu('histoire')">
        <router-link to="/histoire" @click="closeMenu">Mon histoire</router-link>
        <ul v-if="activeSubMenu === 'histoire'" class="submenu">
          <li><router-link :to="{ path: '/histoire', hash: '#mon-parcours' }" @click="closeMenu">Mon parcours</router-link></li>
          <li><router-link :to="{ path: '/histoire', hash: '#mon-atelier' }" @click="closeMenu">Mon atelier</router-link></li>
        </ul>
      </li>

      <li><a href="https://linktr.ee/ericdoisy" target="_blank" rel="noopener noreferrer" @click="closeMenu">Hub</a></li>

      <li @click="toggleSubMenu('creations')">
        <router-link to="/creations" @click="closeMenu">Mes créations</router-link>
        <ul v-if="activeSubMenu === 'creations'" class="submenu">
          <li><router-link :to="{ path: '/creations', hash: '#neo-expressionnisme' }" @click="closeMenu">Néo-expressionnisme</router-link></li>
          <li><router-link :to="{ path: '/creations', hash: '#figuratif' }" @click="closeMenu">Figuratif</router-link></li>
        </ul>
      </li>

      <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showMenu = ref(false);
const activeSubMenu = ref(null);

/** Ouvrir/Fermer le menu burger */
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
  activeSubMenu.value = null;
};

/** Ouvrir/Fermer un sous-menu */
const toggleSubMenu = (menuName) => {
  if (activeSubMenu.value === menuName) {
    activeSubMenu.value = null;
  } else {
    activeSubMenu.value = menuName;
  }
};

/** Fermer le menu */
const closeMenu = () => {
  showMenu.value = false;
  activeSubMenu.value = null;
};

/** Fermer le menu lorsqu'on clique en dehors */
const handleClickOutside = (event) => {
  const nav = document.querySelector("nav");
  if (nav && !nav.contains(event.target)) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
nav {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #017393;
  box-shadow: 0 5px 15px #000000;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #014961;
  border-radius: 0px 0px 40px 40px;
}

nav ul {
  display: flex;
  gap: 30px;
  align-items: center;
}

nav a {
  text-decoration: none;
  font-size: 25px;
  color: #d4d4d4;
  font-family: "kiln-sans", sans-serif;
  font-style: normal;
}

nav a:hover {
  text-decoration-line: overline;
  color: #c48c00;
}

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

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
}

.burger div {
  width: 30px;
  height: 4px;
  background: white;
  border-radius: 5px;
}

@media screen and (max-width: 480px) {
  nav {
    justify-content: center;

  }

  .burger {
    display: flex;
    cursor: pointer;
  }

  nav ul {
    display: none;
  }

  .menu-open {
    display: flex !important;
    flex-direction: column;
    position: fixed;
    top: 100px;
    left: 0;
    width: 100vw;
    height: 300px;
    background: #014961;
    padding: 20px;
    text-align: center;
    z-index: 1000;
    transition: transform 0.3s ease-in-out;
  }

  nav ul li {
    margin: 10px 0;
  }

  .submenu {
    position: relative;
    background: transparent;
    box-shadow: none;
    border: none;
  }

  .submenu li {
    padding: 5px 0;
  }

  .submenu li a {
    font-size: 20px;
  }
}
</style>
