<template>
  <div>
    <NavBar/>
    <GlobalBookList/>
    <Footer/>
  </div>

</template>



<script>

import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import GlobalBookList from "../components/GlobalBookList.vue";


export default {
  name: "home",
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