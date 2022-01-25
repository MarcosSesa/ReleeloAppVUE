<template>
 <nav class="navbar navbar-light navbar-expand-md" style="height:100px">
    <div class="container-fluid">
      <router-link to="/home">
        <a class="navbar-brand"  style="font-size: 25px;font-family: Abel, sans-serif;">Releelo</a>
      </router-link>
        <div class="collapse navbar-collapse" id="navcol-1">

            <ul class="navbar-nav" v-if="!session">

                <li class="nav-item">
                  <router-link to="/signIn"><a class="nav-link active"  >Iniciar Sesion</a></router-link>
                </li>

                <li class="nav-item">
                 <router-link to="/signUp"><a class="nav-link"  style="background: rgb(0,191,166);border-radius: 25px;border-color: rgb(0,0,0);padding-left: 15px;padding-right: 15px;">Registrarse</a></router-link> 
                </li>

            </ul>
        </div>
        <div class="d-xl-flex align-items-xl-center" v-if='session'>
                <span>Salir</span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-door-open" style="font-size: 28px;color: rgb(0,0,0);">
                <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"></path>
                <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"></path>
            </svg>
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
    
    },methods:{
      async signOut(){ 
        await env.supabase.auth.signOut();  
        }
    
    },
    
    
  };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Amatic+SC&display=swap');
.nav-item{
font-family: Abel, sans-serif;
}
</style>