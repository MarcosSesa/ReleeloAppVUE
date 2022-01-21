<template>
  <NavBar></NavBar>
  <h1>signUp</h1>
  <section style="margin-right: 10%; margin-left: 10%;">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="Formemail">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="Formpassword">
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="signUp">Submit</button>
    </form>

    
  </section>
</template>

<script>
import env from "../environment";
import NavBar from "../components/NavBar.vue";

export default {
  name: "signin",
  components: {
    NavBar,
  },data(){
    return{
      Formemail: '',
      Formpassword: '',
    }
  },
  methods:{
    async signUp(){
      await env.supabase.auth.signUp({
        email: this.Formemail,
        password: this.Formpassword,
      })
      window.location.href = 'Home';
    }
  }
};

</script>

<style scoped>
</style>