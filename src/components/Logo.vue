<template>
  <div class="logo-container">
    <router-link to="/">
      <img src="/src/assets/logoF.png" alt="logo du site" class="logo">
    </router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.logo-container {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #014961;
}

.logo {
  width: 300px;
  max-width: 100%;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@media screen and (max-width: 1024px) {
  .logo {
    width: 250px;
  }
}

@media screen and (max-width: 768px) {
  .logo {
    width: 200px;
  }
}

@media screen and (max-width: 480px) {
  .logo {
    width: 150px;
  }

  .logo-container {
    height: 120px;
  }
}
</style>
