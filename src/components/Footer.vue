<script setup>
</script>

<template>
  <div class="body-foot">
    <div class="logo">
    <a  href="/" class="homepage">
      <img src="/src/assets/logoF.png" alt="logo footer">
      </a>
    </div>

    <div class="contact">
      <ul>
        <li><a class="ML" href="@/assets/mentions-legales.pdf" download="Mentions-Legales.pdf">Mentions légales</a></li>
      </ul>
      <ul class="picto-contact">
        <li>
        <router-link to="/mail">
                    <img src="@/assets/picto-mail.png" alt="email">
                  </router-link>
        </li>
        <li><router-link to="/phone">
                        <img src="@/assets/picto-tel.png" alt="telephone">
             </router-link>
        </li>
      </ul>
    </div>

    <div class="reseauxsocio">
      <ul>
        <li><a href="https://www.facebook.com/ericdoisyart"><img src="@/assets/facebook.png" alt="facebook"></a></li>
        <li><a href="https://www.linkedin.com/in/eric-doisy-375ba020/"><img src="@/assets/linkedin.png" alt="linkedin"></a></li>
        <li><a href="https://www.instagram.com/ericdoisyart/"><img src="@/assets/instagram.png" alt="instagram"></a></li>
      </ul>
    </div>
  </div>
</template>




<style scoped>
.body-foot {
  background-color: #014961;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #ddd;
  flex-wrap: wrap;
}


.logo {
  flex: 1;
  text-align: left;
}
.logo img {
  max-width: 200px;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
}

.picto-contact {
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 5px;
}
.picto-contact img {
  height: 30px;
  width: auto;
  object-fit: contain;
  margin: 15px;
}

.contact {
  flex: 2;
  text-align: center;
}

.reseauxsocio {
  flex: 1;
  text-align: right;
}
.reseauxsocio img {
  max-width: 50px;
  width: 100%;
}

.contact ul,
.reseauxsocio ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.reseauxsocio ul {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
.ML {
  color: #c48c00;
  text-decoration: none;
}
.ML:hover {
  color: #e1dedd;
}


@media screen and (max-width: 1024px) {
  .body-foot {
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px;
  }

  .logo {
    flex: 1;
    text-align: center;
  }

  .logo img {
    max-width: 160px;
  }

  .contact {
    flex: 2;
    text-align: center;
  }

  .reseauxsocio {
    flex: 1;
    text-align: center;
  }

  .reseauxsocio ul {
    justify-content: center;
  }
}


@media screen and (max-width: 767px) {
  .body-foot {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 15px;
  }

  .logo img {
    max-width: 120px;
    margin-bottom: 10px;
  }

  .contact {
    flex: none;
    width: 100%;
    order: 2;
  }

  .reseauxsocio {
    flex: none;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    order: 3;
  }

  .reseauxsocio ul {
    justify-content: center;
  }

  .picto-contact {
    flex-direction: column;
    align-items: center;
  }

  .picto-contact img {
    height: 25px;
    margin: 5px;
  }
}

</style>
