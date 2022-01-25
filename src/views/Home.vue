<template>
  <NavBar></NavBar>
  <div class="container">
    <div class="d-xl-flex justify-content-xl-center"><img class="img-fluid" src="..\assets\EnConstruccion.svg" style="width: 593.562px;margin-top: 94px;" /></div>
    <div></div>
    <h1 class="d-xl-flex justify-content-xl-center" style="padding-top: 18px;font-family: 'Amatic SC', serif;">En construcción</h1>
</div>
  
<footer style="height: 200px;background: #00bfa6;margin-top: 150px;"></footer>

</template>



<script>

import NavBar from "../components/NavBar.vue";


export default {
  name: "Home",
  components: {
    NavBar,
  },
  
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
</style>