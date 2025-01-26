<script setup>
import Logo from "@/components/Logo.vue"
</script>

<template>
<div class="body-foot">
<div class="logo">
  <Logo/>
</div>
<div class="map">

</div>
<div class="contact">
<ul>
<li>Mentions légales</li>
<li>logo mail</li>
<li>logo telephone</li>
</ul>
</div>
<div class="reseauxsocio">
<ul>
<li>facebook</li>
<li>Linkedin</li>
<li>Instagram</li>
</ul>
</div>
</div>


</template>



<style scoped>
.body-foot {
background-color:#0D8A83;
 padding: 20px;
  text-align: center;
  border-top: 1px solid #ddd;
}

.logo {
  margin-bottom: 10px;
}

.contact ul,
.reseaux-sociaux ul {
  list-style: none;
  padding: 0;
}

.contact ul li,
.reseaux-sociaux ul li {
  margin: 5px 0;
}

.reseaux-sociaux ul {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
