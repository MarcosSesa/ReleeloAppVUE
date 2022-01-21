<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="home">
      <a class="navbar-brand">Navbar</a>
    </router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="Home">
            <a class="nav-link">home </a>
          </router-link>
        </li>
        <li class="nav-item active" v-if='!session' >
          <router-link to="SignIn">
            <a class="nav-link">SignIn </a>
          </router-link>
        </li>
        <li class="nav-item active" v-if='!session' >
          <router-link to="SignUp">
            <a class="nav-link">SignUp </a>
          </router-link>
        </li>
       
        
        
            
        
        

      </ul>
    </div>
  </nav>


  <div>
    <img src="https://media.giphy.com/media/yr7n0u3qzO9nG/giphy.gif" alt="" width="100%">
  </div>
</template>

<script>
import env from '../environment.js';

  export default {
    name: "NavBar",
    data(){
      return{
        session: {},
        user: {},
      }
    },
    async beforeCreate (){
      await this.session == env.supabase.auth.session();
      
    },
    
  };
</script>

<style scoped></style>