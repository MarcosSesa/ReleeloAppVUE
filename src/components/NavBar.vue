<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light" style="height:100px">
    <div class="container-fluid">
      <router-link to="/home">
        <a class="navbar-brand"  style="font-size: 25px;font-family: Abel, sans-serif;">Releelo</a>
      </router-link>

      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>

        <div class="collapse navbar-collapse" id="navcol-1">

            <ul class="navbar-nav d-md-flex d-lg-flex ms-auto align-items-md-center align-items-lg-center" v-if="!session">
                <li class="nav-item">
                  <router-link to="/signIn"><a class="nav-link active"  >Iniciar Sesion</a></router-link>
                </li>
                <li class="nav-item">
                 <router-link to="/signUp"><a class="nav-link active"  style="background: rgb(0,191,166);border-radius: 25px;border-color: rgb(0,0,0);padding-left: 15px;padding-right: 15px;">Registrarse</a></router-link> 
                </li>
            </ul>
            

            
            <ul class="navbar-nav d-md-flex d-lg-flex ms-auto align-items-md-center align-items-lg-center"  v-if="session">
              <li class="nav-item">
                <a class="nav-link active">
                <img src="..\assets\User.svg" style="width: 52.2px;padding-right: 15px;" />User</a>
              </li>

              <li class="nav-item">
                  <router-link to="/Home" v-on:click="signOut"><a class="nav-link active">Salir</a></router-link>
              </li>
            </ul>
        </div>
    </div>
</nav>




</template>

<script>
import env from '../environment.js';


  export default {
    name: "NavBar",
    data(){
      return{
        user: '',
        session: {},
      }
    },
    async created (){
      this.user = await env.supabase.auth.user(); 
      this.session = await env.supabase.auth.session();
      console.log(this.$route.name);
    },methods:{
      async signOut(){ 
        await env.supabase.auth.signOut();  
        console.log("signtOut()");
        this.$router.go();
      }

    
    },
    
    
  };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Amatic+SC&display=swap');

.nav-link{
  font-family: Abel, sans-serif;
  color:rgb(47,46,65) ;
}
</style>