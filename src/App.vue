<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';
import Menu from "@/components/Menu.vue"
import Logo from "@/components/Logo.vue"
import Footer from "@/components/Footer.vue"
const showScrollButton = ref(false);

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
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

    <!-- Bouton de retour en haut -->
        <button v-if="showScrollButton" @click="scrollToTop" class="scroll-to-top">
          &#8679;
        </button>

  </div>
</template>

<style>
body{

  background-color:hsla(260,11%,85%,1);
  box-sizing: border-box;
  width: 100%;
  overflow-x:hidden;
}
.scroll-to-top {
  position: fixed;
  bottom: 150px;
  right: 50px;
  background: #c48c00;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
}

.scroll-to-top:hover {
  opacity: 1;
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
  font-size:18px;
  }


  @media screen and (max-width: 1024px) {
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .scroll-to-top {
      width: 45px;
      height: 45px;
      font-size: 22px;
      bottom: 130px;
      right: 50px;
    }

    h1, h2 {
      font-size: 38px;
    }

    h3 {
      font-size: 30px;
      max-width: 900px;
    }
  }


  @media screen and (max-width: 767px) {
    body {
      width: 100vw;
      overflow-x: hidden;
    }

    header {
      flex-direction: column;
      align-items: center;
    }

    main {
      padding: 0 10px;
    }

    footer {
      padding-top: 50px;
      text-align: center;
    }

    h1, h2 {
      font-size: 32px;
    }

    h3 {
      font-size: 26px;
      max-width: 700px;
    }

    .scroll-to-top {
      width: 40px;
      height: 40px;
      font-size: 20px;
      bottom: 30px;
      right: 50px;
    }
  }


  @media screen and (max-width: 480px) {
    h1, h2 {
      font-size: 28px;
    }

    h3 {
      font-size: 24px;
      max-width: 90%;
    }

    .scroll-to-top {
      width: 35px;
      height: 35px;
      font-size: 18px;
      bottom: 50px;
      right: 50px;
    }
  }


</style>
