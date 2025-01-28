<script setup>
</script>

<template>
<div class="body-foot">
<div class="logo">
  <img src="/src/assets/logoF.png" alt="logo footer">
</div>
<div class="map">

</div>
<div class="contact">
<ul>

<li><a class="ML" href="@/assets/mentions-legales.pdf" download="Mentions-Legales.pdf">Mentions légales</a></li>
</ul>
<ul class="picto-contact">
<li><a href="ericdoisy@gmail.com">
<img src="@/assets/picto-mail.png" alt="email"></a></li>
<li><a href="tel:+33660576310">
<img src="@/assets/picto-tel.png" alt="telephone"></a></li>
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
  background-color:#014961;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #ddd;

}

.logo {
  flex: 1;
  text-align: left;
}
.logo img{
      max-width: 200px;
      display: flex;
      justify-content: center;
      align-content: center;
      width: 100%;
}
.picto-contact{
  display:flex;
  align-content:center;
  justify-content:center;
}
.picto-contact img{
  height:50px;
  object-fit:cover;
  margin: 10px;
}
.contact {
  flex: 2;
  text-align: center;
}

.reseauxsocio {
  flex: 1;
  text-align: right;
}
.reseauxsocio img{
  max-width:50px;
  width:100%
  }

.contact ul,
.reseauxsocio ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact ul li,
.reseaux-sociaux ul li {
  margin: 5px 0;
}

.reseauxsocio ul {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
.ML{
  color:#c48c00;
  text-decoration:none;
}
.ML:hover{
  color:#E1DEDD;
  }
</style>
