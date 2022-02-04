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
                  <router-link to="/signIn" style="text-decoration: none;"><a class="nav-link active"  >Iniciar Sesion</a></router-link>
                </li>
                <li class="nav-item">
                 <router-link to="/signUp" style="text-decoration: none;"><a class="nav-link active" id="register">Registrarse</a></router-link> 
                </li>
            </ul>
            

            
            
                
              

            <ul v-if="session" class="navbar-nav d-md-flex d-lg-flex ms-auto align-items-md-center align-items-lg-center">
              <img src="..\assets\user2.svg" style="width: 52.2px;padding-right: 15px;" />
              <li class="nav-item dropdown">
                  <router-link to="/" class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" >Bienvenido {{getuser}}</router-link>
                  <div class="dropdown-menu">
                    <router-link to="" class="dropdown-item">Mi perfil</router-link>
                    <a  class="dropdown-item" :href="'/user/' + user.id">Mis libros</a>
                    
                    
                    
                    <a class="dropdown-item" v-on:click="signOut">Cerrar sesión</a>
                  </div>
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
        userid: String,
      }
    },
    async created (){
      this.user = await env.supabase.auth.user(); 
      this.session = await env.supabase.auth.session();
    },
    computed: {
    getuser(){
      if (this.user) {
        return this.user.email.split("@")[0]
      } else {
        return ""
      }
    }
    },
    methods:{
      async signOut(){ 
        await env.supabase.auth.signOut();  
        console.log("signtOut()");
        this.$router.push('/home');
      },
      mounturl(){
        return ('/user/'+this.user.id);
      }

    
    },
    
    
  };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Amatic+SC&display=swap');

.nav-link{
  font-family: Abel, sans-serif;
  color:rgb(47,46,65) ;
  text-decoration: none;
}
#register{
  background: rgb(0,191,166);
  border-radius: 25px;
  border-color: rgb(0,0,0);
  padding-left: 15px;
  padding-right: 15px;
}
#register:hover{
  background-color: rgb(29, 235, 211);
}

    
</style>