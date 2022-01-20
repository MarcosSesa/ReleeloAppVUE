<template>
  <NavBar></NavBar>
  <div>signIn</div>
</template>

<script>
//import env from "../environment";
import NavBar from "../components/NavBar.vue";

export default {
  name: "signin",
  components: {
    NavBar,
  },
};

//function signin() {
 // env.supabase.auth.signIn();
//}
</script>

<style scoped>
</style>