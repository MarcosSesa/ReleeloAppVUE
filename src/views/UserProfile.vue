<template>
  <div>
    <NavBar/>
    <section style="background:rgb(239,239,239)">
      <div class="container">
        <div class="d-xl-flex justify-content-xl-center">
          <img class="img-fluid" src="..\assets\EnConstruccion.svg" style="width: 593.562px;padding-top: 94px;" />
        </div>
        <h1 class="d-xl-flex justify-content-xl-center" style="padding-top: 18px; margin-bottom: 0px;padding-bottom: 200px;font-family: 'Amatic SC', serif;">En construcción</h1>
      </div>
    </section>
    
      <GlobalBookList/>
    

    <Footer/>
  </div>

</template>



<script>

import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import GlobalBookList from "../components/GlobalBookList.vue";


export default {
  name: "Home",
  components: {
    NavBar,
    Footer,
    GlobalBookList,
  },
  
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
</style>