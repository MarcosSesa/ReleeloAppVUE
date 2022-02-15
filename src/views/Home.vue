<template>
  <div>
    <NavBar/>
    <div class="container" style="padding-top:70px;padding-bottom:100px;">
    <div class="row d-flex">
        <div class="col-md-6 d-xxl-flex flex-sm-grow-1 flex-md-grow-1 justify-content-xxl-center" style="width: 40%;">
          <img class="d-xxl-flex align-items-xxl-center" src="..\assets\2022.svg" style="width: 100%;" />
        </div>
        <div class="col-md-6" style="width: 60%;padding-top: 60px;">
            <h1 style="font-family: Abel, sans-serif;text-align: center;font-size: 40px;">! DALE LA BIENVENIDA AL 2022 !</h1>
            <p style="text-align: center;font-size: 17px;padding-right: 10%;padding-left: 10%;">Unete ya a la aplicacion de los amantes de la lectura como tu . Cambia todos esos libros que ya te sabes de memoria por nuevas historias increibles que te estan aguardando</p>
            <div style="text-align: center;padding-top: 21px;"><button v-on:click="crearlibro" class="btn btn-primary" type="button" style="background: #00bfa6;border-radius: 26px;width: 139.5px;padding: 4px;"><i class="fa fa-plus" style="padding: 8px;border-width: 2px;border-style: solid;border-radius: 53px;margin-right:7px;"></i>Crear libro</button></div>
          </div>
      </div>
    </div>
    <GlobalBookList/>
    <Footer/>
    
  </div>

</template>



<script>

import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import GlobalBookList from "../components/GlobalBookList.vue";
import env from "../environment.js"

export default {
  name: "home",
  components: {
    NavBar,
    Footer,
    GlobalBookList,
  },
  data(){
    return{
     session: {},
    }
  },
   async created (){
      this.session = await env.supabase.auth.session();
   },
   methods:{
     crearlibro(){
       if (this.session) {
         this.$router.push("/create");
       } else {
         this.$router.push("/signIn");
       }
     }
   }
  
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
</style>